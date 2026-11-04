const sahoProfile = [
 ["身長","170 cm"],["年齢","20 歳"],["性別","女"],
 ["好き","古籍、プリン"],["嫌い","捉摸しにくい変人"],["人称","わたし / あなた"]
];
const sahoDesc = [
 "世の中を斜に構えて見ている、どこか厭世的な性格。",
 "大勢の中のただ一人になることを嫌い、特別な何者かであろうとする。",
 "しかし、現実に打ちのめされるたび、自分の苦悩さえありふれた独り相撲にすぎないのだと思い知らされていく。"
];
const detailSpecial = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC";
const natsukawaStaff = "キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS";

const sahoCommon = {desc:sahoDesc,descIdentity:"元ネット小説家。現在はフリーランスの掃除屋。",facts:sahoProfile,special:detailSpecial,staff:natsukawaStaff};

const makiDesc = [
 "それまでの人生から抜け出したことで、人はどんなふうにでも生きられるのだと知った。",
 "けれど、何にでもなれるという自由は、何になりたいのかもわからない彼女を、かえって途方に暮れさせた。",
 "今はただ、流されるように日々を過ごしている。"
];
const makiSpecialBase = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）";
const makiSilentConsonant = "[a K]　無声子音";
const makiFacts = [["身長","166 cm"],["年齢","19 歳"],["性別","女"],["好き","ふわふわしたもの"],["嫌い","堅苦しいもの"],["人称","わたし / あなた"]];

const kiriCommon = {
  desc:[
   "思春期のあまりにも早い段階で、哲学や信仰というものに深く触れてしまった。",
   "生きることの意味を問い続けるうちに、いつしかその問いそのものから抜け出せなくなっていく。",
   "答えの見つからない人生に迷い、やがて自ら命を絶つことを選んだ。"
  ],
  facts:[["身長","155 cm"],["年齢","16 歳"],["性別","女"],["好き","チョコレートクッキー"],["嫌い","弱いもの、曖昧なもの、柔らかいもの"],["人称","わたし / あなた"]],
  special:detailSpecial,
  staff:natsukawaStaff
};

