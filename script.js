const sahoProfile = [
 ["身長","170 cm"],["年齢","20 歳"],["性別","女"],
 ["好き","古籍、プリン"],["嫌い","捉摸しにくい変人"],["人称","わたし / あなた"]
];
const sahoDesc = "気弱な自称陽キャ，すぐに色々と考えすぎてしまう。<br>元・ネット小説作家、現在はフリーランスの掃除屋。";
const detailSpecial = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC";
const natsukawaStaff = "キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS";

const sahoCommon = {desc:sahoDesc,facts:sahoProfile,special:detailSpecial,staff:natsukawaStaff};

const makiDesc = "特立独行の少女。<br>軍火の密輸と売買で生計を立てるが、本人はその仕事を好いてはいないらしい。";
const makiSpecialBase = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）";
const makiSilentConsonant = "[a K]　無声子音";
const makiFacts = [["身長","166 cm"],["年齢","19 歳"],["性別","女"],["好き","ふわふわしたもの"],["嫌い","堅苦しいもの"],["人称","わたし / あなた"]];

const kiriCommon = {
  desc:"好き嫌いがはっきりしていて、明るく奔放な少女。<br>自分が信じる「正しさ」を証明するため、永遠の一部となった。",
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
  desc:"気位の高い少女。<br>口が悪く、他人を見下したような物言いが目立つ。<br>守るべきもののため、その責務を背負い続けている。",
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
  desc:"無表情な少女。<br>没落した名家を再興する使命を背負い、本来の自分を押し殺して生きている。",
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
 renderCharacterComments(currentGroup.groupId);
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
 document.getElementById("detailStory").innerHTML=v.desc;
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
/* 雑談 / one component and one source of data for every character.
 * The speaker expresses a view of the current DETAIL character (target).
 * The quiet memory effect is reserved exclusively for チヨ's pre-amnesia remarks.
 */
const commentsSection = document.getElementById("detailComments");
const commentsSpeakers = document.getElementById("detailCommentSpeakers");
const commentsBody = document.getElementById("detailCommentBody");
let commentsForTarget = [];
let selectedCommentIndex = -1;

function renderCharacterComments(targetId){
  commentsForTarget = characterComments.filter(item => item.targetId === targetId);
  commentsSection.hidden = commentsForTarget.length === 0;
  commentsSpeakers.replaceChildren();
  commentsBody.replaceChildren();
  selectedCommentIndex = -1;
  if(!commentsForTarget.length) return;

  // Reuse the already configured character names rather than duplicating them.
  const fragment = document.createDocumentFragment();
  commentsForTarget.forEach((item,index) => {
    const speaker = groups.find(group => group.groupId === item.speakerId);
    if(!speaker) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "detail-comment-speaker";
    button.textContent = speaker.name;
    button.dataset.commentIndex = String(index);
    button.setAttribute("aria-pressed","false");
    fragment.appendChild(button);
  });
  commentsSpeakers.appendChild(fragment);
  selectCharacterComment(0);
}

function selectCharacterComment(index){
  if(index === selectedCommentIndex || !commentsForTarget[index]) return;
  selectedCommentIndex = index;
  const entry = commentsForTarget[index];
  commentsSpeakers.querySelectorAll("[data-comment-index]").forEach(button => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.commentIndex) === index));
  });
  // Rebuilding just the text surface discards the previous memory reveal state.
  commentsBody.replaceChildren();

  if(entry.recordType !== "lostMemory"){
    const quote = document.createElement("p");
    quote.className = "detail-comment-quote detail-comment-ordinary";
    quote.textContent = `「${entry.quote}」`;
    commentsBody.appendChild(quote);
    return;
  }
  const speaker = groups.find(group => group.groupId === entry.speakerId);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "detail-memory";
  button.dataset.visible = "false";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", `${speaker.name}の発言を表示`);

  const ink = document.createElement("span");
  ink.id = "detailMemoryRecord";
  button.setAttribute("aria-controls", ink.id);
  ink.className = "detail-memory-ink";
  ink.setAttribute("aria-hidden", "true");
  const quote = document.createElement("span");
  quote.className = "detail-comment-quote";
  quote.textContent = `「${entry.quote}」`;
  ink.appendChild(quote);
  button.appendChild(ink);
  commentsBody.appendChild(button);

  let lastPointerType = "";
  let visible = false;
  function setVisible(next){
    if(visible === next) return;
    visible = next;
    button.dataset.visible = String(visible);
    button.setAttribute("aria-expanded", String(visible));
    ink.setAttribute("aria-hidden", String(!visible));
    button.setAttribute("aria-label", visible
      ? `${speaker.name}の発言。「${entry.quote}」。押すと非表示にします`
      : `${speaker.name}の発言を表示`);
  }
  // A hover is only a hover for a real mouse/trackpad; touch & pen are toggles.
  button.addEventListener("pointerenter",event => {
    if(event.pointerType === "mouse") setVisible(true);
  });
  button.addEventListener("pointerleave",event => {
    if(event.pointerType === "mouse") setVisible(false);
  });
  button.addEventListener("pointerdown",event => {lastPointerType = event.pointerType});
  button.addEventListener("click",event => {
    if(event.detail === 0 || lastPointerType !== "mouse") setVisible(!visible);
    lastPointerType = "";
  });
}
commentsSpeakers.addEventListener("click",event => {
  const button = event.target.closest("[data-comment-index]");
  if(!button) return;
  selectCharacterComment(Number(button.dataset.commentIndex));
});

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

