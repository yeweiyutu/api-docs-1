import{_ as i,c as l,b as e,d as t,e as a,a as o,o as c,r as n}from"./app.5ad0003f.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"test/Delegate.md"}'),r={name:"test/Delegate.md"},p=e("li",null,[e("p",null,[t("删除（也可以删除前三级）："),e("a",{href:"./../README.html"},"auto-mwapi-lib"),t(" / "),e("a",{href:"./../modules.html"},"Exports"),t(" / "),e("a",{href:"./../modules/Service.html"},"Service"),t(" /"),e("a",{href:"./../modules/Service.Service.html"},"Service"),t(" / MessageChannelService")])],-1),_=o("<li><p>删除 Author：<strong><code>Author</code></strong> zifei.wu</p></li><li><p>删除 Instance：<strong><code>Instance</code></strong>，同时删除构造函数</p></li><li><p>删除 Description：<strong><code>Description</code></strong></p></li><li><p>删除 Network Status 下的 usage：</p></li><li><p>precautions 转化为 block（非高优）：</p></li>",5),d=o('<div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>单例类，请使用 getInstance 获取对象。TS 端想要收到某消息并执行回调函数需要提前调用 registerAction 进行绑定。消息需要是 Json 格式的字符串并包含“action”字段否则无法被通道转发。在 PIE 下无法连接到 233、Web 端。如果游戏在后台收到消息，通道会将消息缓存并在游戏回到前台后一并发送。</p></div><ul><li><p>代码全部加 ts 用以识别</p></li><li><p>table 下的三级标题转为四级，收缩一下空间，同时 constructor 后加构造函数、其他后加 description；</p></li><li><p>删除：## Constructors</p></li><li><p>删除定义：#### Defined inService/index.d.ts:330</p></li><li><p>删除： 无&amp;上面的@XXX</p></li></ul>',2);function u(m,g,h,S,T,f){const s=n("Badge");return c(),l("div",null,[e("ul",null,[p,e("li",null,[e("p",null,[t("一级标题自动生成 badge（非高优），用来区分不同类型："),a(s,{type:"tip",text:"^Class"})])]),_]),d])}const D=i(r,[["render",u]]);export{A as __pageData,D as default};