const groups = [
{
 groupId:"saho",file:"01",name:"足立サホ",
 video:"", // 任意：YouTube 配布動画 URL。未設定なら動画領域は表示しない。
 variants:[
  {id:"saho-main",label:"無印",type:"5音階連続音 / VCV",pitch:"A3 / C4 / E4 / G4 / C5",img:"images/足立サホ_無印.png",audio:"audio/足立サホ_無印.wav",zip:"download/足立サホ_無印.zip",...sahoCommon},
  {id:"saho-coffee",label:"Coffee",type:"VCV",pitch:"A3",img:"images/足立サホ_Coffee.png",audio:"audio/足立サホ_Coffee.wav",zip:"download/足立サホ_Coffee.zip",...sahoCommon},
  {id:"saho-cracker",label:"Cracker",type:"VCV",pitch:"G4",img:"images/足立サホ_Cracker.png",audio:"audio/足立サホ_Cracker.wav",zip:"https://drive.google.com/uc?export=download&id=1objA9W5a6nsPwXWxiyf5GbcqXj6Cye9z",...sahoCommon},
  {id:"saho-caramel",label:"Caramel",type:"VCV",pitch:"C5",img:"images/足立サホ_Caramel.png",audio:"audio/足立サホ_Caramel.wav",zip:"download/足立サホ_Caramel.zip",...sahoCommon}
 ]
},
{
 groupId:"maki",file:"02",name:"小泉マキ",
 variants:[
  {
   id:"maki-vcv",label:"Seasalt",type:"2音階連続音 / VCV",pitch:"A3 / E4",
   img:"images/小泉マキ_Seasalt.png",audio:"audio/小泉マキ_Seasalt.wav",zip:"https://drive.google.com/uc?export=download&id=1yEhTPZ12mIaia8ubGJON_i6DPbpD7vng",
   desc:makiDesc,
   facts:makiFacts,
   special:`${makiSpecialBase}<br>[a k]　VC<br>${makiSilentConsonant}`,
   staff:natsukawaStaff
  },
  {
   id:"maki-cv",label:"無印",type:"6音階単独音 / CV",pitch:"A3 / C4 / D4 / E4 / F4 / G4",
   img:"images/小泉マキ_無印.png",audio:"audio/小泉マキ_無印.wav",zip:"download/小泉マキ_無印.zip",
   desc:makiDesc,
   facts:makiFacts,
   special:`${makiSpecialBase}<br>${makiSilentConsonant}`,
   staff:"キャラクターデザイン：quef<br>原音設定：肺叶<br>イラスト：SS"
  }
 ]
},
{
 groupId:"ayako",file:"03",name:"常世アヤコ",
 variants:[{
  id:"ayako",label:"MAIN",type:"1音階単独音",pitch:"A3",
  img:"images/常世アヤコ.png",audio:"audio/常世アヤコ.wav",zip:"download/常世アヤコ.zip",
  desc:[
   "かつて何でもできた姉が、突然すべてを失った。",
   "その姿を前にして芽生えた庇護欲には、彼女自身も認めたがらない卑小な感情が入り混じっている。",
   "姉がいつまでも何も知らず、無力なままでいてくれることを、心のどこかで望んでいる。"
  ],
  descIdentity:"常世家の次女として、人目に触れることのない、後ろ暗い仕事を引き受けている。",
  facts:[["身長","159 cm"],["年齢","14 歳"],["性別","女"],["好き","チョコレート"],["嫌い","猫"],["人称","ぼく / あんた"]],
  special:"[a R]　通常語尾<br>[a 吸R]　語尾ブレス（吸気）<br>[a 息R]　語尾ブレス（呼気）<br>[br]　閉口ブレス",
  staff:"キャラクターデザイン：quef<br>イラスト：SS<br>サンプリング：グロック19のマガジン装填音"
 }]
},
{
 groupId:"chiyo",file:"04",name:"常世チヨ",
 variants:[{
  id:"chiyo",label:"MAIN",type:"1音階単独音",pitch:"A4",
  img:"images/常世チヨ.png",audio:"audio/常世チヨ.wav",zip:"download/常世チヨ.zip",
  desc:[
   "追い詰められた末に、彼女が選んだのは権力だった。",
   "常世家の長女として、人々の前に立ち、誰もが羨むような華やかで正当な役目を担っている。",
   "その輝かしい立場が、かつて何を犠牲にして手に入れたものなのか。今の彼女には、もうわからない。"
  ],
  facts:[["身長","164 cm"],["年齢","?? 歳"],["性別","女"],["好き","ない"],["嫌い","ない"],["人称","わたし / きみ"]],
  special:"[a R]　通常語尾<br>[a 吸R]　語尾ブレス（吸気）<br>[a 息R]　語尾ブレス（呼気）<br>[br]　閉口ブレス",
  staff:"キャラクターデザイン：quef<br>原音設定：itsukiMNE<br>イラスト：SS<br>サンプリング：グロック19のマガジン装填音・猫が爪を研ぐ"
 }]
},
{
 groupId:"kiri",file:"05",name:"月代キリ",
 variants:[{
  id:"kiri-main",label:"無印",type:"1音階単独音 / CVVC",pitch:"F4",
  img:"images/月代キリ_無印.png",audio:"audio/月代キリ_無印.wav",zip:"download/月代キリ_無印.zip",
  ...kiriCommon
 },
 {
  id:"kiri-vintage",label:"Vintage",type:"1音階単独音 / CVVC",pitch:"B4",
  img:"images/月代キリ_Vintage.png",audio:"audio/月代キリ_Vintage.wav",zip:"download/月代キリ_Vintage.zip",
  ...kiriCommon
 }]
}
];

let currentGroup=null,currentVariantIndex=0;
let previousFocus=null,previousBodyOverflow="";
const modal=document.getElementById("voiceModal");
const pageShell=document.querySelector(".site-shell");

