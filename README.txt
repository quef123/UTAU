HerdMentality — 全人物统一详情排版（更新）
====================================

本版把足立サホ的参考详情页样式应用到全部五位角色，保留原有音源数据和其他页面功能。
改动清单与测试结果请看 DETAILS_UNIFIED_CN.md。

HerdMentality — 友情链接缩小 / ABOUT 移除 / 保守代码清理
=============================================

基于上一版含 GUN / MAGAZINE / LINKS 的完整网站源码。
本次仅等比缩小友情链接、移除 ABOUT 与失效代码；原有音源资料和条款正文保持原样。

一、如何使用
------------
直接在浏览器打开 index.html 即可预览网页。
部署时把整个压缩包内容（包括 terms.html、CSS、JS 和 images/links/）放在网站根目录，不要只上传 index.html。
保留以下素材子文件夹（可以先为空）：

  images/    人物立绘 PNG
  audio/     试听 WAV
  download/  音源 ZIP

原 ZIP 并未包含以上三类素材，因此这里也没有伪造素材或更改文件名。
如页面中图片留白、播放器无声音或本地 ZIP 链接找不到文件，请按下文补充素材。

二、素材路径（需要区分大小写）
--------------------------
01 足立サホ
  無印:    images/足立サホ_無印.png       audio/足立サホ_無印.wav        download/足立サホ_無印.zip
  Coffee:  images/足立サホ_Coffee.png   audio/足立サホ_Coffee.wav      download/足立サホ_Coffee.zip
  Cracker: images/足立サホ_Cracker.png  audio/足立サホ_Cracker.wav     ※ Google Drive 下载
  Caramel: images/足立サホ_Caramel.png  audio/足立サホ_Caramel.wav     download/足立サホ_Caramel.zip

02 小泉マキ
  Seasalt: images/小泉マキ_Seasalt.png  audio/小泉マキ_Seasalt.wav    ※ Google Drive 下载
  無印:    images/小泉マキ_無印.png       audio/小泉マキ_無印.wav         download/小泉マキ_無印.zip

03 常世アヤコ
  images/常世アヤコ.png               audio/常世アヤコ.wav           download/常世アヤコ.zip

04 常世チヨ
  images/常世チヨ.png                 audio/常世チヨ.wav             download/常世チヨ.zip

05 月代キリ
  無印:    images/月代キリ_無印.png       audio/月代キリ_無印.wav         download/月代キリ_無印.zip
  Vintage: images/月代キリ_Vintage.png  audio/月代キリ_Vintage.wav   download/月代キリ_Vintage.zip

Cracker 与 Seasalt 的外部 Google Drive 地址直接保留在 script.js 的 zip 字段。
下载地址并未在本次离线代码审查中向外部服务实测。

三、源码维护
------------
* style.css 是主体样式；terms.css、friend-links.css 是相互独立的附加样式。
* script.js 管理原有角色和聊天内容；friend-links-data.js / friend-links.js 管理隐藏友情链接。利用規約正文在 terms.html。
* index.html 是主页和人物详情弹窗的容器；terms.html 是完整独立利用規約页面。
* HerdMentality_chat_record_v2.html 是原本单独保存的聊天记录页面；
  它不是主页的依赖，内部自带旧版样式，因此没有在本次进行设计改造。
* 不需要安装 Node、框架、打包器或额外的字体。

四、本次代码调整
----------------
详细问题与修改记录见 CHANGES_AND_AUDIT_CN.md。
