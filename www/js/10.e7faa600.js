(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{1442:function(e,t,a){"use strict";var i=a("18be"),o=a.n(i);o.a},"18be":function(e,t,a){var i=a("2286");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("499e").default;o("a85866c8",i,!0,{sourceMap:!1})},2286:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"*[data-v-332e9a32]{margin:0;font-family:Montserrat,sans-serif}.jobpage[data-v-332e9a32]{padding:20px 0px;width:100%}@media screen and (max-width:550px){.jobpage[data-v-332e9a32]{padding:20px 20px;padding-top:0}}.detailed__main1[data-v-332e9a32]{width:80%;max-width:850px;padding:20px 15px;display:flex;flex-direction:column;margin:0 auto;margin-top:15px;margin-bottom:20px;background:#fff;box-shadow:0 0 3px 2px var(--main-borders-color);border-radius:10px}@media screen and (max-width:550px){.detailed__main1[data-v-332e9a32]{width:100%;margin-top:0}}.detailed__main1 .titleHeader[data-v-332e9a32]{text-align:left;color:var(--color1);font-family:Montserrat;font-weight:700;font-size:24px!important;line-height:150%!important}@media screen and (max-width:550px){.detailed__main1 .titleHeader[data-v-332e9a32]{font-size:16px!important}}section[data-v-332e9a32]{margin-bottom:10px;text-align:left}section p[data-v-332e9a32]{margin-bottom:0}section li[data-v-332e9a32]{margin:5px 0}.detailed__author-link1[data-v-332e9a32]{color:var(--main-borders-color);text-decoration:none}.detailed__author-link1[data-v-332e9a32]:hover{color:var(--violet-btn-color)}.detailed__logo1[data-v-332e9a32]{width:auto;max-height:45px;margin-left:5px;margin-bottom:3px}.detailed__header1[data-v-332e9a32]{color:var(--btn-color);margin:0;margin-bottom:10px;font-family:Montserrat,sans-serif;font-weight:700;line-height:130%;font-size:20px}@media screen and (max-width:550px){.detailed__header1[data-v-332e9a32]{font-size:13px}}.date-p[data-v-332e9a32]{font-family:Montserrat,sans-serif;color:var(--violet-btn-color);font-weight:500;font-size:13px;line-height:15px;align-self:flex-end}@media screen and (max-width:550px){.date-p[data-v-332e9a32]{font-size:10px;line-height:11px}}.eyes[data-v-332e9a32]{font-size:13px;line-height:130%;font-weight:500;color:var(--color1)}@media screen and (max-width:550px){.eyes[data-v-332e9a32]{font-size:10px}}.salary-deriv[data-v-332e9a32]{font-size:20px;font-weight:700;color:var(--violet-btn-color)}@media screen and (max-width:550px){.salary-deriv[data-v-332e9a32]{font-family:Montserrat,sans-serif;font-weight:500;font-size:14px;line-height:17px}}.jobpage__city_company[data-v-332e9a32]{margin-top:12px;font-size:14px;font-weight:700}@media screen and (max-width:550px){.jobpage__city_company[data-v-332e9a32]{margin-top:5px;font-weight:500;font-size:10px;line-height:12px}}.padleft[data-v-332e9a32]{padding-left:10px}.descriptionHTML[data-v-332e9a32]{font-size:16px;line-height:1;word-wrap:break-word;max-width:100%}@media screen and (max-width:550px){.descriptionHTML[data-v-332e9a32]{font-size:12px}}.ql-size-small[data-v-332e9a32]{font-size:12px}.ql-size-large[data-v-332e9a32]{font-size:20px}.salary-deriv[data-v-332e9a32]:first-letter{text-transform:uppercase}.subitem[data-v-332e9a32]{padding-bottom:5px;font-size:16px;line-height:130%;font-weight:500;color:var(--color1)}@media screen and (max-width:550px){.subitem[data-v-332e9a32]{font-size:12px}}.bdscolored[data-v-332e9a32]{color:var(--main-borders-color);margin-top:-2px;margin-right:2px;margin-left:10px}",""]),e.exports=t},4267:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobpage",attrs:{itemscope:"",itemtype:"http://schema.org/JobPosting"}},[a("main",{staticClass:"detailed__main1"},[e.job.is_closed?a("div",{staticStyle:{color:"red","font-size":"16px"}},[e._v("\n      "+e._s(e.$t("jobPage.jobClosed"))+" "+e._s(""!=e.job.closed_why?", "+e.$t("jobPage.reason")+": "+e.job.closed_why:"")+"\n    ")]):e._e(),1!=e.job.is_published?a("div",{staticStyle:{color:"gray","font-size":"14px"}},[e._v("\n      ("+e._s(e.$t("jobPage.jobNotPublishedYet"))+")\n    ")]):e._e(),a("h1",{staticClass:"titleHeader",attrs:{itemprop:"title"}},[e._v(e._s(e.job.title))]),a("section",{staticStyle:{"margin-top":"-15px",display:"flex","justify-content":"space-between",marginBottom:"15px"}},[a("div",{staticClass:"detailed__col",staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-end"},attrs:{itemprop:"jobLocation",itemscope:""}},[a("p",{staticClass:"salary-deriv",attrs:{itemprop:"baseSalary"}},[e._v(e._s(e.salary_deriv))]),a("p",{staticClass:"jobpage__city_company",attrs:{itemprop:"address"}},[e._v(e._s(e.job.city&&e.job.city.length>0?e.$t("jobPage.cityWordStart")+e.job.city:e.$t("jobPage.cityNotSet")))])]),a("div",{staticClass:"detailed__col",staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"},attrs:{itemprop:"hiringOrganization",itemscope:"itemscope",itemtype:"http://schema.org/Organization"}},[a("img",{staticClass:"detailed__logo1",staticStyle:{"align-self":"center"},attrs:{src:e.job.logo_url&&e.job.logo_url.length>1?e.job.logo_url:"/statics/companyph.png"}}),a("meta",{attrs:{itemprop:"name",content:e.job.author}}),a("p",{staticClass:"author-link-wrapper"},[a("a",{staticClass:"detailed__author-link1 jobpage__city_company",attrs:{href:"/companypage?id="+e.job.author_id,target:"_blank"}},[e._v(e._s(e.job.author))])])])]),"company"!=e.user.role&&21!=e.job.author_id?a("section",{staticStyle:{"margin-bottom":"20px"}},[e.user.ownCVs.find((function(t){return t.cvjob_id==e.job.job_id}))?"subscriber"==e.user.role?a("div",{staticStyle:{"margin-left":"20px",alignSelf:"flex-end",color:"gray"}},[e._v("\n        ("+e._s(e.$t("jobPage.cvAlreadySent"))+")\n      ")]):e._e():a("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{alignSelf:"center","white-space":"nowrap","margin-top":"4px","margin-left":"10px",padding:"0 10px","font-weight":"700"},attrs:{"text-color":"white",dense:"",label:e.$t("jobPage.sendCV")},on:{click:function(t){return t.preventDefault(),e.$store.dispatch("hitcv",e.job.job_id)}}})],1):"subscriber"==e.user.role&&21==e.job.author_id?a("div",{staticClass:"cvSentSpan"},[e._v("\n      Только прямые контакты \n    ")]):e._e(),a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[e._v(e._s(e.$t("jobPage.reqs")))]),e.job.experience>=0||e.job.age1>0||e.job.age2>0||e.job.edu||e.job.langs&&e.job.langs.length>0?e._e():a("div",{staticClass:"subitem"},[e._v("\n          "+e._s(e.$t("jobPage.none"))+"\n        ")]),e.job.experience>=0?a("div",{staticClass:"subitem"},[e._v("\n            "+e._s(1>e.job.experience&&e.job.experience>=0?e.$t("jobPage.expNone"):e.job.experience>=1&&3>e.job.experience?e.$t("jobPage.exp1_3"):e.job.experience>=3&&5>e.job.experience?e.$t("jobPage.exp3_5"):e.job.experience>=5?e.$t("jobPage.exp5_"):"")+"\n        ")]):e._e(),e.job.age1>0||e.job.age2>0?a("div",{staticClass:"subitem"},[e._v("\n          "+e._s(e.$t("jobPage.ageLabel"))+e._s(e.job.age1>0?" "+e.$t("jobPage.from")+" "+e.job.age1:"")+e._s(e.job.age2>0?" "+e.$t("jobPage.to")+" "+e.job.age2:"")+" "+e._s(e.$t("jobPage.years"))+"\n        ")]):e._e(),e.job.edu?a("div",{staticClass:"subitem"},[e._v("\n            "+e._s(e.$t("jobPage.eduLabel"))+" "+e._s(e.job.edu)+"\n        ")]):e._e(),e.job.langs&&e.job.langs.length>0?a("div",{staticClass:"subitem"},[e._v("\n            "+e._s(e.$t("jobPage.langsLabel"))+" "+e._s(e.job.langs.join(", "))+"\n        ")]):e._e()])]),a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[e._v(e._s(e.$t("jobPage.conds")))]),e.salary_deriv?a("div",{staticClass:"subitem"},[e._v("\n            "+e._s(e.$t("jobPage.salLabel"))+" "+e._s(e.salary_deriv)+"\n          ")]):e._e(),e.job.worktime1>0&&e.job.worktime2>0||e.job.schedule?a("div",{staticClass:"subitem"},[e._v("\n            \n            "+e._s(e.$t("jobPage.schedule"))+" "+e._s(e.job.schedule)+" "+e._s(e.job.worktime1?e.$t("jobPage.from2")+" "+e.job.worktime1:"")+" "+e._s(e.job.worktime2?e.$t("jobPage.to")+" "+e.job.worktime2:"")+"\n            \n          ")]):e._e(),a("div",{staticClass:"subitem"},[e._v("\n            \n            "+e._s(e.$t("jobPage.jTypeLabel"))+" "+e._s("c"==e.job.jobtype?e.$t("jobPage.jTypePermanent"):e.$t("jobPage.jTypeTemporary"))+"\n          ")])])]),e.job.description?a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[e._v(e._s(e.$t("jobPage.desc")))]),a("div",{staticClass:"subitem"},[a("div",{staticClass:"descriptionHTML",attrs:{itemprop:"description"},domProps:{innerHTML:e._s(e.job.description)}})])])]):e._e(),a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[e._v(e._s(e.$t("jobPage.contacts")))]),e.job.contact_mail?a("div",{staticClass:"subitem"},[e._v("\n            "+e._s(e.job.contact_mail)+"\n          ")]):e._e(),e.job.contact_tel?a("div",{staticClass:"subitem"},[e._v("\n            "+e._s(e.job.contact_tel)+"\n          ")]):e._e()])]),a("section",{staticStyle:{"margin-bottom":"0",display:"flex","justify-content":"space-between"}},[a("meta",{attrs:{itemprop:"datePosted",content:this.job.updated}}),a("p",{staticClass:"date-p"},[e._v(e._s(e.$t("jobPage.publishedDate"))+" "+e._s(e.published))]),a("p",{staticStyle:{"font-size":"17px",display:"flex"}},[a("span",{staticClass:"eyes",staticStyle:{"align-self":"center","margin-right":"3px"}},[e._v(e._s(e.job.hits_all>0?e.job.hits_all:1))]),a("img",{attrs:{src:"/statics/eye1.png"}})])])])])},o=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),n=a.n(s),r=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={name:"jobpage",data:function(){return{salary_deriv1:""}},computed:d(d({},Object(r["b"])(["user",["role","ownCVs"]])),{},{job:function(){return this.$store.state.jobDetails},updated:function(){var e=new Date(this.job.updated);return"в "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+", "+e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()},published:function(){var e=new Date(this.job.published);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()},salary_deriv:function(){var e=this.$t("App.currencyDic")[this.job.currency],t="";return t=this.job.salary_min<1?this.job.salary_max<1?this.$t("jobPage.salaryNone"):this.job.salary_max+" "+e:this.job.salary_min<this.job.salary_max?"".concat(this.job.salary_min," - ").concat(this.job.salary_max)+" "+e:(this.job.salary_min,this.job.salary_max,"".concat(this.job.salary_max)+" "+e),t}}),preFetch:function(e){var t=e.store,a=e.currentRoute,i=(e.previousRoute,e.redirect,e.ssrContext);return i?t.dispatch("setJobDetails",i.req.jobData):t.dispatch("fetchJobDetails",a.query.id)}},p=c,b=(a("1442"),a("2877")),_=a("9c40"),g=a("eebe"),m=a.n(g),j=Object(b["a"])(p,i,o,!1,null,"332e9a32",null);t["default"]=j.exports;m()(j,"components",{QBtn:_["a"]})}}]);