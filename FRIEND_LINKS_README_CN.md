# HerdMentality — 隐藏友情链接彩蛋

## 本次改动

- 首页靠近页脚右下角添加枪 / 弹匣 / 子弹互动结构；不固定于浏览器窗口，不新增普通友情链接页面。
- 直接使用你上传的 `gun.png`、`magazine.png`、`bullet.png` 三张透明图片。原始图片像素未更改；通过 CSS 等比缩放展示。
- 只有一条链接：Galère → https://shiyuxxaa.wixstudio.com/utau。未添加虚构链接。
- 电脑：悬停手枪展开，鼠标移出 200ms 收起；点击子弹选中，双击打开链接。
- 触屏：点击手枪展开，点击子弹打开；键盘：Tab 到手枪，再 Tab 到子弹，Enter / Space 打开。
- 动画 310ms ease-out，支持 `prefers-reduced-motion`。
- `terms.html` 中所有 `Quef Voicebank Archive`（包括大写版本）全部替换为 `HerdMentality`，其他条款措辞不变。

## 编辑链接

打开 `friend-links-data.js` 修改数组 `friendLinks`：

```js
const friendLinks = [
  {
    id: 'galere',
    name: 'Galère',
    url: 'https://shiyuxxaa.wixstudio.com/utau',
    icon: 'images/links/bullet.png'
  }
];
```

以后每增加一条在数组中增加一项即可；ID 不可重复，URL 要使用 https。显示名称只在悬停、选中或键盘聚焦时显示。

## 文件与部署

解压后打开 `index.html`，向下滚动至页面末尾。子弹图片路径 `images/links/bullet.png`；手枪 `images/links/gun.png`；弹匣 `images/links/magazine.png`。使用相对路径，因此也适用于 GitHub Pages 的子目录部署。

本轮已精简 `script.js` 中 ABOUT 专用代码及 `style.css` 中 ABOUT 专用样式；`terms.css`、角色介绍、音源和下载路径均未修改。站点原有立绘、WAV 和下载音源 ZIP 没有随之前的项目包提供；此处没有伪造这些素材。

`atlas-data.js`、`atlas.css` 和 `atlas.js` 是先前独立人物关系档案样板的原样备份，本轮不修改、不启用（现有主页仍沿用原页面的 VOICEBANK 列表）。

## 本轮尺寸调整

- 桌面端三张图片与交互结构作为一个整体按 80% 显示，手机为约 75–78%。原始 PNG 文件像素不变。
- 同步缩减装置的页面占位高度，手机端保留更大的透明点击区域，以免缩小后难以触摸。
- ABOUT 及其旧导航被移除。完整代码更改请参考 `CHANGES_AND_AUDIT_CN.md`。
