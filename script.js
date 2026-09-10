const sahoProfile = [
 ["身長","170 cm"],["年齢","20 歳"],["性別","女"],
 ["好き","古籍、プリン"],["嫌い","捉摸しにくい変人"],["人称","わたし / あなた"]
];
const sahoDesc = "気弱な自称陽キャ，すぐに色々と考えすぎてしまう。<br>元・ネット小説作家、現在はフリーランスの掃除屋。";
const sahoSpecial = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC";
const sahoStaff = "キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ヒナ";

const groups = [
{
 groupId:"saho",file:"01",name:"足立サホ",
 variants:[
  {id:"saho-main",label:"MAIN",type:"5音階連続音 / VCV",pitch:"A3 / C4 / E4 / G4 / C5",img:"images/足立サホ.png",audio:"audio/足立サホ.wav",zip:"download/足立サホ.zip",desc:sahoDesc,facts:sahoProfile,special:sahoSpecial,staff:sahoStaff},
  {id:"saho-coffee",label:"Coffee",type:"VCV",pitch:"A3",img:"images/足立サホ_Coffee.png",audio:"audio/足立サホ_Coffee.wav",zip:"download/足立サホ_Coffee.zip",desc:sahoDesc,facts:sahoProfile,special:sahoSpecial,staff:sahoStaff},
  {id:"saho-cracker",label:"Cracker",type:"VCV",pitch:"G4",img:"images/足立サホ_Cracker.png",audio:"audio/足立サホ_Cracker.wav",zip:"https://drive.google.com/uc?export=download&id=1objA9W5a6nsPwXWxiyf5GbcqXj6Cye9z",desc:sahoDesc,facts:sahoProfile,special:sahoSpecial,staff:sahoStaff},
  {id:"saho-caramel",label:"Caramel",type:"VCV",pitch:"C5",img:"images/足立サホ_Caramel.png",audio:"audio/足立サホ_Caramel.wav",zip:"download/足立サホ_Caramel.zip",desc:sahoDesc,facts:sahoProfile,special:sahoSpecial,staff:sahoStaff}
 ]
},
{
 groupId:"maki",file:"02",name:"小泉マキ",
 variants:[
  {
   id:"maki-vcv",label:"Seasalt",type:"2音階連続音 / VCV",pitch:"A3 / E4",
   img:"images/小泉マキ_Seasalt.png",audio:"audio/小泉マキ_Seasalt.wav",zip:"https://drive.google.com/uc?export=download&id=1yEhTPZ12mIaia8ubGJON_i6DPbpD7vng",
   desc:"特立独行の少女。<br>軍火の密輸と売買で生計を立てるが、本人はその仕事を好いてはいないらしい。",
   facts:[["身長","166 cm"],["年齢","19 歳"],["性別","女"],["好き","ふわふわしたもの"],["嫌い","堅苦しいもの"],["人称","わたし / あなた"]],
   special:"[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC",
   staff:"キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ヒダーナ"
  },
  {
   id:"maki-cv",label:"無印",type:"6音階単独音 / CV",pitch:"A3 / C4 / D4 / E4 / F4 / G4",
   img:"images/小泉マキ_無印.png",audio:"audio/小泉マキ_無印.wav",zip:"download/小泉マキ_無印.zip",
   desc:"特立独行の少女。<br>軍火の密輸と売買で生計を立てるが、本人はその仕事を好いてはいないらしい。",
   facts:[["身長","166 cm"],["年齢","19 歳"],["性別","女"],["好き","ふわふわしたもの"],["嫌い","堅苦しいもの"],["人称","わたし / あなた"]],
   special:"[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）",
   staff:"キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ヒダーナ"
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
  id:"kiri",label:"MAIN",type:"1音階単独音 / CVVC",pitch:"B4",
  img:"images/月代キリ.png",audio:"audio/月代キリ.wav",zip:"download/月代キリ.zip",
  desc:"好き嫌いがはっきりしていて、明るく奔放な少女。<br>自分が信じる「正しさ」を証明するため、永遠の一部となった。",
  facts:[["身長","155 cm"],["年齢","16 歳"],["性別","女"],["好き","チョコレートクッキー"],["嫌い","弱いもの、曖昧なもの、柔らかいもの"],["人称","わたし / あなた"]],
  special:"[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC",
  staff:"キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS<br>ナカノヒト：ヒダーナ"
 }]
}
];

