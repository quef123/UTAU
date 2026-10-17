const sahoProfile = [
 ["身長","170 cm"],["年齢","20 歳"],["性別","女"],
 ["好き","古籍、プリン"],["嫌い","捉摸しにくい変人"],["人称","わたし / あなた"]
];
const sahoDesc = "気弱な自称陽キャ，すぐに色々と考えすぎてしまう。<br>元・ネット小説作家、現在はフリーランスの掃除屋。";
const sahoSpecial = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC";
const sahoStaff = "キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ヒナ";

const sahoCommon = {desc:sahoDesc,facts:sahoProfile,special:sahoSpecial,staff:sahoStaff};

const makiDesc = "特立独行の少女。<br>軍火の密輸と売買で生計を立てるが、本人はその仕事を好いてはいないらしい。";
const makiFacts = [["身長","166 cm"],["年齢","19 歳"],["性別","女"],["好き","ふわふわしたもの"],["嫌い","堅苦しいもの"],["人称","わたし / あなた"]];

const kiriCommon = {
  desc:"好き嫌いがはっきりしていて、明るく奔放な少女。<br>自分が信じる「正しさ」を証明するため、永遠の一部となった。",
  facts:[["身長","155 cm"],["年齢","16 歳"],["性別","女"],["好き","チョコレートクッキー"],["嫌い","弱いもの、曖昧なもの、柔らかいもの"],["人称","わたし / あなた"]],
  special:"[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC",
  staff:"キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ラン"
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
   special:"[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC",
   staff:"キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ヒダーナ"
  },
  {
   id:"maki-cv",label:"無印",type:"6音階単独音 / CV",pitch:"A3 / C4 / D4 / E4 / F4 / G4",
   img:"images/小泉マキ_無印.png",audio:"audio/小泉マキ_無印.wav",zip:"download/小泉マキ_無印.zip",
   desc:makiDesc,
   facts:makiFacts,
   special:"[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）",
   staff:"キャラクターデザイン：quef<br>原音設定：肺叶<br>イラスト：SS<br>ナカノヒト：ヒダーナ"
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
  staff:"キャラクターデザイン：quef<br>イラスト：baita<br>サンプリング：グロック19のマガジン装填音"
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
  staff:"キャラクターデザイン：quef<br>原音設定：itsukiMNE<br>イラスト：baita<br>サンプリング：グロック19のマガジン装填音・猫が爪を研ぐ"
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
const modalImage=document.getElementById("modalImg");
const pageShell=document.querySelector(".site-shell");

// If a character asset is not installed, keep the reserved whitespace, not a broken image icon.
modalImage.addEventListener("error",()=>{modalImage.hidden=true});
modalImage.addEventListener("load",()=>{modalImage.hidden=false});

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
     (currentGroup.groupId === "saho" ? document.getElementById("sahoBack") : document.getElementById("modalClose")).focus();
 });
}
/* 足立サホ — high-fidelity reference layout; other characters keep the existing modal. */
const sahoAudio = document.getElementById("sahoAudio");
const sahoPlay = document.getElementById("sahoPlay");
const sahoSeek = document.getElementById("sahoSeek");
const sahoAudioStatus = document.getElementById("sahoAudioStatus");
let sahoPlaybackAttempted = false;
const romanNames = {saho:"ADACHI SAHO"};
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
function stopSahoMedia(){
 sahoAudio.pause();
 const frame=document.getElementById("sahoVideoFrame");
 frame.removeAttribute("src");
}
function updateSahoAudioUI(){
 const playing = !sahoAudio.paused && !sahoAudio.ended;
 sahoPlay.querySelector("span").textContent=playing?"Ⅱ":"▶";
 sahoPlay.setAttribute("aria-label",playing?"試聴を一時停止":"試聴を再生");
 sahoPlay.setAttribute("aria-pressed",String(playing));
 document.getElementById("sahoCurrent").textContent=timeLabel(sahoAudio.currentTime||0);
 document.getElementById("sahoDuration").textContent=timeLabel(sahoAudio.duration);
 sahoSeek.value=(Number.isFinite(sahoAudio.duration) && sahoAudio.duration>0)
  ? String(Math.round(sahoAudio.currentTime / sahoAudio.duration * 1000)) : "0";
}
function renderSahoReference(g,v){
 document.getElementById("sahoName").textContent=g.name;
 document.getElementById("sahoRoman").textContent=romanNames[g.groupId]||"";
 document.getElementById("sahoStory").innerHTML=v.desc;
 const videoUrl=v.video||g.video||null;
 const videoId=extractYoutubeId(videoUrl);
 const videoSection=document.getElementById("sahoVideo");
 const frame=document.getElementById("sahoVideoFrame");
 frame.removeAttribute("src");
 videoSection.hidden=!videoId;
 if(videoId) frame.src=`https://www.youtube-nocookie.com/embed/${videoId}`;
 document.getElementById("sahoPortrait").hidden=false;
 const art=document.getElementById("sahoPortrait");
 art.src=v.img;
 art.alt=`${g.name} ${v.label} 立ち絵`;
 const versions=document.getElementById("sahoVariants");
 versions.innerHTML=g.variants.map((item,i)=>`<button type="button" class="saho-variant ${i===currentVariantIndex?'active':''}" aria-pressed="${i===currentVariantIndex}" data-saho-variant="${i}">${item.label}</button>`).join("");
 document.getElementById("sahoFormat").textContent=`VOICEBANK / ${v.type}`;
 document.getElementById("sahoPitch").textContent=v.pitch;
 const facts=document.getElementById("sahoFacts");
 facts.innerHTML=v.facts.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
 document.getElementById("sahoSpecial").innerHTML=v.special;
 document.getElementById("sahoStaff").innerHTML=v.staff;
 const dl=document.getElementById("sahoDownload");
 dl.href=v.zip;
 dl.removeAttribute("download");
 dl.removeAttribute("target");
 dl.removeAttribute("rel");
 if(/^https?:\/\//.test(v.zip)){
   dl.target="_blank";
   dl.rel="noopener noreferrer";
 }else dl.setAttribute("download",v.zip.split("/").pop());
 sahoAudio.pause();
 sahoAudio.src=v.audio;
 sahoAudio.load();
 sahoPlaybackAttempted=false;
 sahoAudioStatus.textContent="";
 updateSahoAudioUI();
}
function showSahoAudioError(){
 if(sahoPlaybackAttempted) sahoAudioStatus.textContent="試聴ファイルを読み込めませんでした。";
 updateSahoAudioUI();
}
sahoAudio.addEventListener("timeupdate",updateSahoAudioUI);
sahoAudio.addEventListener("durationchange",updateSahoAudioUI);
sahoAudio.addEventListener("loadedmetadata",updateSahoAudioUI);
sahoAudio.addEventListener("pause",updateSahoAudioUI);
sahoAudio.addEventListener("play",updateSahoAudioUI);
sahoAudio.addEventListener("ended",updateSahoAudioUI);
sahoAudio.addEventListener("error",showSahoAudioError);
sahoPlay.addEventListener("click",async()=>{
 if(!sahoAudio.paused){sahoAudio.pause();return;}
 sahoPlaybackAttempted=true;
 sahoAudioStatus.textContent="";
 try{await sahoAudio.play()}catch{showSahoAudioError()}
});
sahoSeek.addEventListener("input",()=>{
 if(Number.isFinite(sahoAudio.duration) && sahoAudio.duration>0){
   sahoAudio.currentTime=Number(sahoSeek.value)/1000*sahoAudio.duration;
 }
});
document.getElementById("sahoPortrait").addEventListener("error",event=>{event.target.hidden=true});
document.getElementById("sahoPortrait").addEventListener("load",event=>{event.target.hidden=false});
document.getElementById("sahoVariants").addEventListener("click",event=>{
 const button=event.target.closest("[data-saho-variant]");
 if(!button) return;
 const index=Number(button.dataset.sahoVariant);
 if(index===currentVariantIndex) return;
 currentVariantIndex=index;
 renderVariant();
 document.querySelector(`#sahoVariants [data-saho-variant="${index}"]`)?.focus();
});
document.getElementById("sahoBack").addEventListener("click",closeModal);
document.getElementById("sahoTerms").addEventListener("click",()=>{
 window.location.href="terms.html";
});

