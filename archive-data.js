const detailSpecial = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）<br>[a k]　VC";
const natsukawaStaff = "キャラクターデザイン：quef<br>原音設定：Natsukawa Sakuro<br>イラスト：SS";

const sahoCommon = {special:detailSpecial,staff:natsukawaStaff};

const makiSpecialBase = "[a R]　通常語尾<br>[a Rb]　語尾ブレス（吸気）<br>[a Rx]　語尾ブレス（呼気）<br>[br1～4]　閉口ブレス<br>[a・]　母音声門閉鎖（後）<br>[・あ]　母音声門閉鎖（前）";
const makiSilentConsonant = "[a K]　無声子音";

const kiriCommon = {
  special:detailSpecial,
  staff:natsukawaStaff
};

const groups = [
{
 groupId:"saho",file:"01",name:"足立サホ",
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
   special:`${makiSpecialBase}<br>[a k]　VC<br>${makiSilentConsonant}`,
   staff:natsukawaStaff
  },
  {
   id:"maki-cv",label:"無印",type:"6音階単独音 / CV",pitch:"A3 / C4 / D4 / E4 / F4 / G4",
   img:"images/小泉マキ_無印.png",audio:"audio/小泉マキ_無印.wav",zip:"download/小泉マキ_無印.zip",
   special:`${makiSpecialBase}<br>${makiSilentConsonant}`,
   staff:"キャラクターデザイン：quef<br>原音設定：肺叶<br>イラスト：SS"
  }
 ]
},
{
 groupId:"ayako",file:"03",name:"常世アヤコ",
 variants:[{
  id:"ayako",label:"無印",type:"1音階単独音",pitch:"A3",
  img:"images/常世アヤコ.png",audio:"audio/常世アヤコ.wav",zip:"download/常世アヤコ.zip",
  special:"[a R]　通常語尾<br>[a 吸R]　語尾ブレス（吸気）<br>[a 息R]　語尾ブレス（呼気）<br>[br]　閉口ブレス",
  staff:"キャラクターデザイン：quef<br>イラスト：SS<br>サンプリング：グロック19のマガジン装填音"
 }]
},
{
 groupId:"chiyo",file:"04",name:"常世チヨ",
 variants:[{
  id:"chiyo",label:"無印",type:"1音階単独音",pitch:"A4",
  img:"images/常世チヨ.png",audio:"audio/常世チヨ.wav",zip:"download/常世チヨ.zip",
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


window.ARCHIVE_GROUPS=groups;
