(()=>{'use strict';
const peaksCache=new Map();
const formatTime=t=>{if(!Number.isFinite(t))return '0:00';const n=Math.max(0,Math.floor(t));return Math.floor(n/60)+':'+String(n%60).padStart(2,'0')};
function mount(root){
 const audio=root.querySelector('audio'),toggle=root.querySelector('.wave-toggle'),canvas=root.querySelector('canvas'),time=root.querySelector('.wave-time'),mute=root.querySelector('.wave-mute');
 if(!audio||!canvas)return;
 const ctx=canvas.getContext('2d');let peaks=null,alive=true;
 const update=()=>{if(!alive)return;const d=audio.duration;time.textContent=formatTime(audio.currentTime)+' / '+(Number.isFinite(d)?formatTime(d):'0:00');toggle.textContent=audio.paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',audio.paused?'再生':'一時停止');mute.textContent=audio.muted?'×':'♪';mute.setAttribute('aria-label',audio.muted?'ミュート解除':'ミュート');draw()};
 function draw(){
  if(!alive||!ctx)return;
  const width=Math.max(1,Math.round(canvas.clientWidth*devicePixelRatio)),height=Math.max(1,Math.round(canvas.clientHeight*devicePixelRatio));
  if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height}
  ctx.clearRect(0,0,width,height);const count=Math.max(12,Math.floor(width/(4*devicePixelRatio))),step=width/count,bar=Math.max(1.5*devicePixelRatio,step*.53);
  const progress=Number.isFinite(audio.duration)&&audio.duration>0?audio.currentTime/audio.duration:0;
  for(let i=0;i<count;i++){const p=peaks?peaks[Math.min(peaks.length-1,Math.floor(i*peaks.length/count))]:.18+.16*Math.abs(Math.sin(i*.83)*Math.cos(i*.19));const h=Math.max(3*devicePixelRatio,p*height*.9);ctx.fillStyle=(i+.5)/count<=progress?'#333':'#c9c9c9';ctx.fillRect(i*step,(height-h)/2,bar,h)}
 }
 toggle.addEventListener('click',()=>{if(audio.paused){const p=audio.play();if(p)p.catch(()=>{})}else audio.pause()});
 mute.addEventListener('click',()=>{audio.muted=!audio.muted;update()});
 canvas.addEventListener('click',e=>{if(!Number.isFinite(audio.duration)||audio.duration<=0)return;const rect=canvas.getBoundingClientRect();audio.currentTime=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*audio.duration;update()});
 canvas.addEventListener('keydown',e=>{if(!Number.isFinite(audio.duration))return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();audio.currentTime=Math.max(0,Math.min(audio.duration,audio.currentTime+(e.key==='ArrowRight'?5:-5)));update()}});
 ['timeupdate','loadedmetadata','durationchange','play','pause','ended','volumechange','error'].forEach(name=>audio.addEventListener(name,update));
 const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(draw):null;if(observer)observer.observe(canvas);else window.addEventListener('resize',draw);
 const src=audio.currentSrc||audio.src;
 if(peaksCache.has(src)){peaks=peaksCache.get(src);draw()}
 else if(window.AudioContext||window.webkitAudioContext){
  fetch(src).then(r=>{if(!r.ok)throw Error('audio unavailable');return r.arrayBuffer()}).then(async buffer=>{
   const C=window.AudioContext||window.webkitAudioContext,ac=new C();try{const decoded=await ac.decodeAudioData(buffer);const data=decoded.getChannelData(0),count=240,block=Math.max(1,Math.floor(data.length/count)),values=[];
    for(let i=0;i<count;i++){let max=0;for(let j=i*block;j<Math.min(data.length,(i+1)*block);j+=Math.max(1,Math.floor(block/64)))max=Math.max(max,Math.abs(data[j]));values.push(Math.max(.05,Math.min(1,max)))}
    const max=Math.max(.1,...values);peaks=values.map(v=>Math.min(1,v/max));peaksCache.set(src,peaks);draw()
   }finally{ac.close().catch(()=>{})}
  }).catch(()=>{});
 }
 const cleanup=()=>{alive=false;if(observer)observer.disconnect();else window.removeEventListener('resize',draw);audio.pause()};
 root._waveCleanup=cleanup;update();
}
window.mountWavePlayer=mount;
})();