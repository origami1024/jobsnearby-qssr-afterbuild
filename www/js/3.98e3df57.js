(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0368":function(t,e,a){"use strict";var i=a("fc8b"),n=a.n(i);n.a},"0a08":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"company"===t.user.role?a("div",{staticClass:"entprofile"},[a("p",{staticClass:"pageHeader noshow-below550"},[t._v(t._s(t.$t("entProfile.entProfileTitle")))]),a("div",{staticClass:"entprofile__inner"},[a("ProfileNav",{attrs:{localRoute:t.tab,localroutes:[{r:"published",l:t.$t("entProfile.navPublishedLabel")},{r:"responses",l:t.$t("entProfile.navResponsesLabel"),badges:t.newcvhitscount},{r:"cabout",l:t.$t("entProfile.navAboutLabel")}],localroutesX:{r:"settings",l:t.$t("entProfile.navSettingsLabel")}},on:{setLocalRoute:t.setLocalRoute}}),a("q-tab-panels",{staticClass:"qtpans",attrs:{animated:""},on:{"before-transition":t.changeTabs},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"entprofile__published",attrs:{name:"published"}},[a("h4",{staticClass:"entprofile__header"},[t._v(t._s(t.$t("entProfile.publishedHeader")))]),a("JobsStats")],1),a("q-tab-panel",{staticClass:"entProfilePaddings",staticStyle:{display:"flex"},attrs:{name:"responses"}},[a("div",{staticClass:"line",staticStyle:{width:"100%","border-radius":"10px"}},[t._l(Object.keys(t.respsJreformat),(function(e){return a("q-expansion-item",{key:e,staticClass:"respExps",staticStyle:{"background-color":"white","border-radius":"10px","margin-bottom":"10px"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"lvl1Wrap",staticStyle:{display:"flex","align-items":"center","font-weight":"500"}},[a("a",{staticClass:"responseLinkLvl1",staticStyle:{display:"flex"},attrs:{href:"/jobpage?id="+e,target:"_blank"}},[t._v("\n                "+t._s(t.resps.find((function(t){return t.cvjob_id==e})).title)+"\n              ")]),a("span",{staticStyle:{"margin-left":"5px","font-family":"Montserrat, sans-serif","font-size":"14px","line-height":"17px"}},[t._v("("+t._s(t.respsJreformat[e].cvhits.length)+")")])]),t.respsJreformat[e].hasNew>0?a("q-badge",{staticStyle:{"background-color":"var(--btn-color)","border-radius":"100%","margin-left":"auto",width:"23px",height:"23px","text-align":"center","justify-content":"center","border-font-family":"Montserrat, sans-serif","font-weight":"bold","font-size":"14px","line-height":"17px",color:"white","align-self":"start"},attrs:{label:t.respsJreformat[e].hasNew}}):t._e()]},proxy:!0}],null,!0)},[a("ol",{staticStyle:{padding:"8px 15px","padding-bottom":"15px",margin:"0 28px","font-family":"Montserrat, sans-serif","font-size":"14px","line-height":"17px"}},t._l(t.respsJreformat[e].cvhits,(function(e){return a("li",{key:e,staticStyle:{"background-color":"white !important","text-align":"left","margin-bottom":"7px"},style:{backgroundColor:null==t.resps.find((function(t){return t.cvhit_id==e})).date_checked?"var(--color-graypink)":"white"}},[a("span",{staticStyle:{display:"block","margin-bottom":"6px"}},[a("div",{staticStyle:{display:"inline-block","line-height":"24px","margin-right":"10px"}},[t._v("\n                    "+t._s(t.resps.find((function(t){return t.cvhit_id==e})).name+" "+t.resps.find((function(t){return t.cvhit_id==e})).surname)+"\n                  ")]),a("a",{staticClass:"responseLinkLvl2",attrs:{href:"https://docs.google.com/viewerng/viewer?url="+t.resps.find((function(t){return t.cvhit_id==e})).cv_url,target:"_blank"},on:{click:function(a){return t.viewHit(e)}}},[a("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"today"}}),a("q-tooltip",[a("p",{staticStyle:{"font-size":"14px",margin:"0"}},[t._v(t._s(t.$t("entProfile.previewHint")))])])],1),a("a",{staticClass:"responseLinkLvl2",attrs:{href:"https://"+t.resps.find((function(t){return t.cvhit_id==e})).cv_url,download:""}},[a("q-tooltip",[a("p",{staticStyle:{"font-size":"14px",margin:"0"}},[t._v(t._s(t.$t("entProfile.downloadHint")))])]),a("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"description"}})],1),null==t.resps.find((function(t){return t.cvhit_id==e})).date_checked?a("span",{staticClass:"newhit"},[t._v("*")]):t._e()]),a("div",{staticStyle:{"margin-bottom":"3px"}},[t._v("\n                  "+t._s(t.$t("entProfile.cvSent")+" "+t.formatDate(t.resps.find((function(t){return t.cvhit_id==e})).date_created))+"\n                ")]),a("div",[t._v("\n                  "+t._s(null!=t.resps.find((function(t){return t.cvhit_id==e})).date_checked?t.$t("entProfile.cvSeen")+" "+t.formatDate(t.resps.find((function(t){return t.cvhit_id==e})).date_checked):t.$t("entProfile.cvNotSeen"))+"\n                  ")])])})),0)])})),0==t.resps.length?a("div",[t._v("Пока нет ни одного отклика")]):t._e()],2)]),a("q-tab-panel",{staticClass:"entProfilePaddings",attrs:{name:"cabout"}},[a("div",[a("label",{staticClass:"cabout-label",attrs:{for:"companyInp"}},[t._v(t._s(t.$t("entProfile.cname")))]),a("q-input",{staticClass:"entprofile__inp",attrs:{for:"companyInp",dense:"",outlined:"","bottom-slots":"","bg-color":"white",color:"deep-purple-10",value:t.cabout.company,placeholder:t.$t("entProfile.cPh"),counter:"",maxlength:"80"},on:{input:function(e){return t.$store.dispatch("caboutPropUpd",{prop:"company",value:e})}}})],1),a("div",{ref:"fileInputWrap",staticClass:"line",staticStyle:{display:"flex",width:"100%","justify-content":"space-between"},on:{drop:t.picDrop}},[a("div",{staticStyle:{width:"100%"}},[a("label",{staticClass:"cabout-label",attrs:{for:"fileInpX"}},[t._v(t._s(t.$t("entProfile.dragLogo")))]),a("label",{staticClass:"uploaderWrapper",attrs:{tabindex:"0"}},[a("input",{ref:"fileInputX",staticStyle:{display:"none"},attrs:{id:"fileInpX",type:"file",accept:".gif,.jpg,.jpeg,.png,.webp,.svg"},on:{change:function(e){return t.setCompanyLogo(t.$refs.fileInputX.files)}}}),a("div",{staticClass:"logo-placeholder",style:{"background-image":"url('"+(t.cabout.logo_url?t.cabout.logo_url:"statics/logoph.png")+"')"}})])])]),a("label",{staticClass:"cabout-label",attrs:{for:"siteInp"}},[t._v(t._s(t.$t("entProfile.siteLabel")))]),a("q-input",{staticClass:"entprofile__inp",attrs:{for:"siteInp",placeholder:t.$t("entProfile.sitePh"),"bg-color":"white",color:"deep-purple-10",dense:"",outlined:"",value:t.cabout.website,counter:"",maxlength:"80"},on:{input:function(e){return t.$store.dispatch("caboutPropUpd",{prop:"website",value:e})}}}),a("label",{staticClass:"cabout-label",attrs:{for:"domainsInp"}},[t._v(t._s(t.$t("entProfile.catPH")))]),a("q-select",{staticClass:"entprofile__domains-inp dropdown-padding-adjust",style:{width:"100%"},attrs:{for:"domainsInp",multiple:"","use-chips":"",outlined:"","dropdown-icon":"none","bg-color":"white",color:"deep-purple-10","max-values":"3",value:t.cabout.domains.map((function(e){return t.$t("entProfile.companyDomains")[e]})),options:t.$t("entProfile.companyDomains"),hint:null},on:{input:function(e){t.$store.dispatch("caboutPropUpd",{prop:"domains",value:e.map((function(e){return t.$t("entProfile.companyDomains").indexOf(e)}))})}}}),a("label",{staticClass:"cabout-label",attrs:{for:"descInp"}},[t._v(t._s(t.$t("entProfile.descLabel")))]),a("q-input",{staticClass:"entprofile__desc-inp",attrs:{for:"descInp",value:t.cabout.full_description,outlined:"",dense:"","bg-color":"white",color:"deep-purple-10",type:"textarea",counter:"",maxlength:"2000",placeholder:t.$t("entProfile.descPh")},on:{input:function(e){return t.$store.dispatch("caboutPropUpd",{prop:"full_description",value:e})}}}),a("q-btn",{staticClass:"headerBtns1",staticStyle:{"margin-top":"10px","align-self":"center","background-color":"var(--violet-btn-color)",color:"white","font-size":"12px","font-height":"15px"},on:{click:t.updateCompanyData}},[t._v("\n          "+t._s(t.$t("entProfile.sendChanges"))+"\n        ")])],1),a("q-tab-panel",{staticClass:"entprofile__settings entProfilePaddings",attrs:{name:"settings"}},[a("h3",{staticStyle:{width:"100%",marginBottom:"10px","text-align":"center"}},[t._v(t._s(t.$t("entProfile.settingsLabel"))+" "),a("strong",[t._v(t._s(t.user.company))])]),a("label",{staticClass:"cabout-label",attrs:{for:"descInp"}},[t._v(t._s(t.$t("entProfile.emailLabel")))]),a("q-input",{staticClass:"entprofile__inp",attrs:{color:"deep-purple-10","bg-color":"white",type:"email",placeholder:"aa@bb.cc",dense:"",outlined:"","bottom-slots":"",value:t.user.identity,counter:"",maxlength:"50"}}),a("label",{staticClass:"cabout-label",attrs:{for:"descInp"}},[t._v(t._s(t.$t("entProfile.oldPWLabel")))]),a("q-input",{staticClass:"entprofile__inp",attrs:{color:"deep-purple-10",placeholder:"******","bg-color":"white",type:t.isPwd?"password":"text",dense:"",outlined:"","bottom-slots":"",counter:"",maxlength:"25"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:t.oldpw,callback:function(e){t.oldpw=e},expression:"oldpw"}}),a("label",{staticClass:"cabout-label",attrs:{for:"descInp"}},[t._v(t._s(t.$t("entProfile.newPWLabel")))]),a("q-input",{staticClass:"entprofile__inp",attrs:{dense:"","bg-color":"white",color:"deep-purple-10",type:t.isPwd?"password":"text",outlined:"","bottom-slots":"",placeholder:"******",counter:"",maxlength:"25"},model:{value:t.newpw,callback:function(e){t.newpw=e},expression:"newpw"}}),a("q-btn",{staticClass:"headerBtns1 headerBtnRed",attrs:{color:"red-10",label:t.$t("entProfile.changeSettingsBtn")},on:{click:t.tryChangePw}})],1)],1)],1)]):t._e()},n=[],o=(a("ac4d"),a("5df3"),a("1c4c"),a("6b54"),a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7514"),a("b54a"),a("6762"),a("2fdb"),a("7f7f"),a("9523")),r=a.n(o),s=a("27bd"),l=a("9e40"),p=a("2f62");function c(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=d(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){s=!0,o=t},f:function(){try{r||null==a.return||a.return()}finally{if(s)throw o}}}}function d(t,e){if(t){if("string"===typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"EntProfile",data:function(){return{respsJreformat:[],resps:[],logo_upload_error:null,logofile:null,oldpw:"",newpw:"",isPwd:!0,tab:"published"}},computed:h(h(h({},Object(p["b"])(["user"])),Object(p["b"])(["cabout"])),{},{newcvhitscount:function(){for(var t=0,e=0;e<this.resps.length;++e)null==this.resps[e].date_checked&&t++;return t}}),deactivated:function(){this.$destroy()},components:{JobsStats:s["a"],ProfileNav:l["a"]},methods:{picDrop:function(t){if(1==t.dataTransfer.files.length){var e=t.dataTransfer.files[0].name,a=e.substr(e.lastIndexOf(".")).toLowerCase();[".gif",".jpg",".jpeg",".png",".webp",".svg"].includes(a)?this.setCompanyLogo(t.dataTransfer.files):this.$q.notify("Неправильный формат картинки")}window.console.log(t)},setCompanyLogo:function(t){var e=this;if(t&&t[0])if(t[0].size<409601){var a="/companyupdpicx.json",i=new FormData;i.append("image",t[0]),this.$axios.post(a,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(t),t.data&&!0===t.data.success&&t.data.link?(e.logo_upload_error=null,e.$store.dispatch("caboutPropUpd",{prop:"logo_url",value:t.data.link}),e.$q.notify(e.$t("entProfile.picUploaded"))):(console.log("error uploading: ",t.data),t.data.msg&&t.data.msg?"file size error"===t.data.msg?(e.logo_upload_error=e.$t("entProfile.picTooBig"),e.$q.notify(e.$t("entProfile.picTooBig"))):"file ext error"===t.data.msg&&(e.logo_upload_error=e.$t("entProfile.picWrongExt"),e.$q.notify(e.$t("entProfile.picWrongExt"))):e.$q.notify(e.$t("entProfile.dataError")))}))}else this.$refs.fileInputX.value="",this.logo_upload_error=this.$t("entProfile.picTooBig"),this.$q.notify(this.$t("entProfile.picTooBig"))},viewHit:function(t){var e=this;if(null==this.resps.find((function(e){return e.cvhit_id==t})).date_checked){var a="/viewhit";this.$axios.post(a,[t],{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(a){"OK"==a.data&&(e.resps.find((function(e){return e.cvhit_id==t})).date_checked=Date.now())}))}else console.log("trying to hit second time")},formatDate:function(t){var e=new Date(t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()},getResps:function(){var t=this,e="/getresps";this.$axios.post(e,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){if(e.data&&e.data.rows){t.resps=e.data.rows;var a,i={},n=c(e.data.rows);try{for(n.s();!(a=n.n()).done;){var o=a.value;i[o.cvjob_id]={},i[o.cvjob_id]["cvhits"]=[],i[o.cvjob_id]["hasNew"]=0}}catch(p){n.e(p)}finally{n.f()}var r,s=c(e.data.rows);try{for(s.s();!(r=s.n()).done;){var l=r.value;i[l.cvjob_id]["cvhits"].push(l.cvhit_id),null==l.date_checked&&(i[l.cvjob_id]["hasNew"]+=1)}}catch(p){s.e(p)}finally{s.f()}t.respsJreformat=i}}))},tryChangePw:function(){var t=this,e="/changepw",a={oldmail:this.user.identity,oldpw:this.oldpw,newpw:this.newpw};this.$axios.post(e,a,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?t.$q.notify(t.$t("entProfile.pwChanged")):t.$q.notify(t.$t("entProfile.pwWrongData"))}))},updateCompanyData:function(){var t=this,e="/companyUpdate.json";this.$axios.post(e,this.cabout,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){"OK"==e.data?t.$q.notify(t.$t("entProfile.dataChanged")):t.$q.notify(t.$t("entProfile.dataError"))}))},changeTabs:function(t){"published"!=t||this.$store.dispatch("getOwnJobs")},setLocalRoute:function(t){"cabout"==t?(this.logo_upload_error=null,this.$store.dispatch("getOwnCAbout")):"responses"==t&&this.getResps(),this.tab=t}},mounted:function(){var t=this;window.addEventListener("dragover",(function(t){t=t||event,t.preventDefault()}),!1),window.addEventListener("drop",(function(t){t=t||event,t.preventDefault()}),!1),this.$store.dispatch("getOwnJobs"),setTimeout((function(){t.getResps()}),100)},watch:{$route:function(t,e){"/entprofile"===t.path&&"cabout"==this.tab&&this.$store.dispatch("getOwnCAbout")}}},x=b,g=(a("c8f6"),a("d8cf"),a("2877")),m=a("adad"),v=a("823b"),_=a("3b73"),w=a("58a8"),y=a("0016"),$=a("05c0"),j=a("9c40"),q=a("27f9"),k=a("ddd8"),P=a("66e5"),C=a("8572"),S=a("b047"),z=a("eebe"),L=a.n(z),O=Object(g["a"])(x,i,n,!1,null,"9e0c405a",null);e["default"]=O.exports;L()(O,"components",{QTabPanels:m["a"],QTabPanel:v["a"],QExpansionItem:_["a"],QBadge:w["a"],QIcon:y["a"],QTooltip:$["a"],QBtn:j["a"],QInput:q["a"],QSelect:k["a"],QItem:P["a"],QField:C["a"],QChip:S["a"]})},"1b37":function(t,e,a){var i=a("4469");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("40ce1d1c",i,!0,{sourceMap:!1})},"220e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"*[data-v-634aab50]{margin:0}.jobsstats[data-v-634aab50]{box-sizing:border-box;width:100%;font-size:16px;line-height:22px;color:var(--color1)}@media screen and (max-width:550px){.jobsstats[data-v-634aab50]{font-size:14px;line-height:20px}}.jobsstats__display[data-v-634aab50]{display:flex;flex-direction:column}.jobsstats__item[data-v-634aab50]{background:#fff;box-shadow:0px 0px 15px rgba(0,0,0,0.15);border-radius:10px;margin-bottom:10px;display:flex;justify-content:space-between;padding:10px 14px}@media screen and (max-width:550px){.jobsstats__item[data-v-634aab50]{margin-bottom:5px}}.jobsstats .jobstat[data-v-634aab50]:hover{transition-duration:0.3s;background-color:#359dfd;color:#fff}.jobsstats .jobstat:hover .link1[data-v-634aab50]{color:#fff}.left-side[data-v-634aab50]{text-align:left;max-width:calc(70% - 3px);width:calc(70% - 3px)}@media screen and (max-width:550px){.left-side[data-v-634aab50]{max-width:calc(50% - 3px);width:calc(50% - 3px)}}.right-side[data-v-634aab50]{text-align:right;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(30% - 3px);width:calc(30% - 3px)}@media screen and (max-width:550px){.right-side[data-v-634aab50]{max-width:calc(50% - 3px);width:calc(50% - 3px)}}.controlbtn[data-v-634aab50]{margin-left:8px}@media screen and (max-width:550px){.controlbtn[data-v-634aab50]{max-width:30px}}.title-link[data-v-634aab50]{text-decoration:none;color:var(--color1);transition-duration:0.3s;font-weight:700;font-size:16px;line-height:18px}.title-link[data-v-634aab50]:hover{color:var(--violet-btn-color)}@media screen and (max-width:550px){.title-link[data-v-634aab50]{font-size:12px;line-height:15px}}.jstatus[data-v-634aab50]{color:var(--violet-btn-color);line-height:16px}",""]),t.exports=e},"221b":function(t,e,a){var i=a("a358");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("b9226e72",i,!0,{sourceMap:!1})},"27bd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobsstats"},[a("div",{staticClass:"jobsstats__display"},t._l(t.jobslist,(function(e){return a("div",{key:e.job_id,staticClass:"jobsstats__item"},[a("div",{staticClass:"left-side"},[a("p",{staticClass:"job-title"},[a("a",{staticClass:"title-link",attrs:{target:"_blank",href:"/jobpage?id="+e.job_id}},[t._v(t._s(e.title))])]),a("div",[t._v(t._s(t.$t("jobsStats.views"))+" "+t._s(Number(e.hits_all)))]),a("div",[t._v(t._s(t.$t("jobsStats.uniqViews"))+" "+t._s(e.hits_uniq))])]),a("div",{staticClass:"right-side"},[a("div",{staticClass:"jstatus"},[t._v("\n          "+t._s(!0===e.is_published&&!1===e.is_closed?t.$t("jobsStats.published"):!0===e.is_published&&!0===e.is_closed?t.$t("jobsStats.closedByUser"):!1===e.is_published&&!1===e.is_closed?t.$t("jobsStats.awaitsAdmin"):null!==e.closed_why&&e.closed_why.length>0?t.$t("jobsStats.closedByAdmin")+': "'+e.closed_why+'"':t.$t("jobsStats.closedByAdmin"))+"\n        ")]),a("div",[e.is_closed?1==e.is_published&&1==e.is_closed?a("q-btn",{staticClass:"controlbtn",attrs:{icon:"work",size:"sm",color:"blue",glossy:""},on:{click:function(a){return t.$store.dispatch("reopenJobById",e.job_id)}}},[a("q-tooltip",[a("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.reopenHint")))])])],1):0==e.is_published&&1==e.is_closed?a("q-btn",{staticClass:"controlbtn",attrs:{icon:"build",size:"sm",color:"purple",glossy:""},on:{click:function(a){return t.$store.dispatch("reopenJobById",e.job_id)}}},[a("q-tooltip",[a("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.resendHint")))])])],1):t._e():a("q-btn",{staticClass:"controlbtn",attrs:{icon:"edit",size:"sm",color:"green",glossy:""},on:{click:function(a){return t.editJob(e.job_id)}}},[a("q-tooltip",[a("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.editHint")))])])],1),a("div",{staticStyle:{display:"inline"}},[a("q-btn",{staticClass:"controlbtn",attrs:{disable:e.is_closed,icon:"work_off",size:"sm",color:"orange",glossy:""},on:{click:function(a){return t.$store.dispatch("closeJobById",{jid:e.job_id,notifier:t.$q.notify})}}}),a("q-tooltip",[a("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.closeHint")))])])],1),a("q-btn",{staticClass:"controlbtn",attrs:{icon:"delete_forever",size:"sm",color:"red",glossy:""},on:{click:function(a){return t.$store.dispatch("deleteJobById",{jid:e.job_id,notifier:t.$q.notify})}}},[a("q-tooltip",[a("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.deleteHint")))])])],1)],1)])])})),0),0==t.jobslist.length?a("p",[t._v(t._s(t.$t("jobsStats.none")))]):t._e()])},n=[],o=(a("7514"),a("f751"),{name:"JobsStats",computed:{jobslist:function(){return this.$store.state.user.ownJobs}},methods:{editJob:function(t){this.$store.dispatch("setAJNewJobsPageType","edit");var e,a=Object.assign({},this.jobslist.find((function(e){return e.job_id==t}))),i=this.$t("App.jcats"),n=this.$t("App.jtypeOptions"),o=this.$t("App.expOpts"),r=this.$t("App.curOpts");e=i.find((function(t){return t.value==a.jcategory})),e||(e=i[0]),a.jcategory=e,e=r.find((function(t){return t.value==a.currency})),e||(e=r[0]),a.currency=e,e=o.find((function(t){return t.value==a.experience})),e||(e=o[0]),a.experience=e,e=n.find((function(t){return t.value==a.jtype})),e||(e=n[0]),a.jtype=e,null==a.contact_mail&&(a.contact_mail=""),null==a.contact_tel&&(a.contact_tel=""),this.$store.dispatch("setAJEditedObj",a),this.$router.push("/addJob")}}}),r=o,s=(a("8fae"),a("2877")),l=a("9c40"),p=a("05c0"),c=a("eebe"),d=a.n(c),f=Object(s["a"])(r,i,n,!1,null,"634aab50",null);e["a"]=f.exports;d()(f,"components",{QBtn:l["a"],QTooltip:p["a"]})},2817:function(t,e,a){"use strict";var i=a("221b"),n=a.n(i);n.a},4469:function(t,e,a){var i=a("24fb"),n=a("1de5"),o=a("e00c");e=i(!1);var r=n(o);e.push([t.i,".q-tab-panel .q-item.q-focusable .q-focus-helper{border-radius:10px}.q-tab-panel .q-item.q-focusable .q-focus-helper:hover{background-color:var(--violet-light)!important}.respExps .q-item{display:flex;justify-content:space-between}.respExps .q-item:hover{background-color:var(--violet-light)!important;border-radius:10px}.respExps .q-item .q-item__section{padding-right:0;border-radius:10px}.respExps .q-item{padding:7px 10px 7px 17px!important;min-height:37px;border-radius:10px}.respExps .q-expansion-item__toggle-icon{height:17px}.respExps.q-expansion-item--expanded a.responseLinkLvl1{font-weight:700!important}.entprofile .q-field--outlined .q-field__control:before{border:0!important}.entprofile__inp .q-field__control{font-size:15px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);height:36px;min-height:36px!important}.entprofile__inp .q-field__native{height:36px!important;min-height:36px!important;padding:0!important}.entprofile__inp .q-field__append,.entprofile__inp .q-field__native input{height:36px}.entprofile__inp .q-field__bottom{padding-right:0}.entprofile .q-input{margin-bottom:0px!important}.entprofile__desc-inp .q-field__control{font-size:15px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);padding:10px;min-height:160px!important}.entprofile__desc-inp .q-field__native{padding:0!important}.entprofile__desc-inp .q-field__bottom{padding-right:0}.entprofile__domains-inp .q-field__control{font-size:15px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);padding:0px;min-height:36px!important}.entprofile__domains-inp .q-field__native{padding:0!important;min-height:36px!important}.entprofile__domains-inp .q-field__bottom{padding-right:0}.entprofile__domains-inp .q-field__append{height:36px}.entprofile__domains-inp .q-select__dropdown-icon{background-image:url("+r+");background-repeat:no-repeat;background-position:50%}.dropdown-padding-adjust .q-field__control{padding-right:4px!important}.entprofile .headerBtns1{font-weight:500!important}.entprofile .expansion1 .q-item__section--side{display:none}.entprofile .expansion1 .q-item__section--main{height:22px;margin-left:auto;border-bottom:1px solid var(--violet-btn-color);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;padding-right:14px;background-image:url("+r+");background-repeat:no-repeat;background-position:right 1px center}.entprofile .expansion1 .q-expansion-item__container .q-focus-helper,.entprofile .expansion1 .q-expansion-item__container .q-link.q-item--dense{height:22px!important;padding:0}.entprofile .q-chip{background-color:var(--chip-color);height:28px}@media screen and (max-width:550px){.entprofile .q-chip{max-width:205px}}@media screen and (max-width:550px){.entprofile .q-chip span{max-width:175px;overflow:hidden;text-overflow:ellipsis;font-size:10px}}.entprofile .q-chip__content{padding:0 6px!important}",""]),t.exports=e},"4ecf":function(t,e,a){var i=a("736a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("ce6621ae",i,!0,{sourceMap:!1})},"736a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".qtpans[data-v-9e0c405a]{width:100%;min-width:864px;min-height:60vh;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;border-radius:10px;box-shadow:0px 5px 15px rgba(0,0,0,0.1)}@media screen and (max-width:550px){.qtpans[data-v-9e0c405a]{min-width:auto}}.entprofile[data-v-9e0c405a]{max-width:900px;padding:20px 0px;padding-top:5px;display:flex;flex-direction:column;justify-content:center}@media screen and (max-width:550px){.entprofile[data-v-9e0c405a]{padding:20px;padding-top:0;min-width:100%}}.entprofile__inner[data-v-9e0c405a]{display:flex}@media screen and (max-width:550px){.entprofile__inner[data-v-9e0c405a]{flex-direction:column}}.entprofile__mid[data-v-9e0c405a]{width:100%}.entprofile p[data-v-9e0c405a]{margin-bottom:15px}.entprofile__inp[data-v-9e0c405a]{width:100%;margin-bottom:12px!important}.entprofile__header[data-v-9e0c405a]{font-family:Montserrat,sans-serif;font-weight:700;font-size:16px;line-height:20px;text-transform:uppercase;color:var(--btn-color);margin:9px 0!important;margin-bottom:20px!important;align-self:center}@media screen and (max-width:550px){.entprofile__header[data-v-9e0c405a]{font-size:14px!important}}.entprofile .tabs[data-v-9e0c405a]{justify-content:center;-webkit-animation-duration:0.3s;animation-duration:0.3s;transition-duration:0.3s}.entprofile .entprofile__published[data-v-9e0c405a]{padding:20px 20px;width:100%;display:flex;flex-direction:column;align-items:flex-start}@media screen and (max-width:550px){.entprofile .entprofile__published[data-v-9e0c405a]{padding:16px 10px}}.entprofile .entprofile__settings[data-v-9e0c405a]{width:100%;display:flex;flex-direction:column;align-items:flex-start}.entprofile .anim1[data-v-9e0c405a]{-webkit-animation-duration:0.3s;animation-duration:0.3s;transition-duration:0.3s}.entprofile .logo-placeholder[data-v-9e0c405a]{min-width:110px;min-height:110px;max-height:110px;background-size:contain;background-repeat:no-repeat;background-position:50%;box-sizing:border-box;transition-duration:0.3s}@media screen and (max-width:550px){.entprofile .lvl1Wrap[data-v-9e0c405a]{width:calc(100% - 50px)}}.entprofile .responseLinkLvl1[data-v-9e0c405a]{color:var(--color1);text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:Montserrat,sans-serif;font-weight:400;font-size:16px;line-height:17px;font-weight:500}.entprofile .responseLinkLvl1[data-v-9e0c405a]:hover{color:var(--btn-color)!important}@media screen and (max-width:550px){.entprofile .responseLinkLvl1[data-v-9e0c405a]{font-size:14px}}.entprofile .responseLinkLvl2[data-v-9e0c405a]{color:var(--violet-btn-color);text-align:left;font-family:Montserrat,sans-serif;font-weight:400;font-size:14px;line-height:17px;margin-right:5px;margin-bottom:5px}.entprofile .responseLinkLvl2[data-v-9e0c405a]:hover{color:var(--btn-color)!important}.entprofile *[data-v-9e0c405a]{margin:0}.uploaderWrapper[data-v-9e0c405a]{display:block;padding:10px;transition-duration:0.3s;min-width:130px;width:130px;height:130px;margin-bottom:15px;cursor:pointer;box-sizing:border-box;background-color:#fff;border:1px dashed #a7a7a7;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1)}.uploaderWrapper[data-v-9e0c405a]:focus{outline:none;box-shadow:inset 0px 0px 0px 2px var(--color1)!important}.uploaderWrapper[data-v-9e0c405a]:hover{border-color:var(--color1)}.uploaderWrapper:hover>.logo-placeholder[data-v-9e0c405a]{outline:1px dashed var(--color1)}.newhit[data-v-9e0c405a]{color:red}.cabout-label[data-v-9e0c405a]{color:var(--color1);font-family:Montserrat,sans-serif;font-weight:500;font-size:15px;line-height:17px;text-align:left;margin-bottom:7px;display:block}.entProfilePaddings[data-v-9e0c405a]{padding:40px 80px 35px 80px}@media screen and (max-width:550px){.entProfilePaddings[data-v-9e0c405a]{padding:30px 34px}}",""]),t.exports=e},8009:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".profilenav-wrap[data-v-0e0154f3]{padding-right:16px}@media screen and (max-width:550px){.profilenav-wrap[data-v-0e0154f3]{padding:0}}@media screen and (max-width:550px){.profilenav[data-v-0e0154f3]{display:flex;flex-wrap:wrap;justify-content:space-between}}.badge1[data-v-0e0154f3]{background-color:var(--btn-color);border-radius:100%;width:28px;height:28px;margin-right:auto;text-align:center;justify-content:center;box-shadow:0px 0px 10px rgba(0,0,0,0.2);font-family:Montserrat;font-weight:700;font-size:14px;line-height:17px}@media screen and (max-width:550px){.badge1[data-v-0e0154f3]{height:22px;width:22px}}.nav__link[data-v-0e0154f3]{background-color:var(--menubg-color);box-shadow:0px 5px 15px rgba(0,0,0,0.1);border-radius:10px;margin-bottom:15px;font-family:Montserrat,sans-serif;font-size:16px;line-height:20px;color:var(--color1);border:0.5px solid rgba(0,0,0,0.2);padding:0}@media screen and (max-width:550px){.nav__link[data-v-0e0154f3]{width:calc(50% - 6px);font-size:12px;line-height:15px;height:35px;margin-bottom:10px}}.nav__link-active[data-v-0e0154f3]{color:#fff;background-color:var(--color1)}",""]),t.exports=e},"8fae":function(t,e,a){"use strict";var i=a("e8b5"),n=a.n(i);n.a},"9e40":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profilenav-wrap",staticStyle:{"min-width":"270px"}},[a("q-list",{staticClass:"profilenav rounded-borders text-primary",attrs:{padding:""}},[t._l(t.localroutes,(function(e,i){return a("q-item",{key:i,staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute===e.r,"active-class":"nav__link-active"},on:{click:function(a){return t.$emit("setLocalRoute",e.r)}}},[a("q-item-section",{staticStyle:{position:"relative","flex-direction":"row","align-items":"center"}},[e.badges>0?a("span",{staticStyle:{"margin-left":"auto","margin-right":"10px"}},[t._v(t._s(e.l))]):a("span",{staticStyle:{display:"inline !important"}},[t._v(t._s(e.l))]),e.badges>0?a("q-badge",{staticClass:"badge1",attrs:{label:e.badges}}):t._e()],1)],1)})),a("q-item",{staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute==t.localroutesX.r,"active-class":"nav__link-active"},on:{click:function(e){return t.$emit("setLocalRoute",t.localroutesX.r)}}},[a("q-item-section",[t._v(t._s(t.localroutesX.l))])],1)],2)],1)},n=[],o={name:"ProfileNav",props:{localRoute:String,localroutes:Array,localroutesX:Object}},r=o,s=(a("2817"),a("0368"),a("2877")),l=a("1c1c"),p=a("66e5"),c=a("4074"),d=a("58a8"),f=a("eb85"),u=a("eebe"),h=a.n(u),b=Object(s["a"])(r,i,n,!1,null,"0e0154f3",null);e["a"]=b.exports;h()(b,"components",{QList:l["a"],QItem:p["a"],QItemSection:c["a"],QBadge:d["a"],QSeparator:f["a"]})},a358:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"@media screen and (max-width:550px){.nav__link.q-item{height:36px;min-height:36px}}",""]),t.exports=e},c8f6:function(t,e,a){"use strict";var i=a("4ecf"),n=a.n(i);n.a},d8cf:function(t,e,a){"use strict";var i=a("1b37"),n=a.n(i);n.a},e8b5:function(t,e,a){var i=a("220e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("3a4fdf94",i,!0,{sourceMap:!1})},fc8b:function(t,e,a){var i=a("8009");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("febcf11a",i,!0,{sourceMap:!1})}}]);