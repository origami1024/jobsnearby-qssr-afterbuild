(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0f06":function(t,e,s){"use strict";var i=s("df06"),a=s.n(i);a.a},"14d2":function(t,e,s){"use strict";var i=s("1f13"),a=s.n(i);a.a},"1adf":function(t,e,s){"use strict";var i=s("81b6"),a=s.n(i);a.a},"1f13":function(t,e,s){},"2ec9":function(t,e,s){"use strict";var i=s("ae0f"),a=s.n(i);a.a},3915:function(t,e,s){},"81b6":function(t,e,s){},"8c8f":function(t,e,s){},ad3c:function(t,e,s){"use strict";var i=s("8c8f"),a=s.n(i);a.a},ae0f:function(t,e,s){},cf20:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobs"},[s("div",{staticClass:"jobs__banner"},[s("div",{staticClass:"banner__pic"}),s("div",{staticClass:"jobs__banner-right"},[s("div",{staticClass:"banner__header-wrap"},[s("h2",{staticClass:"banner__header"},[t._v(t._s(t.$t("jobs.bannerHeader")))])]),s("div",{staticClass:"jobs__top-search"},[s("button",{staticClass:"filtersHamburgerBtn",on:{click:function(e){return t.$store.dispatch("filtersToggle")}}}),s("input",{staticClass:"searchInput",staticStyle:{border:"none"},attrs:{type:"text",placeholder:t.$t("jobs.searchPh")},domProps:{value:t.jFilters.txt},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$store.dispatch("refreshjobs",{}),t.$store.dispatch("filtersOff")},input:function(e){return t.$store.dispatch("filterUpd",{prop:"txt",value:e.target.value})}}}),s("button",{staticClass:"headerBtns1 searchBtn",on:{click:function(e){t.$store.dispatch("refreshjobs",{}),t.$store.dispatch("filtersOff")}}},[s("span",{staticClass:"noshow-below550"},[t._v(t._s(t.$t("filters.searchBtn")))])])])])]),s("div",{staticClass:"jobs__main"},[s("div",{staticClass:"jobs__filterpart"},[s("JobsFilter")],1),t.$store.state.jfiltersToggle?t._e():s("div",{staticClass:"jobs__contents"},[s("div",{staticClass:"line jobs_prefilters"},[s("span",{staticClass:"jobs__prefilters-label"},[t._v(t._s(t.$t("jobs.prefiltersLabelSort")))]),s("button",{staticClass:"orderLink dateLink"},[t._v("\n            "+t._s(t.$t("jobs.dateOpts")[t.jFilters.timerange])+"\n            "),s("q-menu",{attrs:{dense:""}},t._l(Object.keys(t.$t("jobs.dateOpts")),(function(e){return s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,staticStyle:{lineHeight:"2"},style:{color:t.jFilters.timerange==e?"var(--violet-btn-color)":"var(--color1)"},attrs:{dense:"",clickable:""},on:{click:function(s){return t.$store.dispatch("filterUpd",{prop:"timerange",value:e})}}},[t._v("\n                "+t._s(t.$t("jobs.dateOpts")[e])+"\n              ")])})),1)],1),s("button",{staticClass:"orderLink"},[t._v("\n            "+t._s(t.$t("jobs.sortOpts")[t.jFilters.sort])+"\n            "),s("q-menu",{attrs:{dense:""}},t._l(Object.keys(t.$t("jobs.sortOpts")),(function(e){return s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,staticStyle:{lineHeight:"2"},style:{color:t.jFilters.sort==e?"var(--violet-btn-color)":"var(--color1)"},attrs:{dense:"",clickable:""},on:{click:function(s){return t.$store.dispatch("filterUpd",{prop:"sort",value:e})}}},[t._v("\n                "+t._s(t.$t("jobs.sortOpts")[e])+"\n              ")])})),1)],1),s("span",[s("span",{staticClass:"jobs__prefilters-label"},[t._v(t._s(t.$t("jobs.prefiltersLabelShow")))]),s("button",{staticClass:"orderLink"},[t._v("\n            "+t._s(t.$t("jobs.perpageOpts")[t.jFilters.perpage])+"\n            "),s("q-menu",{attrs:{dense:""}},t._l(Object.keys(t.$t("jobs.perpageOpts")),(function(e){return s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,staticStyle:{lineHeight:"2"},style:{color:t.jFilters.perpage==e?"var(--violet-btn-color)":"var(--color1)"},attrs:{dense:"",clickable:""},on:{click:function(s){return t.$store.dispatch("filterUpd",{prop:"perpage",value:e})}}},[t._v("\n                "+t._s(t.$t("jobs.perpageOpts")[e])+"\n              ")])})),1)],1)])]),s("JobsList"),t.pages&&t.pages>0?s("div",{staticClass:"paginationWrap"},t._l(1==t.page_current?Math.min(t.pages,3):Math.min(t.pages,t.page_current+1),(function(e){return s("button",{directives:[{name:"show",rawName:"v-show",value:e>=(t.page_current!=t.pages?t.page_current-1:t.page_current-2),expression:"(i >= (page_current != pages ? page_current - 1 : page_current - 2))"}],key:e,class:{pageBtns:!0,currentPage:t.page_current==e},on:{click:function(s){return t.$store.dispatch("refreshjobs",{param:"page",param2:e})}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e()],1),s("UserStats")],1)])},a=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),n=s.n(r),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.jobslist,(function(e){return s("JobCard",{key:e.job_id,attrs:{cved:t.ownCVj_ids.includes(e.job_id),hitcv:t.ownCVs.find((function(t){return t.cvjob_id==e.job_id})),job:e}})})),0==t.jobslist.length&&""==t.$store.state.jFilters.txt?s("p",[t._v(t._s(t.$t("jobsList.zero")))]):0==t.jobslist.length&&""!=t.$store.state.jFilters.txt?s("p",[t._v(t._s(t.$t("jobsList.zerozero1"))+' "'+t._s(t.$store.state.jFilters.txt)+'" '+t._s(t.$t("jobsList.zerozero2")))]):t._e()],2)},o=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobscard"},[s("div",{staticClass:"line cityAndCompany"},[s("div",{staticClass:"line",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{display:"flex"}},[t.job.city.length>0?s("span",{staticClass:"cityOK"},[t._v(t._s(t.$t("jc.cityPrefix")))]):t._e(),s("p",{staticClass:"city",domProps:{innerHTML:t._s(t.filteredCity)}})]),s("a",{attrs:{href:"/companypage?id="+t.job.author_id,target:"_blank"}},[s("div",{staticClass:"author joblink",domProps:{innerHTML:t._s(t.filteredAuthor)}})])]),s("div",{staticClass:"line",staticStyle:{"align-items":"center","font-weight":"500","font-size":"12px","line-height":"15px",color:"var(--color1)"}},[s("p",{staticClass:"updated__value",domProps:{innerHTML:t._s(t.lastUpdated)}})])]),s("div",{staticClass:"line lowres_twolines linetwo"},[s("h4",{staticClass:"cardHeader"},[s("a",{attrs:{href:"/jobpage?id="+t.job.job_id,target:"_blank"}},[s("strong",{staticClass:"joblink",domProps:{innerHTML:t._s(t.filteredTitle)}})])]),s("div",{staticClass:"colx salary__outer-wrap"},[s("strong",{staticClass:"alignRight jobcard__salary"},[t.job.salary_min===t.job.salary_max&&t.job.salary_min>0?s("p",[t._v(t._s(t.job.salary_max)+" "+t._s(t.currency))]):t.job.salary_min&&t.job.salary_min>0?s("p",[t._v(t._s(t.job.salary_min)+" - "+t._s(t.job.salary_max)+" "+t._s(t.currency))]):t.job.salary_max>0?s("p",[t._v(t._s(t.job.salary_max)+" "+t._s(t.currency))]):s("p",{staticStyle:{"text-align":"right","font-size":"16px"}},[t._v(t._s(t.$t("jc.salaryNone")))])])])]),s("div",{staticClass:"line"},[s("p",{staticClass:"filteredDesc",domProps:{innerHTML:t._s((-1==t.job.experience?t.$t("jc.expEmpty"):1>t.job.experience?t.$t("jc.expNone"):t.job.experience>=1&&3>t.job.experience?t.$t("jc.exp1_3"):t.job.experience>=3&&5>t.job.experience?t.$t("jc.exp3_5"):t.job.experience>=5?t.$t("jc.exp5_"):"")+" "+t.filteredDesc)}})]),s("div",{staticClass:"line"},[s("div",{staticClass:"line spbtw",staticStyle:{width:"100%"}},[s("a",{staticClass:"showContactsLink noshow-below550",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isContactsShown=!t.isContactsShown}}},[t._v("\n        "+t._s(t.$t("jc.contactsLabel"))+"\n      ")]),s("a",{staticClass:"showContactsLink show550",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isContactsShown=!t.isContactsShown}}},[t._v("\n        "+t._s(t.$t("jc.contactsLabel_mobile"))+"\n      ")]),"company"==t.user.role||t.cved?"subscriber"==t.user.role?s("div",{staticClass:"cvSentSpan"},[s("span",{staticStyle:{"font-size":"13px",color:"gray","user-select":"none"}},[t._v(t._s(t.$t("jc.cvSent")))]),t.hitcv?s("q-tooltip",[t.hitcv&&t.hitcv.date_created?s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jc.tooltipSent"))+" "+t._s(t.formatDate(t.hitcv.date_created)))]):t._e(),t.hitcv&&t.hitcv.date_checked?s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jc.tooltipSeen"))+" "+t._s(t.formatDate(t.hitcv.date_checked)))]):s("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jc.tooltipNotseen")))])]):t._e()],1):t._e():s("a",{staticClass:"sendCVLink",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$store.dispatch("hitcv",{job_id:t.job.job_id,notif:t.$q.notify,firstNote:t.$t("App.firstCVNote"),onlyReg:t.$t("App.onlyRegisteredCV")})}}},[t._v("\n        "+t._s(t.$t("jc.sendCVLabel"))+"\n      ")])])]),s("div",{staticClass:"contactsPanel line",class:{heightTransition:t.isContactsShown},staticStyle:{"margin-top":"10px"}},[s("div",[s("span",{staticStyle:{"font-weight":"300"}},[t._v("Email:")]),t._v(" "+t._s(""!=t.job.contact_mail?t.job.contact_mail:t.$t("jc.notSpecified")))]),s("div",[s("span",{staticStyle:{"font-weight":"300"}},[t._v("Tel:")]),t._v(" "+t._s(t.job.contact_tel))])])])},p=[],u=(s("a481"),s("28a5"),s("6762"),s("2fdb"),{name:"JobCard",props:{hitcv:Object,cved:Boolean,job:Object},data:function(){return{isContactsShown:!1}},computed:{user:function(){return{role:this.$store.state.user.role}},searchFilter:function(){return this.$store.state.jFilters.txt.toLowerCase()},lastUpdated:function(){var t=new Date(this.job.updated),e=new Date,s=864e5,i=(e.getTime()-t.getTime())/s|0,a=t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear();return 0==i?a='<span style="color: var(--btn-color); letter-spacing: 1px;">'+this.$t("jc.today")+"</span>":1==i?a='<span style="color: var(--btn-color); letter-spacing: 1px;">'+this.$t("jc.yesterday")+"</span>":i<5&&(a='<span class="gray">'.concat(i," ").concat(this.$t("jc.daysAgo"),"</span>")),a},currency:function(){return this.$t("App.currencyDic")[this.job.currency]},filteredTitle:function(){if(this.searchFilter.length>1&&this.job.title.toLowerCase().includes(this.searchFilter)){var t=this.job.title.toLowerCase().indexOf(this.searchFilter);return this.job.title.substr(0,t)+'<span class="searched">'+this.job.title.substr(t,this.searchFilter.length)+"</span>"+this.job.title.substr(t+this.searchFilter.length)}return this.job.title},filteredAuthor:function(){if(this.searchFilter.length>1&&this.job.author.toLowerCase().includes(this.searchFilter)){var t=this.job.author.toLowerCase().indexOf(this.searchFilter);return this.job.author.substr(0,t)+'<span class="searched">'+this.job.author.substr(t,this.searchFilter.length)+"</span>"+this.job.author.substr(t+this.searchFilter.length)}return this.job.author},filteredCity:function(){if(this.searchFilter.length>1&&this.job.city.toLowerCase().includes(this.searchFilter)){var t=this.job.city.toLowerCase().indexOf(this.searchFilter);return this.job.city.substr(0,t)+'<span class="searched">'+this.job.city.substr(t,this.searchFilter.length)+"</span>"+this.job.city.substr(t+this.searchFilter.length)}return 0==this.job.city.length?this.$t("jc.notSpecified"):this.job.city},filteredDesc:function(){if(this.searchFilter.length>1&&this.job.description.toLowerCase().includes(this.searchFilter)){var t=this.job.description.split("<br>").slice(0,1).join("");t=this.strip(t);var e=t.toLowerCase().indexOf(this.searchFilter),s=t.substr(0,e)+'<span class="searched">'+t.substr(e,this.searchFilter.length)+"</span>"+t.substr(e+this.searchFilter.length);return s}return this.strip(this.job.description.split("<br>").slice(0,1).join(""))}},methods:{formatDate:function(t){var e=new Date(t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()},strip:function(t){return t.replace(/<(?:.|\n)*?>/gm," ").replace("  "," ")}}}),d=u,f=(s("e4a8"),s("2877")),h=s("eebe"),b=s.n(h),_=s("05c0"),v=Object(f["a"])(d,l,p,!1,null,"59c4254a",null),j=v.exports;b()(v,"components",{QTooltip:_["a"]});var g={name:"JobsList",computed:{jobslist:function(){return this.$store.state.jobslist},ownCVs:function(){return this.$store.state.user.ownCVs},ownCVj_ids:function(){return this.$store.getters.ownCVj_ids}},components:{JobCard:j}},C=g,y=Object(f["a"])(C,c,o,!1,null,null,null),m=y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobsfilter",class:{filtersHideBelow550:!t.$store.state.jfiltersToggle}},[s("span",{staticClass:"line0"},[s("h3",{staticClass:"filter__header"},[t._v("\n      "+t._s(t.$t("filters.fHeader"))+"\n    ")]),s("button",{staticClass:"closeModal",on:{click:function(e){return t.$store.dispatch("filtersOff")}}},[t._v("╳")])]),s("span",{staticClass:"lowresline"},[s("span",{staticClass:"lowres__double"},[s("span",{staticClass:"f-label"},[t._v(t._s(t.$t("filters.city")))]),s("DDSelect",{staticClass:"selectWrapper",attrs:{picked:t.jFilters.city,cities:t.$t("filters.cities"),ph:t.$t("filters.fCityPh")},on:{"update:city":function(e){t.$store.dispatch("filterUpd",{prop:"city",value:e==t.$t("filters.cities")[0]?"":e})}}})],1),s("span",{staticClass:"lowres__double"},[s("span",{staticClass:"f-label"},[t._v(t._s(t.$t("filters.jcat")))]),s("BasicSelect",{staticClass:"selectWrapper",attrs:{picked:t.jFilters.jcat,values:t.$t("App.jcats"),ph:t.$t("filters.fJCatPh"),emptyTemplate:"0"},on:{"update:value":function(e){return t.$store.dispatch("filterUpd",{prop:"jcat",value:""==e.value?{label:"",value:0}:e})}}})],1)]),s("span",{staticClass:"lowresline"},[s("span",{staticClass:"lowres__double"},[s("span",{staticClass:"f-label"},[t._v(t._s(t.$t("filters.exp")))]),s("BasicSelect",{staticClass:"selectWrapper",attrs:{picked:t.jFilters.exp,values:t.$t("filters.expFilters"),ph:t.$t("filters.fExpPh")},on:{"update:value":function(e){return t.$store.dispatch("filterUpd",{prop:"exp",value:"idc"==e.value?{label:"",value:"idc"}:e})}}})],1),s("div",{staticClass:"line lowres__salaryWrap"},[s("div",{staticClass:"salary_inp_wrapper"},[s("span",{staticClass:"f-label"},[t._v(t._s(t.$t("filters.sal")))]),s("BasicSelect",{staticClass:"selectWrapper",attrs:{picked:t.jFilters.salary,values:t.$t("filters.salFilters"),ph:t.$t("filters.fSalPh")},on:{"update:value":function(e){return t.$store.dispatch("filterUpd",{prop:"salary",value:"idc"==e.value?{label:"",value:"idc"}:e})}}})],1),s("div",{staticClass:"currency_inp_wrapper"},[s("span",{staticClass:"f-label",staticStyle:{"margin-left":"0"}},[t._v(t._s(t.$t("filters.curr")))]),s("BasicSelect",{staticClass:"selectWrapper",attrs:{picked:t.jFilters.currency,values:t.$t("filters.currDefault"),ph:""},on:{"update:value":function(e){return t.$store.dispatch("filterUpd",{prop:"currency",value:"idc"==e.value?{label:"",value:"idc"}:e})}}})],1)])]),s("div",{staticClass:"w100 lowres__bottom",style:{justifyContent:t.$store.getters.isResetShown?"space-between":"flex-end"}},[t.$store.getters.isResetShown?s("q-btn",{staticClass:"headerBtns1 trashBg",on:{click:function(e){t.$store.dispatch("resetFilters"),t.$store.dispatch("filtersOff")}}}):t._e(),s("q-btn",{staticClass:"headerBtns1 applybtn",staticStyle:{"background-color":"var(--violet-btn-color)","font-weight":"700",width:"100%"},style:{width:t.$store.getters.isResetShown?"126px":"100%"},attrs:{loading:t.pending,"text-color":"white",label:t.$t("filters.applyBtn")},on:{click:t.applyFilters}})],1)])},w=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"DDSelect"},[s("input",{ref:"mainInput",attrs:{type:"text",placeholder:t.ph},domProps:{value:t.picked},on:{input:function(e){return t.$emit("update:city",e.target.value)},keypress:t.pressEnter,focusin:function(e){t.i_focus=!0},focusout:t.focout}}),""!=t.picked?s("button",{staticClass:"DD__reset",on:{click:function(e){return t.selectit("")}}},[t._v("X")]):t._e(),t.i_focus?s("ul",{staticClass:"dd"},t._l(t.cities.slice(1).filter((function(e){return e.toLowerCase().includes(t.picked.toLowerCase())})),(function(e){return s("li",{key:e,on:{click:function(s){return t.selectit(e)}}},[t._v(t._s(e))])})),0):t._e()])},k=[],O={name:"DDSelect",props:{cities:Array,ph:String,picked:String},data:function(){return{i_focus:!1}},methods:{pressEnter:function(t){13===t.keyCode&&(this.$refs.mainInput.blur(),this.i_focus=!1)},focout:function(){var t=this;setTimeout((function(e){t.i_focus=!1}),250)},selectit:function(t){this.i_focus=!1,this.$emit("update:city",t)}}},S=O,F=(s("1adf"),Object(f["a"])(S,x,k,!1,null,"0f39c1b9",null)),L=F.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"BasicSelect"},[s("div",{staticClass:"selected",attrs:{tabindex:"1"},on:{click:function(e){t.i_focus=!t.i_focus,t.moved=!1},focusout:t.focout}},[t.picked.value==t.emptyTemplate?s("div",{staticClass:"ph"},[t._v(t._s(t.ph))]):s("div",[t._v(t._s(t.picked.label))])]),t.i_focus?s("ul",{staticClass:"dd",on:{mousemove:function(e){t.moved=!0}}},t._l(t.values,(function(e){return s("li",{key:e.value,class:e==t.picked&&0==t.moved?"highlighted":"",on:{click:function(s){return t.selectit(e)}}},[t._v(t._s(e.label))])})),0):t._e()])},P=[],B={name:"BasicSelect",props:{values:Array,ph:String,emptyTemplate:{type:String,default:"idc"},picked:Object},data:function(){return{i_focus:!1,moved:!1}},methods:{pressEnter:function(t){13===t.keyCode&&(this.$refs.mainInput.blur(),this.i_focus=!1)},focout:function(){var t=this;setTimeout((function(e){t.i_focus=!1}),250)},selectit:function(t){this.i_focus=!1,this.$emit("update:value",t)}}},T=B,H=(s("ad3c"),Object(f["a"])(T,D,P,!1,null,"d0ae21fa",null)),M=H.exports,E=s("2f62");function J(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function U(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?J(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):J(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var A={name:"JobsFilter",props:{pending:{type:Boolean,default:!1}},computed:U({},Object(E["b"])(["jFilters",["city","jcat","salary","exp","currency"]])),methods:{applyFilters:function(){this.$store.dispatch("refreshjobs",{}),this.$store.dispatch("filtersOff")}},components:{DDSelect:L,BasicSelect:M}},V=A,q=(s("2ec9"),s("9c40")),z=Object(f["a"])(V,$,w,!1,null,"6f641660",null),N=z.exports;b()(z,"components",{QBtn:q["a"]});var R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobs__right-aside"},[s("div",{staticClass:"right-aside__salaries-stat statbox"},[s("h3",{staticClass:"aside-h3",staticStyle:{"margin-left":"7px"}},[t._v("\n      "+t._s(t.$t("jobs.salHeader"))+"\n    ")]),s("div",{staticClass:"wrapline"},[s("div",{staticClass:"wrapcol0"},[s("svg",{attrs:{width:"8",height:"201",viewBox:"0 0 8 201",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4.59815 0.633789C4.40289 0.438522 4.08631 0.438522 3.89105 0.633789L0.709064 3.81577C0.513802 4.01103 0.513802 4.32761 0.709064 4.52287C0.904327 4.71812 1.22091 4.71812 1.41617 4.52287L4.2446 1.69444L7.07303 4.52287C7.26829 4.71812 7.58487 4.71812 7.78013 4.52287C7.97539 4.32761 7.97539 4.01103 7.78013 3.81577L4.59815 0.633789ZM4.7446 200.003L4.7446 0.987335H3.7446L3.7446 200.003H4.7446Z",fill:"#181059"}})])]),s("div",{staticClass:"wrapcol"},[s("div",{staticClass:"sal"},[t._v(t._s(t.salData.salMin))]),s("div",{staticClass:"boxMin"})]),s("div",{staticClass:"wrapcol"},[s("div",{staticClass:"sal"},[t._v(t._s(t.salData.salAvg))]),s("div",{staticClass:"boxAvg"})]),s("div",{staticClass:"wrapcol"},[s("div",{staticClass:"sal"},[t._v(t._s(t.salData.salMax))]),s("div",{staticClass:"boxMax"})])]),s("div",{staticClass:"wrapline2"},[s("svg",{attrs:{width:"170",height:"9",viewBox:"0 0 170 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M169.425 4.85377C169.621 4.6585 169.621 4.34192 169.425 4.14666L166.243 0.96468C166.048 0.769418 165.732 0.769418 165.536 0.96468C165.341 1.15994 165.341 1.47652 165.536 1.67179L168.365 4.50021L165.536 7.32864C165.341 7.5239 165.341 7.84049 165.536 8.03575C165.732 8.23101 166.048 8.23101 166.243 8.03575L169.425 4.85377ZM0.997864 5.00021H169.072V4.00021H0.997864V5.00021Z",fill:"#181059"}})])])]),s("div",{staticClass:"right-aside__professions-stat statbox"},[s("h3",{staticClass:"aside-h3"},[t._v("\n      "+t._s(t.$t("jobs.topJobsHeader"))+"\n    ")]),s("div",{staticClass:"professions-list"},t._l(t.salData.tops,(function(e,i){return s("div",{key:i,staticClass:"professions-row"},[s("div",[s("a",{staticClass:"professions-link",attrs:{href:"/jobpage?id="+e[2],target:"_blank"}},[t._v(t._s(e[0]))])]),s("div",[t._v(t._s(e[1]))])])})),0)])])},W=[],I={name:"UserStats",computed:{salData:function(){return this.$store.state.uStats}},methods:{}},Q=I,Z=(s("14d2"),Object(f["a"])(Q,R,W,!1,null,"338242d0",null)),Y=Z.exports;function K(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function X(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?K(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):K(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var G={name:"Jobs",props:{},preFetch:function(t){var e=t.store,s=(t.currentRoute,t.previousRoute,t.redirect,t.ssrContext);if(s)return e.dispatch("refreshJobsData",s.req.rawjobs)},components:{JobsFilter:N,JobsList:m,UserStats:Y},computed:X({},Object(E["b"])(["jFilters",["txt","timerange","sort","perpage"]]),{page_current:function(){return this.$store.state.jobs.page_current},pages:function(){return this.$store.getters.pages}})},tt=G,et=(s("0f06"),s("4e73")),st=s("66e5"),it=s("7f67"),at=Object(f["a"])(tt,i,a,!1,null,"3e231366",null);e["default"]=at.exports;b()(at,"components",{QBtn:q["a"],QMenu:et["a"],QItem:st["a"]}),b()(at,"directives",{ClosePopup:it["a"]})},df06:function(t,e,s){},e4a8:function(t,e,s){"use strict";var i=s("3915"),a=s.n(i);a.a}}]);