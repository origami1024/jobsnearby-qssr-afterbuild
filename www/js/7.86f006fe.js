(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"64d3":function(t,e,a){"use strict";var s=a("6a84"),i=a.n(s);i.a},"6a84":function(t,e,a){},"6d6e":function(t,e,a){"use strict";a.r(e);var s,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addJob"},["new"===t.props.newJobsPageType?a("p",{staticClass:"pageHeader noshow-below550"},[t._v(t._s(t.$t("addJob.pTypeNewLabel")))]):a("p",{staticClass:"pageHeader noshow-below550"},[t._v(t._s(t.$t("addJob.pTypeEditLabel")))]),a("transition",{attrs:{name:"bounce"}},["company"===t.user.role&&"none"==t.props.sent?a("div",{key:1,staticClass:"jobpage__wrapper",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},["new"===t.props.newJobsPageType?a("p",{staticClass:"pageHeader displayblock-only550",staticStyle:{"margin-top":"0","margin-bottom":"16px"}},[t._v(t._s(t.$t("addJob.pTypeNewLabel")))]):a("p",{staticClass:"pageHeader displayblock-only550",staticStyle:{"margin-top":"0","margin-bottom":"16px"}},[t._v(t._s(t.$t("addJob.pTypeEditLabel")))]),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP reqd"},[t._v(t._s(t.$t("addJob.titleLabel")))])]),a("q-input",{ref:"title",style:{width:"100%"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:null,placeholder:t.$t("addJob.titlePh"),rules:[function(e){return t.lazyRulesAll||!!e||t.$t("addJob.titleValidationRequired")},function(e){return t.lazyRulesAll||e.length>1||t.$t("addJob.titleValidationMin")},function(e){return e.length<76||t.$t("addJob.titleValidationMax")},function(e){return/^[\wа-яА-ЯÇçÄä£ſÑñňÖö$¢Üü¥ÿýŽžŞş\s\-\.\,\+\$\%\(\)\№\:\#\/]*$/.test(e)||t.$t("addJob.titleValidationSymbols")}],"lazy-rules":t.lazyRulesAll},model:{value:t.job.title,callback:function(e){t.$set(t.job,"title",e)},expression:"job.title"}})],1),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.cityLabel")))])]),a("q-select",{ref:"city",staticClass:"dropdown-padding-adjust",attrs:{value:t.job.city,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",options:t.cityOptions,hint:null,placeholder:t.$t("addJob.cityPh"),"dropdown-icon":"none",rules:[function(e){return e.length<71||t.$t("addJob.cityValidationLength")},function(e){return/^[a-zA-Zа-яА-ЯÇçÄä£ſÑñňÖö$¢Üü¥ÿýŽžŞş\s\-\(\)]*$/.test(e)||t.$t("addJob.cityValidationFormat")}],"lazy-rules":t.lazyRulesAll},on:{input:t.cityUpd,filter:t.filterFn,keyup:t.addNewCity}})],1),a("div",{staticClass:"w586"},[a("div",{staticClass:"sal-curr-wrap",staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{staticClass:"sal-wrap"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP reqd"},[t._v(t._s(t.$t("addJob.salaryLabel")))])]),a("div",{staticClass:"line"},[a("q-input",{ref:"salary_min",staticClass:"salInputsAdaptable salInput1",attrs:{disable:t.salaryOn,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMinPH"),hint:null,rules:[function(e){return e>=0&&String(e).length<6&&e<1e5||t.$t("addJob.salaryValidationRange")}]},on:{input:function(e){t.salaryValidated=!0,t.$refs.salary_max.validate()}},model:{value:t.job.salary_min,callback:function(e){t.$set(t.job,"salary_min",e)},expression:"job.salary_min"}}),a("q-input",{ref:"salary_max",staticClass:"salInputsAdaptable",attrs:{disable:t.salaryOn,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.salaryMaxPH"),hint:null,rules:[function(e){return e>=0&&String(e).length<6&&e<1e5||t.$t("addJob.salaryValidationRange")},function(e){return t.salaryValidated||t.$t("addJob.salaryValidationEnter")}]},on:{input:function(e){t.salaryValidated=!0}},model:{value:t.job.salary_max,callback:function(e){t.$set(t.job,"salary_max",e)},expression:"job.salary_max"}})],1)]),a("div",[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.currLabel")))])]),a("q-select",{staticClass:"salInputsAdaptable dropdown-padding-adjust",staticStyle:{lineHeight:"3.2",color:"white !important","margin-left":"auto"},attrs:{disable:t.salaryOn,dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",options:[{label:t.$t("addJob.manat"),value:"m"},{label:t.$t("addJob.dollars"),value:"$"}],"dropdown-icon":"none",hint:null},model:{value:t.job.currency,callback:function(e){t.$set(t.job,"currency",e)},expression:"job.currency"}})],1)]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("q-checkbox",{staticClass:"salcb1",attrs:{for:"salcb1",dense:"",color:"red-10"},on:{input:function(e){t.$refs.salary_min.resetValidation(),t.$refs.salary_max.resetValidation(),t.salaryValidated=!0}},model:{value:t.salaryOn,callback:function(e){t.salaryOn=e},expression:"salaryOn"}}),a("label",{staticStyle:{cursor:"pointer",color:"var(--color1)","font-size":"14px","line-height":"17px","user-select":"none","font-weight":"500"},attrs:{for:"salcb1"},on:{click:function(e){t.salaryOn=!t.salaryOn,t.$refs.salary_min.resetValidation(),t.$refs.salary_max.resetValidation(),t.salaryValidated=!0}}},[t._v("\n            "+t._s(t.$t("addJob.salaryCB1Hint"))+"\n          ")])],1)]),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticStyle:{color:"var(--color1)","font-weight":"500",display:"block","font-family":"Montserrat","font-size":"14px","line-height":"17px","margin-top":"25px","text-align":"left"}},[t._v("\n          "+t._s(t.$t("addJob.descLabel"))),a("span",{staticStyle:{color:"#c10015"}},[t._v(" "+t._s(t.descError))])])]),a("div",{staticClass:"desc-col-wrap",staticStyle:{"border-radius":"10px",textAlign:"left",width:"100%","margin-bottom":"20px"}},[a("q-no-ssr",{attrs:{placeholder:"Loading Your Editor..."}},[a("vue-editor",{staticStyle:{"background-color":"white","border-radius":"10px","box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.1)"},attrs:{editorToolbar:t.customToolbar},on:{blur:t.descBlur,input:t.descUpd},model:{value:t.job.description,callback:function(e){t.$set(t.job,"description",e)},expression:"job.description"}})],1)],1)]),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP reqd",staticStyle:{textAlign:"left"}},[t._v(t._s(t.$t("addJob.contactsLabel")))])]),a("q-input",{ref:"contact_mail",attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.emailPH"),type:"email",hint:null,rules:[function(e){return e.length<41||t.$t("addJob.emailValidationLength")},function(e){return e.length<1||t.isValidMail(e)||t.$t("addJob.emailValidationFormat")},function(e){return t.contactsValidated||t.$t("addJob.emailValidationEnter")}],"lazy-rules":t.lazyRulesAll},on:{input:function(e){t.contactsValidated=!0,t.$refs.contact_mail.validate()}},model:{value:t.job.contact_mail,callback:function(e){t.$set(t.job,"contact_mail",e)},expression:"job.contact_mail"}}),a("q-input",{ref:"contact_tel",attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.telPH"),type:"tel",hint:null,rules:[function(e){return e.length<16||t.$t("addJob.telValidationLengthMax")},function(e){return 0==e.length||e.length>4||t.$t("addJob.telValidationLengthMin")},function(e){return e.length<1||/^[\+0-9\-\(\)]*$/.test(e)||t.$t("addJob.telValidationFormat")}],"lazy-rules":t.lazyRulesAll},on:{input:function(e){t.contactsValidated=!0,t.$refs.contact_mail.validate()}},model:{value:t.job.contact_tel,callback:function(e){t.$set(t.job,"contact_tel",e)},expression:"job.contact_tel"}})],1),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.jcatLabel")))])]),a("q-select",{staticClass:"dropdown-padding-adjust",staticStyle:{width:"100%"},attrs:{dense:"",outlined:"","dropdown-icon":"none","bg-color":"white",color:"deep-purple-10",options:t.$t("App.jcats"),hint:null},model:{value:t.job.jcategory,callback:function(e){t.$set(t.job,"jcategory",e)},expression:"job.jcategory"}})],1),a("div",{staticClass:"w586"},[a("q-expansion-item",{ref:"exp1",staticClass:"expansion1",staticStyle:{color:"var(--violet-btn-color)","font-family":"Montserrat","font-weight":"500","font-size":"14px","line-height":"17px",marginBottom:"10px","text-align":"right","align-self":"flex-end"},attrs:{dense:"","expand-icon":"none",label:t.$t("addJob.moreLabel")}},[a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.expLabel")))])]),a("q-select",{staticClass:"dropdown-padding-adjust",attrs:{dense:"",outlined:"","dropdown-icon":"none","bg-color":"white",color:"deep-purple-10",options:t.$t("App.expOpts"),hint:null},model:{value:t.job.experience,callback:function(e){t.$set(t.job,"experience",e)},expression:"job.experience"}})],1),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.jobTypeLabel")))])]),a("q-select",{staticClass:"dropdown-padding-adjust",attrs:{dense:"",outlined:"","dropdown-icon":"none","bg-color":"white",color:"deep-purple-10",options:t.$t("App.jtypeOptions"),hint:null},model:{value:t.job.jtype,callback:function(e){t.$set(t.job,"jtype",e)},expression:"job.jtype"}})],1),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.labelSchedule")))])]),a("div",{staticClass:"line"},[a("q-input",{ref:"worktime1",style:{width:"150px",marginRight:"40px"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.genericFrom"),hint:null,rules:[function(e){return 0==isNaN(e)||t.$t("addJob.genericEnterNumber")},function(e){return e==(0|e)||t.$t("addJob.genericWholeNumber")},function(e){return void 0==e||""==e||e>=0||t.$t("addJob.genericPositiveNumber")},function(e){return e<25||t.$t("addJob.generic24Max")}],"lazy-rules":t.lazyRulesAll},model:{value:t.job.worktime1,callback:function(e){t.$set(t.job,"worktime1",e)},expression:"job.worktime1"}}),a("q-input",{ref:"worktime2",style:{width:"150px",marginRight:"10px"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.genericTo"),hint:null,rules:[function(e){return 0==isNaN(e)||t.$t("addJob.genericEnterNumber")},function(e){return e==(0|e)||t.$t("addJob.genericWholeNumber")},function(e){return void 0==e||""==e||e>=0||t.$t("addJob.genericPositiveNumber")},function(e){return e<25||t.$t("addJob.generic24Max")}],"lazy-rules":t.lazyRulesAll},model:{value:t.job.worktime2,callback:function(e){t.$set(t.job,"worktime2",e)},expression:"job.worktime2"}}),a("q-select",{ref:"schedule",staticClass:"dropdown-padding-adjust",staticStyle:{width:"150px","margin-left":"auto"},attrs:{value:t.job.schedule,dense:"",outlined:"","dropdown-icon":"none","bg-color":"white",color:"deep-purple-10","use-input":"","input-debounce":"0","fill-input":"","hide-selected":"",placeholder:t.$t("addJob.schedulePH"),options:t.scheduleOptions,hint:null,rules:[function(e){return e.length<11||t.$t("addJob.scheduleValidationLengthMax")},function(e){return/^[\wа-яА-ЯÇçÄä£ſÑñňÖö$¢Üü¥ÿýŽžŞş\s\-\(\)\\\/]*$/.test(e)||t.$t("addJob.scheduleValidationFormat")}],"lazy-rules":t.lazyRulesAll},on:{input:t.scheduleUpd,filter:t.filterSchedule,keyup:t.addNewSchedule}})],1)]),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.ageLabel")))])]),a("div",{staticClass:"line"},[a("q-input",{ref:"age1",style:{width:"150px",marginRight:"40px"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.genericFrom"),hint:null,rules:[function(e){return 0==isNaN(e)||t.$t("addJob.genericEnterNumber")},function(e){return void 0==e||""==e||e>=18||t.$t("addJob.genericFrom18")},function(e){return e<100||t.$t("addJob.genericTooMuch")}],"lazy-rules":t.lazyRulesAll},model:{value:t.job.age1,callback:function(e){t.$set(t.job,"age1",e)},expression:"job.age1"}}),a("q-input",{ref:"age2",style:{width:"150px",marginRight:"10px"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",placeholder:t.$t("addJob.genericTo"),hint:null,rules:[function(e){return 0==isNaN(e)||t.$t("addJob.genericEnterNumber")},function(e){return void 0==e||""==e||e>=18||t.$t("addJob.genericFrom18")},function(e){return e<100||t.$t("addJob.genericTooMuch")}],"lazy-rules":t.lazyRulesAll},model:{value:t.job.age2,callback:function(e){t.$set(t.job,"age2",e)},expression:"job.age2"}})],1)]),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.eduLabel")))])]),a("q-input",{ref:"edu",attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:null,rules:[function(e){return e.length<21||t.$t("addJob.eduValidationLengthMax")},function(e){return/^[a-zA-Zа-яА-ЯÇçÄä£ſÑñňÖö$¢Üü¥ÿýŽžŞş\s\-\(\)]*$/.test(e)||t.$t("addJob.eduValidationFormat")}],"lazy-rules":t.lazyRulesAll},model:{value:t.job.edu,callback:function(e){t.$set(t.job,"edu",e)},expression:"job.edu"}},[a("q-tooltip",[a("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("addJob.eduTooltip")))])])],1)],1),a("div",{staticClass:"w586"},[a("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[a("p",{staticClass:"startP"},[t._v(t._s(t.$t("addJob.langsLabel")))])]),a("q-select",{staticClass:"dropdown-padding-adjust",attrs:{multiple:"","use-chips":"",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10","dropdown-icon":"none","max-values":"3",options:t.$t("addJob.langOptions"),hint:null},model:{value:t.job.langs,callback:function(e){t.$set(t.job,"langs",e)},expression:"job.langs"}})],1)])],1),a("q-btn",{staticClass:"headerBtns1 weight600",staticStyle:{"align-self":"center","background-color":"var(--violet-btn-color)",color:"white","font-size":"12px","font-height":"15px"},attrs:{label:"new"==t.props.newJobsPageType?t.$t("addJob.sendJobBtnLabelNew"):t.$t("addJob.sendJobBtnLabelUpdate")},on:{click:t.tryAdd}})],1):"goodNew"==t.props.sent?a("div",{key:2,staticClass:"jobpage__wrapper"},[a("p",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.$t("addJob.sendJobSuccess1"))),a("a",{attrs:{href:"/jobpage?id="+t.returned.job_id,target:"_blank"}},[t._v(t._s(t.returned.title))]),t._v(t._s(t.$t("addJob.sendJobSuccess2")))]),a("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{"margin-top":"12px"},attrs:{color:"red-10",label:t.$t("addJob.btnAddOneMore")},on:{click:function(e){t.$store.dispatch("setAJSentState","none"),t.resetFields(),t.$store.dispatch("newJobInitAJ")}}})],1):"goodEdited"==t.props.sent?a("div",{key:2,staticClass:"jobpage__wrapper"},[a("p",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.$t("addJob.sendJobSuccess1x"))),a("a",{attrs:{href:"/jobpage?id="+t.returned.job_id,target:"_blank"}},[t._v(t._s(t.returned.title))]),t._v(t._s(t.$t("addJob.sendJobSuccess2x")))]),a("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{"margin-top":"12px"},attrs:{color:"red-10",label:t.$t("addJob.btnAddOneMore")},on:{click:function(e){t.$store.dispatch("setAJSentState","none"),t.resetFields(),t.$store.dispatch("newJobInitAJ")}}})],1):"fail"==t.props.sent?a("div",{key:3,staticClass:"jobpage__wrapper"},[a("p",{staticStyle:{color:"red","font-size":"16px"}},[t._v(t._s(t.$t("addJob.sendJobError1")))]),a("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{"margin-top":"12px"},attrs:{color:"red-10",label:t.$t("addJob.btnAddOneMore")},on:{click:function(e){t.$store.dispatch("setAJSentState","none"),t.resetFields(),t.$store.dispatch("newJobInitAJ")}}})],1):"limit"==t.props.sent?a("div",{key:4,staticClass:"jobpage__wrapper"},[a("p",{staticStyle:{color:"red","font-size":"16px"}},[t._v(t._s(t.$t("addJob.sendJobErrorLimit")))])]):"guestUnau"==t.user.role|"guest"==t.user.role?a("div",{key:4,staticClass:"jobpage__wrapper"},[t._v("\n      "+t._s(t.$t("addJob.unauthorized"))+"\n    ")]):t._e()])],1)},o=[];a("28a5"),a("c5f6"),a("f751");s=a("5873").VueEditor;var l={name:"AddJob",computed:{user:function(){return{role:this.$store.state.user.role}},props:function(){return this.$store.state.addJob},jobEditedObj:function(){return this.$store.state.addJob.jobEditedObj}},data:function(){return{salaryOn:!1,returned:{title:"",job_id:-1},jobInit:{title:"",salary_min:"",salary_max:"",currency:this.$t("addJob.currDefault"),jcategory:{label:"",value:0},city:"",age1:"",age2:"",worktime1:"",worktime2:"",schedule:"",langs:[],edu:"",experience:this.$t("App.expOpts[0]"),description:"",contact_mail:"",contact_tel:"",jtype:this.$t("App.jtypeOptions[0]")},cityList:this.$t("App.cityList"),scheduleList:this.$t("addJob.scheduleList"),lazyRulesAll:!0,pageTypes:{new:{label:this.$t("addJob.pTypeNewLabel")},edit:{label:this.$t("addJob.pTypeEditLabel")}},customToolbar:[["bold","italic","underline"],[{size:["small",!1,"large"]}],[{list:"ordered"},{list:"bullet"}],[{align:[]}],["clean"]],job:{title:"",salary_min:"",salary_max:"",currency:this.$t("addJob.currDefault"),jcategory:{label:"",value:0},city:"",age1:"",age2:"",worktime1:"",worktime2:"",schedule:"",langs:[],edu:"",experience:this.$t("App.expOpts[0]"),description:"",contact_mail:"",contact_tel:"",jtype:this.$t("App.jtypeOptions[0]")},contactsValidated:!0,salaryValidated:!0,descError:"",cityOptions:this.cityList,scheduleOptions:this.scheduleList}},watch:{$route:function(t,e){"/addjob"===t.path&&(console.log("cp route addjob - fields reset"),this.resetFields())},jobEditedObj:function(t){console.log("jobEditorWatcher cp0"),"edit"==this.props.newJobsPageType?(this.job=Object.assign({},this.jobInit,t),console.log("jobEditorWatcher cp")):this.job=Object.assign({},this.jobInit),this.$store.dispatch("setAJSentState","none")}},mounted:function(){"edit"==this.props.newJobsPageType?this.job=Object.assign({},this.jobInit,this.props.jobEditedObj):this.job=Object.assign({},this.jobInit)},methods:{descUpd:function(t){t.length<2001&&(this.descError="")},descBlur:function(t){t.root.innerHTML.length>2e3&&(this.descError=this.$t("addJob.descValidation2000"))},resetFields:function(){this.job=Object.assign({},this.jobInit),this.salaryOn=!1,this.lazyRulesAll=!0},tryAdd:function(){var t;this.lazyRulesAll=!1,this.$refs.title.validate(),this.$refs.title.hasError&&(t=130),this.salaryOn||(this.job.salary_min>0||this.job.salary_max>0?this.salaryValidated=!0:this.salaryValidated=!1,this.$refs.salary_min.validate(),this.$refs.salary_max.validate(),(this.$refs.salary_min.hasError||this.$refs.salary_max.hasError)&&(t||(t=150))),this.job.contact_mail&&this.job.contact_mail.length>0||this.job.contact_tel&&this.job.contact_tel.length>0?this.contactsValidated=!0:this.contactsValidated=!1,this.$refs.contact_mail.validate(),this.$refs.contact_tel.validate(),(this.$refs.contact_mail.hasError||this.$refs.contact_tel.hasError||0==this.contactsValidated)&&(t||(t=160)),this.$refs.city.validate(),this.$refs.city.hasError&&(t=190),this.job.description.length>2e3&&(this.descError=this.$t("addJob.descValidation2000"),t=340),this.$refs.age1.validate(),this.$refs.age2.validate(),(this.$refs.age1.hasError||this.$refs.age2.hasError)&&(t=520,this.$refs.exp1.show()),this.$refs.worktime1.validate(),this.$refs.worktime2.validate(),(this.$refs.worktime1.hasError||this.$refs.worktime2.hasError)&&(t=580,this.$refs.exp1.show()),this.$refs.edu.validate(),this.$refs.edu.hasError&&(t=620,this.$refs.exp1.show()),t?this.$emit("scrollTo",t):"new"==this.props.newJobsPageType?this.addOneJob():this.editJobSend()},editJobSend:function(){var t=this,e=Object.assign({},this.job);this.salaryOn?(e.salary_min="",e.salary_max=""):Number(e.salary_min)>Number(e.salary_max)&&(e.salary_max=e.salary_min),e.currency=e.currency.value,e.experience=e.experience.value,e.jtype=e.jtype.value,e.jcategory=e.jcategory.value,e.description=e.description.split("\t").join("&emsp;"),""!=e.title&&e.title.length>1?this.$axios.post("/updateJob",e,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){e.data&&"OK"==e.data.result?(t.returned.title=e.data.title,t.returned.job_id=e.data.job_id,t.$store.dispatch("setAJSentState","goodEdited")):(t.$store.dispatch("setAJSentState","fail"),console.log("trespasser"))})):console.log("NO TITLE in edit")},addOneJob:function(){var t=this,e=Object.assign({},this.job);if(this.salaryOn?(e.salary_min="",e.salary_max=""):Number(e.salary_min)>Number(e.salary_max)&&(e.salary_max=e.salary_min),e.currency=e.currency.value,e.experience=e.experience.value,e.jtype=e.jtype.value,e.jcategory=e.jcategory.value,e.description=e.description.split("\t").join("&emsp;"),!(""!=e.title&&e.title.length>1))return!1;this.$axios.post("/oneJob",e,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){e.data&&"OK"==e.data.result?(t.returned.title=e.data.title,t.returned.job_id=e.data.job_id,t.$store.dispatch("setAJSentState","goodNew"),console.log(e)):(console.log("cp99",e),e.data&&"error limits reached"==e.data?t.$store.dispatch("setAJSentState","limit"):t.$store.dispatch("setAJSentState","fail"))}))},isValidMail:function(t){return/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(t)},addNewCity:function(t){this.cityUpd(t.target.value)},addNewSchedule:function(t){this.scheduleUpd(t.target.value)},filterFn:function(t,e,a){var s=this;e((function(){var e=t.toLowerCase();s.cityOptions=s.cityList.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}))},filterSchedule:function(t,e,a){var s=this;e((function(){var e=t.toLowerCase();s.scheduleOptions=s.scheduleList.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}))},cityUpd:function(t){this.job.city=t},scheduleUpd:function(t){this.job.schedule=t}},components:{VueEditor:s}},n=l,r=(a("728f"),a("64d3"),a("2877")),d=a("eebe"),c=a.n(d),p=a("27f9"),u=a("ddd8"),b=a("8f8e"),h=a("d08c"),y=a("3b73"),f=a("05c0"),g=a("9c40"),m=a("66e5"),x=a("8572"),$=Object(r["a"])(n,i,o,!1,null,"3ed5d393",null);e["default"]=$.exports;c()($,"components",{QInput:p["a"],QSelect:u["a"],QCheckbox:b["a"],QNoSsr:h["a"],QExpansionItem:y["a"],QTooltip:f["a"],QBtn:g["a"],QItem:m["a"],QField:x["a"]})},"728f":function(t,e,a){"use strict";var s=a("c60e"),i=a.n(s);i.a},c60e:function(t,e,a){}}]);