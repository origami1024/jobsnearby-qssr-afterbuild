(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"064c":function(t,e,s){},2817:function(t,e,s){"use strict";var a=s("d25e"),n=s.n(a);n.a},"3e20":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return"subscriber"===t.user.role?s("div",{staticClass:"subprofile"},[s("div",{staticClass:"subprofile__inner"},[s("ProfileNav",{attrs:{localRoute:t.tab,localroutes:[{r:"cv",l:t.$t("sub.navCV")},{r:"sentCVS",l:t.$t("sub.navSentCVs")},{r:"personal",l:t.$t("sub.navPersonal")}],localroutesX:{r:"settings",l:t.$t("sub.navSettings")}},on:{setLocalRoute:t.setLocalRoute}}),s("q-tab-panels",{staticClass:"qtpans",attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab-panel",{staticClass:"subprofile__cv subProfilePaddings",attrs:{name:"cv"}},[s("div",{staticClass:"line",staticStyle:{display:"flex",width:"100%"}},[s("div",{staticStyle:{"max-width":"300px",width:"100%","margin-bottom":"20px"}},[s("label",{staticClass:"uploaderWrapper",attrs:{for:"cvInp",tabindex:"0"}},[s("input",{ref:"cvUplInp",staticStyle:{display:"none"},attrs:{id:"cvInp",type:"file",accept:".doc, .docx, .pdf, .rtf"},on:{change:function(e){return t.uploadCV(t.$refs.cvUplInp.files)}}}),s("span",[t._v(t._s(t.$t("sub.loadCVHeader")))])]),s("div",{staticClass:"urlpanel",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","font-size":"16px"}},[t._v("\n              "+t._s(null!=t.user.cvurl&&""!=t.user.cvurl?t.$t("sub.cvurlUploaded")+":":t.$t("sub.cvurlNone"))+"\n              "),null!=t.user.cvurl&&""!=t.user.cvurl?s("a",{attrs:{href:"https://docs.google.com/viewerng/viewer?url="+t.user.cvurl,target:"_blank"}},[s("q-icon",{attrs:{color:"blue-10",size:"32px",name:"assignment"}})],1):t._e()])])]),s("div",{staticStyle:{"max-width":"300px",display:"flex",width:"100%"}},[null!=t.user.cvurl&&""!=t.user.cvurl?s("q-btn",{staticClass:"headerBtns1",staticStyle:{"margin-left":"auto"},attrs:{dense:"",color:"red-10",label:t.$t("sub.deleteCVBtn")},on:{click:t.cvdel}}):t._e()],1)]),s("q-tab-panel",{attrs:{name:"sentCVS"}},[s("HitsList",{attrs:{cvhitsHistory:t.cvhitsHistory}})],1),s("q-tab-panel",{staticClass:"subprofile__settings subProfilePaddings",attrs:{name:"personal"}},[s("label",{staticClass:"input-label",attrs:{for:"subprofile__uname"}},[t._v(t._s(t.$t("sub.name")))]),s("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__uname",color:"deep-purple-10","bg-color":"white",dense:"",outlined:"","bottom-slots":"",placeholder:t.$t("sub.namePh"),counter:"",maxlength:"35"},model:{value:t.userdata.username,callback:function(e){t.$set(t.userdata,"username",e)},expression:"userdata.username"}}),s("label",{staticClass:"input-label",attrs:{for:"subprofile__usurname"}},[t._v(t._s(t.$t("sub.surname")))]),s("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__usurname",color:"deep-purple-10","bg-color":"white",dense:"",outlined:"","bottom-slots":"",placeholder:t.$t("sub.surnamePh"),counter:"",maxlength:"35"},model:{value:t.userdata.surname,callback:function(e){t.$set(t.userdata,"surname",e)},expression:"userdata.surname"}}),s("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.change")},on:{click:t.tryChangeUData}})],1),s("q-tab-panel",{staticClass:"subprofile__settings subProfilePaddings",attrs:{name:"settings"}},[s("label",{staticClass:"input-label",attrs:{for:"subprofile__email"}},[t._v(t._s(t.$t("sub.email")))]),s("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__email",type:"email",dense:"",outlined:"","bottom-slots":"",color:"deep-purple-10","bg-color":"white",value:t.user.identity,readonly:"",placeholder:"aa@bb.cc",counter:"",maxlength:"50"}}),s("label",{staticClass:"input-label",attrs:{for:"subprofile__oldPW"}},[t._v(t._s(t.$t("sub.oldPW")))]),s("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__oldPW",placeholder:"******",dense:"",color:"deep-purple-10","bg-color":"white",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",counter:"",maxlength:"25"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:t.mailpw.oldpw,callback:function(e){t.$set(t.mailpw,"oldpw",e)},expression:"mailpw.oldpw"}}),s("label",{staticClass:"input-label",attrs:{for:"subprofile__newPW"}},[t._v(t._s(t.$t("sub.newPW")))]),s("q-input",{staticClass:"subprofile__inp",attrs:{for:"subprofile__newPW",color:"deep-purple-10","bg-color":"white",dense:"",placeholder:"******",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",counter:"",maxlength:"25"},model:{value:t.mailpw.newpw,callback:function(e){t.$set(t.mailpw,"newpw",e)},expression:"mailpw.newpw"}}),s("q-btn",{staticClass:"headerBtns1",attrs:{color:"red-10",label:t.$t("sub.change")},on:{click:t.tryChangePw}})],1)],1)],1)]):t._e()},n=[],i=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("a481"),s("f559"),s("c47a")),r=s.n(i),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hitslist"},[s("div",[s("table",{staticStyle:{"box-sizing":"border-box",width:"100%"}},[s("thead",[s("tr",[s("td",{staticStyle:{width:"30%","min-width":"30%","max-width":"30%","text-align":"left"}},[t._v(t._s(t.$t("hits.job")))]),s("td",{staticStyle:{width:"25%","min-width":"25%","max-width":"25%"}},[t._v(t._s(t.$t("hits.company")))]),s("td",{staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.remarks")))]),s("td",{staticClass:"noshow-below550",staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.sent")))]),s("td",{staticClass:"noshow-below550",staticStyle:{width:"15%","min-width":"15%","max-width":"15%"}},[t._v(t._s(t.$t("hits.seen")))])])]),t._l(t.cvhitsHistory,(function(e){return s("tr",{key:e.cvjob_id,staticClass:"jobstat"},[s("td",{staticStyle:{"text-align":"left"}},[s("a",{staticClass:"link1",attrs:{target:"_blank",href:"/jobpage?id="+e.cvjob_id}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),s("td",[t._v("\n          "+t._s(e.company)+"\n        ")]),s("td",[e.is_closed?s("span",[t._v("\n            "+t._s(t.$t("hits.closed"))+"\n          ")]):t._e()]),s("td",{staticClass:"noshow-below550"},[t._v("\n          "+t._s(t.formatDate(e.date_created))+"\n        ")]),s("td",{staticClass:"noshow-below550"},[null!=e.date_checked?s("span",[t._v("\n            "+t._s(t.formatDate(e.date_checked))+"\n          ")]):s("span",[t._v("\n            "+t._s(t.$t("hits.no"))+"\n          ")])])])}))],2),0==t.cvhitsHistory.length?s("p",[t._v(t._s(t.$t("hits.none")))]):t._e()])])},l=[],c={name:"HitsList",props:{cvhitsHistory:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:{formatDate:function(t){var e=new Date(t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()}},components:{}},u=c,d=(s("fde5"),s("2877")),p=Object(d["a"])(u,o,l,!1,null,"6d88d590",null),b=p.exports,h=s("9e40"),f=s("2f62");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){r()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"SubProfile",props:{ownCVs:{type:Array,default:function(){return[]}}},computed:m({},Object(f["b"])(["user"])),data:function(){return{cvhitsHistory:[],cvurlnew:"",cv_upload_error:"",userdata:{username:"",surname:"",insearch:!1},mailpw:{newpw:"",oldpw:""},isPwd:!0,tab:"cv"}},components:{HitsList:b,ProfileNav:h["a"]},deactivated:function(){this.$destroy()},methods:{getCVHitsHistory:function(){var t=this,e="/getcvhitshistory";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){e.data&&e.data.rows?t.cvhitsHistory=e.data.rows:(console.log("cp124 - ошибка cvhitsHistory"),t.$q.notify("Ошибка, не удалось получить данные"))}))},updateCVLink:function(){var t=this,e="/cvupdate.json";this.$axios.post(e,{cvurl:this.cvurlnew},{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?(t.$q.notify(t.$t("sub.dataChanged")),t.$store.dispatch("updateCVUrl",t.cvurlnew),console.log(t.$store.state.user),localStorage.setItem("userData",JSON.stringify(t.$store.state.user))):t.$q.notify(t.$t("sub.dataError")),t.cvurlnew=""}))},cvdel:function(){var t=this,e="/cvdelete.json";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?(t.$q.notify(t.$t("sub.cvDeleted")),t.$store.dispatch("updateCVUrl","")):t.$q.notify(t.$t("sub.dataError")),t.cvurlnew=""}))},uploadCV:function(t){var e=this,s="https://decreed-silk.000webhostapp.com/cvu.php";console.log("start cvu");var a=new FormData;a.append("cv",t[0]),this.$refs.cvUplInp.value=null,this.$axios.post(s,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data&&t.data.startsWith("link:")?(e.logo_upload_error=null,e.cvurlnew=t.data.replace("link:",""),e.updateCVLink()):(console.log("error cv uploading: ",t.data),t.data.startsWith("Error in file size")?(e.cv_upload_error=e.$t("sub.cvTooBig"),e.$q.notify(e.$t("sub.cvTooBig"))):(e.cv_upload_error=e.$t("sub.dataError"),e.$q.notify(e.$t("sub.dataError"))))}))},tryChangeUData:function(){var t=this,e="/changeuserstuff",s=this.userdata;this.$axios.post(e,s,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){console.log("tryChangeUData",e.data),"OK"==e.data?(t.$store.dispatch("setNameSurnameInSearch",s),t.$q.notify(t.$t("sub.dataChanged"))):t.$q.notify(t.$t("sub.wrongData"))}))},tryChangePw:function(){var t=this,e="/changepw",s={oldmail:this.user.identity,oldpw:this.mailpw.oldpw,newpw:this.mailpw.newpw};this.$axios.post(e,s,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){console.log("trychpw",e.data),"OK"==e.data?t.$q.notify(t.$t("sub.pwChanged")):t.$q.notify(t.$t("sub.wrongData"))}))},setLocalRoute:function(t){"personal"==t?(this.userdata.username=this.user.username,this.userdata.surname=this.user.surname,this.userdata.insearch=this.user.insearch):"sentCVS"==t&&this.getCVHitsHistory(),this.tab=t}},mounted:function(){this.userdata.username=this.user.username,this.userdata.surname=this.user.surname,this.userdata.insearch=this.user.insearch}},w=_,y=(s("7579"),s("5c88"),s("eebe")),g=s.n(y),$=s("adad"),C=s("823b"),x=s("0016"),P=s("9c40"),k=s("27f9"),q=s("8572"),j=Object(d["a"])(w,a,n,!1,null,"053c981c",null);e["default"]=j.exports;g()(j,"components",{QTabPanels:$["a"],QTabPanel:C["a"],QIcon:x["a"],QBtn:P["a"],QInput:k["a"],QField:q["a"]})},"4ffa":function(t,e,s){"use strict";var a=s("064c"),n=s.n(a);n.a},"5c88":function(t,e,s){"use strict";var a=s("7a34"),n=s.n(a);n.a},7072:function(t,e,s){},7579:function(t,e,s){"use strict";var a=s("7072"),n=s.n(a);n.a},"7a34":function(t,e,s){},"9e40":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profilenav-wrap",staticStyle:{"min-width":"270px"}},[s("q-list",{staticClass:"profilenav rounded-borders text-primary",attrs:{padding:""}},[t._l(t.localroutes,(function(e,a){return s("q-item",{key:a,staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute===e.r,"active-class":"nav__link-active"},on:{click:function(s){return t.$emit("setLocalRoute",e.r)}}},[s("q-item-section",{staticStyle:{position:"relative"}},[t._v("\n        "+t._s(e.l)+"\n        "),e.badges>0?s("q-badge",{staticClass:"badge1",attrs:{label:e.badges}}):t._e()],1)],1)})),s("q-item",{staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute==t.localroutesX.r,"active-class":"nav__link-active"},on:{click:function(e){return t.$emit("setLocalRoute",t.localroutesX.r)}}},[s("q-item-section",[t._v(t._s(t.localroutesX.l))])],1)],2)],1)},n=[],i={name:"ProfileNav",props:{localRoute:String,localroutes:Array,localroutesX:Object}},r=i,o=(s("2817"),s("4ffa"),s("2877")),l=s("eebe"),c=s.n(l),u=s("1c1c"),d=s("66e5"),p=s("4074"),b=s("58a8"),h=s("eb85"),f=Object(o["a"])(r,a,n,!1,null,"e5185686",null);e["a"]=f.exports;c()(f,"components",{QList:u["a"],QItem:d["a"],QItemSection:p["a"],QBadge:b["a"],QSeparator:h["a"]})},bdca:function(t,e,s){},d25e:function(t,e,s){},fde5:function(t,e,s){"use strict";var a=s("bdca"),n=s.n(a);n.a}}]);