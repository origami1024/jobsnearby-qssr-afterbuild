(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0085":function(t,e,a){"use strict";var s=a("da7f"),n=a.n(s);n.a},1800:function(t,e,a){"use strict";var s=a("f445"),n=a.n(s);n.a},"3e20":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"subscriber"===t.user.role?a("div",{staticClass:"subprofile"},[a("div",{staticClass:"subprofile__inner"},[a("ProfileNav",{attrs:{localRoute:t.tab,localroutes:[{r:"cv",l:t.$t("sub.navCV")},{r:"sentCVS",l:t.$t("sub.navSentCVs")},{r:"personal",l:t.$t("sub.navPersonal")}],localroutesX:{r:"settings",l:t.$t("sub.navSettings")}},on:{setLocalRoute:t.setLocalRoute}}),a("q-tab-panels",{staticClass:"qtpans",attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"subprofile__cv",attrs:{name:"cv"}},[a("div",{staticClass:"line",staticStyle:{display:"flex",width:"100%"}},[a("div",{staticStyle:{width:"300px","margin-bottom":"20px"}},[a("label",{staticClass:"uploaderWrapper",attrs:{for:"cvInp",tabindex:"0"}},[a("input",{ref:"cvUplInp",staticStyle:{display:"none"},attrs:{id:"cvInp",type:"file",accept:".doc, .docx, .pdf, .rtf"},on:{change:function(e){return t.uploadCV(t.$refs.cvUplInp.files)}}}),a("span",[t._v(t._s(t.$t("sub.loadCVHeader")))])]),a("div",{staticClass:"urlpanel",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","font-size":"16px"}},[t._v("\n              "+t._s(null!=t.user.cvurl&&""!=t.user.cvurl?t.$t("sub.cvurlUploaded")+":":t.$t("sub.cvurlNone"))+"\n              "),null!=t.user.cvurl&&""!=t.user.cvurl?a("a",{attrs:{href:"https://docs.google.com/viewerng/viewer?url="+t.user.cvurl,target:"_blank"}},[a("q-icon",{attrs:{color:"blue-10",size:"32px",name:"assignment"}})],1):t._e()])])]),t._v("\n        "+t._s(t.user.cvurl)+"\n        "),null!=t.user.cvurl&&""!=t.user.cvurl?a("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.deleteCVBtn")},on:{click:t.cvdel}}):t._e()],1),a("q-tab-panel",{attrs:{name:"sentCVS"}},[a("HitsList",{attrs:{cvhitsHistory:t.cvhitsHistory}})],1),a("q-tab-panel",{staticClass:"subprofile__settings",attrs:{name:"personal"}},[a("q-input",{staticClass:"subprofile__inp",attrs:{color:"deep-purple-10",square:"",outlined:"","bottom-slots":"",label:t.$t("sub.name"),counter:"",maxlength:"35"},model:{value:t.userdata.username,callback:function(e){t.$set(t.userdata,"username",e)},expression:"userdata.username"}}),a("q-input",{staticClass:"subprofile__inp",attrs:{color:"deep-purple-10",square:"",outlined:"","bottom-slots":"",label:t.$t("sub.surname"),counter:"",maxlength:"35"},model:{value:t.userdata.surname,callback:function(e){t.$set(t.userdata,"surname",e)},expression:"userdata.surname"}}),a("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.change")},on:{click:t.tryChangeUData}})],1),a("q-tab-panel",{staticClass:"subprofile__settings",attrs:{name:"settings"}},[a("q-input",{staticClass:"subprofile__inp",attrs:{type:"email",square:"",outlined:"","bottom-slots":"",color:"deep-purple-10",value:t.user.identity,label:t.$t("sub.email"),readonly:"",counter:"",maxlength:"50"}}),a("q-input",{staticClass:"subprofile__inp",attrs:{square:"",color:"deep-purple-10",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",label:t.$t("sub.oldPW"),counter:"",maxlength:"25"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:t.mailpw.oldpw,callback:function(e){t.$set(t.mailpw,"oldpw",e)},expression:"mailpw.oldpw"}}),a("q-input",{staticClass:"subprofile__inp",attrs:{square:"",color:"deep-purple-10",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",label:t.$t("sub.newPW"),counter:"",maxlength:"25"},model:{value:t.mailpw.newpw,callback:function(e){t.$set(t.mailpw,"newpw",e)},expression:"mailpw.newpw"}}),a("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.change")},on:{click:t.tryChangePw}})],1)],1)],1)]):t._e()},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a481"),a("f559"),a("c47a")),r=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hitslist"},[a("div",[a("table",{staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("td",{staticStyle:{width:"30%","min-width":"30%","max-width":"30%","text-align":"left"}},[t._v(t._s(t.$t("hits.job")))]),a("td",{staticStyle:{width:"25%","min-width":"25%","max-width":"25%"}},[t._v(t._s(t.$t("hits.company")))]),a("td",{staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.remarks")))]),a("td",{staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.sent")))]),a("td",{staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.seen")))])])]),t._l(t.cvhitsHistory,(function(e){return a("tr",{key:e.cvjob_id,staticClass:"jobstat"},[a("td",{staticStyle:{"text-align":"left"}},[a("a",{staticClass:"link1",attrs:{target:"_blank",href:"/jobpage?id="+e.cvjob_id}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),a("td",[t._v("\n          "+t._s(e.company)+"\n        ")]),a("td",[e.is_closed?a("span",[t._v("\n            "+t._s(t.$t("hits.closed"))+"\n          ")]):t._e()]),a("td",[t._v("\n          "+t._s(t.formatDate(e.date_created))+"\n        ")]),a("td",[null!=e.date_checked?a("span",[t._v("\n            "+t._s(t.formatDate(e.date_checked))+"\n          ")]):a("span",[t._v("\n            "+t._s(t.$t("hits.no"))+"\n          ")])])])}))],2),0==t.cvhitsHistory.length?a("p",[t._v(t._s(t.$t("hits.none")))]):t._e()])])},l=[],c={name:"HitsList",props:{cvhitsHistory:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:{formatDate:function(t){var e=new Date(t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()}},components:{}},u=c,d=(a("fd3e"),a("2877")),p=Object(d["a"])(u,o,l,!1,null,"2e1ea81d",null),h=p.exports,v=a("9e40"),b=a("2f62");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var w={name:"SubProfile",props:{ownCVs:{type:Array,default:function(){return[]}}},computed:m({},Object(b["b"])(["user"])),data:function(){return{cvhitsHistory:[],cvurlnew:"",cv_upload_error:"",userdata:{username:"",surname:"",insearch:!1},mailpw:{newpw:"",oldpw:""},isPwd:!0,tab:"cv"}},components:{HitsList:h,ProfileNav:v["a"]},deactivated:function(){this.$destroy()},methods:{getCVHitsHistory:function(){var t=this,e="/getcvhitshistory";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){e.data&&e.data.rows?t.cvhitsHistory=e.data.rows:(console.log("cp124 - ошибка cvhitsHistory"),t.$q.notify("Ошибка, не удалось получить данные"))}))},updateCVLink:function(){var t=this,e="/cvupdate.json";this.$axios.post(e,{cvurl:this.cvurlnew},{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?(t.$q.notify(t.$t("sub.dataChanged")),t.$store.dispatch("updateCVUrl",t.cvurlnew),console.log(t.$store.state.user),localStorage.setItem("userData",JSON.stringify(t.$store.state.user))):t.$q.notify(t.$t("sub.dataError")),t.cvurlnew=""}))},cvdel:function(){var t=this,e="/cvdelete.json";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?(t.$q.notify(t.$t("sub.cvDeleted")),t.$store.dispatch("updateCVUrl","")):t.$q.notify(t.$t("sub.dataError")),t.cvurlnew=""}))},uploadCV:function(t){var e=this,a="https://decreed-silk.000webhostapp.com/cvu.php";console.log("start cvu");var s=new FormData;s.append("cv",t[0]),this.$refs.cvUplInp.value=null,this.$axios.post(a,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data&&t.data.startsWith("link:")?(e.logo_upload_error=null,e.cvurlnew=t.data.replace("link:",""),e.updateCVLink()):(console.log("error cv uploading: ",t.data),t.data.startsWith("Error in file size")?(e.cv_upload_error=e.$t("sub.cvTooBig"),e.$q.notify(e.$t("sub.cvTooBig"))):(e.cv_upload_error=e.$t("sub.dataError"),e.$q.notify(e.$t("sub.dataError"))))}))},tryChangeUData:function(){var t=this,e="/changeuserstuff",a=this.userdata;this.$axios.post(e,a,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){console.log("tryChangeUData",e.data),"OK"==e.data?(t.$store.dispatch("setNameSurnameInSearch",a),t.$q.notify(t.$t("sub.dataChanged"))):t.$q.notify(t.$t("sub.wrongData"))}))},tryChangePw:function(){var t=this,e="/changepw",a={oldmail:this.user.identity,oldpw:this.mailpw.oldpw,newpw:this.mailpw.newpw};this.$axios.post(e,a,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){console.log("trychpw",e.data),"OK"==e.data?t.$q.notify(t.$t("sub.pwChanged")):t.$q.notify(t.$t("sub.wrongData"))}))},setLocalRoute:function(t){"personal"==t?(this.userdata.username=this.user.username,this.userdata.surname=this.user.surname,this.userdata.insearch=this.user.insearch):"sentCVS"==t&&this.getCVHitsHistory(),this.tab=t}},mounted:function(){this.userdata.username=this.user.username,this.userdata.surname=this.user.surname,this.userdata.insearch=this.user.insearch}},_=w,y=(a("0085"),a("eebe")),g=a.n(y),$=a("adad"),C=a("823b"),x=a("0016"),q=a("9c40"),k=a("27f9"),j=Object(d["a"])(_,s,n,!1,null,"5a64e4dc",null);e["default"]=j.exports;g()(j,"components",{QTabPanels:$["a"],QTabPanel:C["a"],QIcon:x["a"],QBtn:q["a"],QInput:k["a"]})},"9e40":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pr-md",staticStyle:{"min-width":"270px"}},[a("q-list",{staticClass:"profilenav rounded-borders text-primary",attrs:{padding:""}},[t._l(t.localroutes,(function(e,s){return a("q-item",{key:s,staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute===e.r,"active-class":"nav__link-active"},on:{click:function(a){return t.$emit("setLocalRoute",e.r)}}},[a("q-item-section",{staticStyle:{position:"relative"}},[t._v("\n        "+t._s(e.l)+"\n        "),e.badges>0?a("q-badge",{staticClass:"badge1",attrs:{label:e.badges}}):t._e()],1)],1)})),a("q-item",{staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute==t.localroutesX.r,"active-class":"nav__link-active"},on:{click:function(e){return t.$emit("setLocalRoute",t.localroutesX.r)}}},[a("q-item-section",[t._v(t._s(t.localroutesX.l))])],1)],2)],1)},n=[],i={name:"ProfileNav",props:{localRoute:String,localroutes:Array,localroutesX:Object}},r=i,o=(a("1800"),a("2877")),l=a("eebe"),c=a.n(l),u=a("1c1c"),d=a("66e5"),p=a("4074"),h=a("58a8"),v=a("eb85"),b=Object(o["a"])(r,s,n,!1,null,"ca9835b0",null);e["a"]=b.exports;c()(b,"components",{QList:u["a"],QItem:d["a"],QItemSection:p["a"],QBadge:h["a"],QSeparator:v["a"]})},da7f:function(t,e,a){},f394:function(t,e,a){},f445:function(t,e,a){},fd3e:function(t,e,a){"use strict";var s=a("f394"),n=a.n(s);n.a}}]);