const aboutJa = `
<p class="welcome">ようこそ。<br>この古い折りたたみ携帯電話は、地下十数メートルの場所に埋もれていました。</p>
<p>連絡先には見知らぬ名前がいくつも並んでいますが、端末の持ち主が誰だったのかを示すものは、どこにも見当たりません。残されているのは、連絡先と途切れた着信履歴、わずかな通話の痕跡、そして完全には消去されなかった会話の断片だけです。</p>
<p>……どうやら、持ち主には連絡先へ詳しいメモを残す習慣がなかったようです。</p>
<p>それでも、このささやかな痕跡を辿っていけば、名前だけが残された彼らの片面的な輪郭にも、いつか色を与えることができるかもしれません——私は心から、そう願っています。</p>
<p class="aside">UTAU voicebanks / character records / trial audio / distribution files</p>`;

const aboutZh = `
<p class="welcome">欢迎光临。<br>这部旧式翻盖手机被埋藏在地下十余米的地方。</p>
<p>通讯录里排列着一串陌生的名字，却找不到任何能够说明手机主人身份的东西。剩下的只有联系方式、断掉的来电记录、短暂的通话痕迹，以及一些没能被彻底清除的聊天片段。</p>
<p>……看来，机主并没有在手机里记载完整备注的习惯。</p>
<p>沿着这些不起眼的痕迹继续翻下去，也许能够为这些片面的名字填充色彩——我由衷地、这样期盼着。</p>
<p class="aside">UTAU 音源 / 角色记录 / 试听音频 / 配布文件</p>`;

const termsJa = `
<div class="notice">本利用規約は、必要に応じて予告なく改定される場合があります。ご利用の際は、公開されている最新版をご確認ください。</div>
<h3>■ はじめに</h3>
<p>本音源は、UTAUでの使用を目的として制作された音声ライブラリです。本音源をダウンロード、または使用した時点で、本規約に同意したものとみなします。</p>
<h3>■ 利用範囲</h3>
<p>・個人・同人・非商用の範囲でご利用いただけます。<br>・企業案件、有償頒布物、販売を主目的とする制作物など、商用を目的とした利用は禁止します。<br>・UTAU楽曲を動画投稿サイト等へ投稿した際に発生する通常の広告収益については、非商用利用の範囲として扱います。</p>
<h3>■ クレジット表記</h3>
<div class="credit-note"><p>・使用した音源名は、必ず分かる形で明記してください。<br>・制作者名を併記する場合は「quef」と表記してください。</p></div>
<h3>■ 音源内部のファイルについて</h3>
<p>・oto.ini、prefix.map、character.txt などの設定ファイルは、ご自身の使用環境や調声に合わせて自由に編集して構いません。<br>・ただし、編集の有無にかかわらず、本音源に含まれるファイルを第三者へ再配布することは禁止します。<br>・設定ファイルや音声ファイル等の内容を、そのまま確認できる形で転載・公開することも禁止します。<br>・SNS、ブログ、動画サイト等に、ファイル内容を判読できるスクリーンショットを掲載することも禁止します。</p>
<h3>■ 禁止事項</h3>
<p>以下の用途・行為は禁止します。<br>・AI学習、機械学習、モデル学習、学習用データセット等への利用<br>・許可のない再配布、販売、転載<br>・他作品の盗用、過度な模倣、第三者の権利を侵害する利用<br>・政治・宗教・信仰に関する主張や宣伝を目的とした利用<br>・公序良俗に反する内容、誹謗中傷、人格を著しく貶める表現<br>・未成年者の性的描写を含む表現<br>・妊娠、著しく残虐な描写、その他過度にセンシティブな内容<br>・キャラクターを動物・ペットとして扱う表現<br>・その他、制作者が本音源またはキャラクターの扱いとして不適切と判断したもの</p>
<h3>■ 二次創作・派生キャラクター</h3>
<p>・使用した音源名を明記した上で、楽曲、PV、MMD、イラスト等の二次創作にご利用いただけます。<br>・本音源そのものを主な商品・配布物として扱う有償頒布、販売、無許可の派生音源配布は禁止します。<br>・亜種・派生キャラクターを制作する場合は、事前にご相談ください。無許可で制作されたものについては、公開停止または削除をお願いする場合があります。</p>
<h3>■ 免責事項</h3>
<p>・本音源の使用によって生じた損害、トラブル、データ損失等について、制作者は責任を負いません。<br>・すべての環境での動作、互換性、品質を保証するものではありません。<br>・本規約に反する利用が確認された場合、制作者は利用の停止を求めることがあります。</p>
<h3>■ お問い合わせ</h3>
<p>Email：QuE_F@outlook.com<br>X：@quuuue_<br>判断に迷う場合や、本規約に記載のない用途については、事前にお問い合わせください。</p>`;