/* v17 / recovered homepage chat */
const recoveredChatMessages = [
  {type:"msg", who:"足立サホ", time:"23:41", side:"", text:"……二人とも、まだ起きてる？"},
  {type:"msg", who:"常世チヨ", time:"23:41", side:"", text:"起きてるよ。どうしたの、サホちゃん。"},
  {type:"msg", who:"月代キリ", time:"23:42", side:"outgoing", text:"わたしもいるよ。なに？"},
  {type:"msg", who:"足立サホ", time:"23:42", side:"", text:"明日のプリント、どこにしまったか忘れちゃって。今日、机の上に置いてたかな。"},
  {type:"msg", who:"月代キリ", time:"23:42", side:"outgoing", text:"置いてた。帰るとき、ノートにはさんでなかった？"},
  {type:"msg", who:"足立サホ", time:"23:43", side:"", text:"あっ、そうかも。ちょっと探してくるね。"},
  {type:"msg", who:"常世チヨ", time:"23:43", side:"", text:"慌てなくていいよ。"},
  {type:"msg", who:"足立サホ", time:"23:44", side:"", text:"……あった。ごめんね、こんな時間に。"},
  {type:"msg", who:"月代キリ", time:"23:44", side:"outgoing", text:"だから、そんなに謝らなくていいって。"},
  {type:"msg", who:"足立サホ", time:"23:44", side:"", text:"ふふ。キリちゃん、いつもそう言うよね。"},
  {type:"msg", who:"月代キリ", time:"23:45", side:"outgoing", text:"サホがいつも謝るからでしょ。"},
  {type:"msg", who:"常世チヨ", time:"23:45", side:"", text:"まあまあ。見つかってよかったね。"},
  {type:"msg", who:"足立サホ", time:"23:46", side:"", text:"うん。チヨちゃんもありがとう。"},
  {type:"system", text:"一部のメッセージを復元しました"},
  {type:"msg", who:"常世チヨ", time:"23:46", side:"", text:"そういえば、明日は一緒に帰れる？"},
  {type:"msg", who:"足立サホ", time:"23:47", side:"", text:"わたし、掃除当番があるから少し遅くなるかも。"},
  {type:"msg", who:"月代キリ", time:"23:47", side:"outgoing", text:"じゃあ終わるまで待ってる。"},
  {type:"msg", who:"足立サホ", time:"23:47", side:"", text:"え、いいの？　先に帰ってても大丈夫だよ。"},
  {type:"msg", who:"月代キリ", time:"23:48", side:"outgoing", text:"わたしが待ちたいんだから、別にいいじゃん。"},
  {type:"msg", who:"常世チヨ", time:"23:48", side:"", text:"じゃあ、わたしも待つね。"},
  {type:"msg", who:"足立サホ", time:"23:49", side:"", text:"二人とも、無理しなくていいのに。"},
  {type:"msg", who:"月代キリ", time:"23:49", side:"outgoing", text:"それ、今日何回目？"},
  {type:"msg", who:"足立サホ", time:"23:49", side:"", text:"……何が？"},
  {type:"msg", who:"月代キリ", time:"23:50", side:"outgoing", text:"「いいのに」ってやつ。サホ、嫌なことがあってもそう言いそう。"},
  {type:"msg", who:"足立サホ", time:"23:50", side:"", text:"そんなことないと思うけど……。"},
  {type:"msg", who:"月代キリ", time:"23:50", side:"outgoing", text:"ほら、また曖昧。嫌なら嫌って言えばいいのに。"},
  {type:"msg", who:"常世チヨ", time:"23:51", side:"", text:"キリちゃん、もうそのへんにしよう？"},
  {type:"msg", who:"月代キリ", time:"23:51", side:"outgoing", text:"……うん。言いすぎた。ごめん。"},
  {type:"msg", who:"足立サホ", time:"23:51", side:"", text:"大丈夫だよ。気にしてないから。"},
  {type:"msg", who:"月代キリ", time:"23:52", side:"outgoing", text:"そういうとこも、サホらしいけどね。"},
  {type:"msg", who:"常世チヨ", time:"23:52", side:"", text:"二人とも、明日眠くなっちゃうよ。そろそろ寝ない？"},
  {type:"msg", who:"月代キリ", time:"23:52", side:"outgoing", text:"チヨまで先生みたいなこと言う。"},
  {type:"msg", who:"足立サホ", time:"23:53", side:"", text:"じゃあ、明日起きられなかったらキリちゃんのせいにしようかな。"},
  {type:"msg", who:"月代キリ", time:"23:53", side:"outgoing", text:"えっ、なんでわたし！？"},
  {type:"msg", who:"常世チヨ", time:"23:53", side:"", text:"ふふ。おやすみの前に仲直りできてよかったね。"},
  {type:"msg", who:"月代キリ", time:"23:54", side:"outgoing", text:"別にけんかしてないってば。"},
  {type:"system", text:"23:54　通信が一時的に切断されました"},
  {type:"msg", who:"足立サホ", time:"23:55", side:"", text:"……戻った？"},
  {type:"msg", who:"常世チヨ", time:"23:55", side:"", text:"うん、戻ったみたい。"},
  {type:"msg", who:"月代キリ", time:"23:55", side:"outgoing", text:"なんだ、切れたのか。"},
  {type:"msg", who:"足立サホ", time:"23:55", side:"", text:"じゃあ、今度こそおやすみ。"},
  {type:"msg", who:"常世チヨ", time:"23:55", side:"", text:"おやすみなさい。"},
  {type:"msg", who:"月代キリ", time:"23:55", side:"outgoing", text:"おやすみ。また明日ね。"}
];

