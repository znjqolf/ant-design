webpackJsonp([196,358],{615:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(15),s(14)),o=t(p),e=(s(45),s(44)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u901a\u8fc7\u8bbe\u7f6e ",["code","showTotal"]," \u5c55\u793a\u603b\u5171\u6709\u591a\u5c11\u6570\u636e\u3002"]],meta:{order:9,title:"\u603b\u6570",filename:"components/pagination/demo/total.md",id:"components-pagination-demo-total"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n    <span class="token attr-name" >selectComponentClass</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Select<span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >80</span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >showTotal</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>total <span class="token operator" >=</span><span class="token operator" >></span> <span class="token template-string" ><span class="token string" >`\u5171 </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>total<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u6761`</span></span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >pageSize</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(c["default"],{selectComponentClass:o["default"],total:80,showTotal:function(n){return"\u5171 "+n+" \u6761"},pageSize:20,defaultCurrent:1})}}}});