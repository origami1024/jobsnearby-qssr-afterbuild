(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{1373:function(a,t,e){var i=e("b8d1");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=e("499e").default;s("7a987333",i,!0,{sourceMap:!1})},2528:function(a,t,e){"use strict";var i=e("1373"),s=e.n(i);s.a},"3bf7":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.loading?e("div",{staticClass:"cv-list",staticStyle:{"margin-top":"140px"}},[e("div",{staticClass:"lds-dual-ring"})]):"company"===a.$store.state.user.role&&a.$store.state.user.rights&&a.$store.state.user.rights.includes("bauss")||"subscriber"===a.$store.state.user.role&&a.$store.state.user.cv_id&&a.$route.params.id&&a.$store.state.user.cv_id==a.$route.params.id?e("div",{staticClass:"cv-detail"},[e("p",{staticClass:"pageHeader"},[a._v(a._s(a.$t("cvDetail.label")))]),e("div",{staticClass:"cv-detail-inner"},[e("div",{staticClass:"block-1"},[e("div",{staticClass:"cvd-header"},[a._v(a._s(a.cv.name+" "+a.cv.surname))]),e("div",{staticClass:"cvd-subheader"},[a.cv.birth?e("span",[a._v("\n                    "+a._s(new Date(a.cv.birth).toLocaleDateString())+"\n                    ("+a._s(Math.abs(new Date(Date.now()-+new Date(a.cv.birth)).getUTCFullYear()-1970))+"\n                    "+a._s(a.$t("cvDetail.agePostfix"))+")"+a._s(a.cv.sex?",":"")+"\n                ")]):a._e(),a.cv.sex?e("span",[a._v("\n                    "+a._s({m:a.$t("addCv.sexM"),f:a.$t("addCv.sexF")}[a.cv.sex].substring(0,3).toLowerCase())+"\n                ")]):a._e()]),e("div",{staticClass:"cvd-job"},[a._v(a._s(a.cv.wanted_job))]),e("div",{staticClass:"cvd-salary"},[e("span",[a._v("Желаемая зарплата: ")]),e("span",{staticClass:"cvd-sal-line"},[a._v("\n                    "+a._s(a.cv.salary_min?a.cv.salary_min:"")+a._s(a.cv.salary_max&&a.cv.salary_min?" - ":"")+a._s(a.cv.salary_max?a.cv.salary_max:"")+a._s(a.cv.salary_max||a.cv.salary_min?" m":"-")+"\n                ")])])]),e("div",{staticClass:"block-2"},[e("img",{staticStyle:{"max-width":"100%","max-height":"188px"},attrs:{width:"auto",src:"/uploads/cvpics/"+a.cv.photo,alt:"photo"}})]),e("div",{staticClass:"block-3"},[e("div",[e("div",{staticClass:"cvd-block-header"},[a._v("\n                    "+a._s(a.$t("cvDetail.exp"))+"\n                ")]),e("div",{staticClass:"cvd-text"},a._l(a.cv.cvExt.exps,(function(t,i){return e("div",{key:i,staticStyle:{"margin-bottom":"20px"}},[e("div",{staticClass:"cv-enitity"},[a._v("\n                            "+a._s(t.position)+"\n                        ")]),e("div",{staticClass:"cv-place"},[e("span",[a._v(a._s(t.place))]),t.start||t.end?e("span",{staticClass:"cv-year"},[a._v("\n                                "+a._s(a.exptwoDates(t.start,t.end))+"\n                                ")]):a._e()]),e("div",{staticClass:"cv-dsc"},[a._v("\n                            "+a._s(t.desc)+"\n                        ")])])})),0)]),a.cv.edu||a.cv.cvExt&&a.cv.cvExt.edus&&a.cv.cvExt.edus.length?e("div",[e("div",{staticClass:"cvd-block-header"},[a._v("\n                    "+a._s(a.$t("cvDetail.edu"))+"\n                ")]),a.cv.edu?e("div",{staticClass:"cvd-text"},[a._v("\n                    "+a._s(a.cv.edu)+"\n                ")]):e("div",{staticClass:"cvd-text"},a._l(a.cv.cvExt.edus,(function(t,i){return e("div",{key:i,staticStyle:{"margin-bottom":"20px"}},[e("div",{staticClass:"cv-enitity"},[a._v("\n                            "+a._s(t.spec)+"\n                        ")]),e("div",{staticClass:"cv-place"},[e("span",[a._v(a._s(t.place))]),e("span",{staticClass:"cv-year"},[a._v("\n                                "+a._s(t.year)+" "+a._s(a.$t("cvDetail.yearPostfix"))+"\n                            ")])]),t.fac?e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                                "+a._s(a.$t("addCv.fac"))+":\n                            ")]),a._v("\n                            "+a._s(t.fac)+"\n                        ")]):a._e(),t.spec?e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                                "+a._s(a.$t("addCv.spec"))+":\n                            ")]),a._v("\n                            "+a._s(t.spec)+"\n                        ")]):a._e()])})),0)]):a._e()]),e("div",{staticClass:"block-4"},[e("div",[e("div",{staticClass:"cvd-block-header"},[a._v("\n                    "+a._s(a.$t("cvDetail.contacts"))+"\n                ")]),e("div",{staticClass:"cvd-text"},[e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                            "+a._s(a.$t("addCv.tel"))+": \n                        ")]),a._v("\n                        "+a._s(a.cv.tel)+"\n                    ")]),e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                            "+a._s(a.$t("addCv.telHome"))+": \n                        ")]),a._v("\n                        "+a._s(a.cv.tel_home)+"\n                    ")]),a.cv.email?e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                            "+a._s(a.$t("addCv.email"))+": \n                        ")]),a._v("\n                        "+a._s(a.cv.email)+"\n                    ")]):a._e(),a.cv.city_current?e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                            "+a._s(a.$t("addCv.cityCurrent"))+": \n                        ")]),a._v("\n                        "+a._s(a.cv.city_current)+"\n                    ")]):a._e(),a.cv.city_based?e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                            "+a._s(a.$t("addCv.cityBased"))+": \n                        ")]),a._v("\n                        "+a._s(a.cv.city_based)+"\n                    ")]):a._e(),!0===a.cv.family||!1===a.cv.family?e("div",{staticClass:"cvd-line"},[e("span",{staticClass:"bold"},[a._v("\n                            "+a._s(a.cv.family?a.$t("addCv.familyYes"):a.$t("addCv.familyNo"))+"\n                        ")])]):a._e()])])]),e("div",{staticClass:"block-5"},[a.cv.langs&&a.cv.langs.length?e("div",[e("div",{staticClass:"cvd-block-header"},[a._v("\n                    "+a._s(a.$t("cvDetail.langs"))+"\n                ")]),e("div",{staticClass:"cvd-text"},a._l(a.cv.langs,(function(t,i){return e("div",{key:i},[a._v("\n                        "+a._s(t)+"\n                    ")])})),0)]):a._e(),a.cv.car||a.cv.driver.a||a.cv.driver.b||a.cv.driver.c||a.cv.driver.d?e("div",[e("div",{staticClass:"cvd-block-header"},[a._v("\n                    "+a._s(a.$t("cvDetail.skills"))+"\n                ")]),e("div",{staticClass:"cvd-text"},[a.cv.car?e("div",{staticClass:"cvd-line"},[a._v("\n                        "+a._s(a.$t("addCv.carLabel"))+"\n                    ")]):a._e(),a.cv.driver.a||a.cv.driver.b||a.cv.driver.c||a.cv.driver.d?e("div",{staticClass:"cvd-line"},[a._v("\n                        "+a._s(a.$t("cvDetail.carCategory"))+" "+a._s(["","A"][+a.cv.driver.a])+" "+a._s(["","B"][+a.cv.driver.b])+" "+a._s(["","C"][+a.cv.driver.c])+" "+a._s(["","D"][+a.cv.driver.d])+"\n                    ")]):a._e(),a.cv.skills?e("div",{staticClass:"cvd-line bold",staticStyle:{"margin-top":"5px"}},[a._v("\n                        "+a._s(a.cv.skills)+"\n                    ")]):a._e()])]):a._e()])])]):e("p",{staticClass:"pageHeader",staticStyle:{margin:"40px auto"}},[a._v("404. Not found")])},s=[],c=(e("c5f6"),e("28a5"),{data:function(){return{loading:!0,cv:{}}},methods:{exptwoDates:function(a,t){var e=new Date(a),i=new Date(t);return e.getFullYear()!==i.getFullYear()?this.$t("cvDetail.monthsFull")[e.getMonth()]+" "+e.getUTCFullYear()+this.$t("cvDetail.yearPostfix2")+" - "+this.$t("cvDetail.monthsFull")[i.getMonth()]+" "+i.getUTCFullYear()+this.$t("cvDetail.yearPostfix2"):this.$t("cvDetail.monthsFull")[e.getMonth()]+"  - "+this.$t("cvDetail.monthsFull")[i.getMonth()]+" "+i.getUTCFullYear()+this.$t("cvDetail.yearPostfix2")}},activated:function(){var a=this;this.loading=!0;var t=this.$route.params.id||-1;this.$axios.get("/cv/"+t,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(t){if(t.data){var e=t.data,i=["a","b","c","d"];e.driver=e.driver.split("").reduce((function(a,t,e){return a[i[e]]=!!Number(t),a}),{}),a.cv=e,a.loading=!1}else a.$q.notify("Error receiving cv data from the server"),a.loading=!1})).catch((function(t){a.$q.notify("Unknown error with cv data",t),a.loading=!1}))}}),n=c,d=(e("2528"),e("2877")),l=Object(d["a"])(n,i,s,!1,null,"c9fa2a4e",null);t["default"]=l.exports},b8d1:function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'.cv-detail[data-v-c9fa2a4e]{width:754px;margin-bottom:70px!important}@media screen and (max-width:550px){.cv-detail[data-v-c9fa2a4e]{width:100%;padding:0 20px}}.cv-detail-inner[data-v-c9fa2a4e]{background:#fff;opacity:0.99;border:0.5px solid rgba(0,0,0,0.2);box-sizing:border-box;box-shadow:0px 5px 15px rgba(0,0,0,0.1);border-radius:10px;padding:60px 30px 60px 50px;display:grid;grid-template-columns:calc(56% - 30px) calc(44% - 30px);-moz-column-gap:60px;column-gap:60px;row-gap:50px;grid-template-areas:"block-1 block-2" "block-3 block-4" "block-3 block-5";text-align:left}@media screen and (max-width:800px){.cv-detail-inner[data-v-c9fa2a4e]{grid-template-columns:100%;row-gap:30px;padding:30px 20px;grid-template-areas:"block-1" "block-2" "block-4" "block-3" "block-5"}}.cv-detail-inner .block-1[data-v-c9fa2a4e]{grid-area:block-1}@media screen and (max-width:800px){.cv-detail-inner .block-1[data-v-c9fa2a4e]{text-align:center}}.cv-detail-inner .block-2[data-v-c9fa2a4e]{grid-area:block-2;display:flex}@media screen and (max-width:800px){.cv-detail-inner .block-2 img[data-v-c9fa2a4e]{margin:0 auto}}.cv-detail-inner .block-3[data-v-c9fa2a4e]{grid-row:span 2;grid-area:block-3}.cv-detail-inner .block-4[data-v-c9fa2a4e]{grid-area:block-4}.cv-detail-inner .block-5[data-v-c9fa2a4e]{grid-area:block-5}.cv-detail-inner .cvd-block-header[data-v-c9fa2a4e]{font-style:italic;font-weight:600;font-size:18px;line-height:22px;color:#c00027;border-bottom:0.5px solid #000;padding-bottom:8px;margin-bottom:25px}.cv-detail-inner .cvd-header[data-v-c9fa2a4e]{font-weight:700;font-size:28px;line-height:34px;color:#c00027}.cv-detail-inner .cvd-subheader[data-v-c9fa2a4e]{margin-bottom:50px}.cv-detail-inner .cvd-job[data-v-c9fa2a4e]{font-weight:600;font-size:20px;line-height:24px;color:#c00027;margin-bottom:15px}.cv-detail-inner .cvd-salary[data-v-c9fa2a4e]{font-size:18px;line-height:28px;color:#181059}.cv-detail-inner .cvd-salary span[data-v-c9fa2a4e]{font-weight:600}@media screen and (max-width:800px){.cv-detail-inner .cvd-salary[data-v-c9fa2a4e]{display:flex;flex-direction:column}}.cv-detail-inner .cvd-sal-line[data-v-c9fa2a4e]{display:inline-block}.cv-detail-inner .cvd-text[data-v-c9fa2a4e]{font-size:16px;line-height:23px;color:#181059;margin-bottom:50px}.cv-detail-inner .cvd-text .bold[data-v-c9fa2a4e]{font-weight:600}.lds-dual-ring[data-v-c9fa2a4e]{display:inline-block;width:80px;height:80px}.lds-dual-ring[data-v-c9fa2a4e]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #8645ff;border-color:var(--color1) transparent #8645ff transparent;-webkit-animation:lds-dual-ring-data-v-c9fa2a4e 1.2s linear infinite;animation:lds-dual-ring-data-v-c9fa2a4e 1.2s linear infinite}.cv-enitity[data-v-c9fa2a4e]{font-weight:600;font-size:16px;line-height:23px;color:#181059;text-transform:uppercase}.cv-place[data-v-c9fa2a4e]{font-weight:500;color:#8645ff}.cv-year[data-v-c9fa2a4e]{color:#181059;font-style:italic}@-webkit-keyframes lds-dual-ring-data-v-c9fa2a4e{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes lds-dual-ring-data-v-c9fa2a4e{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}',""]),a.exports=t}}]);