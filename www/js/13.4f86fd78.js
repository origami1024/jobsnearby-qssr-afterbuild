(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"3c82":function(t,a,e){var i=e("3c8a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("377fe9c4",i,!0,{sourceMap:!1})},"3c8a":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"*[data-v-070f9037]{margin:0;font-family:Montserrat,sans-serif}.jobpage[data-v-070f9037]{padding:20px 0px}@media screen and (max-width:550px){.jobpage[data-v-070f9037]{padding:20px 20px}}.detailed__main[data-v-070f9037]{width:80%;max-width:850px;background-color:#fff;padding:0 10px;padding-top:10px;box-sizing:border-box;border-radius:10px;box-shadow:0 0 3px 2px var(--main-borders-color);display:flex;flex-direction:column;margin:0 auto;margin-top:15px;width:850px}@media screen and (max-width:950px){.detailed__main[data-v-070f9037]{width:700px}}@media screen and (max-width:800px){.detailed__main[data-v-070f9037]{width:550px}}@media screen and (max-width:550px){.detailed__main[data-v-070f9037]{width:100%}}.detailed__main .titleHeader[data-v-070f9037]{font-size:24px!important;margin-top:8px}.detailed__main .font-wrap[data-v-070f9037]{font-size:16px}@media screen and (max-width:550px){.detailed__main .font-wrap[data-v-070f9037]{font-size:12px}}section[data-v-070f9037]{margin-bottom:15px;text-align:left;padding-bottom:5px}section p[data-v-070f9037]{margin-bottom:0}section li[data-v-070f9037]{margin:5px 0}.detailed__button[data-v-070f9037]{background-color:#b4e873;padding:5px;border:0;font-size:20px;cursor:pointer}.detailed__button[data-v-070f9037]:hover{color:#fff}.detailed__author-link[data-v-070f9037]{color:#0ca0df}.detailed__col[data-v-070f9037],.detailed__line[data-v-070f9037]{display:flex;justify-content:space-between}.detailed__col[data-v-070f9037]{flex-direction:column}.detailed__logo[data-v-070f9037]{text-align:center;width:150px;height:65px;line-height:50px;background-size:contain;background-repeat:no-repeat;background-position:50%}.detailed__header[data-v-070f9037]{color:var(--btn-color);margin:10px 0px;margin-bottom:5px;font-size:20px}.subitem[data-v-070f9037]{padding-bottom:5px;padding-top:5px;font-size:16px}@media screen and (max-width:550px){.subitem[data-v-070f9037]{font-size:12px}}.padleft[data-v-070f9037]{padding-left:10px}.descriptionHTML[data-v-070f9037]{font-size:14px;line-height:1.1;word-wrap:break-word;max-width:100%;white-space:pre-wrap}.ql-size-small[data-v-070f9037]{font-size:12px}.ql-size-large[data-v-070f9037]{font-size:20px}.salary-deriv[data-v-070f9037]:first-letter{text-transform:uppercase}",""]),t.exports=a},"944a":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"jobpage",attrs:{itemscope:"",itemtype:"http://schema.org/Organization"}},[e("main",{staticClass:"detailed__main"},[e("section",{staticClass:"detailed__line",staticStyle:{marginBottom:"5px"}},[e("div",{staticClass:"detailed__col"},[e("h1",{staticClass:"titleHeader",attrs:{itemprop:"name"}},[t._v(t._s(t.cdata.company))]),e("div",{staticStyle:{width:"100%"}},[e("p",{staticClass:"font-wrap",attrs:{itemprop:"website"}},[t._v("\n            "+t._s(t.cdata.website)+"\n          ")])])]),e("div",{staticClass:"detailed__logo",style:{"background-image":"url("+(t.cdata.logo_url&&t.cdata.logo_url.length>0?t.cdata.logo_url:"/statics/companyph.png")+")"}})]),t.cdata.domains.length>0?e("section",[e("h4",{staticClass:"detailed__header"},[t._v(t._s(t.$t("companyPage.categoriesHeader")))]),t.cdata.domains[0]?e("div",{staticClass:"subitem",attrs:{itemprop:"industry"}},[t._v("\n        "+t._s(t.$t("entProfile.companyDomains")[t.cdata.domains[0]])+"\n      ")]):t._e(),t.cdata.domains[1]?e("div",{staticClass:"subitem",attrs:{itemprop:"industry"}},[t._v("\n        "+t._s(t.$t("entProfile.companyDomains")[t.cdata.domains[1]])+"\n      ")]):t._e(),t.cdata.domains[2]?e("div",{staticClass:"subitem",attrs:{itemprop:"industry"}},[t._v("\n        "+t._s(t.$t("entProfile.companyDomains")[t.cdata.domains[2]])+"\n      ")]):t._e()]):t._e(),e("section",[e("h4",{staticClass:"detailed__header"},[t._v(t._s(t.$t("companyPage.descHeader")))]),e("div",{staticClass:"subitem"},[t.cdata.full_description&&t.cdata.full_description.length>0?e("div",{staticClass:"descriptionHTML",attrs:{itemprop:"description"}},[t._v(t._s(t.cdata.full_description))]):e("div",[t._v("\n          "+t._s(t.$t("companyPage.descPh"))+"\n        ")])])]),e("section",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("p",{staticStyle:{"margin-right":"50px"}},[t._v(t._s(t.$t("companyPage.publishedJobsCountLabel"))),e("span",[t._v(t._s(t.cdata.jobs_count>0?t.cdata.jobs_count:1))])]),e("p",[t._v(t._s(t.$t("companyPage.registrationDate"))),e("span",[t._v(t._s(t.timeCreated))])])])])])},n=[],d={name:"companypage",meta:function(){return{title:this.cdata.company,meta:{ogTitle:{name:"og:title",content:this.cdata.company},ogDesc:{name:"og:description",content:"Работа в Туркменистане. Ежедневное обновление базы вакансий в Туркменистане. Вакансии Туркменистан. Работа в Ашхабаде Мары Хазар Балканабад. Найти работу в Ашхабаде. "},description:{name:"description",content:"Работа в Туркменистане. Ежедневное обновление базы вакансий в Туркменистане. Вакансии Туркменистан. Работа в Ашхабаде Мары Хазар Балканабад. Найти работу в Ашхабаде. "}}}},preFetch:function(t){var a=t.store,e=t.currentRoute,i=(t.previousRoute,t.redirect,t.ssrContext);return i?a.dispatch("setCompanyDetails",i.req.companyData):a.dispatch("fetchCompanyDetails",e.query.id)},computed:{cdata:function(){return this.$store.state.cdata},timeCreated:function(){var t=new Date(this.cdata.time_created);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()}},methods:{getCompanyData:function(){var t=this,a=config.jobsUrl+"/companyby.idjson="+this.$route.query.id;this.ajaxLoading=!0,axios.get(a,null,{headers:{"Content-Type":"application/json"}}).then((function(a){t.cdata=a.data,t.ajaxLoading=!1}))}}},o=d,s=(e("a9f2"),e("2877")),r=Object(s["a"])(o,i,n,!1,null,"070f9037",null);a["default"]=r.exports},a9f2:function(t,a,e){"use strict";var i=e("3c82"),n=e.n(i);n.a}}]);