function renderGroups(){
 const grid=document.getElementById("voiceGrid");
 grid.innerHTML=groups.map((g,i)=>{
   const first=g.variants[0],meta=g.variants.length>1?`${g.variants.length} VARIANTS`:first.type;
   return `<button type="button" class="voice-card" data-group="${i}">
     <div class="voice-no">FILE ${g.file}</div><div class="voice-name">${g.name}</div>
     <div class="voice-meta">${meta}<br>${first.pitch}</div><div class="voice-arrow">→</div>
   </button>`;
 }).join("");
 grid.addEventListener("click",event=>{
   const card=event.target.closest(".voice-card");
   if(card) openGroup(Number(card.dataset.group));
 });
}
function openGroup(index){
 previousFocus=document.activeElement;
 previousBodyOverflow=document.body.style.overflow;
 currentGroup=groups[index];currentVariantIndex=0;
 renderVariant();
 modal.scrollTop=0;
 modal.classList.add("open");
 modal.setAttribute("aria-hidden","false");
 document.body.style.overflow="hidden";
 pageShell.inert=true;
 requestAnimationFrame(()=>{
   if(modal.classList.contains("open"))
     document.getElementById("detailBack").focus();
 });
}
/* Character reference layout — all five groups share this view. */
const detailAudio = document.getElementById("detailAudio");
const detailPlay = document.getElementById("detailPlay");
const detailSeek = document.getElementById("detailSeek");
const detailAudioStatus = document.getElementById("detailAudioStatus");
let detailPlaybackAttempted = false;
const romanNames = {
 saho:"ADACHI SAHO",
 maki:"KOIZUMI MAKI",
 ayako:"TOKOYO AYAKO",
 chiyo:"TOKOYO CHIYO",
 kiri:"TSUKISHIRO KIRI"
};
function timeLabel(seconds){
 if(!Number.isFinite(seconds)) return "--:--";
 const n=Math.max(0,Math.floor(seconds));
 return `${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;
}
function extractYoutubeId(url){
 if(typeof url!=="string" || !url) return null;
 try{
   const u=new URL(url);
   let id=null;
   if((u.hostname==="youtube.com" || u.hostname==="www.youtube.com" || u.hostname==="m.youtube.com") && u.pathname==="/watch") id=u.searchParams.get("v");
   else if(u.hostname==="youtu.be" || u.hostname==="www.youtu.be") id=u.pathname.slice(1).split("/")[0];
   else if(u.hostname==="www.youtube.com" || u.hostname==="youtube.com") {
     const match=u.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/);
     id=match?.[1];
   }
   return /^[A-Za-z0-9_-]{11}$/.test(id||"") ? id : null;
 }catch{return null;}
}
function stopDetailMedia(){
 detailAudio.pause();
 const frame=document.getElementById("detailVideoFrame");
 frame.removeAttribute("src");
}
function updateDetailAudioUI(){
 const playing = !detailAudio.paused && !detailAudio.ended;
 detailPlay.querySelector("span").textContent=playing?"Ⅱ":"▶";
 detailPlay.setAttribute("aria-label",playing?"試聴を一時停止":"試聴を再生");
 detailPlay.setAttribute("aria-pressed",String(playing));
 document.getElementById("detailCurrent").textContent=timeLabel(detailAudio.currentTime||0);
 document.getElementById("detailDuration").textContent=timeLabel(detailAudio.duration);
 detailSeek.value=(Number.isFinite(detailAudio.duration) && detailAudio.duration>0)
  ? String(Math.round(detailAudio.currentTime / detailAudio.duration * 1000)) : "0";
}
function renderDetailReference(g,v){
 document.getElementById("detailName").textContent=g.name;
 document.getElementById("detailRoman").textContent=romanNames[g.groupId]||"";
 const story=document.getElementById("detailStory");
 story.replaceChildren(...v.desc.map(text=>{
   const paragraph=document.createElement("p");
   paragraph.textContent=text;
   return paragraph;
 }));
 if(v.descIdentity){
   const identity=document.createElement("p");
   identity.className="detail-story-identity";
   identity.textContent=v.descIdentity;
   story.append(identity);
 }
 const videoUrl=v.video||g.video||null;
 const videoId=extractYoutubeId(videoUrl);
 const videoSection=document.getElementById("detailVideo");
 const frame=document.getElementById("detailVideoFrame");
 frame.removeAttribute("src");
 frame.title=`${g.name} 音源配布動画`;
 videoSection.hidden=!videoId;
 if(videoId) frame.src=`https://www.youtube-nocookie.com/embed/${videoId}`;
 const art=document.getElementById("detailPortrait");
 art.hidden=false;
 art.src=v.img;
 art.alt=`${g.name} ${v.label} 立ち絵`;
 const versions=document.getElementById("detailVariants");
 versions.hidden=g.variants.length<2;
 versions.innerHTML=g.variants.map((item,i)=>`<button type="button" class="detail-variant ${i===currentVariantIndex?'active':''}" aria-pressed="${i===currentVariantIndex}" data-detail-variant="${i}">${item.label}</button>`).join("");
 document.getElementById("detailFormat").textContent=`VOICEBANK / ${v.type}`;
 document.getElementById("detailPitch").textContent=v.pitch;
 const facts=document.getElementById("detailFacts");
 facts.innerHTML=v.facts.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
 document.getElementById("detailSpecial").innerHTML=v.special;
 document.getElementById("detailStaff").innerHTML=v.staff;
 const dl=document.getElementById("detailDownload");
 dl.href=v.zip;
 dl.removeAttribute("download");
 dl.removeAttribute("target");
 dl.removeAttribute("rel");
 if(/^https?:\/\//.test(v.zip)){
   dl.target="_blank";
   dl.rel="noopener noreferrer";
 }else dl.setAttribute("download",v.zip.split("/").pop());
 detailAudio.pause();
 detailAudio.src=v.audio;
 detailAudio.load();
 detailPlaybackAttempted=false;
 detailAudioStatus.textContent="";
 updateDetailAudioUI();
}
function showDetailAudioError(){
 if(detailPlaybackAttempted) detailAudioStatus.textContent="試聴ファイルを読み込めませんでした。";
 updateDetailAudioUI();
}
// The play button and keyboard shortcut share this single playback path.
async function toggleDetailPlayback(){
 if(!detailAudio.paused){detailAudio.pause();return;}
 detailPlaybackAttempted=true;
 detailAudioStatus.textContent="";
 try{await detailAudio.play()}catch{showDetailAudioError()}
}
["timeupdate","durationchange","loadedmetadata","pause","play","ended"].forEach(name=>{
 detailAudio.addEventListener(name,updateDetailAudioUI);
});
detailAudio.addEventListener("error",showDetailAudioError);
detailPlay.addEventListener("click",toggleDetailPlayback);
detailSeek.addEventListener("input",()=>{
 if(Number.isFinite(detailAudio.duration) && detailAudio.duration>0){
   detailAudio.currentTime=Number(detailSeek.value)/1000*detailAudio.duration;
 }
});
document.getElementById("detailPortrait").addEventListener("error",event=>{event.target.hidden=true});
document.getElementById("detailPortrait").addEventListener("load",event=>{event.target.hidden=false});
document.getElementById("detailVariants").addEventListener("click",event=>{
 const button=event.target.closest("[data-detail-variant]");
 if(!button) return;
 const index=Number(button.dataset.detailVariant);
 if(index===currentVariantIndex) return;
 currentVariantIndex=index;
 renderVariant();
 document.querySelector(`#detailVariants [data-detail-variant="${index}"]`)?.focus();
});
document.getElementById("detailBack").addEventListener("click",closeModal);
document.getElementById("detailTerms").addEventListener("click",()=>{
 window.location.href="terms.html";
});

