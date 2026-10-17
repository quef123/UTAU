/* No framework and no physics dependency: requestAnimationFrame + Pointer Events. */
function initializeRelationshipAtlas(groups, openGroup) {
  const grid = document.getElementById('voiceGrid');
  const section = document.getElementById('voicebank');
  if (!grid || grid.dataset.initialized) return;
  grid.dataset.initialized = 'true';
  grid.classList.add('atlas-stage');
  section.classList.add('has-atlas');

  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[c]);
  const timeLabel = secs => Number.isFinite(secs) ?
    `${Math.floor(secs / 60)}:${String(Math.floor(secs % 60)).padStart(2, '0')}` : '--:--';
  const selectedAudio = new Set();
  const groupById = new Map(groups.map((g,i) => [g.groupId,{group:g, index:i}]));
  const edges = atlasRelationships.filter(rel => groupById.has(rel.from) && groupById.has(rel.to));
  const related = new Map(groups.map(g => [g.groupId, []]));
  edges.forEach(rel => {related.get(rel.from).push(rel); related.get(rel.to).push(rel)});

  grid.innerHTML = `<svg class="atlas-lines" aria-hidden="true" preserveAspectRatio="none"></svg>
    <div class="atlas-controls"><span>DRAG TO REARRANGE</span><button id="atlasReset" type="button">RESET ↺</button></div>`+
    groups.map((g,index)=>{
      const info = atlasCharacterMeta[g.groupId] || {};
      const v = g.variants.find(item=>item.id===info.sampleVariant) || g.variants[0];
      const intro = v.desc.replace(/<br\s*\/?\s*>/gi,' ');
      const labels = related.get(g.groupId).map(rel => {
        const other = groupById.get(rel.from===g.groupId?rel.to:rel.from)?.group.name;
        return `<span class="atlas-relation-tag">${esc(other)} / ${esc(rel.label)}</span>`;
      }).join('');
      return `<article class="atlas-node" data-node="${esc(g.groupId)}" aria-label="${esc(g.name)}の音源档案">
        <div class="atlas-portrait" data-drag-handle="true">
          <img class="atlas-character-image" alt="${esc(g.name)} 立ち絵" loading="lazy" draggable="false" src="${esc(g.indexImage || '')}">
          <span class="atlas-missing-art" aria-hidden="true">INDEX IMAGE / NOT INSTALLED</span>
        </div>
        <div class="atlas-node-number">${esc(g.file)} <span> / VOICE RECORD</span></div>
        <h3><button type="button" data-open-group="${index}" aria-label="${esc(g.name)}の詳細を開く">${esc(g.name)}</button></h3>
        <p class="atlas-roman">${esc(info.roman || '')}</p>
        <p class="atlas-type">${esc(v.type)}</p>
        <p class="atlas-tone">${esc(info.tone || '音色についての説明は未登録です。')}</p>
        <p class="atlas-intro">${intro}</p>
        <div class="atlas-mobile-relationships">${labels}</div>
        <div class="atlas-audio" data-audio-path="${esc(v.audio)}">
          <audio preload="none" src="${esc(v.audio)}"></audio>
          <button type="button" class="atlas-play" aria-label="${esc(g.name)}の試聴を再生">▶</button>
          <input type="range" class="atlas-seek" min="0" max="1000" value="0" aria-label="${esc(g.name)}の試聴位置">
          <span class="atlas-duration">--:--</span>
        </div>
        <span class="atlas-audio-feedback" role="status"></span>
        <button type="button" class="atlas-detail-link" data-open-group="${index}">詳しい ↗</button>
      </article>`;
    }).join('');

  const svg=grid.querySelector('.atlas-lines');
  const nodes=new Map(Array.from(grid.querySelectorAll('.atlas-node')).map(el=>[el.dataset.node,el]));
  const positions=new Map();
  const base=new Map();
  const GRID=24, GUTTER=21;
  const mq=window.matchMedia('(min-width: 980px)');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const storageKey='HerdMentality_atlas_positions_v1';
  let lastLayoutMode='', drag=null, frame=0, activeId=null, resizeQueued=false;
  let originalPositions={};
  let saved={};
  try {saved=JSON.parse(sessionStorage.getItem(storageKey)||'{}')} catch {saved={}}

  function activate(gId){
    activeId=gId;
    updateEdges();
  }
  function sizeFor(id){const el=nodes.get(id);return {w:el.offsetWidth,h:el.offsetHeight}}
  function snap(value){return Math.round(value/GRID)*GRID}
  function clampValue(n,low,high){return Math.max(low,Math.min(high,n))}
  function bounds(id,point){
    const {w,h}=sizeFor(id);
    return {x:point.x,y:point.y,w,h};
  }
  function collision(id,p,others=positions){
    const a=bounds(id,p);
    for(const [key,bp] of others){
      if(key===id)continue;
      const b=bounds(key,bp);
      if(a.x < b.x+b.w+GUTTER && a.x+a.w+GUTTER > b.x &&
         a.y < b.y+b.h+GUTTER && a.y+a.h+GUTTER > b.y) return true;
    }
    return false;
  }
  function constrain(id,point){
    const sz=sizeFor(id);
    return {
      x:clampValue(point.x,0,Math.max(0,grid.clientWidth-sz.w)),
      y:clampValue(point.y,0,Math.max(0,grid.clientHeight-sz.h))
    };
  }
  function nearestAvailable(id,point, fallback){
    const target=constrain(id,{x:snap(point.x),y:snap(point.y)});
    if(!collision(id,target))return target;
    // Deterministic expanding square, with closest candidates tried first.
    for(let radius=1;radius<=70;radius++){
      const probes=[];
      for(let dx=-radius;dx<=radius;dx++){
        for(const dy of [-radius,radius])probes.push([dx,dy]);
      }
      for(let dy=-radius+1;dy<=radius-1;dy++){
        for(const dx of [-radius,radius])probes.push([dx,dy]);
      }
      probes.sort((a,b)=>a[0]*a[0]+a[1]*a[1]-b[0]*b[0]-b[1]*b[1]);
      for(const [dx,dy] of probes){
        const p=constrain(id,{x:target.x+dx*GRID,y:target.y+dy*GRID});
        if(!collision(id,p)) return p;
      }
    }
    return fallback || target;
  }
  function setNodePosition(id,point,animate=false){
    const el=nodes.get(id);
    if(!el)return;
    el.classList.toggle('atlas-snapping',animate && !reduced.matches);
    el.style.transform=`translate3d(${point.x}px,${point.y}px,0)`;
    positions.set(id,{x:point.x,y:point.y});
    requestDraw();
  }
  function requestDraw(){
    if(frame)return;
    frame=requestAnimationFrame(()=>{frame=0;updateEdges()});
  }
  function getAnchor(fromId,toId){
    const a=bounds(fromId,positions.get(fromId));
    const b=bounds(toId,positions.get(toId));
    const ac={x:a.x+a.w/2,y:a.y+a.h/2},bc={x:b.x+b.w/2,y:b.y+b.h/2};
    const dx=bc.x-ac.x,dy=bc.y-ac.y;
    if(Math.abs(dx)>Math.abs(dy)*0.58){
      const sx=dx>=0?a.x+a.w+8:a.x-8;
      const ex=dx>=0?b.x-8:b.x+b.w+8;
      return [{x:sx,y:ac.y},{x:ex,y:bc.y},true];
    }
    const sy=dy>=0?a.y+a.h+8:a.y-8;
    const ey=dy>=0?b.y-8:b.y+b.h+8;
    return [{x:ac.x,y:sy},{x:bc.x,y:ey},false];
  }
  function updateEdges(){
    if(!mq.matches || !positions.size){svg.replaceChildren();return}
    svg.setAttribute('viewBox',`0 0 ${grid.clientWidth} ${grid.clientHeight}`);
    const markup=edges.map(rel=>{
      if(!positions.has(rel.from)||!positions.has(rel.to))return '';
      const [a,b,h]=getAnchor(rel.from,rel.to);
      const bend=h?Math.min(120,Math.abs(b.x-a.x)*0.43):Math.min(120,Math.abs(b.y-a.y)*0.43);
      const sign=h?Math.sign(b.x-a.x):Math.sign(b.y-a.y);
      const c1=h?`${a.x+sign*bend} ${a.y}`:`${a.x} ${a.y+sign*bend}`;
      const c2=h?`${b.x-sign*bend} ${b.y}`:`${b.x} ${b.y-sign*bend}`;
      const emphasized=activeId && (rel.from===activeId || rel.to===activeId);
      const dimmed=activeId && !emphasized;
      return `<g class="atlas-edge ${emphasized?'is-active':''} ${dimmed?'is-dim':''}">
        <path d="M ${a.x} ${a.y} C ${c1}, ${c2}, ${b.x} ${b.y}" fill="none" />
        <circle cx="${a.x}" cy="${a.y}" r="3.25"/><circle cx="${b.x}" cy="${b.y}" r="3.25"/>
      </g>`;
    }).join('');
    svg.innerHTML=markup;
  }
  function layoutMode(){return grid.clientWidth>=1200?'wide':'compact'}
  function posFromRatios(id,values){
    const {w,h}=sizeFor(id);
    return {x:values[0]*Math.max(0,grid.clientWidth-w), y:values[1]*Math.max(0,grid.clientHeight-h)};
  }
  function validRatios(p){return Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&n>=0&&n<=1)}
  function layout(restore=true){
    if(drag)return;
    if(!mq.matches){
      positions.clear();svg.replaceChildren();
      nodes.forEach(el=>{el.style.transform='';el.classList.remove('atlas-snapping')});
      lastLayoutMode='mobile';return;
    }
    const mode=layoutMode();
    const presets=atlasPreset[mode];
    positions.clear();
    nodes.forEach((el,id)=>{
      const userSaved=restore && saved?.[id];
      const p=posFromRatios(id,validRatios(userSaved)?userSaved:presets[id]);
      const legal=nearestAvailable(id,p,p);
      setNodePosition(id,legal,false);
      if(!validRatios(userSaved))base.set(id,{...legal});
    });
    if(!restore || !Object.keys(saved).length){
      originalPositions=Object.fromEntries(Array.from(positions.entries()).map(([k,v])=>[k,{...v}]));
    }
    lastLayoutMode=mode;
    requestDraw();
  }
  function savePositions(){
    const out={};
    positions.forEach((p,id)=>{
      const {w,h}=sizeFor(id);
      out[id]=[
        Math.max(0,Math.min(1,p.x/Math.max(1,grid.clientWidth-w))),
        Math.max(0,Math.min(1,p.y/Math.max(1,grid.clientHeight-h)))
      ];
    });
    saved=out;
    try{sessionStorage.setItem(storageKey,JSON.stringify(out))}catch{}
  }
  function onPointerDown(e){
    if(!mq.matches||e.button!==0||drag)return;
    if(e.target.closest('button, a, input, audio, summary, select, textarea, label, [contenteditable="true"]')) return;
    const node=e.currentTarget,id=node.dataset.node;
    if(!positions.has(id))return;
    const pos=positions.get(id);
    drag={id,node,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,start:{...pos},moved:false,lastLegal:{...pos}, pending:{...pos}};
    node.classList.remove('atlas-snapping');
    node.classList.add('is-dragging');
    node.setPointerCapture(e.pointerId);
    activate(id);
    e.preventDefault();
  }
  function onPointerMove(e){
    if(!drag||drag.pointerId!==e.pointerId||drag.node!==e.currentTarget)return;
    const dx=e.clientX-drag.startX,dy=e.clientY-drag.startY;
    if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;
    drag.pending=constrain(drag.id,{x:drag.start.x+dx,y:drag.start.y+dy});
    if(!collision(drag.id,drag.pending))drag.lastLegal={...drag.pending};
    if(!drag.raf){
      drag.raf=requestAnimationFrame(()=>{
        if(!drag)return;
        drag.raf=0;
        setNodePosition(drag.id,drag.pending);
      });
    }
    e.preventDefault();
  }
  function finishDrag(e){
    if(!drag||drag.pointerId!==e.pointerId||drag.node!==e.currentTarget)return;
    const state=drag;
    if(state.raf){cancelAnimationFrame(state.raf)}
    drag=null;
    state.node.classList.remove('is-dragging');
    try{state.node.releasePointerCapture(state.pointerId)}catch{}
    const target= e.type==='pointercancel'?state.lastLegal:state.pending;
    const snapped=nearestAvailable(state.id,target,state.lastLegal);
    setNodePosition(state.id,snapped,true);
    savePositions();
    requestDraw();
  }
  nodes.forEach((el,id)=>{
    el.addEventListener('pointerdown',onPointerDown);
    el.addEventListener('pointermove',onPointerMove);
    el.addEventListener('pointerup',finishDrag);
    el.addEventListener('pointercancel',finishDrag);
    el.addEventListener('lostpointercapture',event=>{if(drag?.node===el)finishDrag(event)});
    el.addEventListener('pointerenter',()=>activate(id));
    el.addEventListener('pointerleave',()=>{if(!drag)activate(null)});
    el.querySelectorAll('.atlas-character-image').forEach(img=>{
      const update=()=>el.classList.toggle('has-index-image',img.complete&&img.naturalWidth>0);
      img.addEventListener('load',update);img.addEventListener('error',update);update();
    });
    const audio=el.querySelector('audio');
    const play=el.querySelector('.atlas-play');
    const seek=el.querySelector('.atlas-seek');
    const duration=el.querySelector('.atlas-duration');
    const message=el.querySelector('.atlas-audio-feedback');
    function sync(){
      const playing=!audio.paused&&!audio.ended;
      play.textContent=playing?'Ⅱ':'▶';
      play.setAttribute('aria-label',`${groupById.get(id).group.name}の試聴を${playing?'一時停止':'再生'}`);
      duration.textContent=timeLabel(audio.duration);
      if(Number.isFinite(audio.duration)&&audio.duration>0 && document.activeElement!==seek)
        seek.value=Math.round(audio.currentTime/audio.duration*1000);
    }
    for(const type of ['timeupdate','durationchange','loadedmetadata','play','pause','ended']) audio.addEventListener(type,sync);
    audio.addEventListener('error',()=>{if(selectedAudio.has(audio))message.textContent='試聴ファイルが見つかりません。'});
    play.addEventListener('click',async()=>{
      if(!audio.paused){audio.pause();return}
      grid.querySelectorAll('.atlas-audio audio').forEach(other=>{if(other!==audio)other.pause()});
      selectedAudio.add(audio);
      message.textContent='';
      try{await audio.play()}catch{message.textContent='試聴ファイルが見つかりません。'}
      sync();
    });
    seek.addEventListener('input',()=>{
      if(Number.isFinite(audio.duration) && audio.duration>0)
        audio.currentTime=audio.duration*Number(seek.value)/1000;
    });
  });
  grid.querySelectorAll('[data-open-group]').forEach(btn=>btn.addEventListener('click',()=>openGroup(Number(btn.dataset.openGroup))));
  document.getElementById('atlasReset').addEventListener('click',()=>{
    if(drag)return;
    saved={};
    try{sessionStorage.removeItem(storageKey)}catch{}
    if(!mq.matches)return;
    const preset=atlasPreset[layoutMode()];
    positions.clear();
    nodes.forEach((_,id)=>{
      const p=nearestAvailable(id,posFromRatios(id,preset[id]),{x:0,y:0});
      setNodePosition(id,p,true);
    });
    requestDraw();
  });
  let timeout;
  const resetOnResize=()=>{
    clearTimeout(timeout);
    timeout=setTimeout(()=>{
      const next= mq.matches?layoutMode():'mobile';
      // Preserve the on-screen arrangement within the same breakpoint on resize.
      if(mq.matches&&positions.size&&next===lastLayoutMode)savePositions();
      layout(true);
    },120);
  };
  window.addEventListener('resize',resetOnResize,{passive:true});
  const ro = new ResizeObserver(()=>{
    if(drag||!mq.matches)return;
    // Recalculate live line anchors if an illustration/font changes node dimensions.
    requestDraw();
  });
  ro.observe(grid);
  nodes.forEach(el=>ro.observe(el));
  layout(true);
}
