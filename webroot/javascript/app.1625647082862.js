(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"javascript/"+({about:"about"}[t]||t)+".1625647082862.js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"2a99c280"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("9085")},"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container header"},[n("div",{staticClass:"logo"},[t._m(0),2===t.isRegistered?n("span",[t._v("FT中文网")]):t._e(),0===t.isRegistered?n("span",[t._v("登录")]):t._e(),1===t.isRegistered?n("span",[t._v("信息绑定")]):t._e()]),n("div",{staticClass:"fastEntrance"},[0===t.isRegistered?n("a",{attrs:{href:"http://www.ftchinese.com/"}},[t._v("首页")]):t._e()])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"http://www.ftchinese.com/"}},[n("img",{attrs:{src:"http://static.ftacademy.cn/img/logoHD.gif",alt:"FT中文网"}})])}],o={name:"Header",data:function(){return{isShow:!1,show:!0}},props:["isRegistered"],methods:{goLogin:function(){this.$router.push({path:"Phone"})}}},i=o,c=(n("5c58"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"ac95e08e",null);e["a"]=s.exports},"0943":function(t,e,n){"use strict";n("18de")},"18de":function(t,e,n){},"236c":function(t,e,n){},3957:function(t,e,n){},4318:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"currentPhone",(function(){return C})),n.d(r,"currentEmail",(function(){return j})),n.d(r,"currentPsd",(function(){return O})),n.d(r,"isPhoneLogin",(function(){return k})),n.d(r,"isEmailLogin",(function(){return F}));var a={};n.r(a),n.d(a,"setPhone",(function(){return x})),n.d(a,"setEmail",(function(){return $})),n.d(a,"setPsd",(function(){return A}));var o={};n.r(o),n.d(o,"phoneStatus",(function(){return R})),n.d(o,"emailStatus",(function(){return D})),n.d(o,"passwordStatus",(function(){return I}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],u=(n("034f"),n("2877")),l={},f=Object(u["a"])(l,c,s,!1,null,null,null),d=f.exports,h=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("navHeader",{attrs:{isRegistered:0}}),n("div",{staticClass:"container middle"},[n("ul",{staticClass:"title"},t._l(t.tagList,(function(e,r){return n("li",{key:r,class:{active:t.$route.name===e.name},on:{click:function(n){return t.gotoAddress({path:e.path},r)}}},[t._v(t._s(e.title))])})),0),n("div",[n("router-view")],1)]),n("navFooter")],1)},p=[],v=n("0418"),g=n("fd2d"),b={name:"Login",data:function(){return{tagList:[{title:"手机号登录",path:"/Phone",name:"Phone"},{title:"电子邮箱登录",path:"/Email",name:"Email"}]}},components:{navHeader:v["a"],navFooter:g["a"]},methods:{gotoAddress:function(t,e){this.$router.push(t)}}},w=b,_=(n("9c2b"),Object(u["a"])(w,m,p,!1,null,"22b01c36",null)),y=_.exports;i["default"].use(h["a"]);var P=h["a"].prototype.push;h["a"].prototype.push=function(t){return P.call(this,t).catch((function(t){return t}))};var E=[{path:"/",name:"Login",component:y,children:[{path:"/",redirect:"Phone"},{path:"Email",name:"Email",component:function(){return n.e("about").then(n.bind(null,"4fdd"))}},{path:"Phone",name:"Phone",component:function(){return n.e("about").then(n.bind(null,"4f77"))}}]},{path:"/Registered",name:"Registered",component:function(){return n.e("about").then(n.bind(null,"95f5"))}},{path:"/ForgetPsd",name:"ForgetPsd",component:function(){return n.e("about").then(n.bind(null,"3617"))}}],T=new h["a"]({base:"",routes:E}),L=T,S=n("2f62"),C=function(t){t.currentPhone},j=function(t){t.currentEmail},O=function(t){t.currentPsd},k=function(t){t.isLogin},F=function(t){t.isLogin},x=function(t,e){var n=t.commit;n("phoneStatus",e)},$=function(t,e){var n=t.commit;n("emailStatus",e)},A=function(t,e){var n=t.commit;n("passwordStatus",e)},R=function(t,e){e&&(t.currentPhone=e,t.isPhoneLogin=!0)},D=function(t,e){e&&(t.currentEmail=e,t.isEmailLogin=!0)},I=function(t,e){e&&(t.currentPsd=e,t.isEmailLogin=!0)};i["default"].use(S["a"]);var H=new S["a"].Store({strict:!0,state:{currentPhone:null,currentEmail:null,currentPsd:null,isEmailLogin:!1,isPhoneLogin:!1,token:""},mutations:o,actions:a,getters:r}),N=n("5c96"),M=n.n(N),q=(n("0fae"),n("bc3a")),B=n.n(q),J=n("2106"),K=n.n(J);n("f5df1"),n("4318"),n("ec3f"),n("c2b1"),n("3957"),n("9293"),n("bd5e"),n("f17b"),n("db0c");i["default"].prototype.$axios=B.a,i["default"].config.productionTip=!1,i["default"].use(M.a),i["default"].use(K.a,B.a),new i["default"]({router:L,store:H,render:function(t){return t(d)}}).$mount("#app")},"5c58":function(t,e,n){"use strict";n("236c")},9085:function(t,e,n){},9293:function(t,e,n){},"9c2b":function(t,e,n){"use strict";n("b4e2")},b4e2:function(t,e,n){},bd5e:function(t,e,n){},c2b1:function(t,e,n){},db0c:function(t,e,n){},ec3f:function(t,e,n){},f17b:function(t,e,n){},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container footer"},[t._m(0),n("div",{staticClass:"present"},[n("p",[t._v("© The Financial Times Ltd"),n("span",[t._v(t._s(t.times))])]),n("p",[t._v("FT and 'Financial Times' are trademarks of The Financial Times Ltd.")]),n("br",{staticStyle:{clear:"both"}})])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/aboutus.html"}},[t._v("关于我们")]),n("a",{attrs:{href:"https://ft.wd3.myworkdayjobs.com/FT_Chinese_External_Careers"}},[t._v("加入我们")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/faq.html"}},[t._v("问题回馈")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/contact.html"}},[t._v("联系方式")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/partner.html"}},[t._v("合作伙伴")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/service.html"}},[t._v("服务条款")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/sales.html"}},[t._v("广告业务")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/corp/copyright.html"}},[t._v("版权声明")]),n("a",{attrs:{href:"http://www.ftchinese.com/m/marketing/ftc.html"}},[t._v("最新动态")]),n("br",{staticStyle:{clear:"both"}})])}],o={name:"Footer",data:function(){return{times:"",currentTime:new Date}},created:function(){this.getTimes()},beforeDestroy:function(){this.times&&clearInterval(this.getTimesInterval)},methods:{getTimes:function(){setInterval(this.getTimesInterval,1e3)},getTimesInterval:function(){var t=this,e=(new Date).getFullYear();t.times=e}}},i=o,c=(n("0943"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"4b2e5014",null);e["a"]=s.exports}});
//# sourceMappingURL=app.1625647082862.js.map