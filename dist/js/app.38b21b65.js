(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)a=c[d],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/teach-you-search/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.keyword?[r("div",{staticClass:"has-keyword"},[r("img",{attrs:{src:n("cf05")}}),r("div",{staticClass:"search-input"},[r("span",{staticClass:"keyword"},[t._v(t._s(t.keyword))]),r("div",{staticClass:"mouse"})])]),r("a",{attrs:{href:"/"}},[t._v("我也要生成")])]:[r("div",{staticClass:"create"},[0===t.createTime?[r("div",{staticClass:"title"},[t._v("生成一次搜索动画")]),r("div",{staticClass:"subtitle"},[t._v("请输入关键词")])]:[r("div",{attrs:{id:"js-tip"}},[t._v("✅ 链接已复制")]),r("div",{staticClass:"subtitle"},[t._v(t._s(t.url))])],r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"input",placeholder:"例如：什么是简书"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),r("button",{ref:"copyLink",class:{"no-content":!t.content},attrs:{"data-clipboard-text":t.url},on:{click:t.create}},[t.createTime>0?[t._v("再次")]:t._e(),t._v("生成\n      ")],2)],2)]],2)},i=[],a=(n("28a5"),n("386d"),n("b311")),c=n.n(a),s={name:"app",data:function(){return{content:"",createTime:0}},computed:{keyword:function(){for(var t=window.location.search.substring(1),e=t.split("&"),n=0;n<e.length;n++){var r=e[n].split("=");if("keyword"==r[0])return decodeURI(r[1])}return!1},url:function(){return window.location+"?keyword="+this.content}},mounted:function(){var t=this;this.keyword&&setTimeout(function(){window.location="https://www.baidu.com/s?wd=".concat(t.keyword)},5e3),new c.a(this.$refs.copyLink)},methods:{create:function(){this.createTime+=1,this.$refs.copyLink&&new c.a(this.$refs.copyLink);var t=document.getElementById("js-tip");t.classList.add("highlight"),setTimeout(function(){t.classList.remove("highlight")},500)}}},u=s,l=(n("5c0b"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,null,null),p=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("106f"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.3733079a.png"}});
//# sourceMappingURL=app.38b21b65.js.map