const termsZh = `
<div class="notice">本使用条款可能会根据需要在不另行通知的情况下进行调整。使用前请确认当前公开的最新版本。</div>
<h3>■ 前言</h3>
<p>本音源是以在 UTAU 中使用为目的制作的声音库。下载或开始使用本音源，即视为已经阅读并同意本条款。</p>
<h3>■ 使用范围</h3>
<p>・可以用于个人、同人及非商业性质的创作。<br>・禁止用于企业项目、有偿发行物、以销售为主要目的的制作物等商业用途。<br>・将 UTAU 乐曲投稿至视频平台后产生的一般广告收益，可视为非商业范围内的使用。</p>
<h3>■ 署名 / Credit</h3>
<div class="credit-note"><p>・必须以能够明确识别的方式标注实际使用的音源名称。<br>・如需同时注明制作者，请写作“quef”。</p></div>
<h3>■ 关于音源内部文件</h3>
<p>・oto.ini、prefix.map、character.txt 等设置文件，可以根据自己的使用环境和调声需求自由修改。<br>・但无论文件是否经过修改，本音源中包含的任何文件都不得再次配布给第三方。<br>・禁止以能够直接查看内容的形式转载或公开设置文件、音频文件等内容。<br>・同样禁止在 SNS、博客、视频网站等平台发布能够辨认出文件内容的截图。</p>
<h3>■ 禁止事项</h3>
<p>禁止以下用途及行为：<br>・用于 AI 学习、机器学习、模型训练、训练数据集等相关用途<br>・未经许可进行再配布、销售或转载<br>・盗用他人作品、过度模仿，或以其他方式侵犯第三方权利<br>・以政治、宗教、信仰的宣传或主张为目的进行使用<br>・违反公序良俗的内容、诽谤中伤或严重贬损人格的表现<br>・包含未成年人的性描写<br>・妊娠、极度残虐或其他过度敏感的内容<br>・将角色作为动物或宠物进行表现<br>・其他由制作者判断为不适合本音源或角色的使用方式</p>
<h3>■ 二次创作与派生角色</h3>
<p>・在明确标注所使用音源名称的前提下，可以用于乐曲、PV、MMD、插画等二次创作。<br>・禁止将本音源本身作为主要商品或配布物进行有偿发布、销售，也禁止未经许可发布派生音源。<br>・如需制作亚种或派生角色，请事先联系。未经许可制作的内容，可能会被要求停止公开或删除。</p>
<h3>■ 免责声明</h3>
<p>・因使用本音源产生的损失、纠纷、数据损坏等问题，制作者不承担责任。<br>・不保证本音源能够在所有环境中正常运行，也不对兼容性及质量作绝对保证。<br>・如发现违反本条款的使用方式，制作者有权要求停止使用。</p>
<h3>■ 联系方式</h3>
<p>Email：QuE_F@outlook.com<br>X：@quuuue_<br>如果对某种用途是否允许存在疑问，或条款中没有明确说明，请在使用前联系确认。</p>`;