function renderVariant(){
 const g=currentGroup,v=g.variants[currentVariantIndex];
 document.querySelector("#modalBody audio")?.pause();
 const isSaho = g.groupId === "saho";
 modal.classList.toggle("saho-reference", isSaho);
 modal.setAttribute("aria-labelledby",isSaho?"sahoName":"modalName");
 document.getElementById("sahoDetail").hidden = !isSaho;
 if(isSaho){
   renderSahoReference(g,v);
   return;
 }
 stopSahoMedia();
 document.getElementById("modalFile").textContent=`FILE ${g.file} / VOICEBANK`;
 document.getElementById("modalName").textContent=g.name;
 document.getElementById("modalType").textContent=`${v.type}　/　${v.pitch}`;
 document.getElementById("modalId").textContent=v.id;
 const sw=document.getElementById("variantSwitch");
 sw.innerHTML=g.variants.length>1?g.variants.map((x,i)=>`<button type="button" class="variant-btn ${i===currentVariantIndex?'active':''}" aria-pressed="${i===currentVariantIndex}" data-variant="${i}">${x.label}</button>`).join(""):"";
 modalImage.hidden=false;
 modalImage.src=v.img;
 modalImage.alt=`${g.name} ${v.label}`;
 const facts=v.facts.map(x=>`<p><b>${x[0]}</b>　${x[1]}</p>`).join("");
 const external=/^https?:\/\//.test(v.zip);
 const downloadAttrs=external?'target="_blank" rel="noopener noreferrer"':'download';
 const downloadName=external?`${g.name}_${v.label}.zip`:v.zip.split("/").pop();
 document.getElementById("modalBody").innerHTML=`
  <div class="block"><span class="label">DESCRIPTION</span><p>${v.desc}</p></div>
  <div class="block"><span class="label">PROFILE</span>${facts}</div>
  <div class="block"><span class="label">FORMAT</span><p>${v.type}</p></div>
  <div class="block"><span class="label">PITCH</span><p>${v.pitch}</p></div>
  <div class="block"><span class="label">SPECIAL PHONEMES</span><p>${v.special}</p></div>
  <div class="block"><span class="label">STAFF</span><p>${v.staff}</p></div>
  <div class="block"><span class="label">TRIAL / 試聴</span><audio controls preload="none" aria-label="${g.name} ${v.label} 試聴"><source src="${v.audio}" type="audio/wav"></audio></div>
  <div class="block"><a class="download" href="${v.zip}" ${downloadAttrs}>DOWNLOAD ↓<small>${downloadName}</small></a></div>`;
}
function closeModal(){
 if(!modal.classList.contains("open")) return;
 document.querySelector("#modalBody audio")?.pause();
 stopSahoMedia();
 modal.classList.remove("open");
 modal.setAttribute("aria-hidden","true");
 document.body.style.overflow=previousBodyOverflow;
 pageShell.inert=false;
 previousFocus?.focus();
}
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>document.getElementById(button.dataset.open).scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})));
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",event=>{if(event.target===modal)closeModal()});
document.addEventListener("keydown",event=>{
 if(!modal.classList.contains("open")) return;
 if(event.key==="Escape"){event.preventDefault();closeModal();return}
 if(event.key!=="Tab") return;
 const focusable=Array.from(modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), audio[controls], summary, [tabindex]:not([tabindex="-1"])')).filter(el=>el.getClientRects().length && !el.closest('[hidden]'));
 if(!focusable.length) return;
 const first=focusable[0],last=focusable[focusable.length-1];
 if(event.shiftKey && (document.activeElement===first || !modal.contains(document.activeElement))){event.preventDefault();last.focus()}
 else if(!event.shiftKey && (document.activeElement===last || !modal.contains(document.activeElement))){event.preventDefault();first.focus()}
});
document.getElementById("variantSwitch").addEventListener("click",event=>{
 const button=event.target.closest(".variant-btn");
 if(!button) return;
 currentVariantIndex=Number(button.dataset.variant);
 renderVariant();
 document.querySelector("#variantSwitch .variant-btn.active")?.focus();
});
renderGroups();