function renderVariant(){
 const g=currentGroup, v=g.variants[currentVariantIndex];
 document.getElementById("detailView").hidden=false;
 renderDetailReference(g,v);
}
function closeModal(){
 if(!modal.classList.contains("open")) return;
 stopDetailMedia();
 modal.classList.remove("open");
 modal.setAttribute("aria-hidden","true");
 document.body.style.overflow=previousBodyOverflow;
 pageShell.inert=false;
 previousFocus?.focus();
}
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>document.getElementById(button.dataset.open).scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})));
modal.addEventListener("click",event=>{if(event.target===modal)closeModal()});
document.addEventListener("keydown",event=>{
 if(!modal.classList.contains("open") || event.defaultPrevented) return;
 if(event.key==="Escape"){
   if(!event.altKey && !event.ctrlKey && !event.metaKey){
     event.preventDefault();
     closeModal();
   }
   return;
 }
 // Space toggles the visible detail's WAV, but native controls keep their keys:
 // Space on a button clicks it; Space on a range/input must not pause the song.
 if((event.code==="Space" || event.key===" ") && !event.repeat &&
    !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey){
   const target=event.target;
   const isControl=target instanceof Element && Boolean(target.closest(
     'button, a, input, textarea, select, summary, [contenteditable]:not([contenteditable="false"]), [role="button"], [role="slider"]'
   ));
   if(!isControl){
     event.preventDefault();
     void toggleDetailPlayback();
   }
   return;
 }
 if(event.key!=="Tab") return;
 const focusable=Array.from(modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), audio[controls], summary, [tabindex]:not([tabindex="-1"])')).filter(el=>el.getClientRects().length && !el.closest('[hidden]'));
 if(!focusable.length) return;
 const first=focusable[0],last=focusable[focusable.length-1];
 if(event.shiftKey && (document.activeElement===first || !modal.contains(document.activeElement))){event.preventDefault();last.focus()}
 else if(!event.shiftKey && (document.activeElement===last || !modal.contains(document.activeElement))){event.preventDefault();first.focus()}
});
renderGroups();
