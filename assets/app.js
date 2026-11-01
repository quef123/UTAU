(() => {
  'use strict';
  // Static site: all character assets are resolved by relative file paths.
  // No upload controls, remote APIs, telemetry, or repository access.
  const $ = (id) => document.getElementById(id);
  const roman = {saho:'ADACHI SAHO',maki:'KOIZUMI MAKI',ayako:'TOKOYO AYAKO',chiyo:'TOKOYO CHIYO',kiri:'TSUKISHIRO KIRI'};
  const stage=$('top'), figure=$('figure'), fallback=$('figureFallback');
  const detailImage=$('detailFigure'), detailFallback=$('detailImageFallback');
  const overlay=$('overlay'), audio=$('detailAudio');
  const bottom=document.querySelector('.page-lower');
  const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const names=[];
  let selected=3, detailVariant=0, imageToken=0, dialogMode=null, previousFocus=null;
  const group=()=>groups[selected];

  // The home image files are independent of all DETAIL image files.
  // For supplied PNGs containing transparent padding, trim only transparent pixels
  // in memory so the actual character fills the fixed, responsive display area.
  // The source PNG on disk and the DETAIL assets are never modified.
  const homeImageCache=new Map();
  function trimTransparentPadding(img,source){
    if(homeImageCache.has(source))return homeImageCache.get(source);
    try{
      const w=img.naturalWidth,h=img.naturalHeight;
      if(!w||!h)return source;
      const probe=document.createElement('canvas');
      const ratio=Math.min(1,420/Math.max(w,h));
      probe.width=Math.max(1,Math.round(w*ratio));
      probe.height=Math.max(1,Math.round(h*ratio));
      const ctx=probe.getContext('2d',{willReadFrequently:true});
      if(!ctx)return source;
      ctx.drawImage(img,0,0,probe.width,probe.height);
      const {data}=ctx.getImageData(0,0,probe.width,probe.height);
      let minX=probe.width,minY=probe.height,maxX=-1,maxY=-1;
      for(let y=0;y<probe.height;y++)for(let x=0;x<probe.width;x++){
        if(data[(y*probe.width+x)*4+3]>12){
          minX=Math.min(minX,x);maxX=Math.max(maxX,x);
          minY=Math.min(minY,y);maxY=Math.max(maxY,y);
        }
      }
      if(maxX<0||maxY<0){homeImageCache.set(source,source);return source;}
      const left=Math.max(0,Math.floor(minX/ratio)-3),top=Math.max(0,Math.floor(minY/ratio)-3);
      const right=Math.min(w,Math.ceil((maxX+1)/ratio)+3),bottom=Math.min(h,Math.ceil((maxY+1)/ratio)+3);
      // A tiny transparent border is harmless; avoid unnecessary recompression.
      if(left<4&&top<4&&w-right<4&&h-bottom<4){homeImageCache.set(source,source);return source;}
      const cropped=document.createElement('canvas');cropped.width=right-left;cropped.height=bottom-top;
      cropped.getContext('2d').drawImage(img,left,top,cropped.width,cropped.height,0,0,cropped.width,cropped.height);
      const url=cropped.toDataURL('image/png');
      homeImageCache.set(source,url);return url;
    }catch{
      // file:// restrictions or unexpected PNGs: display the unmodified file.
      return source;
    }
  }
  function loadPortrait(img,missing,src,alt,home=false){
    img.hidden=true;missing.hidden=true;img.alt=alt;
    img.onload=()=>{
      if(home){
        const fitted=trimTransparentPadding(img,src);
        if(fitted!==src&&img.src!==fitted){img.src=fitted;return;}
      }
      img.hidden=false;missing.hidden=true;
    };
    img.onerror=()=>{img.hidden=true;missing.hidden=false;};
    if(src){img.src=home&&homeImageCache.has(src)?homeImageCache.get(src):src;}
    else{img.removeAttribute('src');missing.hidden=false;}
    if(img.complete&&img.naturalWidth>0){
      if(home&&img.src===src){const fitted=trimTransparentPadding(img,src);if(fitted!==src){img.src=fitted;return;}}
      img.hidden=false;missing.hidden=true;
    }
  }
  function renderStageFigure(){
    const character=group(),home=character.home;
    const holder=$('openCharacter');
    holder.style.setProperty('--home-scale',String(home?.scale??1));
    holder.style.setProperty('--home-offset-x',`${home?.offsetX??0}px`);
    holder.style.setProperty('--home-offset-y',`${home?.offsetY??0}px`);
    loadPortrait(figure,fallback,home?.img,`${character.name} のホーム立ち絵`,true);
    holder.setAttribute('aria-label',`${character.name} の詳細を開く`);
  }
  function select(index,focusName=false){
    selected=(index+groups.length)%groups.length;
    names.forEach((el,i)=>el.setAttribute('aria-current',String(i===selected)));
    const token=++imageToken;
    if(prefersReducedMotion.matches){renderStageFigure();}
    else{
      figure.classList.add('is-fading');
      window.setTimeout(()=>{
        if(token!==imageToken)return;
        renderStageFigure();
        window.requestAnimationFrame(()=>figure.classList.remove('is-fading'));
      },110);
    }
    if(focusName)names[selected]?.focus();
  }
  groups.forEach((g,i)=>{
    const button=document.createElement('button');button.type='button';button.className='character-name';
    button.append(document.createTextNode(g.name));
    const triangle=document.createElement('span');triangle.className='choice-mark';triangle.setAttribute('aria-hidden','true');button.append(triangle);
    button.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'||e.pointerType==='pen')select(i)});
    button.addEventListener('focus',()=>select(i));
    button.addEventListener('click',()=>{if(selected===i)openDetail(i);else select(i)});
    $('characterNames').append(button);names.push(button);
  });
  names[selected].setAttribute('aria-current','true');renderStageFigure();
  $('prevChar').addEventListener('click',()=>select(selected-1));
  $('nextChar').addEventListener('click',()=>select(selected+1));
  $('resetToStart').addEventListener('click',()=>{select(0);window.scrollTo({top:0,behavior:prefersReducedMotion.matches?'instant':'smooth'})});
  $('homeNav').addEventListener('click',()=>{select(0);window.scrollTo({top:0,behavior:prefersReducedMotion.matches?'instant':'smooth'})});
  $('openCharacter').addEventListener('click',()=>openDetail(selected));
  $('openVoicebankNav').addEventListener('click',openDirectory);

  function showDialog(nextMode){
    if(!dialogMode){previousFocus=document.activeElement;stage.inert=true;bottom.inert=true;document.body.style.overflow='hidden';}
    dialogMode=nextMode;
    overlay.hidden=false;overlay.setAttribute('aria-hidden','false');
    $('indexPanel').hidden=nextMode!=='directory';
    $('detailPanel').hidden=nextMode!=='detail';
    overlay.setAttribute('aria-labelledby',nextMode==='directory'?'indexTitle':'dialogTitle');
    const panel=nextMode==='directory'?$('indexPanel'):$('detailPanel');
    panel.querySelector('[data-close-overlay]').focus();
  }
  function closeDialog(){
    if(!dialogMode)return;
    pauseAndUnload();dialogMode=null;
    overlay.hidden=true;overlay.setAttribute('aria-hidden','true');
    stage.inert=false;bottom.inert=false;document.body.style.overflow='';
    if(previousFocus?.isConnected)previousFocus.focus();
  }
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeDialog();});
  overlay.querySelectorAll('[data-close-overlay]').forEach(el=>el.addEventListener('click',closeDialog));

  const directory=$('indexList');
  groups.forEach((g,i)=>{
    const button=document.createElement('button');button.type='button';button.className='directory-row';
    const num=document.createElement('span');num.className='directory-no';num.textContent=g.file;
    const name=document.createElement('span');name.className='directory-name';name.textContent=g.name;
    const versions=document.createElement('span');versions.className='directory-variant';versions.textContent=`${g.variants.length} VERSION${g.variants.length===1?'':'S'}`;
    const arrow=document.createElement('span');arrow.className='directory-arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
    button.append(num,name,versions,arrow);button.addEventListener('click',()=>openDetail(i));directory.append(button);
  });
  function openDirectory(){showDialog('directory');}
  function openDetail(index){
    select(index);detailVariant=0;showDialog('detail');renderDetail();
  }
  function timeString(time){if(!Number.isFinite(time))return'--:--';const n=Math.max(0,Math.floor(time));return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;}
  function playerReset(){
    $('detailPlay').textContent='▶';$('detailPlay').setAttribute('aria-pressed','false');
    $('detailPlay').setAttribute('aria-label','試聴を再生');
    $('detailSeek').value=0;$('detailTime').textContent='0:00 / --:--';
  }
  function pauseAndUnload(){
    audio.pause();audio.removeAttribute('src');audio.load();playerReset();
    $('detailPlay').disabled=true;
  }
  function renderDetail(){
    pauseAndUnload();
    const g=group(),v=g.variants[detailVariant];
    $('dialogTitle').textContent=g.name;
    $('detailNo').textContent=`FILE ${g.file}`;
    $('detailRoman').textContent=roman[g.groupId]||'';
    // The voicebank content is curated site-owned markup from voice-data.js, not user input.
    $('detailDescription').innerHTML=v.desc||'';
    loadPortrait(detailImage,detailFallback,v.img,`${g.name} ${v.label} の立ち絵`);
    const versionArea=$('detailVersions');versionArea.replaceChildren();
    g.variants.forEach((item,i)=>{
      const button=document.createElement('button');button.type='button';button.className='detail-version';button.textContent=item.label;
      button.setAttribute('aria-pressed',String(i===detailVariant));
      button.addEventListener('click',()=>{if(i===detailVariant)return;detailVariant=i;renderDetail();versionArea.children[i]?.focus();});
      versionArea.append(button);
    });
    $('detailType').textContent=`VOICEBANK / ${v.type}`;
    $('detailPitch').textContent=`PITCH / ${v.pitch}`;
    const facts=$('detailFacts');facts.replaceChildren();
    (v.facts||[]).forEach(([label,value])=>{
      const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');
      dt.textContent=label;dd.textContent=value;row.append(dt,dd);facts.append(row);
    });
    $('detailSpecial').innerHTML=v.special||'';
    $('detailStaff').innerHTML=v.staff||'';
    const download=$('downloadArea');download.replaceChildren();
    if(v.zip){
      const link=document.createElement('a');link.href=v.zip;link.textContent='DOWNLOAD ↗';
      if(/^https?:\/\//.test(v.zip)){link.target='_blank';link.rel='noopener noreferrer';}
      else link.setAttribute('download','');
      download.append(link);
    }else{
      const message=document.createElement('span');message.textContent='DOWNLOAD / 未設定';download.append(message);
    }
    $('audioStatus').textContent=v.audio?'試聴を読み込み中':'試聴音声未登録';
    if(v.audio){
      audio.src=v.audio;audio.load();
      $('detailPlay').disabled=false;
    }
  }
  audio.addEventListener('loadedmetadata',()=>{$('audioStatus').textContent='';});
  audio.addEventListener('error',()=>{
    if(!audio.getAttribute('src'))return;
    $('audioStatus').textContent='試聴音声ファイルが見つかりません';$('detailPlay').disabled=true;
  });
  async function toggleAudio(){
    if(dialogMode!=='detail'||!audio.getAttribute('src')||$('detailPlay').disabled)return;
    if(!audio.paused){audio.pause();return;}
    try{await audio.play();}catch{$('audioStatus').textContent='試聴を再生できませんでした';}
  }
  $('detailPlay').addEventListener('click',toggleAudio);
  ['play','pause','ended','loadedmetadata','durationchange','timeupdate'].forEach(event=>audio.addEventListener(event,()=>{
    const playing=!audio.paused&&!audio.ended;
    $('detailPlay').textContent=playing?'Ⅱ':'▶';
    $('detailPlay').setAttribute('aria-pressed',String(playing));
    $('detailPlay').setAttribute('aria-label',playing?'試聴を一時停止':'試聴を再生');
    $('detailTime').textContent=`${timeString(audio.currentTime)} / ${timeString(audio.duration)}`;
    if(Number.isFinite(audio.duration)&&audio.duration>0)$('detailSeek').value=Math.round(audio.currentTime/audio.duration*1000);
  }));
  $('detailSeek').addEventListener('input',()=>{
    if(Number.isFinite(audio.duration)&&audio.duration>0)audio.currentTime=Number($('detailSeek').value)*audio.duration/1000;
  });
  document.addEventListener('keydown',e=>{
    if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey)return;
    const active=e.target;
    if(e.key==='Escape'&&dialogMode){e.preventDefault();closeDialog();return;}
    if(dialogMode){
      const panel=dialogMode==='directory'?$('indexPanel'):$('detailPanel');
      if(e.key==='Tab'){
        const tabbable=[...panel.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),summary')].filter(el=>el.getClientRects().length);
        if(tabbable.length){
          if(e.shiftKey&&document.activeElement===tabbable[0]){e.preventDefault();tabbable[tabbable.length-1].focus();}
          else if(!e.shiftKey&&document.activeElement===tabbable[tabbable.length-1]){e.preventDefault();tabbable[0].focus();}
        }
      }
      if(dialogMode==='detail'&&!e.repeat&&!e.shiftKey&&(e.code==='Space'||e.key===' ')){
        const interactive=active instanceof Element&&Boolean(active.closest('a,button,input,summary,textarea,select,[contenteditable]'));
        if(!interactive){e.preventDefault();void toggleAudio();}
      }
      return;
    }
    const interactive=active instanceof Element&&Boolean(active.closest('input,textarea,select,[contenteditable]'));
    if(interactive)return;
    if(e.key==='ArrowLeft'){e.preventDefault();select(selected-1);}
    if(e.key==='ArrowRight'){e.preventDefault();select(selected+1);}
  });
})();
