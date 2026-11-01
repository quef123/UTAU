const sahoProfile = [
 ["身長","170 cm"],["年齢","20 歳"],["性別","女"],
 ["好き","古籍、プリン"],["嫌い","捉摸しにくい変人"],["人称","わたし / あなた"]
];
const sahoDesc = '<p>世の中を斜に構えて見ている、どこか厭世的な性格。</p><p>大勢の中のただ一人になることを嫌い、特別な何者かであろうとする。</p><p>しかし、現実に打ちのめされるたび、自分の苦悩さえありふれた独り相撲にすぎないのだと思い知らされていく。</p><p>元ネット小説家。現在はフリーランスの掃除屋。</p>';
const detailSpecial = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC";
const natsukawaStaff = "キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS";

const sahoCommon = {desc:sahoDesc,facts:sahoProfile,special:detailSpecial,staff:natsukawaStaff};

const makiDesc = '<p>それまでの人生から抜け出したことで、人はどんなふうにでも生きられるのだと知った。</p><p>けれど、何にでもなれるという自由は、何になりたいのかもわからない彼女を、かえって途方に暮れさせた。</p><p>今はただ、流されるように日々を過ごしている。</p>';
const makiSpecialBase = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）";
const makiSilentConsonant = "[a K]　無声子音";
const makiFacts = [["身長","166 cm"],["年齢","19 歳"],["性別","女"],["好き","ふわふわしたもの"],["嫌い","堅苦しいもの"],["人称","わたし / あなた"]];

const kiriCommon = {
  desc:'<p>思春期のあまりにも早い段階で、哲学や信仰というものに深く触れてしまった。</p><p>生きることの意味を問い続けるうちに、いつしかその問いそのものから抜け出せなくなっていく。</p><p>答えの見つからない人生に迷い、やがて自ら命を絶つことを選んだ。</p>',
  facts:[["身長","155 cm"],["年齢","16 歳"],["性別","女"],["好き","チョコレートクッキー"],["嫌い","弱いもの、曖昧なもの、柔らかいもの"],["人称","わたし / あなた"]],
  special:detailSpecial,
  staff:natsukawaStaff
};

const groups = [
{
 groupId:"saho",home:{img:"assets/home/adachi-saho.png",scale:1,offsetX:0,offsetY:0},file:"01",name:"足立サホ",
 video:"", // 任意：YouTube 配布動画 URL。未設定なら動画領域は表示しない。
 variants:[
  {id:"saho-main",label:"無印",type:"5音階連続音 / VCV",pitch:"A3 / C4 / E4 / G4 / C5",img:"images/足立サホ_無印.png",audio:"audio/足立サホ_無印.wav",zip:"download/足立サホ_無印.zip",...sahoCommon},
  {id:"saho-coffee",label:"Coffee",type:"VCV",pitch:"A3",img:"images/足立サホ_Coffee.png",audio:"audio/足立サホ_Coffee.wav",zip:"download/足立サホ_Coffee.zip",...sahoCommon},
  {id:"saho-cracker",label:"Cracker",type:"VCV",pitch:"G4",img:"images/足立サホ_Cracker.png",audio:"audio/足立サホ_Cracker.wav",zip:"https://drive.google.com/uc?export=download&id=1objA9W5a6nsPwXWxiyf5GbcqXj6Cye9z",...sahoCommon},
  {id:"saho-caramel",label:"Caramel",type:"VCV",pitch:"C5",img:"images/足立サホ_Caramel.png",audio:"audio/足立サホ_Caramel.wav",zip:"download/足立サホ_Caramel.zip",...sahoCommon}
 ]
},
{
 groupId:"maki",home:{img:"assets/home/koizumi-maki.png",scale:1,offsetX:0,offsetY:0},file:"02",name:"小泉マキ",
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
 groupId:"ayako",home:{img:"assets/home/tokoyo-ayako.png",scale:1,offsetX:0,offsetY:0},file:"03",name:"常世アヤコ",
 variants:[{
  id:"ayako",label:"MAIN",type:"1音階単独音",pitch:"A3",
  img:"images/常世アヤコ.png",audio:"audio/常世アヤコ.wav",zip:"download/常世アヤコ.zip",
  desc:'<p>かつて何でもできた姉が、突然すべてを失った。</p><p>その姿を前にして芽生えた庇護欲には、彼女自身も認めたがらない卑小な感情が入り混じっている。</p><p>姉がいつまでも何も知らず、無力なままでいてくれることを、心のどこかで望んでいる。</p><p>常世家の次女として、人目に触れることのない、後ろ暗い仕事を引き受けている。</p>',
  facts:[["身長","159 cm"],["年齢","14 歳"],["性別","女"],["好き","チョコレート"],["嫌い","猫"],["人称","ぼく / あんた"]],
  special:"[a R]　通常語尾<br>[a 吸R]　語尾ブレス（吸気）<br>[a 息R]　語尾ブレス（呼気）<br>[br]　閉口ブレス",
  staff:"キャラクターデザイン：quef<br>イラスト：SS<br>サンプリング：グロック19のマガジン装填音"
 }]
},
{
 groupId:"chiyo",home:{img:"assets/home/tokoyo-chiyo.png",scale:1,offsetX:0,offsetY:0},file:"04",name:"常世チヨ",
 variants:[{
  id:"chiyo",label:"MAIN",type:"1音階単独音",pitch:"A4",
  img:"images/常世チヨ.png",audio:"audio/常世チヨ.wav",zip:"download/常世チヨ.zip",
  desc:'<p>追い詰められた末に、彼女が選んだのは権力だった。</p><p>常世家の長女として、人々の前に立ち、誰もが羨むような華やかで正当な役目を担っている。</p><p>その輝かしい立場が、かつて何を犠牲にして手に入れたものなのか。今の彼女には、もうわからない。</p>',
  facts:[["身長","164 cm"],["年齢","?? 歳"],["性別","女"],["好き","ない"],["嫌い","ない"],["人称","わたし / きみ"]],
  special:"[a R]　通常語尾<br>[a 吸R]　語尾ブレス（吸気）<br>[a 息R]　語尾ブレス（呼気）<br>[br]　閉口ブレス",
  staff:"キャラクターデザイン：quef<br>原音設定：itsukiMNE<br>イラスト：SS<br>サンプリング：グロック19のマガジン装填音・猫が爪を研ぐ"
 }]
},
{
 groupId:"kiri",home:{img:"assets/home/tsukishiro-kiri.png",scale:1,offsetX:0,offsetY:0},file:"05",name:"月代キリ",
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

