# HerdMentality — 全人物详情页统一版

本版基于 `HerdMentality_Compact_EasterEgg_NoAbout_Clean.zip`，只修正原来只有足立サホ使用参考版详情布局的问题。

## 页面变化

- 五位角色现在共用同一套参考版详情模板：顶部可选的 YouTube 配布视频、左侧透明 PNG 立绘、右侧角色姓名／罗马字／原有故事／音源版本／音阶／细线播放器／文字下载，底部低调 STAFF。
- 足立サホ：無印 / Coffee / Cracker / Caramel。
- 小泉マキ：Seasalt / 無印。两个版本的 STAFF 署名独立保留。
- 常世アヤコ、常世チヨ：沿用同一排版，单音源角色不显示多余版本选择按钮。
- 月代キリ：無印 / Vintage。
- 新增的罗马字显示：KOIZUMI MAKI、TOKOYO AYAKO、TOKOYO CHIYO、TSUKISHIRO KIRI；足立サホ仍为 ADACHI SAHO。

## 保留不变

- 原有所有角色姓名、简介、年龄／身高等 PROFILE、特殊音素、STAFF 文字、音频路径与下载路径均未修改。
- `terms.html` 和 `terms.css` 一字不动；首页 VOICEBANK 列表、UPDATE、聊天、footer 友情链接彩蛋代码与图片等均未修改。
- 原有首页仍通过点击角色条目打开全屏详情，按 Esc、左上返回可退出。音源不必改为单独页面。
- 各角色的 `video` 属性未配置时隐藏 YouTube 区域。以后可在 `script.js` 的角色组或单个版本对象中填写有效的 YouTube URL。

## 代码说明

已把之前仅用于足立サホ的布局变为通用组件，并移除了不再调用的旧式详情页 DOM、逻辑及其独有 CSS；不影响其他网页功能。通用模板 DOM 样式名以 `detail-` 为前缀。

当前压缩包依然**不包含角色原始立绘、WAV 与本地下载 ZIP**，因此没有替换或伪造正式素材。按照 README.txt 的原路径补充即可。没有配置 YouTube 时不显示空播放器。

## 验证

- JavaScript 语法校验通过。
- 五位角色、10 个音源版本的数据对应及切换检查通过。
- 浏览器宽度 1690／1440／768／390／320px，未出现横向溢出和脚本异常。
- 使用临时 WAV 在浏览器测试播放、暂停、时长与进度跳转，测试音频未加入 ZIP。
- 已检查纯文本与外部下载地址、返回、Esc、人物 STAFF、Profile / Special Phonemes 展开、视频显示／隐藏逻辑。
- 原版没有提供实际立绘、音频和下载 ZIP，所以**未对真实媒体播放和下载成功率做最终验证**。

`previews/` 中是没有装入正式立绘的排版截图。实际放入透明 PNG 后，左侧留白会由人物形象填充。
