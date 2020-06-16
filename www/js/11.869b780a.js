(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"08a8":function(t,e,a){var i=a("6a22");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("81b5965a",i,!0,{sourceMap:!1})},4267:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobpage",attrs:{itemscope:"",itemtype:"http://schema.org/JobPosting"}},[a("main",{staticClass:"detailed__main1"},[t.job.is_closed?a("div",{staticStyle:{color:"red","font-size":"16px"}},[t._v("\n      "+t._s(t.$t("jobPage.jobClosed"))+" "+t._s(""!=t.job.closed_why?", "+t.$t("jobPage.reason")+": "+t.job.closed_why:"")+"\n    ")]):t._e(),1!=t.job.is_published?a("div",{staticStyle:{color:"gray","font-size":"14px"}},[t._v("\n      ("+t._s(t.$t("jobPage.jobNotPublishedYet"))+")\n    ")]):t._e(),a("h1",{staticClass:"titleHeader",attrs:{itemprop:"title"}},[t._v(t._s(t.job.title))]),a("section",{staticStyle:{"margin-top":"-15px",display:"flex","justify-content":"space-between",marginBottom:"15px"}},[a("div",{staticClass:"detailed__col",staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-end"},attrs:{itemprop:"jobLocation",itemscope:""}},[a("p",{staticClass:"salary-deriv",attrs:{itemprop:"baseSalary"}},[t._v(t._s(t.salary_deriv))]),a("p",{staticClass:"jobpage__city_company",attrs:{itemprop:"address"}},[t._v(t._s(t.job.city&&t.job.city.length>0?t.$t("jobPage.cityWordStart")+t.job.city:t.$t("jobPage.cityNotSet")))])]),a("div",{staticClass:"detailed__col",staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"},attrs:{itemprop:"hiringOrganization",itemscope:"itemscope",itemtype:"http://schema.org/Organization"}},[a("img",{staticClass:"detailed__logo1",staticStyle:{"align-self":"center"},attrs:{src:t.job.logo_url&&t.job.logo_url.length>1?t.job.logo_url:"/statics/companyph.png"}}),a("meta",{attrs:{itemprop:"name",content:t.job.author}}),a("p",{staticClass:"author-link-wrapper"},[a("a",{staticClass:"detailed__author-link1 jobpage__city_company",attrs:{href:"/companypage?id="+t.job.author_id,target:"_blank"}},[t._v(t._s(t.job.author))])])])]),"company"!=t.user.role?a("section",{staticStyle:{"margin-bottom":"20px"}},[t.user.ownCVs.find((function(e){return e.cvjob_id==t.job.job_id}))?"subscriber"==t.user.role?a("div",{staticStyle:{"margin-left":"20px",alignSelf:"flex-end",color:"gray"}},[t._v("\n        ("+t._s(t.$t("jobPage.cvAlreadySent"))+")\n      ")]):t._e():a("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{alignSelf:"center","white-space":"nowrap","margin-top":"4px","margin-left":"10px",padding:"0 10px","font-weight":"700"},attrs:{"text-color":"white",dense:"",label:t.$t("jobPage.sendCV")},on:{click:function(e){return e.preventDefault(),t.$store.dispatch("hitcv",t.job.job_id)}}})],1):t._e(),a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[t._v(t._s(t.$t("jobPage.reqs")))]),t.job.experience>=0||t.job.age1>0||t.job.age2>0||t.job.edu||t.job.langs&&t.job.langs.length>0?t._e():a("div",{staticClass:"subitem"},[t._v("\n          "+t._s(t.$t("jobPage.none"))+"\n        ")]),t.job.experience>=0?a("div",{staticClass:"subitem"},[t._v("\n            "+t._s(1>t.job.experience&&t.job.experience>=0?t.$t("jobPage.expNone"):t.job.experience>=1&&3>t.job.experience?t.$t("jobPage.exp1_3"):t.job.experience>=3&&5>t.job.experience?t.$t("jobPage.exp3_5"):t.job.experience>=5?t.$t("jobPage.exp5_"):"")+"\n        ")]):t._e(),t.job.age1>0||t.job.age2>0?a("div",{staticClass:"subitem"},[t._v("\n          "+t._s(t.$t("jobPage.ageLabel"))+t._s(t.job.age1>0?" "+t.$t("jobPage.from")+" "+t.job.age1:"")+t._s(t.job.age2>0?" "+t.$t("jobPage.to")+" "+t.job.age2:"")+" "+t._s(t.$t("jobPage.years"))+"\n        ")]):t._e(),t.job.edu?a("div",{staticClass:"subitem"},[t._v("\n            "+t._s(t.$t("jobPage.eduLabel"))+" "+t._s(t.job.edu)+"\n        ")]):t._e(),t.job.langs&&t.job.langs.length>0?a("div",{staticClass:"subitem"},[t._v("\n            "+t._s(t.$t("jobPage.langsLabel"))+" "+t._s(t.job.langs.join(", "))+"\n        ")]):t._e()])]),a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[t._v(t._s(t.$t("jobPage.conds")))]),t.salary_deriv?a("div",{staticClass:"subitem"},[t._v("\n            "+t._s(t.$t("jobPage.salLabel"))+" "+t._s(t.salary_deriv)+"\n          ")]):t._e(),t.job.worktime1>0&&t.job.worktime2>0||t.job.schedule?a("div",{staticClass:"subitem"},[t._v("\n            \n            "+t._s(t.$t("jobPage.schedule"))+" "+t._s(t.job.schedule)+" "+t._s(t.job.worktime1?t.$t("jobPage.from2")+" "+t.job.worktime1:"")+" "+t._s(t.job.worktime2?t.$t("jobPage.to")+" "+t.job.worktime2:"")+"\n            \n          ")]):t._e(),a("div",{staticClass:"subitem"},[t._v("\n            \n            "+t._s(t.$t("jobPage.jTypeLabel"))+" "+t._s("c"==t.job.jobtype?t.$t("jobPage.jTypePermanent"):t.$t("jobPage.jTypeTemporary"))+"\n          ")])])]),t.job.description?a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[t._v(t._s(t.$t("jobPage.desc")))]),a("div",{staticClass:"subitem"},[a("div",{staticClass:"descriptionHTML",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(t.job.description)}})])])]):t._e(),a("section",[a("div",[a("h4",{staticClass:"detailed__header1"},[t._v(t._s(t.$t("jobPage.contacts")))]),t.job.contact_mail?a("div",{staticClass:"subitem"},[t._v("\n            "+t._s(t.job.contact_mail)+"\n          ")]):t._e(),t.job.contact_tel?a("div",{staticClass:"subitem"},[t._v("\n            "+t._s(t.job.contact_tel)+"\n          ")]):t._e()])]),a("section",{staticStyle:{"margin-bottom":"0",display:"flex","justify-content":"space-between"}},[a("meta",{attrs:{itemprop:"datePosted",content:this.job.updated}}),a("p",{staticClass:"date-p"},[t._v(t._s(t.$t("jobPage.publishedDate"))+" "+t._s(t.published))]),a("p",{staticStyle:{"font-size":"17px",display:"flex"}},[a("span",{staticClass:"eyes",staticStyle:{"align-self":"center","margin-right":"3px"}},[t._v(t._s(t.job.hits_all>0?t.job.hits_all:1))]),a("img",{attrs:{src:"/statics/eye1.png"}})])])])])},o=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),n=a.n(s),r=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={name:"jobpage",data:function(){return{salary_deriv1:""}},computed:d(d({},Object(r["b"])(["user",["role","ownCVs"]])),{},{job:function(){return this.$store.state.jobDetails},updated:function(){var t=new Date(this.job.updated);return"в "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+", "+t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()},published:function(){var t=new Date(this.job.published);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()},salary_deriv:function(){var t=this.$t("App.currencyDic")[this.job.currency],e="";return e=this.job.salary_min<1?this.job.salary_max<1?this.$t("jobPage.salaryNone"):this.job.salary_max+" "+t:this.job.salary_min<this.job.salary_max?"".concat(this.job.salary_min," - ").concat(this.job.salary_max)+" "+t:(this.job.salary_min,this.job.salary_max,"".concat(this.job.salary_max)+" "+t),e}}),preFetch:function(t){var e=t.store,a=t.currentRoute,i=(t.previousRoute,t.redirect,t.ssrContext);return i?e.dispatch("setJobDetails",i.req.jobData):e.dispatch("fetchJobDetails",a.query.id)}},p=c,b=(a("d74a"),a("2877")),f=a("9c40"),_=a("eebe"),g=a.n(_),m=Object(b["a"])(p,i,o,!1,null,"6a7f97f1",null);e["default"]=m.exports;g()(m,"components",{QBtn:f["a"]})},"6a22":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"*[data-v-6a7f97f1]{margin:0;font-family:Montserrat,sans-serif}.jobpage[data-v-6a7f97f1]{padding:20px 0px;width:100%}@media screen and (max-width:550px){.jobpage[data-v-6a7f97f1]{padding:20px 20px;padding-top:0}}.detailed__main1[data-v-6a7f97f1]{width:80%;max-width:850px;padding:20px 15px;display:flex;flex-direction:column;margin:0 auto;margin-top:15px;margin-bottom:20px;background:#fff;box-shadow:0 0 3px 2px var(--main-borders-color);border-radius:10px}@media screen and (max-width:550px){.detailed__main1[data-v-6a7f97f1]{width:100%;margin-top:0}}.detailed__main1 .titleHeader[data-v-6a7f97f1]{text-align:left;color:var(--color1);font-family:Montserrat;font-weight:700;font-size:24px!important;line-height:150%!important}@media screen and (max-width:550px){.detailed__main1 .titleHeader[data-v-6a7f97f1]{font-size:16px!important}}section[data-v-6a7f97f1]{margin-bottom:10px;text-align:left}section p[data-v-6a7f97f1]{margin-bottom:0}section li[data-v-6a7f97f1]{margin:5px 0}.detailed__author-link1[data-v-6a7f97f1]{color:var(--main-borders-color);text-decoration:none}.detailed__author-link1[data-v-6a7f97f1]:hover{color:var(--violet-btn-color)}.detailed__logo1[data-v-6a7f97f1]{width:auto;max-height:45px;margin-left:5px;margin-bottom:3px}.detailed__header1[data-v-6a7f97f1]{color:var(--btn-color);margin:0;margin-bottom:10px;font-family:Montserrat,sans-serif;font-weight:700;line-height:130%;font-size:20px}@media screen and (max-width:550px){.detailed__header1[data-v-6a7f97f1]{font-size:13px}}.date-p[data-v-6a7f97f1]{font-family:Montserrat,sans-serif;color:var(--violet-btn-color);font-weight:500;font-size:13px;line-height:15px;align-self:flex-end}@media screen and (max-width:550px){.date-p[data-v-6a7f97f1]{font-size:10px;line-height:11px}}.eyes[data-v-6a7f97f1]{font-size:13px;line-height:130%;font-weight:500;color:var(--color1)}@media screen and (max-width:550px){.eyes[data-v-6a7f97f1]{font-size:10px}}.salary-deriv[data-v-6a7f97f1]{font-size:20px;font-weight:700;color:var(--violet-btn-color)}@media screen and (max-width:550px){.salary-deriv[data-v-6a7f97f1]{font-family:Montserrat,sans-serif;font-weight:500;font-size:14px;line-height:17px}}.jobpage__city_company[data-v-6a7f97f1]{margin-top:12px;font-size:14px;font-weight:700}@media screen and (max-width:550px){.jobpage__city_company[data-v-6a7f97f1]{margin-top:5px;font-weight:500;font-size:10px;line-height:12px}}.padleft[data-v-6a7f97f1]{padding-left:10px}.descriptionHTML[data-v-6a7f97f1]{font-size:16px;line-height:1;word-wrap:break-word;max-width:100%}@media screen and (max-width:550px){.descriptionHTML[data-v-6a7f97f1]{font-size:12px}}.ql-size-small[data-v-6a7f97f1]{font-size:12px}.ql-size-large[data-v-6a7f97f1]{font-size:20px}.salary-deriv[data-v-6a7f97f1]:first-letter{text-transform:uppercase}.subitem[data-v-6a7f97f1]{padding-bottom:5px;font-size:16px;line-height:130%;font-weight:500;color:var(--color1)}@media screen and (max-width:550px){.subitem[data-v-6a7f97f1]{font-size:12px}}.bdscolored[data-v-6a7f97f1]{color:var(--main-borders-color);margin-top:-2px;margin-right:2px;margin-left:10px}",""]),t.exports=e},d74a:function(t,e,a){"use strict";var i=a("08a8"),o=a.n(i);o.a}}]);