/* v17 / recovered homepage chat */
const recoveredChatMessages = [
  {type:"msg", who:"足立サホ", time:"23:41", side:"", text:"……誰か、まだ起きてます？"},
  {type:"msg", who:"小泉マキ", time:"23:41", side:"", text:"起きてる。用件は。"},
  {type:"msg", who:"足立サホ", time:"23:42", side:"", text:"いや、用件ってほどじゃないんだけど。なんとなく、静かすぎるなって。"},
  {type:"msg", who:"常世アヤコ", time:"23:42", side:"", text:"それで人を呼びつけるの？　暇なら寝れば。"},
  {type:"msg", who:"月代キリ", time:"23:42", side:"outgoing", text:"寝られないなら話せばいいじゃん。わたしは別に付き合うけど。"},
  {type:"msg", who:"常世チヨ", time:"23:43", side:"", text:"……きみたちは、夜になると急に饒舌になるね。"},
  {type:"system", text:"一部のメッセージを復元しました"},
  {type:"msg", who:"足立サホ", time:"23:44", side:"", text:"饒舌っていうか……昼間に言うほどでもないことが、夜だとちょっと言えるだけ。"},
  {type:"msg", who:"小泉マキ", time:"23:44", side:"", text:"それ、昼でも言える。さほが勝手に難しくしてるだけ。"},
  {type:"msg", who:"足立サホ", time:"23:45", side:"", text:"そういう言い方するから難しくなるんだって。"},
  {type:"msg", who:"常世アヤコ", time:"23:45", side:"", text:"似た者同士。どっちも面倒。"},
  {type:"msg", who:"月代キリ", time:"23:45", side:"outgoing", text:"アヤコ、それ言うなら自分も大概じゃない？"},
  {type:"msg", who:"常世アヤコ", time:"23:46", side:"", text:"ぼくは少なくとも、自分が正しいと思ったことを曖昧にはしない。"},
  {type:"msg", who:"月代キリ", time:"23:46", side:"outgoing", text:"へえ。そこだけは気が合うかも。"},
  {type:"msg", who:"常世チヨ", time:"23:47", side:"", text:"気が合う、というより、同じ場所でぶつかりそうだけど。"},
  {type:"msg", who:"小泉マキ", time:"23:47", side:"", text:"放っておけばいい。壊れたらその時考える。"},
  {type:"msg", who:"足立サホ", time:"23:48", side:"", text:"マキって、そういうところだけ異様に雑だよね……。"},
  {type:"msg", who:"小泉マキ", time:"23:48", side:"", text:"そう？　必要なことはちゃんと考えてる。"},
  {type:"msg", who:"足立サホ", time:"23:49", side:"", text:"じゃあ今、必要なことって何。"},
  {type:"msg", who:"小泉マキ", time:"23:49", side:"", text:"さほが寝ること。"},
  {type:"msg", who:"足立サホ", time:"23:49", side:"", text:"……はいはい。"},
  {type:"msg", who:"月代キリ", time:"23:49", side:"outgoing", text:"マキ、そういうとこ面白い。自分のことは全然説明しないくせに、他人には答えを出すの早いよね。"},
  {type:"msg", who:"小泉マキ", time:"23:50", side:"", text:"説明しても意味ないことはある。"},
  {type:"msg", who:"月代キリ", time:"23:50", side:"outgoing", text:"意味あるかどうか、決めるの早すぎない？"},
  {type:"msg", who:"小泉マキ", time:"23:50", side:"", text:"遅く決めても同じなら、早い方がいい。"},
  {type:"msg", who:"常世チヨ", time:"23:50", side:"", text:"効率の話をしているようで、たぶん違うね。"},
  {type:"msg", who:"足立サホ", time:"23:50", side:"", text:"うん。マキはたぶん、考えてないんじゃなくて、考えた後を見せないだけ。"},
  {type:"msg", who:"小泉マキ", time:"23:50", side:"", text:"……さほ。"},
  {type:"msg", who:"足立サホ", time:"23:51", side:"", text:"なに。"},
  {type:"msg", who:"小泉マキ", time:"23:51", side:"", text:"余計なこと言わなくていい。"},
  {type:"msg", who:"月代キリ", time:"23:51", side:"outgoing", text:"図星なんだ。"},
  {type:"msg", who:"常世アヤコ", time:"23:51", side:"", text:"キリ、いちいち突くな。面倒になる。"},
  {type:"msg", who:"月代キリ", time:"23:51", side:"outgoing", text:"だって曖昧なままにする方が気持ち悪い。言いたいことあるなら言えばいいじゃん。"},
  {type:"msg", who:"常世アヤコ", time:"23:52", side:"", text:"言えば全部ましになると思ってるなら、おめでたいね。"},
  {type:"msg", who:"月代キリ", time:"23:52", side:"outgoing", text:"少なくとも黙って腐らせるよりはまし。"},
  {type:"msg", who:"常世チヨ", time:"23:52", side:"", text:"正しさは、言葉にした瞬間から誰かを傷つけることもあるよ。"},
  {type:"msg", who:"月代キリ", time:"23:52", side:"outgoing", text:"それでも、何も言わないよりいい。わたしはそう思う。"},
  {type:"msg", who:"足立サホ", time:"23:52", side:"", text:"……キリは、迷わないね。"},
  {type:"msg", who:"月代キリ", time:"23:53", side:"outgoing", text:"迷うよ。でも、迷ったまま立ち止まるのが嫌いなだけ。"},
  {type:"msg", who:"小泉マキ", time:"23:53", side:"", text:"それは少し分かる。"},
  {type:"msg", who:"月代キリ", time:"23:53", side:"outgoing", text:"でしょ。じゃあやっぱり気が合うじゃん。"},
  {type:"msg", who:"小泉マキ", time:"23:53", side:"", text:"そこまでは言ってない。"},
  {type:"msg", who:"足立サホ", time:"23:53", side:"", text:"ふふ。マキ、ちょっと困ってる。"},
  {type:"msg", who:"小泉マキ", time:"23:54", side:"", text:"困ってない。"},
  {type:"system", text:"23:54　通信が一時的に切断されました"},
  {type:"msg", who:"月代キリ", time:"23:55", side:"outgoing", text:"……戻った？"},
  {type:"msg", who:"常世チヨ", time:"23:55", side:"", text:"戻っているよ。たぶん。"},
  {type:"msg", who:"小泉マキ", time:"23:55", side:"", text:"いる。"},
  {type:"msg", who:"足立サホ", time:"23:55", side:"", text:"いるよ。"},
  {type:"msg", who:"月代キリ", time:"23:55", side:"outgoing", text:"ならいい。続きしよ。"}
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
}

if(recoveredChatPanel){
  recoveredChatPanel.querySelector(".chat-window").addEventListener("keydown",event=>{
    if(event.key==="Enter" || event.key===" "){
      event.preventDefault();
      event.stopPropagation();
      revealNextRecoveredMessage();
    }
  });
}

