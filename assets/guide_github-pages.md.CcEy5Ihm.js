import{_ as l,c as p,a5 as e,j as s,a,o}from"./chunks/framework.DSJegSjb.js";const m=JSON.parse('{"title":"部署到 GitHub Pages","description":"","frontmatter":{},"headers":[],"relativePath":"guide/github-pages.md","filePath":"guide/github-pages.md","lastUpdated":1733202666000}'),r={name:"guide/github-pages.md"};function c(t,n,i,b,y,u){return o(),p("div",null,n[0]||(n[0]=[e(`<h1 id="部署到-github-pages" tabindex="-1">部署到 GitHub Pages <a class="header-anchor" href="#部署到-github-pages" aria-label="Permalink to &quot;部署到 GitHub Pages&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">参考链接</p><p><a href="https://vitepress.dev/zh/guide/deploy#github-pages" target="_blank" rel="noreferrer">https://vitepress.dev/zh/guide/deploy#github-pages</a><a href="https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path" target="_blank" rel="noreferrer">https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path</a></p></div><h2 id="_1-新建-github-workflows-deploy-yml-文件" tabindex="-1">1.新建.github/workflows/deploy.yml 文件 <a class="header-anchor" href="#_1-新建-github-workflows-deploy-yml-文件" aria-label="Permalink to &quot;1.新建.github/workflows/deploy.yml 文件&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">yml</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Deploy Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 触发条件，push到main分支或者pull request到main分支</span></span>
<span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    push</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">        branches</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">main</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;">    pull_request</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">        branches</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">main</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 支持手动在工作流上触发</span></span>
<span class="line"><span style="color:#E06C75;">    workflow_dispatch</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置时区</span></span>
<span class="line"><span style="color:#E06C75;">env</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    TZ</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Asia/Shanghai</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 权限设置</span></span>
<span class="line"><span style="color:#E06C75;">permissions</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 允许读取仓库内容的权限。</span></span>
<span class="line"><span style="color:#E06C75;">    contents</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">read</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 允许写入 GitHub Pages 的权限。</span></span>
<span class="line"><span style="color:#E06C75;">    pages</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">write</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 允许写入 id-token 的权限。</span></span>
<span class="line"><span style="color:#E06C75;">    id-token</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">write</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 并发控制配置</span></span>
<span class="line"><span style="color:#E06C75;">concurrency</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    group</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pages</span></span>
<span class="line"><span style="color:#E06C75;">    cancel-in-progress</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 定义执行任务</span></span>
<span class="line"><span style="color:#E06C75;">jobs</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 构建任务</span></span>
<span class="line"><span style="color:#E06C75;">    build</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">        runs-on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        # node v20 运行</span></span>
<span class="line"><span style="color:#E06C75;">        strategy</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">            matrix</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">                node-version</span><span style="color:#ABB2BF;">: [</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">        steps</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            # 拉取代码</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Checkout</span></span>
<span class="line"><span style="color:#E06C75;">              uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E06C75;">              with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                  # 保留 Git 信息</span></span>
<span class="line"><span style="color:#E06C75;">                  fetch-depth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            # 设置使用 Node.js 版本</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Use Node.js \${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#E06C75;">              uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E06C75;">              with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">                  node-version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ matrix.node-version }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            # 使用 最新的 PNPM</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            # 你也可以指定为具体的版本</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#E06C75;">              name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Install pnpm</span></span>
<span class="line"><span style="color:#E06C75;">              with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">                  version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">latest</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                  # version: 9</span></span>
<span class="line"><span style="color:#E06C75;">                  run_install</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">              # 安装依赖</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Install dependencies</span></span>
<span class="line"><span style="color:#E06C75;">              run</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pnpm install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">              # 构建项目</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Build blog project</span></span>
<span class="line"><span style="color:#E06C75;">              run</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">|</span></span>
<span class="line"><span style="color:#98C379;">                  echo \${{ github.workspace }}</span></span>
<span class="line"><span style="color:#98C379;">                  pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">              # 资源拷贝</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Build with Jekyll</span></span>
<span class="line"><span style="color:#E06C75;">              uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/jekyll-build-pages@v1</span></span>
<span class="line"><span style="color:#E06C75;">              with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">                  source</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">./docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#E06C75;">                  destination</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">./_site</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">              # 上传 _site 的资源，用于后续部署</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Upload artifact</span></span>
<span class="line"><span style="color:#E06C75;">              uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/upload-pages-artifact@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 部署任务</span></span>
<span class="line"><span style="color:#E06C75;">    deploy</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">        environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">            name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">github-pages</span></span>
<span class="line"><span style="color:#E06C75;">            url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#E06C75;">        runs-on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E06C75;">        needs</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">build</span></span>
<span class="line"><span style="color:#E06C75;">        steps</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">            - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#E06C75;">              id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">deployment</span></span>
<span class="line"><span style="color:#E06C75;">              uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/deploy-pages@v4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br></div></div><h2 id="_2-config-mts-文件内添加-base-指定项目名" tabindex="-1">2.config.mts 文件内添加 base 指定项目名 <a class="header-anchor" href="#_2-config-mts-文件内添加-base-指定项目名" aria-label="Permalink to &quot;2.config.mts 文件内添加 base 指定项目名&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果打包部署后的站点没有样式，就是 base 配置的不对</p></div><div class="language-js line-numbers-mode"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line highlighted"><span style="color:#E06C75;">	base</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/vitepress-template/&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// vitepress-template为自己的项目名称</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-配置-github" tabindex="-1">3.配置 github <a class="header-anchor" href="#_3-配置-github" aria-label="Permalink to &quot;3.配置 github&quot;">​</a></h2>`,8),s("p",null,[s("span",{class:"img-wrapper"},[s("img",{src:"https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20240924112324556.png",alt:"image-20240924112324556",width:"auto",height:"auto",class:"img-loading",onload:"this.classList.remove('img-loading')",onerror:"this.classList.remove('img-loading'); this.classList.add('img-error')"})])],-1),s("h2",{id:"_4-pnpm-build-打包-打包后将更改推送到-main-分支并等待-github-action-工作流完成。",tabindex:"-1"},[a("4.pnpm build 打包，打包后将更改推送到 main 分支并等待 GitHub Action 工作流完成。 "),s("a",{class:"header-anchor",href:"#_4-pnpm-build-打包-打包后将更改推送到-main-分支并等待-github-action-工作流完成。","aria-label":'Permalink to "4.pnpm build 打包，打包后将更改推送到 main 分支并等待 GitHub Action 工作流完成。"'},"​")],-1),s("h2",{id:"_5-部署完成后-有代码更新时-push-推送到-main-分支-会自动触发-github-action-工作流更新线上样式。",tabindex:"-1"},[a("5.部署完成后，有代码更新时 push 推送到 main 分支，会自动触发 GitHub Action 工作流更新线上样式。 "),s("a",{class:"header-anchor",href:"#_5-部署完成后-有代码更新时-push-推送到-main-分支-会自动触发-github-action-工作流更新线上样式。","aria-label":'Permalink to "5.部署完成后，有代码更新时 push 推送到 main 分支，会自动触发 GitHub Action 工作流更新线上样式。"'},"​")],-1)]))}const d=l(r,[["render",c]]);export{m as __pageData,d as default};
