(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0368":function(t,e,a){"use strict";var i=a("fc8b"),s=a.n(i);s.a},"221b":function(t,e,a){var i=a("a358");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("b9226e72",i,!0,{sourceMap:!1})},2817:function(t,e,a){"use strict";var i=a("221b"),s=a.n(i);s.a},3489:function(t,e,a){"use strict";var i=a("f715"),s=a.n(i);s.a},"3e20":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"subscriber"===t.user.role?a("div",{staticClass:"subprofile"},[a("div",{staticClass:"subprofile__inner"},[a("ProfileNav",{attrs:{localRoute:t.tab,localroutes:[{r:"cv",l:t.$t("sub.navCV")},{r:"sentCVS",l:t.$t("sub.navSentCVs")},{r:"personal",l:t.$t("sub.navPersonal")}],localroutesX:{r:"settings",l:t.$t("sub.navSettings")}},on:{setLocalRoute:t.setLocalRoute}}),a("q-tab-panels",{staticClass:"qtpans",attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"subprofile__cv subProfilePaddings",attrs:{name:"cv"}},[a("div",{staticClass:"line",staticStyle:{display:"flex",width:"100%"}},[a("div",{staticStyle:{"max-width":"300px",width:"100%","margin-bottom":"20px"}},[a("label",{staticClass:"uploaderWrapper",attrs:{for:"cvInp",tabindex:"0"}},[a("input",{ref:"cvUplInp",staticStyle:{display:"none"},attrs:{id:"cvInp",type:"file",accept:".doc, .docx, .pdf, .rtf"},on:{change:function(e){return t.uploadCV(t.$refs.cvUplInp.files)}}}),a("span",[t._v(t._s(t.$t("sub.loadCVHeader")))])]),a("div",{staticClass:"urlpanel",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","font-size":"16px"}},[t._v("\n              "+t._s(null!=t.user.cvurl&&""!=t.user.cvurl?t.$t("sub.cvurlUploaded")+":":t.$t("sub.cvurlNone"))+"\n              "),null!=t.user.cvurl&&""!=t.user.cvurl?a("a",{attrs:{href:"https://docs.google.com/viewerng/viewer?url="+t.user.cvurl,target:"_blank"}},[a("q-icon",{attrs:{color:"blue-10",size:"32px",name:"assignment"}})],1):t._e()])])]),a("div",{staticStyle:{"max-width":"300px",display:"flex",width:"100%"}},[null!=t.user.cvurl&&""!=t.user.cvurl?a("q-btn",{staticClass:"headerBtns1",staticStyle:{"margin-left":"auto"},attrs:{dense:"",color:"red-10",label:t.$t("sub.deleteCVBtn")},on:{click:t.cvdel}}):t._e()],1)]),a("q-tab-panel",{attrs:{name:"sentCVS"}},[a("HitsList",{attrs:{cvhitsHistory:t.cvhitsHistory}})],1),a("q-tab-panel",{staticClass:"subprofile__settings subProfilePaddings",attrs:{name:"personal"}},[a("label",{staticClass:"input-label",attrs:{for:"subprofile__uname"}},[t._v(t._s(t.$t("sub.name")))]),a("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__uname",color:"deep-purple-10","bg-color":"white",dense:"",outlined:"","bottom-slots":"",placeholder:t.$t("sub.namePh"),counter:"",maxlength:"35"},model:{value:t.userdata.username,callback:function(e){t.$set(t.userdata,"username",e)},expression:"userdata.username"}}),a("label",{staticClass:"input-label",attrs:{for:"subprofile__usurname"}},[t._v(t._s(t.$t("sub.surname")))]),a("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__usurname",color:"deep-purple-10","bg-color":"white",dense:"",outlined:"","bottom-slots":"",placeholder:t.$t("sub.surnamePh"),counter:"",maxlength:"35"},model:{value:t.userdata.surname,callback:function(e){t.$set(t.userdata,"surname",e)},expression:"userdata.surname"}}),a("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.change")},on:{click:t.tryChangeUData}})],1),a("q-tab-panel",{staticClass:"subprofile__settings subProfilePaddings",attrs:{name:"settings"}},[a("label",{staticClass:"input-label",attrs:{for:"subprofile__email"}},[t._v(t._s(t.$t("sub.email")))]),a("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__email",type:"email",dense:"",outlined:"","bottom-slots":"",color:"deep-purple-10","bg-color":"white",value:t.user.identity,readonly:"",placeholder:"aa@bb.cc",counter:"",maxlength:"50"}}),a("label",{staticClass:"input-label",attrs:{for:"subprofile__oldPW"}},[t._v(t._s(t.$t("sub.oldPW")))]),a("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__oldPW",placeholder:"******",dense:"",color:"deep-purple-10","bg-color":"white",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",counter:"",maxlength:"25"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:t.mailpw.oldpw,callback:function(e){t.$set(t.mailpw,"oldpw",e)},expression:"mailpw.oldpw"}}),a("label",{staticClass:"input-label",attrs:{for:"subprofile__newPW"}},[t._v(t._s(t.$t("sub.newPW")))]),a("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__newPW",color:"deep-purple-10","bg-color":"white",dense:"",placeholder:"******",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",counter:"",maxlength:"25"},model:{value:t.mailpw.newpw,callback:function(e){t.$set(t.mailpw,"newpw",e)},expression:"mailpw.newpw"}}),a("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.change")},on:{click:t.tryChangePw}})],1)],1)],1)]):t._e()},s=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a481"),a("f559"),a("9523")),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hitslist"},[a("div",[a("table",{staticStyle:{"box-sizing":"border-box",width:"100%"}},[a("thead",[a("tr",[a("td",{staticStyle:{width:"30%","min-width":"30%","max-width":"30%","text-align":"left"}},[t._v(t._s(t.$t("hits.job")))]),a("td",{staticStyle:{width:"25%","min-width":"25%","max-width":"25%"}},[t._v(t._s(t.$t("hits.company")))]),a("td",{staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.remarks")))]),a("td",{staticClass:"noshow-below550",staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.sent")))]),a("td",{staticClass:"noshow-below550",staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.seen")))])])]),t._l(t.cvhitsHistory,(function(e){return a("tr",{key:e.cvjob_id,staticClass:"jobstat"},[a("td",{staticStyle:{"text-align":"left"}},[a("a",{staticClass:"link1",attrs:{target:"_blank",href:"/jobpage?id="+e.cvjob_id}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),a("td",[t._v("\n          "+t._s(e.company)+"\n        ")]),a("td",[e.is_closed?a("span",[t._v("\n            "+t._s(t.$t("hits.closed"))+"\n          ")]):t._e()]),a("td",{staticClass:"noshow-below550"},[t._v("\n          "+t._s(t.formatDate(e.date_created))+"\n        ")]),a("td",{staticClass:"noshow-below550"},[null!=e.date_checked?a("span",[t._v("\n            "+t._s(t.formatDate(e.date_checked))+"\n          ")]):a("span",[t._v("\n            "+t._s(t.$t("hits.no"))+"\n          ")])])])}))],2),0==t.cvhitsHistory.length?a("p",[t._v(t._s(t.$t("hits.none")))]):t._e()])])},l=[],d={name:"HitsList",props:{cvhitsHistory:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:{formatDate:function(t){var e=new Date(t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()}},components:{}},p=d,c=(a("fde5"),a("2877")),u=Object(c["a"])(p,o,l,!1,null,"6d88d590",null),f=u.exports,b=a("9e40"),h=a("2f62");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={name:"SubProfile",props:{ownCVs:{type:Array,default:function(){return[]}}},computed:m({},Object(h["b"])(["user"])),data:function(){return{cvhitsHistory:[],cvurlnew:"",cv_upload_error:"",userdata:{username:"",surname:"",insearch:!1},mailpw:{newpw:"",oldpw:""},isPwd:!0,tab:"cv"}},components:{HitsList:f,ProfileNav:b["a"]},deactivated:function(){this.$destroy()},methods:{getCVHitsHistory:function(){var t=this,e="/getcvhitshistory";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){e.data&&e.data.rows?t.cvhitsHistory=e.data.rows:(console.log("cp124 - ошибка cvhitsHistory"),t.$q.notify("Ошибка, не удалось получить данные"))}))},updateCVLink:function(){var t=this,e="/cvupdate.json";this.$axios.post(e,{cvurl:this.cvurlnew},{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?(t.$q.notify(t.$t("sub.dataChanged")),t.$store.dispatch("updateCVUrl",t.cvurlnew),console.log(t.$store.state.user),localStorage.setItem("userData",JSON.stringify(t.$store.state.user))):t.$q.notify(t.$t("sub.dataError")),t.cvurlnew=""}))},cvdel:function(){var t=this,e="/cvdelete.json";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?(t.$q.notify(t.$t("sub.cvDeleted")),t.$store.dispatch("updateCVUrl","")):t.$q.notify(t.$t("sub.dataError")),t.cvurlnew=""}))},uploadCV:function(t){var e=this,a="https://decreed-silk.000webhostapp.com/cvu.php";console.log("start cvu");var i=new FormData;i.append("cv",t[0]),this.$refs.cvUplInp.value=null,this.$axios.post(a,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data&&t.data.startsWith("link:")?(e.logo_upload_error=null,e.cvurlnew=t.data.replace("link:",""),e.updateCVLink()):(console.log("error cv uploading: ",t.data),t.data.startsWith("Error in file size")?(e.cv_upload_error=e.$t("sub.cvTooBig"),e.$q.notify(e.$t("sub.cvTooBig"))):(e.cv_upload_error=e.$t("sub.dataError"),e.$q.notify(e.$t("sub.dataError"))))}))},tryChangeUData:function(){var t=this,e="/changeuserstuff",a=this.userdata;this.$axios.post(e,a,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){console.log("tryChangeUData",e.data),"OK"==e.data?(t.$store.dispatch("setNameSurnameInSearch",a),t.$q.notify(t.$t("sub.dataChanged"))):t.$q.notify(t.$t("sub.wrongData"))}))},tryChangePw:function(){var t=this,e="/changepw",a={oldmail:this.user.identity,oldpw:this.mailpw.oldpw,newpw:this.mailpw.newpw};this.$axios.post(e,a,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){console.log("trychpw",e.data),"OK"==e.data?t.$q.notify(t.$t("sub.pwChanged")):t.$q.notify(t.$t("sub.wrongData"))}))},setLocalRoute:function(t){"personal"==t?(this.userdata.username=this.user.username,this.userdata.surname=this.user.surname,this.userdata.insearch=this.user.insearch):"sentCVS"==t&&this.getCVHitsHistory(),this.tab=t}},mounted:function(){this.userdata.username=this.user.username,this.userdata.surname=this.user.surname,this.userdata.insearch=this.user.insearch}},_=x,g=(a("3489"),a("5c88"),a("adad")),w=a("823b"),y=a("0016"),$=a("9c40"),C=a("27f9"),k=a("8572"),q=a("eebe"),P=a.n(q),j=Object(c["a"])(_,i,s,!1,null,"40f03394",null);e["default"]=j.exports;P()(j,"components",{QTabPanels:g["a"],QTabPanel:w["a"],QIcon:y["a"],QBtn:$["a"],QInput:C["a"],QField:k["a"]})},"5c88":function(t,e,a){"use strict";var i=a("8edb"),s=a.n(i);s.a},"6e42":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".qtpans[data-v-40f03394]{width:100%;min-width:864px;min-height:60vh;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;border-radius:10px;box-shadow:0px 5px 15px rgba(0,0,0,0.1)}@media screen and (max-width:550px){.qtpans[data-v-40f03394]{min-width:auto}}.subprofile[data-v-40f03394]{max-width:900px;padding:0 10px;padding-top:10px;display:flex;flex-direction:column;justify-content:center}@media screen and (max-width:550px){.subprofile[data-v-40f03394]{padding:20px;padding-top:0;min-width:100%}}.subprofile p[data-v-40f03394]{margin-bottom:15px}.subprofile__inner[data-v-40f03394]{display:flex}@media screen and (max-width:550px){.subprofile__inner[data-v-40f03394]{flex-direction:column}}.subprofile__inp[data-v-40f03394]{width:300px}.subprofile__header[data-v-40f03394]{display:flex;justify-content:flex-end}.subprofile .tabs[data-v-40f03394]{justify-content:center;-webkit-animation-duration:0.3s;animation-duration:0.3s;transition-duration:0.3s}.subprofile .subprofile__cv[data-v-40f03394],.subprofile .subprofile__settings[data-v-40f03394]{display:flex;flex-direction:column;align-items:flex-start}.subprofile .anim1[data-v-40f03394]{-webkit-animation-duration:0.3s;animation-duration:0.3s;transition-duration:0.3s}.subprofile *[data-v-40f03394]{margin:0}.uploaderWrapper[data-v-40f03394]{display:block;border:1px solid rgba(0,0,0,0.24);padding:12px;transition-duration:0.3s;border:1px dashed grey;border-radius:10px;min-width:300px;margin-bottom:15px;cursor:pointer;box-sizing:border-box;background-color:#fff}.uploaderWrapper[data-v-40f03394]:focus{outline:none;box-shadow:inset 0px 0px 0px 2px var(--color1)!important}.uploaderWrapper[data-v-40f03394]:hover{border-color:var(--color1);color:var(--color1)}.uploaderWrapper:hover>.logo-placeholder[data-v-40f03394]{outline:1px solid var(--color1)}@media screen and (max-width:550px){.uploaderWrapper[data-v-40f03394]{min-width:auto;width:100%}}.input-label[data-v-40f03394]{color:var(--color1);font-family:Montserrat,sans-serif;font-weight:500;font-size:15px;line-height:17px;text-align:left;margin-bottom:7px;display:block}.subprofile__inp[data-v-40f03394]{width:100%}.subProfilePaddings[data-v-40f03394]{padding:40px 80px 35px 80px}@media screen and (max-width:550px){.subProfilePaddings[data-v-40f03394]{padding:30px 34px}}",""]),t.exports=e},8009:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".profilenav-wrap[data-v-0e0154f3]{padding-right:16px}@media screen and (max-width:550px){.profilenav-wrap[data-v-0e0154f3]{padding:0}}@media screen and (max-width:550px){.profilenav[data-v-0e0154f3]{display:flex;flex-wrap:wrap;justify-content:space-between}}.badge1[data-v-0e0154f3]{background-color:var(--btn-color);border-radius:100%;width:28px;height:28px;margin-right:auto;text-align:center;justify-content:center;box-shadow:0px 0px 10px rgba(0,0,0,0.2);font-family:Montserrat;font-weight:700;font-size:14px;line-height:17px}@media screen and (max-width:550px){.badge1[data-v-0e0154f3]{height:22px;width:22px}}.nav__link[data-v-0e0154f3]{background-color:var(--menubg-color);box-shadow:0px 5px 15px rgba(0,0,0,0.1);border-radius:10px;margin-bottom:15px;font-family:Montserrat,sans-serif;font-size:16px;line-height:20px;color:var(--color1);border:0.5px solid rgba(0,0,0,0.2);padding:0}@media screen and (max-width:550px){.nav__link[data-v-0e0154f3]{width:calc(50% - 6px);font-size:12px;line-height:15px;height:35px;margin-bottom:10px}}.nav__link-active[data-v-0e0154f3]{color:#fff;background-color:var(--color1)}",""]),t.exports=e},"8edb":function(t,e,a){var i=a("bf12");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("0c3c1992",i,!0,{sourceMap:!1})},"9db0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"*[data-v-6d88d590]{margin:0}.hitslist[data-v-6d88d590]{padding-top:15px;box-sizing:border-box;width:100%}.hitslist table[data-v-6d88d590]{border-spacing:0}.hitslist table thead td[data-v-6d88d590]{border-bottom:3px solid transparent;font-weight:700}.hitslist table td[data-v-6d88d590]{padding:3px;max-width:85px;font-size:14px}@media screen and (max-width:550px){.hitslist table td[data-v-6d88d590]{font-size:11px;padding:0}}.hitslist .line[data-v-6d88d590]{display:flex;align-items:center;border:1px solid grey;padding:5px}.hitslist .jobstat[data-v-6d88d590]:hover{transition-duration:0.3s;background-color:var(--main-borders-color);color:#fff}.hitslist .jobstat:hover .link1[data-v-6d88d590]{color:#fff}.hitslist .link1[data-v-6d88d590]{text-decoration:none;color:var(--violet-btn-color);transition-duration:0.3s}",""]),t.exports=e},"9e40":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profilenav-wrap",staticStyle:{"min-width":"270px"}},[a("q-list",{staticClass:"profilenav rounded-borders text-primary",attrs:{padding:""}},[t._l(t.localroutes,(function(e,i){return a("q-item",{key:i,staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute===e.r,"active-class":"nav__link-active"},on:{click:function(a){return t.$emit("setLocalRoute",e.r)}}},[a("q-item-section",{staticStyle:{position:"relative","flex-direction":"row","align-items":"center"}},[e.badges>0?a("span",{staticStyle:{"margin-left":"auto","margin-right":"10px"}},[t._v(t._s(e.l))]):a("span",{staticStyle:{display:"inline !important"}},[t._v(t._s(e.l))]),e.badges>0?a("q-badge",{staticClass:"badge1",attrs:{label:e.badges}}):t._e()],1)],1)})),a("q-item",{staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute==t.localroutesX.r,"active-class":"nav__link-active"},on:{click:function(e){return t.$emit("setLocalRoute",t.localroutesX.r)}}},[a("q-item-section",[t._v(t._s(t.localroutesX.l))])],1)],2)],1)},s=[],n={name:"ProfileNav",props:{localRoute:String,localroutes:Array,localroutesX:Object}},r=n,o=(a("2817"),a("0368"),a("2877")),l=a("1c1c"),d=a("66e5"),p=a("4074"),c=a("58a8"),u=a("eb85"),f=a("eebe"),b=a.n(f),h=Object(o["a"])(r,i,s,!1,null,"0e0154f3",null);e["a"]=h.exports;b()(h,"components",{QList:l["a"],QItem:d["a"],QItemSection:p["a"],QBadge:c["a"],QSeparator:u["a"]})},a358:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"@media screen and (max-width:550px){.nav__link.q-item{height:36px;min-height:36px}}",""]),t.exports=e},bf12:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".subprofile__inp .q-field--outlined .q-field__control:before{border:0!important}.subprofile__inp .q-field__control{font-size:15px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);height:36px;min-height:36px!important}.subprofile__inp .q-field__native{height:36px!important;min-height:36px!important;padding:0!important}.subprofile__inp .q-field__append,.subprofile__inp .q-field__native input{height:36px}.subprofile__inp .q-field__bottom{padding-right:0}.subprofile__inp .q-input{margin-bottom:0px!important}",""]),t.exports=e},d9fc:function(t,e,a){var i=a("9db0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("afd7b798",i,!0,{sourceMap:!1})},f715:function(t,e,a){var i=a("6e42");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("f80330fa",i,!0,{sourceMap:!1})},fc8b:function(t,e,a){var i=a("8009");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("febcf11a",i,!0,{sourceMap:!1})},fde5:function(t,e,a){"use strict";var i=a("d9fc"),s=a.n(i);s.a}}]);