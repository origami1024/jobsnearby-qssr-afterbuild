(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0bb9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"company"===t.$store.state.user.role&&t.$store.state.user.rights&&t.$store.state.user.rights.includes("bauss")?a("div",{staticClass:"cv-list"},[a("p",{staticClass:"pageHeader"},[t._v(t._s(t.$t("cvList.cvListLabel")))]),a("CvsFilter",{ref:"cvsFilters",attrs:{count:t.count},on:{"submit-search":t.searchCvs}}),t.loading?a("div",{staticClass:"cv-list",staticStyle:{"margin-top":"140px"}},[a("div",{staticClass:"lds-dual-ring"})]):a("div",t._l(t.cvs,(function(e){return a("div",{key:e.id,staticClass:"cv-row"},[a("div",{staticClass:"cv-col-id"},[t._v(t._s(e.id))]),a("div",{staticClass:"cv-col-photo",style:{backgroundSize:e.photo?"100%":"",backgroundImage:"url('"+(e.photo?"/uploads/cvpics/"+e.photo:"statics/subscriber-logo-ph.svg")+"')"}}),a("div",{staticClass:"cv-col-mid"},[a("div",{staticClass:"cv-top-line"},[a("router-link",{staticClass:"cv-name",attrs:{to:"/cvs/"+e.id}},[t._v("\n                        "+t._s(e.name+" "+e.surname)+"\n                    ")]),a("div",{staticClass:"cv-city"},[t._v(t._s(e.city_current||e.city_home||"-"))])],1),a("div",{staticClass:"cv-body-line"},[a("div",{staticClass:"left"},[a("div",{staticClass:"cv-secondary"},[t._v(t._s(e.wantedJob))]),a("div",{staticClass:"cv-secondary"},[t._v(t._s(e.salary_min?e.salary_min+"$ - ":"")+" "+t._s(e.salary_max?e.salary_max+"$":""))]),a("div",{staticClass:"cv-text"},[t._v("\n                            "+t._s(e.exp?t.$t("cvList.expYes")+".":"")+"\n                            "+t._s(e.langs&&e.langs.length?t.$t("cvList.langs1")+" "+e.langs.length+" "+t.$t("cvList.langs2")+".":"")+"\n                            "+t._s(e.edu?t.$t("cvList.edu")+": "+e.edu+"...":"")+"\n                        ")])]),a("div",{staticClass:"right",staticStyle:{"margin-top":"auto"}},[a("div",{staticClass:"cv-tel cv-tel-1"},[t._v(t._s(e.tel))]),a("div",{staticClass:"cv-tel"},[t._v(t._s(e.tel_home))]),a("div",{staticClass:"cv-secondary",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formatDate(e.last_logged_in)))])])])])])})),0),t.pages&&t.pages>0?a("div",{staticClass:"paginationWrap"},t._l(1==t.page_current?Math.min(t.pages,3):Math.min(t.pages,t.page_current+1),(function(e){return a("a",{directives:[{name:"show",rawName:"v-show",value:e>=(t.page_current!=t.pages?t.page_current-1:t.page_current-2),expression:"(i >= (page_current != pages ? page_current - 1 : page_current - 2))"}],key:e,class:{pageBtns:!0,currentPage:t.page_current==e},attrs:{href:"/?page="+e},on:{click:function(a){return a.preventDefault(),t.fetchCvs(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0):t._e()],1):a("p",{staticClass:"pageHeader",staticStyle:{margin:"40px auto"}},[t._v("404. Not found")])},r=[],n=(a("6762"),a("2fdb"),a("28a5"),a("c5f6"),a("7cdf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"bounce"}},[a("div",{staticClass:"cv-search__wrapper",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[a("div",{staticStyle:{"text-align":"left",width:"100%","margin-bottom":"6px",color:"#c00027","font-weight":"600","font-size":"16px"}},[t._v(t._s(t.$t("cvSearch.nameSearch")))]),a("div",{staticClass:"jobs__top-searchx"},[a("button",{staticClass:"filtersHamburgerBtnx",on:{click:function(e){t.isOpen=!t.isOpen}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchLine,expression:"searchLine"}],staticClass:"searchInputX",staticStyle:{border:"none"},attrs:{type:"text",placeholder:t.$t("jobs.searchPh")},domProps:{value:t.searchLine},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitSearch(e)},input:function(e){e.target.composing||(t.searchLine=e.target.value)}}}),a("button",{staticClass:"headerBtns1 searchBtnX",on:{click:t.submitSearch}})]),a("div",{staticStyle:{"align-self":"flex-start","margin-bottom":"8px","text-align":"left"}},[a("div",[t._v("\n                "+t._s(t.$t("cvSearch.found")+" "+t.count+" "+t.$t("cvSearch.cvs"))+"\n            ")]),a("div",t._l(t.lastSearchSummary,(function(e,i){return a("div",{key:i},[t._v("\n                    "+t._s(e)+"\n                ")])})),0)]),t.isOpen?a("div",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},[a("TextField",{ref:"position",staticClass:"field-widget",attrs:{label:t.$t("cvSearch.position1"),ph:t.$t("filters.fJCatPh"),maxlength:75,maxlhidden:!0},model:{value:t.search.position,callback:function(e){t.$set(t.search,"position",e)},expression:"search.position"}}),a("div",{staticClass:"w586 field-widget"},[a("div",{staticClass:"sal-wrap"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.salaryLabel")))])]),a("div",{staticClass:"line"},[a("q-input",{ref:"salary_min",staticClass:"salInputsAdaptable salInput1",staticStyle:{"margin-right":"10px",width:"calc(50% - 5px)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMinPH"),hint:null},model:{value:t.search.sal_min,callback:function(e){t.$set(t.search,"sal_min",e)},expression:"search.sal_min"}}),a("q-input",{ref:"salary_max",staticClass:"salInputsAdaptable",staticStyle:{width:"calc(50% - 5px)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMaxPH"),hint:null},model:{value:t.search.sal_max,callback:function(e){t.$set(t.search,"sal_max",e)},expression:"search.sal_max"}})],1)])]),a("TextField",{ref:"expname",staticClass:"field-widget",attrs:{label:t.$t("cvSearch.expName"),ph:t.$t("cvSearch.expNamePh"),maxlength:75,maxlhidden:!0},model:{value:t.search.expname,callback:function(e){t.$set(t.search,"expname",e)},expression:"search.expname"}}),a("div",{staticClass:"w586 field-widget"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addCv.edu")))])]),a("q-select",{ref:"edu",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.edu,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.eduOpts,hint:null,placeholder:t.$t("addCv.eduph"),"dropdown-icon":"none",maxlength:30},on:{input:function(e){t.search.edu=e},filter:t.filterFnEdu,keyup:function(e){t.search.edu=e.target.value}}})],1),a("div",{staticClass:"w586 field-widget"},[a("div",{staticClass:"sal-wrap"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("cvSearch.expLabelYears")))])]),a("div",{staticClass:"line"},[a("q-input",{ref:"exp_min",staticClass:"salInputsAdaptable salInput1",staticStyle:{"margin-right":"10px",width:"calc(50% - 5px)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMinPH"),hint:null},model:{value:t.search.exp_min,callback:function(e){t.$set(t.search,"exp_min",e)},expression:"search.exp_min"}}),a("q-input",{ref:"exp_max",staticClass:"salInputsAdaptable",staticStyle:{width:"calc(50% - 5px)"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMaxPH"),hint:null},model:{value:t.search.exp_max,callback:function(e){t.$set(t.search,"exp_max",e)},expression:"search.exp_max"}})],1)])]),a("div",{staticClass:"field-widget"},[t._v("языки!")]),a("div",{staticClass:"w586 field-widget"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addCv.cityCurrent")))])]),a("q-select",{ref:"city_current",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.city_current,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.cityOptions,hint:null,placeholder:t.$t("addCv.cityph"),"dropdown-icon":"none"},on:{input:t.cityUpd,filter:t.filterFn,keyup:t.addNewCity}})],1),a("div",{staticClass:"w586 field-widget"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addCv.cityBased")))])]),a("q-select",{ref:"city_based",staticClass:"dropdown-padding-adjust",attrs:{value:t.search.city_based,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.cityOptions,hint:null,placeholder:t.$t("addCv.cityph"),"dropdown-icon":"none"},on:{input:t.cityBasedUpd,filter:t.filterFn,keyup:t.addNewBasedCity}})],1),a("TextField",{ref:"tel",staticClass:"field-widget",attrs:{label:t.$t("cvSearch.tel"),ph:t.$t("cvSearch.telph"),maxlength:20,maxlhidden:!0},model:{value:t.search.tel,callback:function(e){t.$set(t.search,"tel",e)},expression:"search.tel"}}),a("div",{staticStyle:{display:"flex",width:"100%","flex-wrap":"wrap"}},[a("div",{staticClass:"w586 field-widget"},[a("p",{staticClass:"startP",staticStyle:{"font-weight":"600","margin-bottom":"10px"}},[t._v(t._s(t.$t("addCv.driversLabel")))]),a("div",{staticClass:"driver-cb-group"},t._l(t.search.driver,(function(e,i,r){return a("label",{key:i,staticClass:"driver-cb"},[a("q-checkbox",{staticClass:"salcb1",attrs:{dense:"",color:"red-10"},model:{value:t.search.driver[i],callback:function(e){t.$set(t.search.driver,i,e)},expression:"search.driver[key]"}}),t._v("\n                            "+t._s(t.driverOptions[r].label)+"\n                        ")],1)})),0)]),a("BoolField",{staticClass:"field-widget",staticStyle:{"margin-top":"12px"},attrs:{label:t.$t("addCv.carLabel"),vals:[null,!0,!1],labels:[t.$t("addCv.any"),t.$t("addCv.yes"),t.$t("addCv.no")],noStarPMarginTop:""},model:{value:t.search.car,callback:function(e){t.$set(t.search,"car",e)},expression:"search.car"}})],1)],1):t._e(),a("q-btn",{staticClass:"headerBtns1 applybtn",staticStyle:{"background-color":"var(--violet-btn-color)","font-weight":"700","max-width":"210px",display:"block","align-self":"center","margin-top":"18px"},attrs:{"text-color":"white",label:t.$t("filters.applyBtn")},on:{click:t.submitSearch}})],1)])}),s=[],c=a("278c"),o=a.n(c),d=(a("386d"),a("ac6a"),a("cadf"),a("06db"),a("ffc1"),a("6721")),l=a("adcf"),p={props:["count"],components:{TextField:d["a"],BoolField:l["a"]},data:function(){return{isOpen:!0,searchLine:"",search:{exp:{label:"",value:"idc"},expname:null,car:null,position:null,city_current:null,city_based:null,sal_min:null,sal_max:null,exp_min:null,exp_max:null,edu:null,driver:{a:!1,b:!1,c:!1,d:!1}},driverOptions:[{label:this.$t("addCv.catA"),value:"a"},{label:this.$t("addCv.catB"),value:"b"},{label:this.$t("addCv.catC"),value:"c"},{label:this.$t("addCv.catD"),value:"d"}],cityList:this.$t("App.cityList"),cityOptions:this.cityList,eduList:this.$t("addCv.eduOptions"),eduOpts:this.eduList,lastSearchSummary:""}},methods:{hide:function(){this.isOpen=!1},submitSearch:function(){var t=Object.entries(this.search).filter((function(t){return"exp"!==t[0]&&"driver"!==t[0]})).filter((function(t){return null!==t[1]})).map((function(t){var e=o()(t,2),a=e[0],i=e[1];return"".concat(a,"=").concat(i)}));this.searchLine&&t.push("txt="+this.searchLine);var e=t.join("&");e.length&&(e="&"+e),this.lastSearchSummary=e.split("&"),this.$emit("submit-search",e)},addNewCity:function(t){this.cityUpd(t.target.value)},addNewBasedCity:function(t){this.cityBasedUpd(t.target.value)},cityUpd:function(t){this.search.city_current=t},cityBasedUpd:function(t){this.search.city_based=t},filterFn:function(t,e,a){var i=this;e((function(){var e=t.toLowerCase();i.cityOptions=i.cityList.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}))},filterFnEdu:function(t,e,a){var i=this;e((function(){var e=t.toLowerCase();i.eduOpts=i.eduList.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}))}}},h=p,u=(a("e540"),a("a835"),a("2877")),x=a("ddd8"),v=a("27f9"),g=a("8f8e"),b=a("9c40"),m=a("8572"),f=a("eebe"),w=a.n(f),_=Object(u["a"])(h,n,s,!1,null,"6535e2e3",null),y=_.exports;w()(_,"components",{QSelect:x["a"],QInput:v["a"],QCheckbox:g["a"],QBtn:b["a"],QField:m["a"]});var C={components:{CvsFilter:y},computed:{currentPage:function(){return this.$route.query.p&&Number.isInteger(Number(this.$route.query.p))?Number(this.$route.query.p):1}},data:function(){return{loading:!0,cvs:[],searchLine:"",count:0,pages:1,page_current:1}},methods:{formatDate:function(t){if(t)try{var e=new Date(t),a=e.toLocaleDateString().split("/");return[a[1],a[0],a[2]].join("/")+" "+e.toTimeString().substring(0,5)}catch(i){}return"-"},searchCvs:function(t){this.fetchCvs(1,t)},fetchCvs:function(t,e){var a=this;this.loading=!0;var i="/cv-index"+(t>1?"?page="+t:"?r=1"),r="";e&&(r+=e),this.$axios.get(i+r,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(t){t.data&&t.data.rows&&Array.isArray(t.data.rows)?(a.cvs=t.data.rows,a.count=t.data.count,a.pages=Math.ceil(Number(t.data.count)/Number(t.data.perpage)),a.page_current=t.data.page,a.loading=!1,e&&a.$refs.cvsFilters.hide()):(a.$q.notify("Error receiving cvs from the server"),a.loading=!1)})).catch((function(t){a.$q.notify("Unknown error with cvs",t),a.loading=!1}))}},activated:function(){if("company"!==this.$store.state.user.role||!this.$store.state.user.rights||!this.$store.state.user.rights.includes("bauss"))return this.$router.push("/"),!1;this.fetchCvs()}},k=C,$=(a("290e"),Object(u["a"])(k,i,r,!1,null,"dbc79c40",null));e["default"]=$.exports},1755:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".cv-search__wrapper[data-v-6535e2e3]{max-width:754px;width:754px;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;border-radius:10px;box-shadow:0px 5px 15px rgba(0,0,0,0.1);padding:30px;padding-top:45px;padding-bottom:35px;margin-bottom:20px}@media screen and (max-width:550px){.cv-search__wrapper[data-v-6535e2e3]{width:100%;max-width:none;padding:26px 22px}}.jobs__top-searchx[data-v-6535e2e3]{display:flex;margin-bottom:15px;margin-top:0px;width:100%;position:relative}.filtersHamburgerBtnx[data-v-6535e2e3]{display:block;border:0;background-color:transparent;background:url(/statics/filter-burger.png);background-repeat:no-repeat;background-position:50%;align-self:center;cursor:pointer;margin-left:12px;min-width:14px;height:15px;position:absolute}.filtersHamburgerBtnx[data-v-6535e2e3]:active,.filtersHamburgerBtnx[data-v-6535e2e3]:hover{-webkit-filter:brightness(1.5);filter:brightness(1.5)}.filtersHamburgerBtnx[data-v-6535e2e3]:focus{outline:none}.searchInputX[data-v-6535e2e3]{padding:0 26px;-webkit-appearance:none;box-shadow:0px 0px 15px rgba(0,0,0,0.15)!important;border-radius:10px;height:40px!important;border:none;font-family:Montserrat,sans-serif;font-size:14px!important;line-height:17px!important;padding:0 60px 0 42px;width:100%;font-size:12px!important;line-height:12px!important;height:35px!important}@media screen and (max-width:550px){.searchInputX[data-v-6535e2e3]{padding:0 30px 0 32px}}.searchInputX[data-v-6535e2e3]:focus{outline:none;box-shadow:0px 0px 2px var(--violet-btn-color)!important}.searchBtnX[data-v-6535e2e3]{background-color:var(--violet-btn-color)!important;margin-left:-15px;padding:0 15px!important;border:0;color:#fff;text-transform:uppercase;cursor:pointer;width:110px;padding:0 4px!important;background-color:transparent!important;width:20px;height:20px!important;background:url(/statics/search-mobile.png);background-repeat:no-repeat;background-position:50%;position:absolute;right:8px;top:calc(50% - 10px)}.searchBtnX[data-v-6535e2e3]:hover{background-color:transparent!important;-webkit-filter:brightness(1.5);filter:brightness(1.5)}.searchBtnX[data-v-6535e2e3]:focus{outline:none}.line[data-v-6535e2e3]{display:flex}*[data-v-6535e2e3]{margin:0}.w586[data-v-6535e2e3]{width:100%}.startP[data-v-6535e2e3]{font-family:Montserrat;font-weight:500;color:var(--color1);position:relative;text-align:left}.star[data-v-6535e2e3],.startP[data-v-6535e2e3]{font-size:14px;line-height:17px}.star[data-v-6535e2e3]{margin-right:4px;font-family:Montserrat,sans-serif;color:var(--btn-color);width:6px}.field-widget[data-v-6535e2e3]{width:calc(50% - 22px);margin-right:44px}.field-widget[data-v-6535e2e3]:nth-child(2n){margin-right:0}@media screen and (max-width:550px){.field-widget[data-v-6535e2e3]{width:100%;margin-right:0}}.driver-cb[data-v-6535e2e3]{display:flex;align-items:center;margin:12px 0;cursor:pointer;color:var(--color1);font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;width:38%}@media screen and (max-width:550px){.driver-cb[data-v-6535e2e3]{width:100%}}.driver-cb-group[data-v-6535e2e3]{display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:550px){.driver-cb-group[data-v-6535e2e3]{flex-direction:column}}",""]),t.exports=e},2115:function(t,e,a){var i=a("1755");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("499e").default;r("4caef8ea",i,!0,{sourceMap:!1})},"290e":function(t,e,a){"use strict";var i=a("9e53"),r=a.n(i);r.a},"38fc":function(t,e,a){var i=a("24fb"),r=a("1de5"),n=a("e00c");e=i(!1);var s=r(n);e.push([t.i,".cv-search__wrapper .q-field--outlined .q-field__control:before{border:0!important}.cv-search__wrapper .q-field__control{font-size:16px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);height:36px;min-height:36px!important}@media screen and (max-width:550px){.cv-search__wrapper .q-field__control{font-size:14px}}.cv-search__wrapper .q-field__native{height:36px!important;min-height:36px!important;padding:0!important}.cv-search__wrapper .q-field__append,.cv-search__wrapper .q-field__native input{height:36px}.cv-search__wrapper .q-select__dropdown-icon{background-image:url("+s+");background-repeat:no-repeat;background-position:50%}.dropdown-padding-adjust .q-field__control{padding-right:4px!important}.cv-search__wrapper .salcb1 .q-checkbox__inner{left:0px;margin-right:0;height:20px;width:20px;min-width:20px;margin-right:8px!important}.cv-search__wrapper .ql-toolbar.ql-snow{border-top-left-radius:10px;border-top-right-radius:10px}.cv-search__wrapper .ql-container.ql-snow{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.q-field__bottom{padding:5px}div.q-field__messages{display:flex;justify-content:center}.cv-search__wrapper .addCv__desc-inp .q-field__control{font-size:15px;line-height:15px;border-radius:10px;box-shadow:0px 2px 15px rgba(0,0,0,0.1);padding:10px;min-height:160px!important;height:160px!important}.cv-search__wrapper .addCv__desc-inp .q-field__native{padding:0!important;font-size:16px;min-height:138px!important;height:138px!important;resize:none}.cv-search__wrapper .addCv__desc-inp .q-field__bottom{padding-right:0}.cv-search__wrapper .lang-select .q-field__control{max-height:none!important;height:auto!important}.cv-search__wrapper .lang-select .q-field__native{height:auto!important}",""]),t.exports=e},"5d8a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cv-list[data-v-dbc79c40]{width:754px;margin-bottom:70px!important}@media screen and (max-width:550px){.cv-list[data-v-dbc79c40]{width:100%;padding:0 20px}}.lds-dual-ring[data-v-dbc79c40]{display:inline-block;width:80px;height:80px}.lds-dual-ring[data-v-dbc79c40]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #8645ff;border-color:var(--color1) transparent #8645ff transparent;-webkit-animation:lds-dual-ring-data-v-dbc79c40 1.2s linear infinite;animation:lds-dual-ring-data-v-dbc79c40 1.2s linear infinite}.cv-row[data-v-dbc79c40]{display:flex;background-color:#fff;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.15);border-radius:10px;padding:20px;width:100%;margin-bottom:10px;height:128px}@media screen and (max-width:800px){.cv-row[data-v-dbc79c40]{padding:12px;height:148px}}.cv-col-id[data-v-dbc79c40]{font-weight:600;font-size:14px;line-height:17px;color:#c00027}@media screen and (max-width:800px){.cv-col-id[data-v-dbc79c40]{margin-right:8px}}.cv-col-photo[data-v-dbc79c40]{width:88px;min-width:88px;height:88px;background:#fff;box-shadow:0px 0px 10px rgba(0,0,0,0.1);border-radius:50%;background-repeat:no-repeat;background-position:50%;background-size:35%;margin-right:30px}@media screen and (max-width:800px){.cv-col-photo[data-v-dbc79c40]{width:40px;min-width:40px;height:40px;margin-right:18px}}.cv-name[data-v-dbc79c40]{font-weight:600;text-decoration:none;font-size:14px;line-height:17px;color:#c00027;margin-top:5px;overflow:hidden;white-space:nowrap;display:block;flex-grow:1;max-width:calc(100% - 60px)}.cv-name[data-v-dbc79c40]:hover{color:#d00027}.cv-top-line[data-v-dbc79c40]{display:flex}.cv-body-line[data-v-dbc79c40]{display:flex;height:calc(100% - 12px)}.cv-body-line .left[data-v-dbc79c40]{flex-grow:1}@media screen and (max-width:550px){.cv-body-line[data-v-dbc79c40]{max-width:calc(100% - 16px);height:calc(100% - 16px)}}.cv-secondary[data-v-dbc79c40]{font-weight:600;line-height:15px;margin-top:9px}.cv-secondary[data-v-dbc79c40],.cv-text[data-v-dbc79c40]{font-size:12px;color:#181059}.cv-text[data-v-dbc79c40]{font-weight:400;line-height:130%;margin-top:16px}.cv-col-mid[data-v-dbc79c40]{text-align:left;flex-grow:4}@media screen and (max-width:550px){.cv-col-mid[data-v-dbc79c40]{max-width:calc(100% - 66px)}}.cv-city[data-v-dbc79c40]{font-weight:600;font-size:10px;line-height:130%;color:#8645ff;margin-left:10px;min-width:60px;text-align:right}@media screen and (max-width:550px){.cv-city[data-v-dbc79c40]{min-width:36px}}.cv-tel[data-v-dbc79c40]{margin-bottom:7px;font-size:10px;line-height:130%;color:#c00027}.cv-tel-1[data-v-dbc79c40]{margin-top:auto}.jobs__top-search[data-v-dbc79c40]{display:flex;margin-bottom:15px}@media screen and (max-width:550px){.jobs__top-search[data-v-dbc79c40]{margin-top:0px;width:100%;position:relative}}.filtersHamburgerBtn[data-v-dbc79c40]{display:none;border:0;background-color:transparent;background:url(/statics/filter-burger.png);background-repeat:no-repeat;background-position:50%;align-self:center;cursor:pointer;margin-left:12px;min-width:14px;height:15px;position:absolute}.filtersHamburgerBtn[data-v-dbc79c40]:active,.filtersHamburgerBtn[data-v-dbc79c40]:hover{-webkit-filter:brightness(1.5);filter:brightness(1.5)}.filtersHamburgerBtn[data-v-dbc79c40]:focus{outline:none}@media screen and (max-width:550px){.filtersHamburgerBtn[data-v-dbc79c40]{display:block}}.searchInput[data-v-dbc79c40]{width:822px;padding:0 26px;-webkit-appearance:none;box-shadow:0px 0px 15px rgba(0,0,0,0.15)!important;border-radius:10px;height:40px!important;border:none;font-family:Montserrat,sans-serif;font-size:14px!important;line-height:17px!important}.searchInput[data-v-dbc79c40]:focus{outline:none;box-shadow:0px 0px 2px var(--violet-btn-color)!important}@media screen and (max-width:1160px){.searchInput[data-v-dbc79c40]{width:600px;margin:auto}}@media screen and (max-width:800px){.searchInput[data-v-dbc79c40]{padding:0 16px;margin-left:0px!important;width:calc(72vw - 16px);height:36px!important}}@media screen and (max-width:550px){.searchInput[data-v-dbc79c40]{padding:0 60px 0 42px;width:100%;font-size:10px!important;line-height:12px!important;height:35px!important}}.searchBtn[data-v-dbc79c40]{background-color:var(--violet-btn-color)!important;margin-left:-15px;padding:0 15px!important;border:0;color:#fff;text-transform:uppercase;cursor:pointer;width:110px}.searchBtn[data-v-dbc79c40]:hover{background-color:var(--violet2)!important}.searchBtn[data-v-dbc79c40]:focus{outline:none}@media screen and (max-width:550px){.searchBtn[data-v-dbc79c40]{padding:0 4px!important;background-color:transparent!important;width:20px;height:20px!important;background:url(/statics/search-mobile.png);background-repeat:no-repeat;background-position:50%;position:absolute;right:8px;top:calc(50% - 10px)}.searchBtn[data-v-dbc79c40]:hover{background-color:transparent!important;-webkit-filter:brightness(1.5);filter:brightness(1.5)}}.pageBtns[data-v-dbc79c40]{cursor:pointer;border:0;background-color:transparent;font-family:Montserrat,sans-serif;font-size:16px;line-height:20px;color:var(--violet-btn-color);text-decoration:none;margin:0 5px}.pageBtns[data-v-dbc79c40]:focus{outline:none}.pageBtns[data-v-dbc79c40]:hover{color:var(--color1)}@media screen and (max-width:550px){.pageBtns[data-v-dbc79c40]{font-size:13px;line-height:16px;margin:0 10px}}.pageBtns .currentPage[data-v-dbc79c40]{font-weight:700}.paginationWrap[data-v-dbc79c40]{padding:22px 0;padding-bottom:10px;margin-bottom:20px}@media screen and (max-width:1160px){.paginationWrap[data-v-dbc79c40]{padding:12px 0;padding-bottom:6px}}@media screen and (max-width:550px){.paginationWrap[data-v-dbc79c40]{padding-top:7px}}@-webkit-keyframes lds-dual-ring-data-v-dbc79c40{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes lds-dual-ring-data-v-dbc79c40{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}',""]),t.exports=e},"6e72":function(t,e,a){var i=a("38fc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("499e").default;r("0faaf9c6",i,!0,{sourceMap:!1})},"9e53":function(t,e,a){var i=a("5d8a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("499e").default;r("4953ab06",i,!0,{sourceMap:!1})},a835:function(t,e,a){"use strict";var i=a("2115"),r=a.n(i);r.a},e540:function(t,e,a){"use strict";var i=a("6e72"),r=a.n(i);r.a}}]);