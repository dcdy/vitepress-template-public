import{_ as l,o as e,c as t,a9 as n,j as s,a as i}from"./chunks/framework.BCtciejH.js";const D=JSON.parse('{"title":"布局插槽","description":"","frontmatter":{},"headers":[],"relativePath":"guide/layout-slot.md","filePath":"guide/layout-slot.md","lastUpdated":1733896920000}'),p={name:"guide/layout-slot.md"};function h(k,a,r,d,o,g){return e(),t("div",null,a[0]||(a[0]=[n(`<h1 id="布局插槽" tabindex="-1">布局插槽 <a class="header-anchor" href="#布局插槽" aria-label="Permalink to &quot;布局插槽&quot;">​</a></h1><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>默认主题的 <code>&lt;Layout/&gt; </code>组件有一些插槽，能够被用来在页面的特定位置注入内容。下面这个例子展示了将一个组件注入到 outline 之前：</p><details class="details custom-block"><summary>点击查看官方插槽示例</summary><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/theme/index.js">.vitepress/theme/index.js</span></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes OneLight dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vitepress/theme&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> MyLayout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;./MyLayout.vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C586C0;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">	extends</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">	// 使用注入插槽的包装组件覆盖 Layout</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">	Layout</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> MyLayout</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/theme/MyLayout.vue">.vitepress/theme/MyLayout.vue</span></div><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes OneLight dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">&lt;!--.vitepress/theme/MyLayout.vue--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">script</span><span style="--shiki-light:#986801;--shiki-dark:#9CDCFE;"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vitepress/theme&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#4FC1FF;">Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> } </span><span style="--shiki-light:#0184BC;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">		&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> #</span><span style="--shiki-light:#986801;--shiki-dark:#9CDCFE;">aside-outline-before</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> My custom sidebar top content </span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">	&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#569CD6;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#808080;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div><p>也可以使用渲染函数。</p><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/theme/index.js">.vitepress/theme/index.js</span></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes OneLight dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vitepress/theme&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> MyComponent</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;./MyComponent.vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C586C0;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">	extends</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;">	Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">		return</span><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#9CDCFE;">DefaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#986801;--shiki-dark:#569CD6;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">, {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;">			&#39;aside-outline-before&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">		});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div></details><h2 id="可用插槽名称" tabindex="-1">可用插槽名称 <a class="header-anchor" href="#可用插槽名称" aria-label="Permalink to &quot;可用插槽名称&quot;">​</a></h2><p>默认主题布局的全部可用插槽如下：</p>`,6),s("ul",null,[s("li",null,[s("p",null,[i("当"),s("code",null,"layout: 'doc'"),i("(默认) 在 frontmatter 中被启用时：")]),s("ul",null,[s("li",null,[s("code",null,"doc-top")]),s("li",null,[s("code",null,"doc-bottom")]),s("li",null,[s("code",null,"doc-footer-before")]),s("li",null,[s("code",null,"doc-before")]),s("li",null,[s("code",null,"doc-after")]),s("li",null,[s("code",null,"sidebar-nav-before")]),s("li",null,[s("code",null,"sidebar-nav-after")]),s("li",null,[s("code",null,"aside-top")]),s("li",null,[s("code",null,"aside-bottom")]),s("li",null,[s("code",null,"aside-outline-before")]),s("li",null,[s("code",null,"aside-outline-after")]),s("li",null,[s("code",null,"aside-ads-before")]),s("li",null,[s("code",null,"aside-ads-after")])]),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20241211111902263.png",alt:"image-20241211111902263",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])])]),s("li",null,[s("p",null,[i("当"),s("code",null,"layout: 'home'"),i("在 frontmatter 中被启用时:")]),s("ul",null,[s("li",null,[s("code",null,"home-hero-before")]),s("li",null,[s("code",null,"home-hero-info-before")]),s("li",null,[s("code",null,"home-hero-info")]),s("li",null,[s("code",null,"home-hero-info-after")]),s("li",null,[s("code",null,"home-hero-actions-after")]),s("li",null,[s("code",null,"home-hero-image")]),s("li",null,[s("code",null,"home-hero-after")]),s("li",null,[s("code",null,"home-features-before")]),s("li",null,[s("code",null,"home-features-after")])]),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20241211111952957.png",alt:"image-20241211111952957",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])])]),s("li",null,[s("p",null,[i("当"),s("code",null,"layout: 'page'"),i("在 frontmatter 中被启用时:")]),s("ul",null,[s("li",null,[s("code",null,"page-top")]),s("li",null,[s("code",null,"page-bottom")])]),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20241211112017569.png",alt:"image-20241211112017569",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])])]),s("li",null,[s("p",null,"当未找到页面 (404) 时:"),s("ul",null,[s("li",null,[s("code",null,"not-found")])]),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20241211112041979.png",alt:"image-20241211112041979",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])])]),s("li",null,[s("p",null,"所有布局均可使用"),s("ul",null,[s("li",null,[s("code",null,"layout-top")]),s("li",null,[s("code",null,"layout-bottom")]),s("li",null,[s("code",null,"nav-bar-title-before")]),s("li",null,[s("code",null,"nav-bar-title-after")]),s("li",null,[s("code",null,"nav-bar-content-before")]),s("li",null,[s("code",null,"nav-bar-content-after")]),s("li",null,[s("code",null,"nav-screen-content-before")]),s("li",null,[s("code",null,"nav-screen-content-after")])]),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20241211112124449.png",alt:"image-20241211112124449",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])])])],-1),n(`<h2 id="重写内部组件" tabindex="-1">重写内部组件 <a class="header-anchor" href="#重写内部组件" aria-label="Permalink to &quot;重写内部组件&quot;">​</a></h2><p>可以使用 Vite 的 <a href="https://vitejs.dev/config/shared-options.html#resolve-alias" target="_blank" rel="noreferrer">aliases</a> 来用自定义组件替换默认主题的组件：</p><p>想要了解组件的确切名称请参考官方<a href="https://github.com/vuejs/vitepress/tree/main/src/client/theme-default/components" target="_blank" rel="noreferrer">源代码</a>。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes OneLight dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">fileURLToPath</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">URL</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;node:url&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">defineConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vitepress&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C586C0;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;"> defineConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">	vite</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">		resolve</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">			alias</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">				{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">					find</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#D16969;"> /</span><span style="--shiki-light:#A626A4;--shiki-dark:#DCDCAA;">^</span><span style="--shiki-light:#986801;--shiki-dark:#D16969;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#D7BA7D;">*\\/</span><span style="--shiki-light:#0184BC;--shiki-dark:#D16969;">VPNavBar</span><span style="--shiki-light:#0184BC;--shiki-dark:#D7BA7D;">\\.</span><span style="--shiki-light:#0184BC;--shiki-dark:#D16969;">vue</span><span style="--shiki-light:#A626A4;--shiki-dark:#DCDCAA;">$</span><span style="--shiki-light:#0184BC;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">					replacement</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;"> fileURLToPath</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#569CD6;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;"> URL</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;">&#39;./components/CustomNavBar.vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#9CDCFE;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">)),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">				},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">			],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">		},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="注册全局组件" tabindex="-1">注册全局组件 <a class="header-anchor" href="#注册全局组件" aria-label="Permalink to &quot;注册全局组件&quot;">​</a></h2><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="index.ts">index.ts</span></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes OneLight dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// .vitepress/theme/index.ts</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">Theme</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 引入全局组件文件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> MyGlobalComponent</span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;"> &#39;./components/MyGlobalComponent.vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C586C0;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">  extends</span><span style="--shiki-light:#0184BC;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;"> DefaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;">  enhanceApp</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">({ </span><span style="--shiki-light:#383A42;--shiki-dark:#9CDCFE;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // 注册自定义全局组件MyGlobalComponent</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#9CDCFE;">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#DCDCAA;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#CE9178;">&#39;MyGlobalComponent&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#9CDCFE;">MyGlobalComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D4D4D4;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C586C0;">satisfies</span><span style="--shiki-light:#C18401;--shiki-dark:#4EC9B0;"> Theme</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div>`,6)]))}const u=l(p,[["render",h]]);export{D as __pageData,u as default};