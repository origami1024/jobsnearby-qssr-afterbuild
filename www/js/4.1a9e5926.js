(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0bb9":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return"company"===t.$store.state.user.role&&t.$store.state.user.rights&&t.$store.state.user.rights.includes("bauss")?e("div",{staticClass:"cv-list"},[e("p",{staticClass:"pageHeader"},[t._v(t._s(t.$t("cvList.cvListLabel")))]),e("CvsFilter",{ref:"cvsFilters",attrs:{count:t.count},on:{"submit-search":t.searchCvs}}),t.loading?e("div",{staticClass:"cv-list",staticStyle:{"margin-top":"140px"}},[e("div",{staticClass:"lds-dual-ring"})]):e("div",t._l(t.cvs,(function(a){return e("div",{key:a.id,staticClass:"cv-row"},[e("div",{staticClass:"cv-col-id"},[t._v(t._s(a.id))]),e("div",{staticClass:"cv-col-photo",style:{backgroundSize:a.photo?"100%":"",backgroundImage:"url('"+(a.photo?"/uploads/cvpics/"+a.photo:"statics/subscriber-logo-ph.svg")+"')"}}),e("div",{staticClass:"cv-col-mid"},[e("div",{staticClass:"cv-top-line"},[e("router-link",{staticClass:"cv-name",attrs:{to:"/cvs/"+a.id}},[t._v("\n                        "+t._s(a.name+" "+a.surname)+"\n                    ")]),e("div",{staticClass:"cv-city"},[t._v(t._s(a.city_current||a.city_home||"-"))])],1),e("div",{staticClass:"cv-body-line"},[e("div",{staticClass:"left"},[e("div",{staticClass:"cv-secondary"},[t._v(t._s(a.wantedJob))]),e("div",{staticClass:"cv-secondary"},[t._v(t._s(a.salary_min?a.salary_min+"m - ":"")+" "+t._s(a.salary_max?a.salary_max+"m":""))]),e("div",{staticClass:"cv-text"},[t._v("\n                            "+t._s(a.exp&&a.total_exp?t.$t("addCv.expTotal")+" "+a.total_exp+" "+t.$t("addCv.expY"):"")+"\n                            "+t._s(a.langs&&a.langs.length?t.$t("cvList.langs1")+" "+a.langs.length+" "+t.$t("cvList.langs2")+".":"")+"\n                            "+t._s(a.edu?t.$t("cvList.edu")+": "+a.edu+"...":"")+"\n                        ")])]),e("div",{staticClass:"right",staticStyle:{"margin-top":"auto"}},[e("div",{staticClass:"cv-tel cv-tel-1"},[t._v(t._s(a.tel))]),e("div",{staticClass:"cv-tel"},[t._v(t._s(a.tel_home))]),e("div",{staticClass:"cv-secondary",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formatDate(a.last_logged_in)))])])])])])})),0),t.pages&&t.pages>0?e("div",{staticClass:"paginationWrap"},t._l(1==t.page_current?Math.min(t.pages,3):Math.min(t.pages,t.page_current+1),(function(a){return e("a",{directives:[{name:"show",rawName:"v-show",value:a>=(t.page_current!=t.pages?t.page_current-1:t.page_current-2),expression:"(i >= (page_current != pages ? page_current - 1 : page_current - 2))"}],key:a,class:{pageBtns:!0,currentPage:t.page_current==a},attrs:{href:"/?page="+a},on:{click:function(e){return e.preventDefault(),t.fetchCvs(a)}}},[t._v("\n        "+t._s(a)+"\n      ")])})),0):t._e()],1):e("p",{staticClass:"pageHeader",staticStyle:{margin:"40px auto"}},[t._v("404. Not found")])},n=[],r=(e("6762"),e("2fdb"),e("c5f6"),e("7cdf"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"bounce"}},[e("div",{staticClass:"cv-search__wrapper",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("div",{staticStyle:{"text-align":"left",width:"100%","margin-bottom":"6px",color:"#c00027","font-weight":"600","font-size":"16px"}},[t._v(t._s(t.$t("cvSearch.nameSearch")))]),e("div",{staticClass:"jobs__top-searchx"},[e("button",{staticClass:"filtersHamburgerBtnx",on:{click:function(a){t.isOpen=!t.isOpen}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchLine,expression:"searchLine"}],staticClass:"searchInputX",staticStyle:{border:"none"},attrs:{type:"text",placeholder:t.$t("jobs.searchPh")},domProps:{value:t.searchLine},on:{keypress:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.submitSearch(a)},input:function(a){a.target.composing||(t.searchLine=a.target.value)}}}),e("button",{staticClass:"headerBtns1 searchBtnX",on:{click:t.submitSearch}})]),e("div",{staticStyle:{"align-self":"flex-start","margin-bottom":"8px","text-align":"left"}},[e("div",[t._v("\n                "+t._s(t.$t("cvSearch.found")+" "+t.count+" "+t.$t("cvSearch.cvs"))+"\n            ")])]),t.isOpen?e("div",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},[e("div",{staticClass:"w586 field-widget"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("cvSearch.position1")))])]),e("q-select",{ref:"position",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.position,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.jobTitleOptions,hint:null,placeholder:t.$t("filters.fJCatPh"),"dropdown-icon":"none",maxlength:75},on:{input:t.positionUpd,filter:t.jobTitleFilterFn,keyup:t.addNewJobTitle}})],1),e("div",{staticClass:"w586 field-widget"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.salaryLabel")))])]),e("q-input",{ref:"salary_min",staticClass:"salInputsAdaptable salInput1",staticStyle:{"margin-right":"10px",width:"calc(100%)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMinPH"),hint:null},model:{value:t.search.sal_min,callback:function(a){t.$set(t.search,"sal_min",a)},expression:"search.sal_min"}})],1),e("div",{staticClass:"w586 field-widget"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("cvSearch.expName")))])]),e("q-select",{ref:"expname",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.expname,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.expNameOptions,hint:null,placeholder:t.$t("cvSearch.expNamePh"),"dropdown-icon":"none",maxlength:75},on:{input:t.expNameUpd,filter:t.expNameFilterFn,keyup:t.addNewExpNameTitle}})],1),e("div",{staticClass:"w586 field-widget"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("addCv.edu")))])]),e("q-select",{ref:"edu",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.edu,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.eduOpts,hint:null,placeholder:t.$t("addCv.eduph"),"dropdown-icon":"none",maxlength:30},on:{input:function(a){t.search.edu=a},filter:t.filterFnEdu,keyup:function(a){t.search.edu=a.target.value}}})],1),e("div",{staticClass:"w586 field-widget"},[e("div",{staticClass:"sal-wrap"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("cvSearch.expLabelYears")))])]),e("div",{staticClass:"line"},[e("q-input",{ref:"exp_min",staticClass:"salInputsAdaptable salInput1",staticStyle:{"margin-right":"10px",width:"calc(50% - 5px)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMinPH"),hint:null},model:{value:t.search.exp_min,callback:function(a){t.$set(t.search,"exp_min",a)},expression:"search.exp_min"}}),e("q-input",{ref:"exp_max",staticClass:"salInputsAdaptable",staticStyle:{width:"calc(50% - 5px)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMaxPH"),hint:null},model:{value:t.search.exp_max,callback:function(a){t.$set(t.search,"exp_max",a)},expression:"search.exp_max"}})],1)])]),e("div",{staticClass:"w586 field-widget"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("addCv.cityCurrent")))])]),e("q-select",{ref:"city_current",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.city_current,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.cityOptions,hint:null,placeholder:t.$t("addCv.cityph"),"dropdown-icon":"none"},on:{input:t.cityUpd,filter:t.filterFn,keyup:t.addNewCity}})],1),e("hr",{staticClass:"cv-hr",staticStyle:{margin:"8px 0"}}),e("div",{staticClass:"w586"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.langsLabel")))])]),e("div",{staticClass:"flex"},[e("q-select",{ref:"lang",staticClass:"dropdown-padding-adjust lang-select",staticStyle:{"flex-grow":"1","margin-right":"8px"},attrs:{options:t.langOpts,"use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",placeholder:t.$t("addCv.langph"),dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","dropdown-icon":"none",hint:null},on:{filter:t.filterFnLangs,"new-value":t.langsEnter,"input-value":t.langInputShenanigans},scopedSlots:t._u([{key:"option",fn:function(a){return[e("div",{staticClass:"hov-1",staticStyle:{cursor:"pointer",padding:"6px 10px"},attrs:{lang:a.opt},on:{click:function(a){return a.preventDefault(),t.selectClick(a)}}},[t._v("\n                                "+t._s(a.opt)+"\n                            ")])]}}],null,!1,3034508940),model:{value:t.tmpLang,callback:function(a){t.tmpLang=a},expression:"tmpLang"}}),e("q-btn",{staticClass:"ayoo",staticStyle:{"background-color":"var(--violet-btn-color)",color:"white","border-radius":"10px",display:"block",height:"36px"},on:{click:t.langsEnterOuter}},[t._v("\n                        "+t._s(t.$t("addCv.addLang"))+"\n                    ")])],1),e("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e("div",{staticStyle:{"text-align":"left","font-size":"14px","margin-bottom":"4px"}},[t._v("\n                    "+t._s(t.$t("addCv.addedLangs"))+":\n                    "),t.search.langs&&t.search.langs.length?t._e():e("span",[t._v("\n                    "+t._s(t.$t("addCv.noAddedLangs"))+"\n                    ")])]),t._l(t.search.langs,(function(a){return e("q-chip",{key:a,staticStyle:{"line-height":"20px",margin:"4px 8px","max-width":"220px","background-color":"var(--violet-btn-color)"},attrs:{removable:"","text-color":"white",label:a},on:{remove:function(e){t.search.langs.splice(t.search.langs.findIndex((function(t){return t===a})),1)}}})}))],2)]),e("hr",{staticClass:"cv-hr",staticStyle:{margin:"8px 0 16px"}}),e("div",{staticClass:"w586 field-widget",staticStyle:{"margin-right":"44px"}},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP"},[t._v(t._s(t.$t("addCv.cityBased")))])]),e("q-select",{ref:"city_based",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.city_based,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.cityOptions,hint:null,placeholder:t.$t("addCv.cityph"),"dropdown-icon":"none"},on:{input:t.cityBasedUpd,filter:t.filterFn,keyup:t.addNewBasedCity}})],1),e("TextField",{ref:"tel",staticClass:"field-widget",staticStyle:{"margin-right":"0"},attrs:{label:t.$t("cvSearch.tel"),ph:t.$t("cvSearch.telph"),maxlength:20,maxlhidden:!0},model:{value:t.search.tel,callback:function(a){t.$set(t.search,"tel",a)},expression:"search.tel"}}),e("div",{staticStyle:{display:"flex",width:"100%","flex-wrap":"wrap"}},[e("div",{staticClass:"w586 field-widget"},[e("p",{staticClass:"startP",staticStyle:{"font-weight":"600","margin-bottom":"10px"}},[t._v(t._s(t.$t("addCv.driversLabel")))]),e("div",{staticClass:"driver-cb-group"},t._l(t.search.driver,(function(a,i,n){return e("label",{key:i,staticClass:"driver-cb"},[e("q-checkbox",{staticClass:"salcb1",attrs:{dense:"",color:"red-10"},model:{value:t.search.driver[i],callback:function(a){t.$set(t.search.driver,i,a)},expression:"search.driver[key]"}}),t._v("\n                            "+t._s(t.driverOptions[n].label)+"\n                        ")],1)})),0)]),e("BoolField",{staticClass:"field-widget",staticStyle:{"margin-top":"12px"},attrs:{label:t.$t("addCv.carLabel"),vals:[null,!0,!1],labels:[t.$t("addCv.any"),t.$t("addCv.yes"),t.$t("addCv.no")],noStarPMarginTop:""},model:{value:t.search.car,callback:function(a){t.$set(t.search,"car",a)},expression:"search.car"}})],1)],1):t._e(),e("div",{staticStyle:{display:"flex"}},[e("q-btn",{staticClass:"headerBtns1 applybtn btn550adj",staticStyle:{"margin-right":"10px","background-color":"var(--violet-btn-color)","font-weight":"700","max-width":"210px",display:"block","align-self":"center","margin-top":"18px"},attrs:{"text-color":"white",label:t.$t("filters.applyBtn")},on:{click:t.submitSearch}}),t.isOpen?t._e():e("q-btn",{staticClass:"headerBtns1 applybtn btn550adj",staticStyle:{"margin-right":"10px","background-color":"var(--violet-btn-color)","font-weight":"700","max-width":"210px",display:"block","align-self":"center","margin-top":"18px"},attrs:{"text-color":"white",label:t.$t("filters.reopen")},on:{click:function(a){t.isOpen=!t.isOpen}}}),t.isOpen?e("q-btn",{staticClass:"headerBtns1 applybtn btn550adj",staticStyle:{"background-color":"var(--violet-btn-color)","font-weight":"700","max-width":"210px",display:"block","align-self":"center","margin-top":"18px"},attrs:{"text-color":"white",label:t.$t("filters.resetBtn")},on:{click:t.resetSearch}}):t._e()],1)])])}),s=[],o=(e("28a5"),e("278c")),d=e.n(o),l=(e("ac6a"),e("cadf"),e("06db"),e("ffc1"),e("a481"),e("386d"),e("6721")),c=e("adcf"),p={props:["count"],components:{TextField:l["a"],BoolField:c["a"]},data:function(){return{isOpen:!0,searchLine:"",search:{exp:{label:"",value:"idc"},expname:null,car:null,position:null,city_current:null,city_based:null,sal_min:null,sal_max:null,exp_min:null,exp_max:null,edu:null,langs:[],driver:{a:!1,b:!1,c:!1,d:!1}},driverOptions:[{label:this.$t("addCv.catA"),value:"a"},{label:this.$t("addCv.catB"),value:"b"},{label:this.$t("addCv.catC"),value:"c"},{label:this.$t("addCv.catD"),value:"d"}],cityList:this.$t("App.cityList"),cityOptions:this.cityList,eduList:this.$t("addCv.eduOptions"),eduOpts:this.eduList,lastSearchSummary:"",jobTitleList:this.$t("addCv.jobTitleOptions"),jobTitleOptions:this.jobTitleList,expNameList:this.$t("addCv.jobTitleOptions"),expNameOptions:this.expNameList,langList:this.$t("addJob.langOptions"),langOpts:this.langList,tmpLang:""}},methods:{positionUpd:function(t){this.search.position=t},addNewJobTitle:function(t){this.positionUpd(t.target.value)},expNameUpd:function(t){this.search.expname=t},addNewExpNameTitle:function(t){this.expNameUpd(t.target.value)},jobTitleFilterFn:function(t,a,e){var i=this;a((function(){var a=t.toLowerCase();i.jobTitleOptions=i.jobTitleList.filter((function(t){return t.toLowerCase().indexOf(a)>-1}))}))},expNameFilterFn:function(t,a,e){var i=this;a((function(){var a=t.toLowerCase();i.expNameOptions=i.expNameList.filter((function(t){return t.toLowerCase().indexOf(a)>-1}))}))},selectClick:function(t){var a=t.target.getAttribute("lang").replace(",",".");a&&a.length&&(this.search.langs.length<3?this.search.langs.includes(a)?this.$q.notify(this.$t("addCv.langDuplicate")):this.search.langs.push(a):this.$q.notify(this.$t("addCv.langMax"))),this.$refs.lang.hidePopup(),this.tmpLang=""},filterFnLangs:function(t,a,e){var i=this;a((function(){var a=t.toLowerCase();i.langOpts=i.langList.filter((function(t){return t.toLowerCase().indexOf(a)>-1}))}))},langInputShenanigans:function(t){this.tmpLang=t},langsEnterOuter:function(){""!==this.tmpLang&&(this.search.langs.length<3?this.search.langs.includes(this.tmpLang)?this.$q.notify(this.$t("addCv.langDuplicate")):this.search.langs.push(this.tmpLang.replace(",",".")):this.$q.notify(this.$t("addCv.langMax")),this.tmpLang="")},langsEnter:function(t,a){if(""!==t)return this.search.langs.length<3?this.search.langs.includes(t)?this.$q.notify(this.$t("addCv.langDuplicate")):this.search.langs.push(t.replace(",",".")):this.$q.notify(this.$t("addCv.langMax")),a("",null)},hide:function(){this.isOpen=!1},resetSearch:function(){this.searchLine="",this.search={exp:{label:"",value:"idc"},expname:null,car:null,position:null,city_current:null,city_based:null,sal_min:null,sal_max:null,exp_min:null,exp_max:null,edu:null,langs:[],driver:{a:!1,b:!1,c:!1,d:!1}}},submitSearch:function(){var t=Object.entries(this.search).filter((function(t){return"exp"!==t[0]&&"driver"!==t[0]})).filter((function(t){return null!==t[1]})).map((function(t){var a=d()(t,2),e=a[0],i=a[1];return"".concat(e,"=").concat(i)}));this.searchLine&&t.push("txt="+this.searchLine);var a=t.join("&");a.length&&(a="&"+a),this.lastSearchSummary=a.split("&"),this.$emit("submit-search",a)},addNewCity:function(t){this.cityUpd(t.target.value)},addNewBasedCity:function(t){this.cityBasedUpd(t.target.value)},cityUpd:function(t){this.search.city_current=t},cityBasedUpd:function(t){this.search.city_based=t},filterFn:function(t,a,e){var i=this;a((function(){var a=t.toLowerCase();i.cityOptions=i.cityList.filter((function(t){return t.toLowerCase().indexOf(a)>-1}))}))},filterFnEdu:function(t,a,e){var i=this;a((function(){var a=t.toLowerCase();i.eduOpts=i.eduList.filter((function(t){return t.toLowerCase().indexOf(a)>-1}))}))}}},h=p,u=(e("e540"),e("7e8f"),e("2877")),g=e("ddd8"),x=e("27f9"),v=e("9c40"),b=e("b047"),f=e("8f8e"),m=e("8572"),w=e("eebe"),_=e.n(w),y=Object(u["a"])(h,r,s,!1,null,"d17da9c8",null),C=y.exports;_()(y,"components",{QSelect:g["a"],QInput:x["a"],QBtn:v["a"],QChip:b["a"],QCheckbox:f["a"],QField:m["a"]});var k={components:{CvsFilter:C},computed:{currentPage:function(){return this.$route.query.p&&Number.isInteger(Number(this.$route.query.p))?Number(this.$route.query.p):1}},data:function(){return{loading:!0,cvs:[],searchLine:"",count:0,pages:1,page_current:1}},methods:{formatDate:function(t){if(t)try{var a=new Date(t);return"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()," ").concat(a.toTimeString().substring(0,5))}catch(e){}return"-"},searchCvs:function(t){this.fetchCvs(1,t)},fetchCvs:function(t,a){var e=this;this.loading=!0;var i="/cv-index"+(t>1?"?page="+t:"?r=1"),n="";a&&(n+=a),this.$axios.get(i+n,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(t){t.data&&t.data.rows&&Array.isArray(t.data.rows)?(e.cvs=t.data.rows,e.count=t.data.count,e.pages=Math.ceil(Number(t.data.count)/Number(t.data.perpage)),e.page_current=t.data.page,e.loading=!1,a&&e.$refs.cvsFilters.hide()):(e.$q.notify("Error receiving cvs from the server"),e.loading=!1)})).catch((function(t){e.$q.notify("Unknown error with cvs",t),e.loading=!1}))}},activated:function(){if("company"!==this.$store.state.user.role||!this.$store.state.user.rights||!this.$store.state.user.rights.includes("bauss"))return this.$router.push("/"),!1;this.fetchCvs()}},$=k,S=(e("49f7"),Object(u["a"])($,i,n,!1,null,"463b0429",null));a["default"]=S.exports},"38fc":function(t,a,e){var i=e("24fb"),n=e("1de5"),r=e("e00c");a=i(!1);var s=n(r);a.push([t.i,".cv-search__wrapper .q-field--outlined .q-field__control:before{border:0!important}.cv-search__wrapper .q-field__control{font-size:16px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);height:36px;min-height:36px!important}@media screen and (max-width:550px){.cv-search__wrapper .q-field__control{font-size:14px}}.cv-search__wrapper .q-field__native{height:36px!important;min-height:36px!important;padding:0!important}.cv-search__wrapper .q-field__append,.cv-search__wrapper .q-field__native input{height:36px}.cv-search__wrapper .q-select__dropdown-icon{background-image:url("+s+");background-repeat:no-repeat;background-position:50%}.dropdown-padding-adjust .q-field__control{padding-right:4px!important}.cv-search__wrapper .salcb1 .q-checkbox__inner{left:0px;margin-right:0;height:20px;width:20px;min-width:20px;margin-right:8px!important}.cv-search__wrapper .ql-toolbar.ql-snow{border-top-left-radius:10px;border-top-right-radius:10px}.cv-search__wrapper .ql-container.ql-snow{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.q-field__bottom{padding:5px}div.q-field__messages{display:flex;justify-content:center}.cv-search__wrapper .addCv__desc-inp .q-field__control{font-size:15px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);padding:10px;min-height:160px!important;height:160px!important}.cv-search__wrapper .addCv__desc-inp .q-field__native{padding:0!important;font-size:16px;min-height:138px!important;height:138px!important;resize:none}.cv-search__wrapper .addCv__desc-inp .q-field__bottom{padding-right:0}.cv-search__wrapper .lang-select .q-field__control{max-height:none!important;height:auto!important}.cv-search__wrapper .lang-select .q-field__native{height:auto!important}",""]),t.exports=a},"49f7":function(t,a,e){"use strict";var i=e("b647"),n=e.n(i);n.a},"6e72":function(t,a,e){var i=e("38fc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("0faaf9c6",i,!0,{sourceMap:!1})},"7e8f":function(t,a,e){"use strict";var i=e("9920"),n=e.n(i);n.a},"81f0":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".cv-search__wrapper[data-v-d17da9c8]{max-width:754px;width:754px;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;border-radius:10px;box-shadow:0px 5px 15px rgba(0,0,0,0.1);padding:30px;padding-top:45px;padding-bottom:35px;margin-bottom:20px}@media screen and (max-width:550px){.cv-search__wrapper[data-v-d17da9c8]{width:100%;max-width:none;padding:26px 22px}}.jobs__top-searchx[data-v-d17da9c8]{display:flex;margin-bottom:15px;margin-top:0px;width:100%;position:relative}.filtersHamburgerBtnx[data-v-d17da9c8]{display:block;border:0;background-color:transparent;background:url(/statics/filter-burger.png);background-repeat:no-repeat;background-position:50%;align-self:center;cursor:pointer;margin-left:12px;min-width:14px;height:15px;position:absolute}.filtersHamburgerBtnx[data-v-d17da9c8]:active,.filtersHamburgerBtnx[data-v-d17da9c8]:hover{-webkit-filter:brightness(1.5);filter:brightness(1.5)}.filtersHamburgerBtnx[data-v-d17da9c8]:focus{outline:none}.searchInputX[data-v-d17da9c8]{padding:0 26px;-webkit-appearance:none;box-shadow:0px 0px 15px rgba(0,0,0,0.15)!important;border-radius:10px;height:40px!important;border:none;font-family:Montserrat,sans-serif;font-size:14px!important;line-height:17px!important;padding:0 60px 0 42px;width:100%;font-size:12px!important;line-height:12px!important;height:35px!important}@media screen and (max-width:550px){.searchInputX[data-v-d17da9c8]{padding:0 30px 0 32px}}.searchInputX[data-v-d17da9c8]:focus{outline:none;box-shadow:0px 0px 2px var(--violet-btn-color)!important}.searchBtnX[data-v-d17da9c8]{background-color:var(--violet-btn-color)!important;margin-left:-15px;padding:0 15px!important;border:0;color:#fff;text-transform:uppercase;cursor:pointer;width:110px;padding:0 4px!important;background-color:transparent!important;width:20px;height:20px!important;background:url(/statics/search-mobile.png);background-repeat:no-repeat;background-position:50%;position:absolute;right:8px;top:calc(50% - 10px)}.searchBtnX[data-v-d17da9c8]:hover{background-color:transparent!important;-webkit-filter:brightness(1.5);filter:brightness(1.5)}.searchBtnX[data-v-d17da9c8]:focus{outline:none}.line[data-v-d17da9c8]{display:flex}*[data-v-d17da9c8]{margin:0}.w586[data-v-d17da9c8]{width:100%}.startP[data-v-d17da9c8]{font-family:Montserrat;font-weight:500;color:var(--color1);position:relative;text-align:left}.star[data-v-d17da9c8],.startP[data-v-d17da9c8]{font-size:14px;line-height:17px}.star[data-v-d17da9c8]{margin-right:4px;font-family:Montserrat,sans-serif;color:var(--btn-color);width:6px}.field-widget[data-v-d17da9c8]{width:calc(50% - 22px);margin-right:44px}.field-widget[data-v-d17da9c8]:nth-child(2n){margin-right:0}@media screen and (max-width:550px){.field-widget[data-v-d17da9c8]{width:100%;margin-right:0}}.driver-cb[data-v-d17da9c8]{display:flex;align-items:center;margin:12px 0;cursor:pointer;color:var(--color1);font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;width:38%}@media screen and (max-width:550px){.driver-cb[data-v-d17da9c8]{width:100%}}.driver-cb-group[data-v-d17da9c8]{display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:550px){.driver-cb-group[data-v-d17da9c8]{flex-direction:column}}.cv-hr[data-v-d17da9c8]{border:0;border-top:0.5px solid rgba(0,0,0,0.2)!important;width:calc(100% + 20px)}@media screen and (max-width:800px){.cv-hr[data-v-d17da9c8]{width:calc(100% + 68px)}}@media screen and (max-width:800px){.ayoo[data-v-d17da9c8]{margin-bottom:6px}}.hov-1[data-v-d17da9c8]:hover{color:var(--violet-btn-color)}@media screen and (max-width:550px){.btn550adj[data-v-d17da9c8]{font-size:11px}}",""]),t.exports=a},9920:function(t,a,e){var i=e("81f0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("4cd64616",i,!0,{sourceMap:!1})},b647:function(t,a,e){var i=e("d7a6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("41160ba2",i,!0,{sourceMap:!1})},d7a6:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cv-list[data-v-463b0429]{width:754px;margin-bottom:70px!important}@media screen and (max-width:550px){.cv-list[data-v-463b0429]{width:100%;padding:0 20px}}.lds-dual-ring[data-v-463b0429]{display:inline-block;width:80px;height:80px}.lds-dual-ring[data-v-463b0429]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #8645ff;border-color:var(--color1) transparent #8645ff transparent;-webkit-animation:lds-dual-ring-data-v-463b0429 1.2s linear infinite;animation:lds-dual-ring-data-v-463b0429 1.2s linear infinite}.cv-row[data-v-463b0429]{display:flex;background-color:#fff;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.15);border-radius:10px;padding:20px;width:100%;margin-bottom:10px;height:128px}@media screen and (max-width:800px){.cv-row[data-v-463b0429]{padding:12px;height:148px}}.cv-col-id[data-v-463b0429]{font-weight:600;font-size:14px;line-height:17px;color:#c00027}@media screen and (max-width:800px){.cv-col-id[data-v-463b0429]{margin-right:8px}}.cv-col-photo[data-v-463b0429]{width:88px;min-width:88px;height:88px;background:#fff;box-shadow:0px 0px 10px rgba(0,0,0,0.1);border-radius:50%;background-repeat:no-repeat;background-position:50%;background-size:35%;margin-right:30px}@media screen and (max-width:800px){.cv-col-photo[data-v-463b0429]{width:40px;min-width:40px;height:40px;margin-right:18px}}.cv-name[data-v-463b0429]{font-weight:600;text-decoration:none;font-size:14px;line-height:17px;color:#c00027;margin-top:5px;overflow:hidden;white-space:nowrap;display:block;flex-grow:1;max-width:calc(100% - 60px)}.cv-name[data-v-463b0429]:hover{color:#d00027}.cv-top-line[data-v-463b0429]{display:flex}.cv-body-line[data-v-463b0429]{display:flex;height:calc(100% - 12px)}.cv-body-line .left[data-v-463b0429]{flex-grow:1}@media screen and (max-width:550px){.cv-body-line[data-v-463b0429]{max-width:calc(100% - 16px);height:calc(100% - 16px)}}.cv-secondary[data-v-463b0429]{font-weight:600;line-height:15px;margin-top:9px}.cv-secondary[data-v-463b0429],.cv-text[data-v-463b0429]{font-size:12px;color:#181059}.cv-text[data-v-463b0429]{font-weight:400;line-height:130%;margin-top:16px}.cv-col-mid[data-v-463b0429]{text-align:left;flex-grow:4;max-width:80%}@media screen and (max-width:550px){.cv-col-mid[data-v-463b0429]{max-width:calc(100% - 66px)}}.cv-city[data-v-463b0429]{font-weight:600;font-size:10px;line-height:130%;color:#8645ff;margin-left:10px;min-width:60px;text-align:right}@media screen and (max-width:550px){.cv-city[data-v-463b0429]{min-width:36px}}.cv-tel[data-v-463b0429]{margin-bottom:7px;font-size:10px;line-height:130%;color:#c00027}.cv-tel-1[data-v-463b0429]{margin-top:auto}.jobs__top-search[data-v-463b0429]{display:flex;margin-bottom:15px}@media screen and (max-width:550px){.jobs__top-search[data-v-463b0429]{margin-top:0px;width:100%;position:relative}}.filtersHamburgerBtn[data-v-463b0429]{display:none;border:0;background-color:transparent;background:url(/statics/filter-burger.png);background-repeat:no-repeat;background-position:50%;align-self:center;cursor:pointer;margin-left:12px;min-width:14px;height:15px;position:absolute}.filtersHamburgerBtn[data-v-463b0429]:active,.filtersHamburgerBtn[data-v-463b0429]:hover{-webkit-filter:brightness(1.5);filter:brightness(1.5)}.filtersHamburgerBtn[data-v-463b0429]:focus{outline:none}@media screen and (max-width:550px){.filtersHamburgerBtn[data-v-463b0429]{display:block}}.searchInput[data-v-463b0429]{width:822px;padding:0 26px;-webkit-appearance:none;box-shadow:0px 0px 15px rgba(0,0,0,0.15)!important;border-radius:10px;height:40px!important;border:none;font-family:Montserrat,sans-serif;font-size:14px!important;line-height:17px!important}.searchInput[data-v-463b0429]:focus{outline:none;box-shadow:0px 0px 2px var(--violet-btn-color)!important}@media screen and (max-width:1160px){.searchInput[data-v-463b0429]{width:600px;margin:auto}}@media screen and (max-width:800px){.searchInput[data-v-463b0429]{padding:0 16px;margin-left:0px!important;width:calc(72vw - 16px);height:36px!important}}@media screen and (max-width:550px){.searchInput[data-v-463b0429]{padding:0 60px 0 42px;width:100%;font-size:10px!important;line-height:12px!important;height:35px!important}}.searchBtn[data-v-463b0429]{background-color:var(--violet-btn-color)!important;margin-left:-15px;padding:0 15px!important;border:0;color:#fff;text-transform:uppercase;cursor:pointer;width:110px}.searchBtn[data-v-463b0429]:hover{background-color:var(--violet2)!important}.searchBtn[data-v-463b0429]:focus{outline:none}@media screen and (max-width:550px){.searchBtn[data-v-463b0429]{padding:0 4px!important;background-color:transparent!important;width:20px;height:20px!important;background:url(/statics/search-mobile.png);background-repeat:no-repeat;background-position:50%;position:absolute;right:8px;top:calc(50% - 10px)}.searchBtn[data-v-463b0429]:hover{background-color:transparent!important;-webkit-filter:brightness(1.5);filter:brightness(1.5)}}.pageBtns[data-v-463b0429]{cursor:pointer;border:0;background-color:transparent;font-family:Montserrat,sans-serif;font-size:16px;line-height:20px;color:var(--violet-btn-color);text-decoration:none;margin:0 5px}.pageBtns[data-v-463b0429]:focus{outline:none}.pageBtns[data-v-463b0429]:hover{color:var(--color1)}@media screen and (max-width:550px){.pageBtns[data-v-463b0429]{font-size:13px;line-height:16px;margin:0 10px}}.pageBtns .currentPage[data-v-463b0429]{font-weight:700}.paginationWrap[data-v-463b0429]{padding:22px 0;padding-bottom:10px;margin-bottom:20px}@media screen and (max-width:1160px){.paginationWrap[data-v-463b0429]{padding:12px 0;padding-bottom:6px}}@media screen and (max-width:550px){.paginationWrap[data-v-463b0429]{padding-top:7px}}@-webkit-keyframes lds-dual-ring-data-v-463b0429{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes lds-dual-ring-data-v-463b0429{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}',""]),t.exports=a},e540:function(t,a,e){"use strict";var i=e("6e72"),n=e.n(i);n.a}}]);