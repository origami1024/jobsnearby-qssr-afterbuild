(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{0:function(t,e){},"03de":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uploads"},["company"===t.user.role&&!0===t.user.isagency?s("div",{staticClass:"authed uploads__inner"},[s("h4",{staticClass:"uploads__header"},[t._v(t._s(t.$t("upl.header")))]),s("q-stepper",{ref:"stepper",staticStyle:{paddingLeft:"0"},attrs:{color:"primary",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("q-step",{attrs:{name:1,title:t.$t("upl.stepAdd"),icon:"settings",done:t.step>1}},[s("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("\n          "+t._s(t.$t("upl.chooseFile"))+" "),s("a",{staticStyle:{color:"var(--violet-btn-color)"},attrs:{href:"/statics/vac.xlsx"}},[t._v(t._s(t.$t("upl.fileExample")))])]),s("q-input",{ref:"fileUploader",staticStyle:{"max-width":"250px"},attrs:{outlined:"",dense:"",type:"file",hint:".xls и .xlsx файлы",accept:".xls, .xlsx",name:"fileUploader",id:"fileUploader"},on:{change:t.parseFile}})],1),s("q-step",{attrs:{name:2,title:t.$t("upl.stepPublish"),icon:"create_new_folder",done:t.step>2}},[s("div",[s("table",{staticStyle:{"border-spacing":"0","margin-bottom":"15px"}},[s("thead",[s("tr",{staticStyle:{"background-color":"black",color:"white"}},[s("td",[t._v(t._s(t.$t("upl.tdTilte")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdSalMin")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdSalMax")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdCurr")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdAgeFrom")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdAgeTo")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdTimeFrom")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdTimeTo")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdSchedule")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdLangs")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdEdu")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdExp")))]),s("td",[t._v(t._s(t.$t("upl.tdCity")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdJTyp")))]),s("td",[t._v(t._s(t.$t("upl.tdMore")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdTel")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdMail")))]),s("td",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("upl.tdJCategory")))])])]),t._l(t.parsed,(function(e,a){return s("tr",{key:a,attrs:{itemindex:a},on:{input:t.onEditableInput}},[s("td",{attrs:{contenteditable:"true",propname:"title"}},[t._v(t._s(e.title))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"salary_min"}},[t._v(t._s(e.salary_min))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"salary_max"}},[t._v(t._s(e.salary_max))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"currency"}},[t._v(t._s(e.currency))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"age1"}},[t._v(t._s(e.age1))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"age2"}},[t._v(t._s(e.age2))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"worktime1"}},[t._v(t._s(e.worktime1))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"worktime2"}},[t._v(t._s(e.worktime2))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"schedule"}},[t._v(t._s(e.schedule))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"langs"}},[t._v(t._s(e.langs))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"edu"}},[t._v(t._s(e.edu))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"experience"}},[t._v(t._s(e.experience))]),s("td",{attrs:{contenteditable:"true",propname:"city"}},[t._v(t._s(e.city))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"jtype"}},[t._v(t._s(e.jtype))]),s("td",{attrs:{contenteditable:"true",propname:"description"}},[t._v(t._s(e.description))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"contact_tel"}},[t._v(t._s(e.contact_tel))]),s("td",{staticClass:"noshow-below550",attrs:{contenteditable:"true",propname:"contact_mail"}},[t._v(t._s(e.contact_mail))]),s("td",{staticClass:"noshow-below550",attrs:{propname:"jcategory"}},[t._v(t._s(e.jcategory))])])}))],2),t.step>1?s("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:t.$t("upl.reset")},on:{click:t.resetParsed}}):t._e(),s("q-btn",{attrs:{color:"primary",disabled:t.parsed.length<1,label:t.$t("upl.publish")},on:{click:t.sendNewJobs}})],1)]),s("q-step",{attrs:{name:3,title:t.$t("upl.stepFinish"),icon:"done",done:t.step>3}},[s("p",[t._v(t._s(t.uploadStatus))]),s("q-btn",{attrs:{color:"primary",disabled:t.step.length<3,label:t.$t("upl.addMore")},on:{click:function(e){t.step=1}}})],1)],1),s("h4",{staticClass:"uploads__header"},[t._v(t._s(t.$t("upl.allPublishedHeader"))+" ("+t._s(t.user.ownJobs.length)+")")]),s("div",{staticClass:"uploads__published"},[s("JobsStats")],1)],1):"company"!=t.user.role?s("div",[t._v("\n    "+t._s(t.$t("upl.authPlsMsg"))+"\n  ")]):!1===t.user.isagency?s("div",[t._v("\n    "+t._s(t.$t("upl.onlyAgency"))+"\n  ")]):t._e()])},o=[],i=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("a481"),s("28a5"),s("34ef"),s("9523")),n=s.n(i),r=s("1146"),l=s.n(r),d=s("2f62"),c=s("27bd");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={name:"uploads",data:function(){return{step:1,file:void 0,parsed:[],uploadStatus:this.$t("upl.readyToUpload")}},computed:u({},Object(d["b"])(["user",["role","ownJobs","isagency"]])),mounted:function(){this.$store.dispatch("getOwnJobs")},methods:{onEditableInput:function(t){var e=t.target.parentElement.getAttribute("itemindex"),s=t.target.getAttribute("propname"),a=t.target.textContent;console.log("t ",t.target.getAttribute("propname")),console.log("t1 ",t.target.textContent),console.log("t2 ",t.target.parentElement.getAttribute("itemindex")),this.parsed[e][s]=a},resetParsed:function(){this.parsed=[],this.step=1},transformJCats:function(){var t={"Не имеет значения":0,"Бух учет, финансы":19,"Гос служба":1,"Дизайн, полиграфия":14,"ИТ, Интернет":4,"Красота, фитнес, спорт":12,"Логистика, склад":10,"Маркетинг, реклама":13,"Медицина, Фармация, Ветеринария":9,"Недвижимость, риэлтерские услуги":3,"Нефть и Газ":5,"Образование, репетиторство":6,"Производство, агропром":7,"Рестораны, питание":8,"Строительство":11,"Торговля":2,"Транспорт, автосервис":15,"Туризм, гостиницы":16,"Юриспруденция":17,"HR, кадры":18};this.parsed=this.parsed.map((function(e){return console.log(e.jcategory),e.jcategory=t[e.jcategory],e}))},sendNewJobs:function(){var t=this;this.parsed.length>0?(this.transformJCats(),console.log(this.parsed[0]),this.uploadStatus="Идет загрузка...",this.$emit("scrollTo",0),this.$axios.post("/entrance",this.parsed,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"===e.data?(t.uploadStatus=t.$t("upl.success1"),t.$q.notify(t.$t("upl.success1")),t.$store.dispatch("getOwnJobs")):(e.data&&e.data&&"error limits reached"==e.data.msg?(t.uploadStatus=t.$t("upl.errLimits1")+e.data.added+t.$t("upl.errLimits2")+e.data.total,e.data.added>0&&t.$store.dispatch("getOwnJobs")):t.uploadStatus=t.$t("upl.err1"),console.log(e.data))})),this.parsed=[],this.step=3):this.uploadStatus=this.$t("upl.getData")},parseFile:function(t){this.files=t.target.files;var e=new FileReader,s=this;e.onload=function(t){var e=new Uint8Array(t.target.result),a=l.a.read(e,{type:"array"}),o=a.Sheets[a.SheetNames[0]],i=o["!ref"].split(":");function n(t){return t==s.$t("upl.perm")?"c":t==s.$t("upl.temp")?"v":""}i=Math.min(i[i.length-1].replace(/\D/g,""),32);var r=["title","salary_min","salary_max","currency","contact_tel","contact_mail","description","age1","age2","worktime1","worktime2","schedule","edu","experience","city","jcategory"],d=i;i=0;var c=[],p="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),u=0,b=function(t){p[u]+i in o&&(c[i][t]=o[p[u]+i].v),u+=1};while(i<=d)u=0,c.push({}),r.forEach(b),console.log(p[u]+i in o&&""!=n(o[p[u]+i].v)),p[u]+i in o&&""!=n(o[p[u]+i].v)&&(c[i].jtype=n(o[p[u]+i].v)),u+=1,c[i].langs=[],p[u]+i in o&&c[i].langs.push(o[p[u]+i].v),u+=1,p[u]+i in o&&c[i].langs.push(o[p[u]+i].v),u+=1,p[u]+i in o&&c[i].langs.push(o[p[u]+i].v),u+=1,i++;c.shift(),c.shift(),c=c.filter((function(t){return t.title})),console.log(c),s.parsed=c,s.step=2},e.readAsArrayBuffer(this.files[0])}},components:{JobsStats:c["a"]}},_=b,h=(s("45d7"),s("7f62"),s("2877")),f=s("f531"),v=s("87fe"),m=s("27f9"),g=s("9c40"),x=s("eebe"),w=s.n(x),y=Object(h["a"])(_,a,o,!1,null,"3819de4b",null);e["default"]=y.exports;w()(y,"components",{QStepper:f["a"],QStep:v["a"],QInput:m["a"],QBtn:g["a"]})},2:function(t,e){},"220e":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,"*[data-v-634aab50]{margin:0}.jobsstats[data-v-634aab50]{box-sizing:border-box;width:100%;font-size:16px;line-height:22px;color:var(--color1)}@media screen and (max-width:550px){.jobsstats[data-v-634aab50]{font-size:14px;line-height:20px}}.jobsstats__display[data-v-634aab50]{display:flex;flex-direction:column}.jobsstats__item[data-v-634aab50]{background:#fff;box-shadow:0px 0px 15px rgba(0,0,0,0.15);border-radius:10px;margin-bottom:10px;display:flex;justify-content:space-between;padding:10px 14px}@media screen and (max-width:550px){.jobsstats__item[data-v-634aab50]{margin-bottom:5px}}.jobsstats .jobstat[data-v-634aab50]:hover{transition-duration:0.3s;background-color:#359dfd;color:#fff}.jobsstats .jobstat:hover .link1[data-v-634aab50]{color:#fff}.left-side[data-v-634aab50]{text-align:left;max-width:calc(70% - 3px);width:calc(70% - 3px)}@media screen and (max-width:550px){.left-side[data-v-634aab50]{max-width:calc(50% - 3px);width:calc(50% - 3px)}}.right-side[data-v-634aab50]{text-align:right;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(30% - 3px);width:calc(30% - 3px)}@media screen and (max-width:550px){.right-side[data-v-634aab50]{max-width:calc(50% - 3px);width:calc(50% - 3px)}}.controlbtn[data-v-634aab50]{margin-left:8px}@media screen and (max-width:550px){.controlbtn[data-v-634aab50]{max-width:30px}}.title-link[data-v-634aab50]{text-decoration:none;color:var(--color1);transition-duration:0.3s;font-weight:700;font-size:16px;line-height:18px}.title-link[data-v-634aab50]:hover{color:var(--violet-btn-color)}@media screen and (max-width:550px){.title-link[data-v-634aab50]{font-size:12px;line-height:15px}}.jstatus[data-v-634aab50]{color:var(--violet-btn-color);line-height:16px}",""]),t.exports=e},"27bd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobsstats"},[s("div",{staticClass:"jobsstats__display"},t._l(t.jobslist,(function(e){return s("div",{key:e.job_id,staticClass:"jobsstats__item"},[s("div",{staticClass:"left-side"},[s("p",{staticClass:"job-title"},[s("a",{staticClass:"title-link",attrs:{target:"_blank",href:"/jobpage?id="+e.job_id}},[t._v(t._s(e.title))])]),s("div",[t._v(t._s(t.$t("jobsStats.views"))+" "+t._s(Number(e.hits_all)))]),s("div",[t._v(t._s(t.$t("jobsStats.uniqViews"))+" "+t._s(e.hits_uniq))])]),s("div",{staticClass:"right-side"},[s("div",{staticClass:"jstatus"},[t._v("\n          "+t._s(!0===e.is_published&&!1===e.is_closed?t.$t("jobsStats.published"):!0===e.is_published&&!0===e.is_closed?t.$t("jobsStats.closedByUser"):!1===e.is_published&&!1===e.is_closed?t.$t("jobsStats.awaitsAdmin"):null!==e.closed_why&&e.closed_why.length>0?t.$t("jobsStats.closedByAdmin")+': "'+e.closed_why+'"':t.$t("jobsStats.closedByAdmin"))+"\n        ")]),s("div",[e.is_closed?1==e.is_published&&1==e.is_closed?s("q-btn",{staticClass:"controlbtn",attrs:{icon:"work",size:"sm",color:"blue",glossy:""},on:{click:function(s){return t.$store.dispatch("reopenJobById",e.job_id)}}},[s("q-tooltip",[s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.reopenHint")))])])],1):0==e.is_published&&1==e.is_closed?s("q-btn",{staticClass:"controlbtn",attrs:{icon:"build",size:"sm",color:"purple",glossy:""},on:{click:function(s){return t.$store.dispatch("reopenJobById",e.job_id)}}},[s("q-tooltip",[s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.resendHint")))])])],1):t._e():s("q-btn",{staticClass:"controlbtn",attrs:{icon:"edit",size:"sm",color:"green",glossy:""},on:{click:function(s){return t.editJob(e.job_id)}}},[s("q-tooltip",[s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.editHint")))])])],1),s("div",{staticStyle:{display:"inline"}},[s("q-btn",{staticClass:"controlbtn",attrs:{disable:e.is_closed,icon:"work_off",size:"sm",color:"orange",glossy:""},on:{click:function(s){return t.$store.dispatch("closeJobById",{jid:e.job_id,notifier:t.$q.notify})}}}),s("q-tooltip",[s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.closeHint")))])])],1),s("q-btn",{staticClass:"controlbtn",attrs:{icon:"delete_forever",size:"sm",color:"red",glossy:""},on:{click:function(s){return t.$store.dispatch("deleteJobById",{jid:e.job_id,notifier:t.$q.notify})}}},[s("q-tooltip",[s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.deleteHint")))])])],1)],1)])])})),0),0==t.jobslist.length?s("p",[t._v(t._s(t.$t("jobsStats.none")))]):t._e()])},o=[],i=(s("7514"),s("f751"),{name:"JobsStats",computed:{jobslist:function(){return this.$store.state.user.ownJobs}},methods:{editJob:function(t){this.$store.dispatch("setAJNewJobsPageType","edit");var e,s=Object.assign({},this.jobslist.find((function(e){return e.job_id==t}))),a=this.$t("App.jcats"),o=this.$t("App.jtypeOptions"),i=this.$t("App.expOpts"),n=this.$t("App.curOpts");e=a.find((function(t){return t.value==s.jcategory})),e||(e=a[0]),s.jcategory=e,e=n.find((function(t){return t.value==s.currency})),e||(e=n[0]),s.currency=e,e=i.find((function(t){return t.value==s.experience})),e||(e=i[0]),s.experience=e,e=o.find((function(t){return t.value==s.jtype})),e||(e=o[0]),s.jtype=e,null==s.contact_mail&&(s.contact_mail=""),null==s.contact_tel&&(s.contact_tel=""),this.$store.dispatch("setAJEditedObj",s),this.$router.push("/addJob")}}}),n=i,r=(s("8fae"),s("2877")),l=s("9c40"),d=s("05c0"),c=s("eebe"),p=s.n(c),u=Object(r["a"])(n,a,o,!1,null,"634aab50",null);e["a"]=u.exports;p()(u,"components",{QBtn:l["a"],QTooltip:d["a"]})},3:function(t,e){},"45d7":function(t,e,s){"use strict";var a=s("8ced"),o=s.n(a);o.a},"7f62":function(t,e,s){"use strict";var a=s("db61"),o=s.n(a);o.a},"8ced":function(t,e,s){var a=s("e0ce");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=s("499e").default;o("4bd75d66",a,!0,{sourceMap:!1})},"8fae":function(t,e,s){"use strict";var a=s("e8b5"),o=s.n(a);o.a},db61:function(t,e,s){var a=s("ffc2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=s("499e").default;o("5ba8f312",a,!0,{sourceMap:!1})},e0ce:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".uploads[data-v-3819de4b]{max-width:1280px;margin-bottom:20px!important}.uploads__header[data-v-3819de4b]{margin-top:16px;margin-bottom:8px;font-size:15px;font-weight:600}.uploads__published[data-v-3819de4b]{padding:10px;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;border-radius:10px;box-shadow:0px 5px 15px rgba(0,0,0,0.1)}@media screen and (max-width:550px){.uploads[data-v-3819de4b]{padding:0 20px}}.uploads table[data-v-3819de4b]{border-collapse:collapse}.uploads tr[data-v-3819de4b]:nth-child(odd){background-color:#eee}.uploads .authed[data-v-3819de4b]{margin:10px 0}.uploads .q-stepper[data-v-3819de4b]{background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;border-radius:10px;box-shadow:0px 5px 15px rgba(0,0,0,0.1)}",""]),t.exports=e},e8b5:function(t,e,s){var a=s("220e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=s("499e").default;o("3a4fdf94",a,!0,{sourceMap:!1})},ffc2:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,"@media screen and (max-width:550px){.uploads .q-stepper div.q-stepper__step-inner{padding:10px!important}}",""]),t.exports=e}}]);