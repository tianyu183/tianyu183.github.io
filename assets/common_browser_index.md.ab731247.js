import{_ as a,c as s,o as n,a as t}from"./app.ea298cc0.js";const h='{"title":"\u6D4F\u89C8\u5668\u76F8\u5173","description":"","frontmatter":{},"headers":[{"level":2,"title":"localStorage \u4E0E sessionStorage","slug":"localstorage-\u4E0E-sessionstorage"},{"level":2,"title":"\u6DF1\u5165\uFF1A\u5FAE\u4EFB\u52A1\u4E0E Javascript \u8FD0\u884C\u65F6\u73AF\u5883","slug":"\u6DF1\u5165\uFF1A\u5FAE\u4EFB\u52A1\u4E0E-javascript-\u8FD0\u884C\u65F6\u73AF\u5883"},{"level":2,"title":"CORS","slug":"cors"}],"relativePath":"common/browser/index.md","lastUpdated":1636795990000}',e={},p=t(`<h1 id="\u6D4F\u89C8\u5668\u76F8\u5173" tabindex="-1">\u6D4F\u89C8\u5668\u76F8\u5173 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u76F8\u5173" aria-hidden="true">#</a></h1><h2 id="localstorage-\u4E0E-sessionstorage" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">localStorage</a> \u4E0E <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage" target="_blank" rel="noopener noreferrer">sessionStorage</a> <a class="header-anchor" href="#localstorage-\u4E0E-sessionstorage" aria-hidden="true">#</a></h2><p>sessionStorage \u5C5E\u6027\u5141\u8BB8\u4F60\u8BBF\u95EE\u4E00\u4E2A\uFF0C\u5BF9\u5E94\u5F53\u524D\u6E90\u7684 session Storage \u5BF9\u8C61\u3002\u5B83\u4E0E localStorage \u76F8\u4F3C\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E localStorage \u91CC\u9762\u5B58\u50A8\u7684\u6570\u636E\u6CA1\u6709\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\uFF0C\u800C\u5B58\u50A8\u5728 sessionStorage \u91CC\u9762\u7684\u6570\u636E\u5728\u9875\u9762\u4F1A\u8BDD\u7ED3\u675F\u65F6\u4F1A\u88AB\u6E05\u9664\u3002</p><p>sessionStorage \u5728\u9875\u9762\u5237\u65B0\u65F6\u4E0D\u4F1A\u4E22\u5931\u3002</p><h2 id="\u6DF1\u5165\uFF1A\u5FAE\u4EFB\u52A1\u4E0E-javascript-\u8FD0\u884C\u65F6\u73AF\u5883" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth" target="_blank" rel="noopener noreferrer">\u6DF1\u5165\uFF1A\u5FAE\u4EFB\u52A1\u4E0E Javascript \u8FD0\u884C\u65F6\u73AF\u5883</a> <a class="header-anchor" href="#\u6DF1\u5165\uFF1A\u5FAE\u4EFB\u52A1\u4E0E-javascript-\u8FD0\u884C\u65F6\u73AF\u5883" aria-hidden="true">#</a></h2><h2 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-hidden="true">#</a></h2><p>\u6A21\u62DF\u8DE8\u57DF CORS</p><blockquote><p><a href="https://fe-notes.yunyoujun.cn/examples/cors.html" target="_blank" rel="noopener noreferrer">cors.html</a></p></blockquote><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>CORS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://openapi.baidu.com/oauth/2.0/token&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-bash"><pre><code>Access to fetch at <span class="token string">&#39;https://openapi.baidu.com/oauth/2.0/token&#39;</span> from origin <span class="token string">&#39;http://127.0.0.1:8080&#39;</span> has been blocked by CORS policy: No <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> header is present on the requested resource. If an opaque response serves your needs, <span class="token builtin class-name">set</span> the request<span class="token string">&#39;s mode to &#39;</span>no-cors&#39; to fetch the resource with CORS disabled.
</code></pre></div><p>CORS \u65E0\u72B6\u6001\u7801\uFF0CStatus \u4E3A <code>CORS error</code>\u3002</p>`,11),o=[p];function c(l,r,u,i,k,g){return n(),s("div",null,o)}var _=a(e,[["render",c]]);export{h as __pageData,_ as default};
