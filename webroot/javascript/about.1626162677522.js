(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1276:function(e,t,r){"use strict";var s=r("d784"),a=r("44e7"),o=r("825a"),n=r("1d80"),i=r("4840"),l=r("8aa5"),c=r("50c4"),u=r("14c3"),m=r("9263"),d=r("d039"),f=[].push,p=Math.min,h=4294967295,g=!d((function(){return!RegExp(h,"y")}));s("split",2,(function(e,t,r){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var s=String(n(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===e)return[s];if(!a(e))return t.call(s,e,o);var i,l,c,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,d+"g");while(i=m.call(g,s)){if(l=g.lastIndex,l>p&&(u.push(s.slice(p,i.index)),i.length>1&&i.index<s.length&&f.apply(u,i.slice(1)),c=i[0].length,p=l,u.length>=o))break;g.lastIndex===i.index&&g.lastIndex++}return p===s.length?!c&&g.test("")||u.push(""):u.push(s.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=n(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,r):s.call(String(a),t,r)},function(e,a){var n=r(s,e,this,a,s!==t);if(n.done)return n.value;var m=o(e),d=String(this),f=i(m,RegExp),v=m.unicode,b=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(g?"y":"g"),_=new f(g?m:"^(?:"+m.source+")",b),x=void 0===a?h:a>>>0;if(0===x)return[];if(0===d.length)return null===u(_,d)?[d]:[];var w=0,F=0,C=[];while(F<d.length){_.lastIndex=g?F:0;var y,E=u(_,g?d:d.slice(F));if(null===E||(y=p(c(_.lastIndex+(g?0:F)),d.length))===w)F=l(d,F,v);else{if(C.push(d.slice(w,F)),C.length===x)return C;for(var S=1;S<=E.length-1;S++)if(C.push(E[S]),C.length===x)return C;F=w=y}}return C.push(d.slice(w)),C}]}),!g)},"14a5":function(e,t,r){"use strict";r("6fd5")},"14c3":function(e,t,r){var s=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==s(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},3617:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("navHeader",{attrs:{isRegistered:2}}),r("div",{staticClass:"container findPsd"},[r("div",{staticClass:"content"},[r("el-form",{ref:"ruleForm4",staticClass:"findPsd-type",attrs:{rules:e.rules4,model:e.ruleForm4,"label-width":"100px"}},[r("h2",[e._v("输入注册时所填写的电子邮箱")]),r("el-form-item",{staticClass:"findPsdItem",attrs:{prop:"reg_email"}},[r("el-input",{staticClass:"email",attrs:{type:"text",placeholder:"请输入您的邮箱",name:"reg_email"},model:{value:e.ruleForm4.reg_email,callback:function(t){e.$set(e.ruleForm4,"reg_email",t)},expression:"ruleForm4.reg_email"}})],1),r("el-button",{staticClass:"button",on:{click:function(t){return e.findPsdForm("ruleForm4")}}},[e._v("提交")])],1)],1)]),r("navFooter")],1)},a=[],o=r("0418"),n=r("fd2d"),i={name:"ForgetPsd",data:function(){var e=function(e,t,r){var s=/^[0-9A-Za-z_][_.0-9A-Za-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/;s.test(t)?(console.log(s.test(t)),r()):r(new Error("请输入正确的邮箱"))};return{ruleForm4:{reg_email:""},rules4:{reg_email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}]}}},components:{navHeader:o["a"],navFooter:n["a"]},methods:{findPsdForm:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.axios.post("http://profile.ftchinese.com/users/findpassword",{reg_email:t.ruleForm4.reg_email}).then((function(e){200==e.data.code&&t.$message.success("系统已向您的邮箱发送了一封邮件，请按邮件中的链接重置密码")}))}))}}},l=i,c=(r("14a5"),r("2877")),u=Object(c["a"])(l,s,a,!1,null,"6b8e2910",null);t["default"]=u.exports},"44e7":function(e,t,r){var s=r("861d"),a=r("c6b6"),o=r("b622"),n=o("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},"4e9d":function(e,t,r){},"4f77":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("el-form",{ref:"ruleForm3",staticClass:"login-type",attrs:{rules:e.rules3,model:e.ruleForm3}},[r("el-form-item",{staticClass:"smsItem",attrs:{prop:"mobile_phone_no"}},[r("el-input",{staticClass:"phone",attrs:{type:"text",placeholder:"请输入您的手机号码",name:"mobile_phone_no"},model:{value:e.ruleForm3.mobile_phone_no,callback:function(t){e.$set(e.ruleForm3,"mobile_phone_no",t)},expression:"ruleForm3.mobile_phone_no"}})],1),r("el-form-item",{staticClass:"smsItem last",attrs:{prop:"captcha"}},[r("el-input",{staticClass:"smsCode",attrs:{oninput:"value=value.replace(/[^\\d]/g, '')",maxlength:"6",placeholder:"输入6位短信验证码",name:"smsCode"},model:{value:e.ruleForm3.captcha,callback:function(t){e.$set(e.ruleForm3,"captcha",t)},expression:"ruleForm3.captcha"}}),r("el-button",{staticClass:"smsBtn",class:{"disabled-style":e.getCodeBtnDisable},attrs:{disabled:e.getCodeBtnDisable},on:{click:function(t){return e.sendCode()}}},[e._v(e._s(e.btntxt))])],1),r("el-button",{staticClass:"button",on:{click:function(t){return e.submitForm("ruleForm3")}}},[e._v("立即登录")]),r("a",{staticClass:"button wxBtn",attrs:{href:"https://www.ftacademy.cn/wxlogin"}},[e._v("微信登录")])],1)],1)},a=[],o=(r("a9e3"),r("8ba4"),{name:"Phone",data:function(){var e=function(e,t,r){var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;Number.isInteger(+t)?s.test(t)?r():r(new Error("请输入正确的电话号码")):r(new Error("请输入数字值"))};return{ruleForm3:{mobile_phone_no:"",captcha:""},rules3:{mobile_phone_no:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:e,trigger:"blur"}],captcha:[{required:!0,message:"请输入短信验证码",trigger:"blur"}]},btntxt:"获取验证码",waitTime:61}},computed:{phoneNumberStyle:function(){var e=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;return!!e.test(this.ruleForm3.mobile_phone_no)},getCodeBtnDisable:{get:function(){return 61!=this.waitTime||!this.ruleForm3.mobile_phone_no},set:function(){}}},methods:{sendCode:function(){var e=this;if(this.phoneNumberStyle){var t={};t.mobile_phone_no=this.ruleForm3.mobile_phone_no,this.axios.post("/users/login/captcha",t).then((function(t){200==t.data.code&&"success"==t.data.status&&e.$message("Sent")}));var r=this;r.waitTime--,r.getCodeBtnDisable=!0,this.btntxt="".concat(this.waitTime,"s后重新获取");var s=setInterval((function(){r.waitTime>1?(r.waitTime--,r.btntxt="".concat(r.waitTime,"s后重新获取")):(clearInterval(s),r.btntxt="获取验证码",r.getCodeBtnDisable=!1,r.waitTime=61)}),1e3)}},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.axios.post("/users/login",{mobile_phone_no:t.ruleForm3.mobile_phone_no,captcha:t.ruleForm3.captcha},{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}}).then((function(e){if(200==e.data.code&&"success"==e.data.status){t.$message.success("Login successful");var r=JSON.parse(e.data.data);sessionStorage.setItem("userPhone",r.mobile_phone_no),sessionStorage.setItem("phoneLoginStatus",!0),console.log(r.mobile_phone_no),t.$router.push("/Registered"),console.log(t.$store.state.isPhoneLogin)}else 500==e.data.code&&"error"==e.data.status&&(t.$message.success("Verification not passed"),sessionStorage.setItem("phoneLoginStatus",!1))}))}))}}}),n=o,i=(r("a347"),r("2877")),l=Object(i["a"])(n,s,a,!1,null,"66840680",null);t["default"]=l.exports},"4fdd":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("el-form",{ref:"ruleForm2",staticClass:"login-type",attrs:{rules:e.rules2,model:e.ruleForm2}},[r("el-form-item",{staticClass:"emailItem",attrs:{prop:"email"}},[r("el-input",{staticClass:"email",attrs:{type:"text",placeholder:"请输入您的邮箱",name:"email"},model:{value:e.ruleForm2.email,callback:function(t){e.$set(e.ruleForm2,"email",t)},expression:"ruleForm2.email"}})],1),r("el-form-item",{staticClass:"smsItem last",attrs:{prop:"password"}},[r("el-input",{staticClass:"smsCode",attrs:{type:"password",placeholder:"请输入您的密码",name:"password"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}}),r("el-button",{staticClass:"smsBtn",attrs:{type:"button"},on:{click:e.findPsd}},[e._v(" 找回密码 ")])],1),r("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(t){e.loginSubmit("ruleForm2"),e.rememberUser()}}},[e._v("立即登录")]),r("a",{staticClass:"button wxBtn",attrs:{href:"https://www.ftacademy.cn/wxlogin"}},[e._v("微信登录")])],1)],1)},a=[],o=(r("ac1f"),r("1276"),r("bc3a"),{name:"Email",data:function(){var e=function(e,t,r){var s=/^[0-9A-Za-z_][_.0-9A-Za-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/;s.test(t)?(console.log(s.test(t)),r()):r(new Error("请输入正确的邮箱"))},t=function(e,t,r){var s=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;s.test(t)?r():r(new Error("密码由6～20位英文字母和数字组成"))};return{checked:!0,ruleForm2:{email:"",password:""},rules2:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:t,trigger:"blur"}]}}},mounted:function(){this.getCookie()},methods:{findPsd:function(){this.$router.push({path:"ForgetPsd"})},rememberUser:function(){var e=this;1==e.checked?e.setCookie(e.ruleForm2.email,e.ruleForm2.password,7):e.clearCookie()},setCookie:function(e,t,r){var s=new Date;s.setTime(s.getTime()+864e5*r),window.document.cookie="email="+e+";path=/;expires="+s.toGMTString(),window.document.cookie="password="+t+";path=/;expires="+s.toGMTString()},getCookie:function(){var e=this;if(document.cookie.length>0)for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var s=t[r].split("=");"email"==s[0]?e.ruleForm.email=s[1]:"password"==s[0]&&(e.ruleForm.password=s[1])}},loginSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=new FormData;for(var s in t.ruleForm2)r.append(s,t.ruleForm2[s]),console.log(r.get[s]);t.axios.post("/login",r).then((function(e){if(200==e.data.code&&"success"==e.data.status){t.$message.success("Login successful");var r=JSON.parse(e.data.data);console.log(e.data.data),sessionStorage.setItem("userEmail",r.email),sessionStorage.setItem("userPassword",r.password),sessionStorage.setItem("emailLoginStatus",!0),t.$router.push("/Registered")}}))}}))},clearCookie:function(){this.setCookie("","",-1)}}}),n=o,i=(r("d18e"),r("2877")),l=Object(i["a"])(n,s,a,!1,null,"cc7446d4",null);t["default"]=l.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var s=r("1d80"),a=r("5899"),o="["+a+"]",n=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),l=function(e){return function(t){var r=String(s(t));return 1&e&&(r=r.replace(n,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},"5e89":function(e,t,r){var s=r("861d"),a=Math.floor;e.exports=function(e){return!s(e)&&isFinite(e)&&a(e)===e}},6547:function(e,t,r){var s=r("a691"),a=r("1d80"),o=function(e){return function(t,r){var o,n,i=String(a(t)),l=s(r),c=i.length;return l<0||l>=c?e?"":void 0:(o=i.charCodeAt(l),o<55296||o>56319||l+1===c||(n=i.charCodeAt(l+1))<56320||n>57343?e?i.charAt(l):o:e?i.slice(l,l+2):n-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"6fd5":function(e,t,r){},7156:function(e,t,r){var s=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var o,n;return a&&"function"==typeof(o=t.constructor)&&o!==r&&s(n=o.prototype)&&n!==r.prototype&&a(e,n),e}},7388:function(e,t,r){"use strict";r("bb28")},"8aa5":function(e,t,r){"use strict";var s=r("6547").charAt;e.exports=function(e,t,r){return t+(r?s(e,t).length:1)}},"8ba4":function(e,t,r){var s=r("23e7"),a=r("5e89");s({target:"Number",stat:!0},{isInteger:a})},9263:function(e,t,r){"use strict";var s=r("ad6d"),a=r("9f7f"),o=RegExp.prototype.exec,n=String.prototype.replace,i=o,l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],m=l||u||c;m&&(i=function(e){var t,r,a,i,m=this,d=c&&m.sticky,f=s.call(m),p=m.source,h=0,g=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==e[m.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),r=new RegExp("^(?:"+p+")",f)),u&&(r=new RegExp("^"+p+"$(?!\\s)",f)),l&&(t=m.lastIndex),a=o.call(d?r:m,g),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=m.lastIndex,m.lastIndex+=a[0].length):m.lastIndex=0:l&&a&&(m.lastIndex=m.global?a.index+a[0].length:t),u&&a&&a.length>1&&n.call(a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=i},"95f5":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("navHeader",{attrs:{isRegistered:1}}),r("div",{staticClass:"container registered"},[r("div",{staticClass:"left"},[r("el-form",{ref:"ruleForm",staticClass:"registered-type",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{staticClass:"emailItem",attrs:{prop:"email",label:"电子邮箱"}},[r("el-input",{staticClass:"email",attrs:{type:"text",placeholder:"请输入您的邮箱",name:"email",disabled:e.emailLoginStatus},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}}),r("small",[e._v("用于找回您遗忘的密码，请正确填写")])],1),r("el-form-item",{staticClass:"emailItem",attrs:{prop:"password",label:"登录密码"}},[r("el-input",{staticClass:"password",attrs:{type:e.passw,placeholder:"请输入您的密码",name:"password",disabled:e.emailLoginStatus},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}},[r("i",{class:e.icon,attrs:{slot:"suffix"},on:{click:e.showPass},slot:"suffix"})]),r("small",[e._v("6-20位英文字母和数字")])],1),r("el-form-item",{staticClass:"emailItem",attrs:{prop:"mobile_phone_no",label:"电话号码"}},[r("el-input",{staticClass:"phone",attrs:{type:"text",placeholder:"请输入您的手机号码",name:"phone",disabled:e.phoneLoginStatus},model:{value:e.ruleForm.mobile_phone_no,callback:function(t){e.$set(e.ruleForm,"mobile_phone_no",t)},expression:"ruleForm.mobile_phone_no"}})],1),r("el-form-item",{staticClass:"emailItem",attrs:{label:"电邮订阅"}},e._l(e.emailList,(function(t){return r("el-checkbox",{key:t.id,attrs:{checked:"",label:t.model,"true-label":"on","false-label":"off"},on:{change:function(r){return e.handCheckEmail(r,t)}}})})),1),r("el-form-item",{staticClass:"emailItem",attrs:{label:"隐私设置"}},e._l(e.privacyList,(function(t){return r("el-checkbox",{key:t.id,attrs:{checked:"",label:t.model,"true-label":"on","false-label":"off"},on:{change:function(r){return e.handCheckService(r,t)}}})})),1),r("el-form-item",{staticClass:"emailItem info",attrs:{prop:"service"}},[r("p",[e._v("请您阅读我们的"),r("a",{attrs:{href:"http://www.ftchinese.com/m/corp/service.html"}},[e._v("用户注册协议")]),e._v("和"),r("a",{attrs:{href:"http://www.ftchinese.com/m/corp/service.html#privacy"}},[e._v("隐私权保护政策")]),e._v("，点击下方按钮即视为您接受。")])]),r("el-button",{staticClass:"button",on:{click:function(t){return e.registerForm("ruleForm")}}},[e._v("同意并绑定")]),r("el-button",{staticClass:"button"},[r("a",{attrs:{href:"http://www.ftchinese.com/"}},[e._v("跳过此页")])])],1)],1),e._m(0)]),r("navFooter")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"right"},[r("div",{staticClass:"sectionTitle",attrs:{title:"联系方式"}},[r("p",{staticClass:"detail"},[e._v("如您在绑定时遇到任何问题或有任何建议, 请写邮件至:"),r("br"),r("a",{attrs:{href:"mailto:customer.service@ftchinese.com?subject=Help on Registration Form"}},[e._v("customer.service@ftchinese.com")]),e._v("客服信箱，我们的工作人员将尽快为您解决。")])]),r("div",{staticClass:"display-none"},[r("div",{staticClass:"sectionTitle",attrs:{title:"关于FT中文网 (FTChinese.com)"}},[r("p",{staticClass:"detail"},[e._v("FT中文网(http://www.FTChinese.com) 是英国《金融时报》集团旗下唯一的中文商业财经网站，旨在为中国商业菁英和决策者们提供每日不可或缺的商业财经新闻、深度分析以及评论。凭借英国《金融时报》遍布全球的丰富报道资源，FT中文网深入分析对中国经济和全球商业具有影响力的重大事件，并揭示事件的来龙去脉，以真正富有国际视野的权威报道成为中国高级管理人员“必读”的商业财经资讯网站。FT中文网目前拥有逾270 万注册用户，移动产品已覆盖iOS、Android和Windows系统。2018年4月，FT中文网正式推出付费订阅业务，为专属会员提供精选资讯与个性化服务。")])])])])}],o=(r("a9e3"),r("8ba4"),r("0418")),n=r("fd2d"),i={name:"Registered",data:function(){var e=function(e,t,r){var s=/^[0-9A-Za-z_][_.0-9A-Za-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/;s.test(t)?r():r(new Error("请输入正确的邮箱"))},t=function(e,t,r){var s=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;s.test(t)?r():r(new Error("密码由数组和字母组成"))},r=function(e,t,r){var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;Number.isInteger(+t)?s.test(t)?r():r(new Error("请输入正确的电话号码")):r(new Error("请输入数字值"))};return{edit:!0,passw:"password",icon:"el-icon-view",emailList:[{id:"mail_sub_todayStory",model:"《今日焦点》邮件"},{id:"mail_sub_fridayStory",model:"《一周精选》邮件"},{id:"mail_sub_afStory",model:"《午后速递》邮件"}],privacyList:[{id:"service_acceptance",model:"我愿意接受FT中文网新服务和产品的通知"},{id:"auth_email_sub",model:"FT中文网及其慎重选择的第三方公司可以向我发送电子邮件"},{id:"auth_letter_sub",model:"FT中文网及其慎重选择的第三方公司可以向我寄送信件"}],ruleForm:{email:"",password:"",mobile_phone_no:"",mail_sub_todayStory:"on",mail_sub_fridayStory:"on",mail_sub_afStory:"on",service_acceptance:"on",auth_email_sub:"on",auth_letter_sub:"on",service:"on"},rules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:t,trigger:"blur"}],mobile_phone_no:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:r,trigger:"blur"}]}}},components:{navHeader:o["a"],navFooter:n["a"]},computed:{phoneLoginStatus:function(){return this.ruleForm.mobile_phone_no=sessionStorage.getItem("userPhone"),!!sessionStorage.getItem("phoneLoginStatus")},emailLoginStatus:function(){return this.ruleForm.email=sessionStorage.getItem("userEmail"),this.ruleForm.password=sessionStorage.getItem("userPassword"),!!sessionStorage.getItem("emailLoginStatus")}},methods:{showPass:function(){"text"==this.passw?(this.passw="password",this.icon="el-icon-view"):(this.passw="text",this.icon="el-icon-magic-stick")},handCheckEmail:function(e,t){console.log(t),"mail_sub_todayStory"===t.id&&(this.ruleForm.mail_sub_todayStory=e,console.log(this.ruleForm.mail_sub_todayStory)),"mail_sub_fridayStory"===t.id&&(this.ruleForm.mail_sub_fridayStory=e,console.log(this.ruleForm.mail_sub_fridayStory)),"mail_sub_afStory"===t.id&&(this.ruleForm.mail_sub_afStory=e,console.log(this.ruleForm.mail_sub_afStory))},handCheckService:function(e,t){console.log(t),"service_acceptance"===t.id&&(this.ruleForm.service_acceptance=e,console.log(this.ruleForm.service_acceptance)),"auth_email_sub"===t.id&&(this.ruleForm.auth_email_sub=e,console.log(this.ruleForm.auth_email_sub)),"auth_letter_sub"===t.id&&(this.ruleForm.auth_letter_sub=e,console.log(this.ruleForm.auth_letter_sub))},registerForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=new FormData;for(var s in t.ruleForm)r.append(s,t.ruleForm[s]),console.log(r.get[s]);t.axios.post("/users/register",r).then((function(e){200==e.data.code&&"success"==e.data.status&&t.$message.success("Registration successful")}))}}))}}},l=i,c=(r("7388"),r("2877")),u=Object(c["a"])(l,s,a,!1,null,"71c0be5a",null);t["default"]=u.exports},"9f7f":function(e,t,r){"use strict";var s=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=s((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=s((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a347:function(e,t,r){"use strict";r("d15b")},a9e3:function(e,t,r){"use strict";var s=r("83ab"),a=r("da84"),o=r("94ca"),n=r("6eeb"),i=r("5135"),l=r("c6b6"),c=r("7156"),u=r("c04e"),m=r("d039"),d=r("7c73"),f=r("241c").f,p=r("06cf").f,h=r("9bf2").f,g=r("58a8").trim,v="Number",b=a[v],_=b.prototype,x=l(d(_))==v,w=function(e){var t,r,s,a,o,n,i,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+c}for(o=c.slice(2),n=o.length,i=0;i<n;i++)if(l=o.charCodeAt(i),l<48||l>a)return NaN;return parseInt(o,s)}return+c};if(o(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var F,C=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof C&&(x?m((function(){_.valueOf.call(r)})):l(r)!=v)?c(new b(w(t)),r,C):w(t)},y=s?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;y.length>E;E++)i(b,F=y[E])&&!i(C,F)&&h(C,F,p(b,F));C.prototype=_,_.constructor=C,n(a,v,C)}},ac1f:function(e,t,r){"use strict";var s=r("23e7"),a=r("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var s=r("825a");e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bb28:function(e,t,r){},d15b:function(e,t,r){},d18e:function(e,t,r){"use strict";r("4e9d")},d784:function(e,t,r){"use strict";r("ac1f");var s=r("6eeb"),a=r("d039"),o=r("b622"),n=r("9263"),i=r("9112"),l=o("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),m=o("replace"),d=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,m){var p=o(e),h=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=h&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!h||!g||"replace"===e&&(!c||!u||d)||"split"===e&&!f){var v=/./[p],b=r(p,""[e],(function(e,t,r,s,a){return t.exec===n?h&&!a?{done:!0,value:v.call(t,r,s)}:{done:!0,value:e.call(r,t,s)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),_=b[0],x=b[1];s(String.prototype,e,_),s(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}m&&i(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=about.1626162677522.js.map