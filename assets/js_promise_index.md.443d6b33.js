import{_ as n,c as s,o as a,a as p}from"./app.ea298cc0.js";const f='{"title":"\u624B\u5199 Promise","description":"","frontmatter":{},"relativePath":"js/promise/index.md","lastUpdated":1636795990000}',t={},o=p(`<h1 id="\u624B\u5199-promise" tabindex="-1">\u624B\u5199 Promise <a class="header-anchor" href="#\u624B\u5199-promise" aria-hidden="true">#</a></h1><p>\u624B\u5199 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank" rel="noopener noreferrer">Promise.all() | MDN</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Promise.all() \u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A promise \u7684 iterable \u7C7B\u578B\uFF08\u6CE8\uFF1AArray\uFF0CMap\uFF0CSet \u90FD\u5C5E\u4E8E ES6 \u7684 iterable \u7C7B\u578B\uFF09\u7684\u8F93\u5165\uFF0C\u5E76\u4E14\u53EA\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\uFF0C \u90A3\u4E2A\u8F93\u5165\u7684\u6240\u6709 promise \u7684 resolve \u56DE\u8C03\u7684\u7ED3\u679C\u662F\u4E00\u4E2A\u6570\u7EC4\u3002<br> Promise \u7684 resolve \u56DE\u8C03\u6267\u884C\u662F\u5728\u6240\u6709\u8F93\u5165\u7684 promise \u7684 resolve \u56DE\u8C03\u90FD\u7ED3\u675F\uFF0C\u6216\u8005\u8F93\u5165\u7684 iterable \u91CC\u6CA1\u6709 promise \u4E86\u7684\u65F6\u5019\u3002</p></div><div class="language-ts"><pre><code><span class="token keyword">let</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> promise3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5B9E\u73B0 Promise.all()
 * @param promises
 * @returns
 */</span>
<span class="token keyword">function</span> <span class="token function">promiseAll</span><span class="token punctuation">(</span>promises<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;\u53C2\u6570\u5E94\u5F53\u662F\u4E00\u4E2A\u6570\u7EC4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> resolvedCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> p <span class="token operator">=</span> promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          resolvedCounter<span class="token operator">++</span><span class="token punctuation">;</span>
          results<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token comment">// [3, 2, 1]</span>
          <span class="token comment">// results.push(res); // [1, 2, 3]</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>resolvedCounter <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span>reason<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> promiseArr <span class="token operator">=</span> <span class="token punctuation">[</span>promise1<span class="token punctuation">,</span> promise2<span class="token punctuation">,</span> promise3<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">promiseAll</span><span class="token punctuation">(</span>promiseArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7B54\u6848\u662F <code>[3, 2, 1]</code>\u3002</p><blockquote><p>\u5982\u679C\u4F7F\u7528 <code>push</code> \u800C\u975E <code>results[i] = res;</code>\uFF0C\u5219\u662F <code>[1, 2, 3]</code>\u3002</p></blockquote>`,6),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{f as __pageData,w as default};