let currentGroup=null,currentVariantIndex=0;

function renderGroups(){
 const grid=document.getElementById("voiceGrid");
 grid.innerHTML=groups.map((g,i)=>{
   const first=g.variants[0], meta=g.variants.length>1?`${g.variants.length} VARIANTS`:first.type;
   return `<button class="voice-card" data-group="${i}">
     <div class="voice-no">FILE ${g.file}</div><div class="voice-name">${g.name}</div>
     <div class="voice-meta">${meta}<br>${first.pitch}</div><div class="voice-arrow">→</div>
   </button>`;
 }).join("");
 grid.querySelectorAll(".voice-card").forEach(x=>x.addEventListener("click",()=>openGroup(+x.dataset.group)));
}
function openGroup(i){
 currentGroup=groups[i];currentVariantIndex=0;renderVariant();
 const m=document.getElementById("voiceModal");m.classList.add("open");m.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function renderVariant(){
 const g=currentGroup,v=g.variants[currentVariantIndex];
 document.getElementById("modalFile").textContent=`FILE ${g.file} / VOICEBANK`;
 document.getElementById("modalName").textContent=g.name;
 document.getElementById("modalType").textContent=`${v.type}　/　${v.pitch}`;
 document.getElementById("modalId").textContent=v.id;
 const sw=document.getElementById("variantSwitch");
 sw.innerHTML=g.variants.length>1?g.variants.map((x,i)=>`<button class="variant-btn ${i===currentVariantIndex?'active':''}" data-variant="${i}">${x.label}</button>`).join(""):"";
 sw.querySelectorAll(".variant-btn").forEach(b=>b.addEventListener("click",()=>{currentVariantIndex=+b.dataset.variant;renderVariant()}));
 const img=document.getElementById("modalImg");img.src=v.img;img.alt=`${g.name} ${v.label}`;
 const facts=v.facts.map(x=>`<p><b>${x[0]}</b>　${x[1]}</p>`).join("");
 document.getElementById("modalBody").innerHTML=`
  <div class="block"><span class="label">DESCRIPTION</span><p>${v.desc}</p></div>
  <div class="block"><span class="label">PROFILE</span>${facts}</div>
  <div class="block"><span class="label">FORMAT</span><p>${v.type}</p></div>
  <div class="block"><span class="label">PITCH</span><p>${v.pitch}</p></div>
  <div class="block"><span class="label">SPECIAL PHONEMES</span><p>${v.special}</p></div>
  <div class="block"><span class="label">STAFF</span><p>${v.staff}</p></div>
  <div class="block"><span class="label">TRIAL / 試聴</span><audio controls preload="none"><source src="${v.audio}" type="audio/wav"></audio></div>
  <div class="block"><a class="download" href="${v.zip}" download>DOWNLOAD ↓<small>${v.zip.split("/").pop()}</small></a></div>`;
}
function closeModal(){const m=document.getElementById("voiceModal");m.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function renderTerms(lang="ja"){document.getElementById("termsContent").innerHTML=lang==="ja"?termsJa:termsZh;document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang))}
function renderAbout(lang="ja"){document.getElementById("aboutContent").innerHTML=lang==="ja"?aboutJa:aboutZh;document.querySelectorAll(".about-lang").forEach(b=>b.classList.toggle("active",b.dataset.aboutLang===lang))}
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>document.getElementById(b.dataset.open).scrollIntoView({behavior:"smooth"})));
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("voiceModal").addEventListener("click",e=>{if(e.target.id==="voiceModal")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>renderTerms(b.dataset.lang)));
document.querySelectorAll(".about-lang").forEach(b=>b.addEventListener("click",()=>renderAbout(b.dataset.aboutLang)));
renderGroups();renderAbout("ja");renderTerms("ja");