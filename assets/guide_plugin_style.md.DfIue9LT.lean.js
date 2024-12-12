import{_ as l,c as p,a5 as a,j as s,o as e}from"./chunks/framework.DSJegSjb.js";const A=JSON.parse('{"title":"样式美化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin/style.md","filePath":"guide/plugin/style.md","lastUpdated":1733910197000}'),o={name:"guide/plugin/style.md"};function r(c,n,t,B,i,b){return e(),p("div",null,n[0]||(n[0]=[a(`<h1 id="样式美化" tabindex="-1">样式美化 <a class="header-anchor" href="#样式美化" aria-label="Permalink to &quot;样式美化&quot;">​</a></h1><div class="caution custom-block github-alert"><p class="custom-block-title">注意</p><p></p><p>所有新增的<code>css</code>样式文件要放在<code>custom.css</code>文件下方</p></div><h2 id="unocss-同款首页动态颜色" tabindex="-1">UnoCSS 同款首页动态颜色 <a class="header-anchor" href="#unocss-同款首页动态颜色" aria-label="Permalink to &quot;UnoCSS 同款首页动态颜色&quot;">​</a></h2><p><code>theme</code>文件夹下新建<code>rainbow.css</code> 文件</p><details class="details custom-block"><summary>点击查看<code>rainbow.css</code> 文件内容</summary><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="rainbow.css">rainbow.css</span></div><div class="language-css line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* 彩虹动画 */</span></span>
<span class="line"><span style="color:#C678DD;">@keyframes</span><span style="color:#E06C75;font-style:italic;"> rainbow</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">	0% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009ff7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#c76dd1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	1.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009dfa</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#cf69c9</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	2.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009bfc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#d566c2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	3.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0098fd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#dc63ba</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0096fd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e160b3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	6.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0093fd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e65eab</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	7.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#2e90fc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e95ca2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	8.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4d8dfa</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ed5a9a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	10% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#638af8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ef5992</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	11.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#7587f5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f15989</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	12.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#8583f1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f25981</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	13.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#9280ed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f25a79</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	15% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#9f7ce9</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f25c71</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	16.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#aa78e3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f15e69</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	17.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#b574dd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ef6061</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	18.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#be71d7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ed635a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	20% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#c76dd1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#eb6552</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	21.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#cf69c9</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e8694b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	22.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#d566c2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e46c44</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	23.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#dc63ba</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e06f3d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e160b3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#db7336</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	26.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e65eab</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#d77630</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	27.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e95ca2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#d17a2a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	28.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ed5a9a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#cc7d24</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	30% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ef5992</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#c6811e</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	31.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f15989</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#bf8418</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	32.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f25981</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#b98713</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	33.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f25a79</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#b28a0f</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	35% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f25c71</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ab8d0c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	36.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f15e69</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#a3900b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	37.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ef6061</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#9c920d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	38.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ed635a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#949510</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	40% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#eb6552</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#8b9715</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	41.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e8694b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#83991b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	42.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e46c44</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#7a9b21</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	43.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#e06f3d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#719d27</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	45% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#db7336</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#679e2e</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	46.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#d77630</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#5da035</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	47.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#d17a2a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#51a13c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	48.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#cc7d24</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#44a244</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	50% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#c6811e</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#34a44b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	51.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#bf8418</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#1ba553</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	52.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#b98713</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a65b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	53.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#b28a0f</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a663</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	55% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ab8d0c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a76c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	56.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#a3900b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a874</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	57.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#9c920d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a87d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	58.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#949510</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a985</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	60% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#8b9715</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a98e</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	61.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#83991b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a996</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	62.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#7a9b21</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a99f</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	63.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#719d27</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9a7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	65% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#679e2e</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9b0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	66.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#5da035</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9b8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	67.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#51a13c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9c0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	68.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#44a244</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a8c7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	70% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#34a44b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a8cf</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	71.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#1ba553</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a7d5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	72.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a65b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a6dc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	73.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a663</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a6e2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a76c</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a4e7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	76.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a874</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a3ec</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	77.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a87d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a2f1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	78.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a985</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a0f4</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	80% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a98e</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009ff7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	81.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a996</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009dfa</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	82.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a99f</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009bfc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	83.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9a7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0098fd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	85% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9b0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0096fd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	86.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9b8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#0093fd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	87.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a9c0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#2e90fc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	88.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a8c7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4d8dfa</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	90% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a8cf</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#638af8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	91.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a7d5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#7587f5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	92.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a6dc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#8583f1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	93.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a6e2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#9280ed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	95% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a4e7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#9f7ce9</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	96.25% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a3ec</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#aa78e3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	97.5% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a2f1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#b574dd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	98.75% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#00a0f4</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#be71d7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	100% {</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009ff7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">		--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#c76dd1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 彩虹色卡 */</span></span>
<span class="line"><span style="color:#56B6C2;">:root</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;">.dark</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">	--rainbow-prev</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#009ff7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">	--rainbow-next</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#c76dd1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	animation: rainbow </span><span style="color:#D19A66;">8</span><span style="color:#E06C75;">s</span><span style="color:#D19A66;"> linear</span><span style="color:#D19A66;"> infinite</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">:root</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* hero标题渐变色 */</span></span>
<span class="line"><span style="color:#E06C75;">	--vp-home-hero-name-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">	--vp-home-hero-name-background</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">-webkit-linear-gradient</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">120</span><span style="color:#E06C75;">deg</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">var</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">--rainbow-prev</span><span style="color:#ABB2BF;">) </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">var</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">--rainbow-next</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/*hero logo背景渐变色 */</span></span>
<span class="line"><span style="color:#E06C75;">	--vp-home-hero-image-background-image</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">linear-gradient</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">-45</span><span style="color:#E06C75;">deg</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">var</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">--rainbow-prev</span><span style="color:#ABB2BF;">) </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">var</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">--rainbow-next</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E06C75;">	--vp-home-hero-image-filter</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (min-width: </span><span style="color:#D19A66;">640</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#56B6C2;">	:root</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">		--vp-home-hero-image-filter</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">120</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (min-width: </span><span style="color:#D19A66;">960</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#56B6C2;">	:root</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">		--vp-home-hero-image-filter</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">120</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Safari has a very bad performance on gradient and filter */</span></span>
<span class="line"><span style="color:#D19A66;">.browser-safari</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;">.browser-firefox</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">	--vp-home-hero-image-background-image</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">	--vp-home-hero-image-filter</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br></div></div></div></details><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="index.ts">index.ts</span></div><div class="language-ts line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#98C379;"> &#39;./rainbow.css&#39;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="导航栏毛玻璃" tabindex="-1">导航栏毛玻璃 <a class="header-anchor" href="#导航栏毛玻璃" aria-label="Permalink to &quot;导航栏毛玻璃&quot;">​</a></h2><p><code>theme</code>文件夹下新建<code>blur.css</code> 文件</p><details class="details custom-block"><summary>点击查看<code>blur.css</code> 文件内容</summary><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="blur.css">blur.css</span></div><div class="language-css line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* .vitepress\\theme\\style\\blur.css */</span></span>
<span class="line"><span style="color:#56B6C2;">:root</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 首页下滑后导航透明 */</span></span>
<span class="line"><span style="color:#ABB2BF;">	.VPNavBar:not(.has-sidebar):not(.home.</span><span style="color:#D19A66;">top</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		background-color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		backdrop-filter: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 搜索框透明 */</span></span>
<span class="line"><span style="color:#D19A66;">	.DocSearch-Button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		background-color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		backdrop-filter: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* Feature透明 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPFeature</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		border: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		box-shadow: </span><span style="color:#D19A66;">0</span><span style="color:#D19A66;"> 10</span><span style="color:#E06C75;">px</span><span style="color:#D19A66;"> 30</span><span style="color:#E06C75;">px</span><span style="color:#D19A66;"> 0</span><span style="color:#56B6C2;"> rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#D19A66;"> 0</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;"> / </span><span style="color:#D19A66;">15</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		background-color: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 文档页侧边栏顶部透明 */</span></span>
<span class="line"><span style="color:#D19A66;">	.curtain</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		background-color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		backdrop-filter: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">	@media</span><span style="color:#ABB2BF;"> (min-width: </span><span style="color:#D19A66;">960</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		/* 文档页导航中间透明 */</span></span>
<span class="line"><span style="color:#D19A66;">		.VPNavBar</span><span style="color:#56B6C2;">:not</span><span style="color:#C678DD;">(</span><span style="color:#D19A66;">.home.top</span><span style="color:#C678DD;">) </span><span style="color:#D19A66;">.content-body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">			background-color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">			backdrop-filter: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 移动端大纲栏透明 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPLocalNav</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		background-color: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		backdrop-filter: </span><span style="color:#56B6C2;">blur</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></div></details><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="index.ts">index.ts</span></div><div class="language-ts line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#98C379;"> &#39;./blur.css&#39;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="隐藏横条" tabindex="-1">隐藏横条 <a class="header-anchor" href="#隐藏横条" aria-label="Permalink to &quot;隐藏横条&quot;">​</a></h2><p>隐藏文档中每个标题内容之间的横条 <code>theme</code>文件夹下新建<code>hidden-line.css</code> 文件</p><details class="details custom-block"><summary>点击查看<code>hidden-line.css</code> 文件内容</summary><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="hidden-line.css">hidden-line.css</span></div><div class="language-css line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* .vitepress\\theme\\style\\hidden.css */</span></span>
<span class="line"><span style="color:#56B6C2;">:root</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 文档页Logo出文字下横条 */</span></span>
<span class="line"><span style="color:#ABB2BF;">	@media (min-width: </span><span style="color:#D19A66;">960</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		.VPNavBarTitle.has-sidebar .title {</span></span>
<span class="line"><span style="color:#ABB2BF;">			border-bottom-color: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 页脚横条隐藏 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPFooter</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		border-top: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 手机端菜单栏顶部横条隐藏 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPNavBar.screen-open</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		border-bottom: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 手机端菜单栏菜单分割线隐藏 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPNavScreenMenuLink</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		border-bottom: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 手机端菜单组隐藏 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPNavScreenMenuGroup</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		border-bottom: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/* 手机端大纲栏横条隐藏 */</span></span>
<span class="line"><span style="color:#D19A66;">	.VPLocalNav</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		border-bottom: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 导航栏下划线隐藏 */</span></span>
<span class="line"><span style="color:#D19A66;">.divider</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">	display: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></div></details><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="index.ts">index.ts</span></div><div class="language-ts line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#98C379;"> &#39;./hidden-line.css&#39;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="视图过渡" tabindex="-1">视图过渡 <a class="header-anchor" href="#视图过渡" aria-label="Permalink to &quot;视图过渡&quot;">​</a></h2>`,15),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://vitepress.dev/appearance-toggle-transition.webp",alt:"试图过渡",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])],-1),a(`<ol><li><p><code>theme</code>文件夹下新建 <code>view-transition.ts</code>文件</p><details class="details custom-block"><summary>点击查看 <code>view-transition.ts</code>文件内容</summary><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="view-transition.ts">view-transition.ts</span></div><div class="language-ts line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">nextTick</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useData</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;vitepress&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> function</span><span style="color:#61AFEF;"> useAppearanceTransition</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#C678DD;">	const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">isDark</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#61AFEF;"> useData</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	// 判断是否支持 View Transition 和动画效果</span></span>
<span class="line"><span style="color:#C678DD;">	const</span><span style="color:#61AFEF;"> enableTransitions</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#98C379;">		&#39;startViewTransition&#39;</span><span style="color:#C678DD;"> in</span><span style="color:#E06C75;"> document</span><span style="color:#56B6C2;"> &amp;&amp;</span><span style="color:#E5C07B;"> window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">matchMedia</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;(prefers-reduced-motion: no-preference)&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">matches</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	// 提供 toggle-appearance 方法，切换主题</span></span>
<span class="line"><span style="color:#C678DD;">	const</span><span style="color:#61AFEF;"> toggleAppearance</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> async</span><span style="color:#ABB2BF;"> ({ </span><span style="color:#E06C75;">clientX</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">clientY</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;"> }: </span><span style="color:#E5C07B;">MouseEvent</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">		if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#61AFEF;">enableTransitions</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#E5C07B;">			isDark</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;"> =</span><span style="color:#56B6C2;"> !</span><span style="color:#E5C07B;">isDark</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">			return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">		const</span><span style="color:#E5C07B;"> clipPath</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#98C379;">			\`circle(0px at </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">x</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">px </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">y</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">px)\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">			\`circle(</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">hypot</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">max</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">innerWidth</span><span style="color:#56B6C2;"> -</span><span style="color:#E06C75;"> x</span><span style="color:#ABB2BF;">), </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">max</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">innerHeight</span><span style="color:#56B6C2;"> -</span><span style="color:#E06C75;"> y</span><span style="color:#ABB2BF;">))</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">px at </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">x</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">px </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">y</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">px)\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">		await</span><span style="color:#E5C07B;"> document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">startViewTransition</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">			isDark</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;"> =</span><span style="color:#56B6C2;"> !</span><span style="color:#E5C07B;">isDark</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">			await</span><span style="color:#61AFEF;"> nextTick</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		}).</span><span style="color:#E06C75;">ready</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">		document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">documentElement</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">animate</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">			{ </span><span style="color:#E06C75;">clipPath</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">isDark</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#C678DD;"> ?</span><span style="color:#E5C07B;"> clipPath</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reverse</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">:</span><span style="color:#E06C75;"> clipPath</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">			{</span></span>
<span class="line"><span style="color:#E06C75;">				duration</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">300</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">				easing</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;ease-in&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">				pseudoElement</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`::view-transition-</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">isDark</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#C678DD;"> ?</span><span style="color:#98C379;"> &#39;old&#39;</span><span style="color:#C678DD;"> :</span><span style="color:#98C379;"> &#39;new&#39;</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">(root)\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		);</span></span>
<span class="line"><span style="color:#ABB2BF;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">	return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">		toggleAppearance</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	};</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></div></details></li><li><p><code>theme</code>文件夹下新建 <code>view-transition.css</code>文件</p><details class="details custom-block"><summary>点击查看 <code>view-transition.css</code>文件内容</summary><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="view-transition.css">view-transition.css</span></div><div class="language-css line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">::view-transition-old(root</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#C678DD;">::view-transition-new(root</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	animation: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	mix-blend-mode: </span><span style="color:#D19A66;">normal</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">::view-transition-old(root</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#D19A66;">.dark</span><span style="color:#C678DD;">::view-transition-new(root</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	z-index: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">::view-transition-new(root</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#D19A66;">.dark</span><span style="color:#C678DD;">::view-transition-old(root</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	z-index: </span><span style="color:#D19A66;">9999</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.VPSwitchAppearance</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">	width: </span><span style="color:#D19A66;">22</span><span style="color:#E06C75;">px</span><span style="color:#C678DD;"> !important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.VPSwitchAppearance</span><span style="color:#D19A66;"> .check</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">	transform: </span><span style="color:#D19A66;">none</span><span style="color:#C678DD;"> !important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div></details></li><li><p><code>CustomLayoutSlot.vue</code>文件中引入 <code>view-transition.ts</code>和 <code>view-transition.css</code></p><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="CustomLayoutSlot.vue">CustomLayoutSlot.vue</span></div><div class="language-vue line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#D19A66;"> setup</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// ...其他模块的导入内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// TAG引用切换模式时的视图过渡效果👇</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">provide</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useAppearanceTransition</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;../view-transition.ts&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用自定义的 hook</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">toggleAppearance</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#61AFEF;"> useAppearanceTransition</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 提供 toggle-appearance 方法</span></span>
<span class="line"><span style="color:#61AFEF;">provide</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;toggle-appearance&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">toggleAppearance</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// TAG引用切换模式时的视图过渡效果👆</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#D19A66;"> lang</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;scss&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 引用切换模式时的视图过渡效果 */</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#56B6C2;"> url</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">../view-transition.css</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* ...其他内容 */</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div></li></ol>`,1)]))}const F=l(o,[["render",r]]);export{A as __pageData,F as default};