let recoveredChatStarted = false;
let recoveredChatIndex = 0;

function makeRecoveredChatItem(item){
 if(item.type==="system"){
   const system=document.createElement("div");
   system.className="chat-system";
   system.textContent=item.text;
   return system;
 }
 const row=document.createElement("div");
 row.className=`chat-row ${item.side || "incoming"}`;
 const bubble=document.createElement("div");
 bubble.className="chat-bubble";
 const name=document.createElement("span");
 name.className="chat-name";
 name.textContent=item.who;
 bubble.append(name,document.createTextNode(item.text));
 const time=document.createElement("span");
 time.className="chat-time";
 time.textContent=item.time;
 if(item.side==="outgoing") row.append(bubble,time);
 else row.append(time,bubble);
 return row;
}

function openRecoveredChat(event){
  if(event) event.stopPropagation();
  if(recoveredChatStarted) return;

  recoveredChatStarted = true;
  recoveredChatIndex = 0;

  const panel = document.getElementById("heroChat");
  const status = document.getElementById("recoveredChatToggle");
  const header = document.getElementById("chatHeaderLabel");
  const windowEl = panel.querySelector(".chat-window");
  const inputLabel = panel.querySelector(".chat-input span");

  panel.classList.add("log-open");
  panel.classList.remove("chat-complete");
  status.textContent = "● OFFLINE";
  status.setAttribute("aria-label","recovered chat log offline");
  status.setAttribute("aria-expanded","true");
  windowEl.setAttribute("tabindex","0");
  windowEl.setAttribute("role","button");
  windowEl.setAttribute("aria-label","次のメッセージを復元する");
  header.textContent = "RECOVERED CHAT / THREAD 04";
  inputLabel.textContent = "click chat / restore next";
  windowEl.innerHTML = "";
}

function revealNextRecoveredMessage(event){
  if(!recoveredChatStarted) return;

  if(event){
    if(event.target.closest(".chat-top") || event.target.closest(".chat-input")) return;
  }

  if(recoveredChatIndex >= recoveredChatMessages.length) return;

  const panel = document.getElementById("heroChat");
  const windowEl = panel.querySelector(".chat-window");
  const inputLabel = panel.querySelector(".chat-input span");

  const node = makeRecoveredChatItem(recoveredChatMessages[recoveredChatIndex++]);
  windowEl.appendChild(node);

  requestAnimationFrame(()=>node.classList.add("recovered-visible"));
  windowEl.scrollTop = windowEl.scrollHeight;

  if(recoveredChatIndex >= recoveredChatMessages.length){
    panel.classList.add("chat-complete");
    inputLabel.textContent = "recovered log / complete";
  }
}

const recoveredChatToggle = document.getElementById("recoveredChatToggle");
const recoveredChatPanel = document.getElementById("heroChat");

if(recoveredChatToggle){
  recoveredChatToggle.addEventListener("click",openRecoveredChat);
}
if(recoveredChatPanel){
  recoveredChatPanel.addEventListener("click",revealNextRecoveredMessage);
  recoveredChatPanel.querySelector(".chat-window").addEventListener("keydown",event=>{
    if(event.key==="Enter" || event.key===" "){
      event.preventDefault();
      event.stopPropagation();
      revealNextRecoveredMessage();
    }
  });
}

