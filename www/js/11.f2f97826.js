(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"6c22":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".registration__inner .q-field--outlined .q-field__control:before{border:0!important}.registration__inner .q-field__control{font-size:14px;line-height:15px;border-radius:10px!important;box-shadow:0px 2px 15px rgba(0,0,0,0.1);height:36px;min-height:36px!important}.registration__inner .q-field__native{height:36px!important;min-height:36px!important;padding:0!important}.registration__inner .q-field__append,.registration__inner .q-field__native input{height:36px}",""]),t.exports=i},7438:function(t,i,a){var e=a("6c22");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=a("499e").default;r("7bcb09de",e,!0,{sourceMap:!1})},"97d0":function(t,i,a){"use strict";var e=a("7438"),r=a.n(e);r.a},a65e:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"registration"},[t.user.role&&t.user.role.startsWith("guest")?a("div",{staticClass:"registration__main"},[a("q-tabs",{staticClass:"shadow-2 tabs",attrs:{value:t.regState,"inline-label":"","active-color":"red-10"},on:{input:function(i){return t.$store.dispatch("regStateChange",i)}}},[a("q-tab",{staticStyle:{width:"50%",fontWeight:"900","letter-spacing":"2px"},attrs:{name:"login"}},[t._v("\n        "+t._s(t.$t("reg.loginLabel"))+"\n      ")]),a("q-tab",{staticStyle:{width:"50%",fontWeight:"900","letter-spacing":"1px"},attrs:{name:"reg"}},[t._v("\n        "+t._s(t.$t("reg.regLabel"))+"\n      ")])],1),a("q-tab-panels",{staticClass:"registration__inner",attrs:{value:t.regState,animated:""}},[a("q-tab-panel",{attrs:{name:"login"}},[a("form",{on:{submit:function(i){return i.preventDefault(),t.trylog(i)}}},[a("label",{staticClass:"reg-label",attrs:{for:"mailInput1"}},[t._v(t._s(t.$t("reg.loginEmailLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"mailInput1",name:"login__mail",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"",autocomplete:"true","error-message":t.login.validation.mail,error:""!=t.login.validation.mail},on:{blur:t.validateMail,input:function(i){t.login.validation.mail=""}},model:{value:t.login.mail,callback:function(i){t.$set(t.login,"mail",i)},expression:"login.mail"}}),a("label",{staticClass:"reg-label",attrs:{for:"pwInput1"}},[t._v(t._s(t.$t("reg.loginPWLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"pwInput1",name:"login__pw",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.login.validation.pw,error:""!=t.login.validation.pw},on:{blur:t.validatePW,input:function(i){t.login.validation.pw=""}},model:{value:t.login.pw,callback:function(i){t.$set(t.login,"pw",i)},expression:"login.pw"}}),a("div",{staticClass:"row spacebetw"},[a("q-checkbox",{staticClass:"rulescb2",staticStyle:{color:"var(--color1)","margin-bottom":"6px"},attrs:{dense:"",color:"red-10",label:t.$t("reg.rmeLabel")},model:{value:t.login.rememberme,callback:function(i){t.$set(t.login,"rememberme",i)},expression:"login.rememberme"}}),a("a",{staticStyle:{alignSelf:"center",color:"var(--btn-color)","font-size":"12px"},attrs:{href:"/forgotten.json"}},[t._v(t._s(t.$t("reg.frgtPWLabel")))])],1),a("q-btn",{staticClass:"submitBtn",staticStyle:{"background-color":"var(--violet-btn-color)",color:"white","border-radius":"10px",width:"100%"},attrs:{label:t.$t("reg.enterBtn"),type:"submit",loading:t.submitting}}),""!=t.login.status?a("p",{staticStyle:{color:"#c00",padding:"0",margin:"0","margin-top":"10px"}},[t._v(t._s(t.login.status))]):t._e(),1==t.notVerified?a("p",{staticStyle:{margin:"0","margin-top":"10px",alignSelf:"center"}},[a("a",{staticStyle:{color:"var(--main-borders-color)"},attrs:{href:"/resend.json"}},[t._v("Отправить верификацию еще раз")])]):t._e()],1)]),a("q-tab-panel",{attrs:{name:"reg"}},[a("form",{attrs:{action:"#"},on:{submit:function(i){return i.preventDefault(),t.tryreg(i)}}},[a("div",{staticStyle:{display:"flex",color:"var(--color1)","font-weight":"700","justify-content":"space-between",width:"100%","margin-bottom":"10px"}},[a("q-radio",{attrs:{color:"red-10",dense:"",val:"subscriber",label:t.$t("reg.radioSub")},model:{value:t.usertype,callback:function(i){t.usertype=i},expression:"usertype"}}),a("q-radio",{attrs:{color:"red-10",dense:"",val:"company",label:t.$t("reg.radioCom")},model:{value:t.usertype,callback:function(i){t.usertype=i},expression:"usertype"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"company"===t.usertype,expression:"usertype === 'company'"}]},[a("label",{staticClass:"reg-label",attrs:{for:"reg_company"}},[t._v(t._s(t.$t("reg.companyLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"reg_company",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.validation.company,error:""!=t.validation.company},on:{blur:t.valiRegCompany,input:function(i){t.validation.company=""}},model:{value:t.company,callback:function(i){t.company=i},expression:"company"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"company"===t.usertype,expression:"usertype === 'company'"}],staticStyle:{display:"flex",width:"100%","margin-top":"-8px","margin-bottom":"14px"}},[a("q-checkbox",{staticStyle:{"font-family":"Montserrat, sans-serif",color:"var(--color1)"},attrs:{color:"red-10",label:t.$t("reg.agencyLabel"),dense:"","left-label":""},model:{value:t.agency,callback:function(i){t.agency=i},expression:"agency"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"subscriber"===t.usertype,expression:"usertype === 'subscriber'"}]},[a("label",{staticClass:"reg-label",attrs:{for:"name2"}},[t._v(t._s(t.$t("reg.nameLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"name2",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.validation.name,error:""!=t.validation.name},on:{blur:t.valiRegName,input:function(i){t.validation.name=""}},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}}),a("label",{staticClass:"reg-label",attrs:{for:"surname2"}},[t._v(t._s(t.$t("reg.surnameLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"surname2",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.validation.surname,error:""!=t.validation.surname},on:{blur:t.valiRegSurname,input:function(i){t.validation.surname=""}},model:{value:t.surname,callback:function(i){t.surname=i},expression:"surname"}})],1),a("label",{staticClass:"reg-label",attrs:{for:"mailInput2"}},[t._v(t._s(t.$t("reg.loginEmailLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"mailInput2",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.validation.mail,error:""!=t.validation.mail},on:{blur:t.valiRegMail,input:function(i){t.validation.mail=""}},model:{value:t.mail,callback:function(i){t.mail=i},expression:"mail"}}),a("label",{staticClass:"reg-label",attrs:{for:"pw2"}},[t._v(t._s(t.$t("reg.loginPWLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"pw2",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.validation.pw,error:""!=t.validation.pw},on:{blur:t.valiRegPW,input:function(i){t.validation.pw=""}},model:{value:t.pw,callback:function(i){t.pw=i},expression:"pw"}}),a("label",{staticClass:"reg-label",attrs:{for:"pwc2"}},[t._v(t._s(t.$t("reg.regConfirmPWLabel")))]),a("q-input",{staticStyle:{width:"100%"},attrs:{for:"pwc2",square:"",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:"","error-message":t.validation.pwc,error:""!=t.validation.pwc},on:{blur:t.valiRegPWC,input:function(i){t.validation.pwc=""}},model:{value:t.pwc,callback:function(i){t.pwc=i},expression:"pwc"}}),a("div",{staticStyle:{display:"flex","flex-direction":"row","margin-bottom":"20px"}},[a("q-checkbox",{staticStyle:{"align-self":"flex-start","margin-right":"7px"},attrs:{dense:"",color:"red-10",id:"rulescb1","error-message":t.validation.rules,error:""!=t.validation.rules},model:{value:t.rules,callback:function(i){t.rules=i},expression:"rules"}}),a("label",{staticClass:"cb1rules-label",staticStyle:{"padding-top":"3px",color:"var(--color1)"},attrs:{for:"rulescb1"}},[t._v("\n              * "+t._s(t.$t("reg.rulesStart"))+" "),a("a",{staticClass:"cb1rules-link",staticStyle:{color:"var(--btn-color)","text-decoration":"none"}},[t._v(t._s(t.$t("reg.rulesLink")))]),t._v(t._s(t.$t("reg.rulesEnd"))+"\n            ")])],1),a("q-btn",{staticClass:"submitBtn",staticStyle:{"background-color":"var(--violet-btn-color)",color:"white","border-radius":"10px",width:"100%"},attrs:{label:t.$t("reg.regBtn"),type:"submit",loading:t.submitting}})],1)])],1)],1):a("div",[t._v("\n    "+t._s(t.$t("reg.alreadyAuthedMessage"))+"\n  ")])])},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("9523")),s=a.n(n),o=a("2f62");function l(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.push.apply(a,e)}return a}function c(t){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?l(Object(a),!0).forEach((function(i){s()(t,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))}))}return t}var g={name:"registration",computed:c(c(c({},Object(o["b"])(["user",["role"]])),Object(o["b"])(["regState"])),Object(o["b"])(["authStatus"])),data:function(){return{notVerified:!1,login:{mail:"",pw:"",status:"",rememberme:!0,showErrors:!1,validation:{mail:"",pw:""}},submitting:!1,wordRegex:/^[\wа-яА-ЯÇçÄä£ſÑñňÖö$¢Üü¥ÿýŽžŞş\s\\-]*$/,pwRegex:/[a-zA-Z]/,mail:"",pw:"",pwc:"",rules:!1,usertype:"subscriber",company:"",agency:!1,name:"",surname:"",status:"",showErrors:!1,validation:{mail:"",pw:"",pwc:"",rules:"",company:"",name:"",surname:""}}},methods:{tryreg:function(){var t=this;this.$store.dispatch("setAuthStatus",this.$t("reg.regAllFields")),1!=this.rules&&(this.rules=!1),1!=this.agency&&(this.agency=!1),this.validate()?(this.showErrors=!1,this.submitting=!0,this.$axios.post("/reg",[this.mail.toLowerCase(),this.pw,this.usertype,"subscriber"===this.usertype?this.name:this.company,"subscriber"===this.usertype?this.surname:this.agency],{headers:{"Content-Type":"application/json"}}).then((function(i){"OK"==i.data?(t.$store.dispatch("setAuthStatus","subscriber"===t.usertype?t.$t("reg.regSubscriberSuccess"):t.$t("reg.regSuccess")),t.mail="",t.pw="",t.pwc="",t.rules=!1,t.name="",t.surname="",t.company="",t.agency=!1,t.$store.dispatch("regStateChange","login"),t.login.mail="",t.login.pw="",t.login.status="",t.login.validation.mail="",t.login.validation.pw=""):"step3"==i.data?t.$store.dispatch("setAuthStatus",t.$t("reg.regError3")):"step2"==i.data?t.$store.dispatch("setAuthStatus",t.$t("reg.regError2")):"step1"==i.data?t.$store.dispatch("setAuthStatus",t.$t("reg.regError1")):console.dir("successful registering",i.data),t.submitting=!1,t.$q.notify(t.authStatus)}))):(this.showErrors=!0,this.$q.notify(this.authStatus))},valiRegMail:function(){var t=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;return 0===this.mail.length||t.test(this.mail.toLowerCase())?this.validation.mail="":this.validation.mail=this.$t("reg.loginValiMailFormat"),""===this.validation.mail},valiRegName:function(){return"subscriber"!==this.usertype||(0===this.name.length?this.validation.name="":this.name.length<3||this.name.length>35?this.validation.name=this.$t("reg.nameValiMin"):this.wordRegex.test(this.name)?this.validation.name="":this.validation.name=this.$t("reg.nameValiFormat"),""===this.validation.name)},valiRegSurname:function(){if("subscriber"!==this.usertype)return!0;0===this.surname.length?this.validation.surname="":this.surname.length<3?this.validation.surname=this.$t("reg.surnameValiMin"):this.surname.length>35?this.validation.surname=this.$t("reg.surnameValiMax"):this.wordRegex.test(this.surname)?this.validation.surname="":this.validation.surname=this.$t("reg.surnameValiFormat")},valiRegCompany:function(){if("company"!==this.usertype)return!0;0===this.company.length?this.validation.company="":this.company.length<3?this.validation.company=this.$t("reg.compValiMin"):this.company.length>60?this.validation.company=this.$t("reg.compValiMax"):this.wordRegex.test(this.company)?this.validation.company="":this.validation.company=this.$t("reg.compValiFormat")},valiRegPW:function(){return 0===this.pw.length?this.validation.pw="":this.pw.length<6?this.validation.pw=this.$t("reg.regValiPWMin"):this.pw.length>25?this.validation.pw=this.$t("reg.regValiPWMax"):this.pwRegex.test(this.pw)?this.validation.pw="":this.validation.pw=this.$t("reg.regValiPWChar"),""===this.validation.pw},valiRegPWC:function(){return 0===this.pwc.length?this.validation.pwc="":this.pwc!==this.pw?this.validation.pwc=this.$t("reg.regValiPWCDiff"):this.validation.pwc="",""===this.validation.pwc},validate:function(){var t=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;return 0===this.mail.length?this.validation.mail=this.$t("reg.loginValiMail0"):t.test(this.mail.toLowerCase())?this.validation.mail="":this.validation.mail=this.$t("reg.loginValiMailFormat"),"subscriber"===this.usertype?(0===this.name.length?this.validation.name=this.$t("reg.nameVali0"):this.name.length<3?this.validation.name=this.$t("reg.nameValiMin"):this.name.length>35?this.validation.name=this.$t("reg.nameValiMax"):this.wordRegex.test(this.name)?this.validation.name="":this.validation.name=this.$t("reg.nameValiFormat"),0===this.surname.length?this.validation.surname=this.$t("reg.surnameVali0"):this.surname.length<3?this.validation.surname=this.$t("reg.surnameValiMin"):this.surname.length>35?this.validation.surname=this.$t("reg.surnameValiMax"):this.wordRegex.test(this.surname)?this.validation.surname="":this.validation.surname=this.$t("reg.surnameValiFormat")):0===this.company.length?this.validation.company=this.$t("reg.compVali0"):this.company.length<3?this.validation.company=this.$t("reg.compValiMin"):this.company.length>60?this.validation.company=this.$t("reg.compValiMax"):this.wordRegex.test(this.company)?this.validation.company="":this.validation.company=this.$t("reg.compValiFormat"),0===this.pw.length?this.validation.pw=this.$t("reg.regValiPW0"):this.pw.length<6?this.validation.pw=this.$t("reg.regValiPWMin"):this.pw.length>25?this.validation.pw=this.$t("reg.regValiPWMax"):this.pwRegex.test(this.pw)?this.validation.pw="":this.validation.pw=this.$t("reg.regValiPWChar"),0===this.pwc.length?this.validation.pwc=this.$t("reg.regValiPWC0"):this.pwc!==this.pw?this.validation.pwc=this.$t("reg.regValiPWCDiff"):this.validation.pwc="",this.rules?this.validation.rules="":this.validation.rules=this.$t("reg.regValiRules"),""===this.validation.mail&&""===this.validation.pw&&""===this.validation.pwc&&""===this.validation.rules&&("subscriber"===this.usertype&&""===this.validation.name&&""===this.validation.surname||"company"===this.usertype&&""===this.validation.company)},trylog:function(){var t=this;this.validateLogin()?(this.showErrors=!1,this.submitting=!0,this.$axios.post("/login",[this.login.mail.toLowerCase(),this.login.pw,this.login.rememberme],{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(i){i.data&&i.data.success&&"OK"==i.data.success?(t.login.status="",t.$q.notify({type:"positive",message:t.$t("reg.loginSuccess")}),t.$store.dispatch("loginGo",i.data),localStorage.setItem("userData",JSON.stringify(i.data)),t.$router.push("/"),t.$store.dispatch("refreshjobs",{}),t.login.mail="",t.login.pw=""):"step3"==i.data?(t.login.status=t.$t("reg.loginError3"),t.$q.notify(t.login.status)):"step2"==i.data?(t.login.status=t.$t("reg.loginError2"),t.$q.notify(t.login.status)):"step1"==i.data?(t.login.status=t.$t("reg.loginError1"),t.$q.notify(t.login.status)):209==i.status?(t.$q.notify({type:"negative",message:i.data}),t.login.status=i.data):211==i.status?(t.$q.notify({type:"negative",message:i.data}),t.notVerified=!0,t.login.status=i.data):console.dir("successful login",i.data,i.headers),t.submitting=!1}))):this.login.showErrors=!0},validateMail:function(){var t=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;return 0===this.login.mail.length||t.test(this.login.mail.toLowerCase())?this.login.validation.mail="":this.login.validation.mail=this.$t("reg.loginValiMailFormat"),""===this.login.validation.mail},validatePW:function(){return 0===this.login.pw.length?this.login.validation.pw="":this.login.pw.length<5||this.login.pw.length>25?this.login.validation.pw=this.$t("reg.loginValiPWFormat"):this.login.validation.pw="",""===this.login.validation.pw},validateLogin:function(){var t=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;return 0===this.login.mail.length?this.login.validation.mail=this.$t("reg.loginValiMail0"):t.test(this.login.mail.toLowerCase())?this.login.validation.mail="":this.login.validation.mail=this.$t("reg.loginValiMailFormat"),0===this.login.pw.length?this.login.validation.pw=this.$t("reg.loginValiPW0"):this.login.pw.length<5||this.login.pw.length>25?this.login.validation.pw=this.$t("reg.loginValiPWFormat"):this.login.validation.pw="",""===this.login.validation.mail&&""===this.login.validation.pw}},mounted:function(){1==this.$route.query.login&&this.$store.dispatch("regStateChange","login"),2==this.$route.query.login&&this.$store.dispatch("regStateChange","reg")}},p=g,h=(a("97d0"),a("e44f"),a("2877")),d=a("429b"),m=a("7460"),u=a("adad"),x=a("823b"),b=a("27f9"),v=a("8f8e"),f=a("9c40"),w=a("3786"),y=a("8572"),$=a("eebe"),_=a.n($),z=Object(h["a"])(p,e,r,!1,null,"1befc092",null);i["default"]=z.exports;_()(z,"components",{QTabs:d["a"],QTab:m["a"],QTabPanels:u["a"],QTabPanel:x["a"],QInput:b["a"],QCheckbox:v["a"],QBtn:f["a"],QRadio:w["a"],QField:y["a"]})},e44f:function(t,i,a){"use strict";var e=a("fd4a"),r=a.n(e);r.a},fd4a:function(t,i,a){var e=a("ff51");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=a("499e").default;r("3b2866bb",e,!0,{sourceMap:!1})},ff51:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"*[data-v-1befc092]{font-family:Montserrat,sans-serif;font-size:14px}.tabs .q-tab[data-v-1befc092]{min-height:36px!important}.registration .q-tab-panel[data-v-1befc092]{padding:20px 34px}.registration .rulescb2 .q-checkbox__inner[data-v-1befc092]{left:0px;margin-right:0;height:20px;width:20px;min-width:20px;margin-right:8px!important}.registration .rulescb2[data-v-1befc092]{font-size:14px!important}@media screen and (max-width:550px){.registration .rulescb2[data-v-1befc092]{font-size:12px!important}}.registration[data-v-1befc092]{padding:15px 0;margin:0;max-width:380px;width:380px;min-height:calc(100vh - 148px);display:flex;align-items:flex-start;padding-top:50px}@media screen and (max-width:550px){.registration[data-v-1befc092]{padding:15px 20px}}.registration .registration__main[data-v-1befc092]{width:380px;margin-bottom:20px}@media screen and (max-width:550px){.registration .registration__main[data-v-1befc092]{width:100%}}.registration .registration__inner[data-v-1befc092]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;box-shadow:0px 5px 15px rgba(0,0,0,0.1)}.registration .tabs[data-v-1befc092]{border-top-left-radius:5px;border-top-right-radius:5px;box-shadow:0 0 4px 1px var(--main-borders-color);color:var(--color1);font-weight:700;border-top-left-radius:10px;border-top-right-radius:10px;background:var(--menubg-color);border:0.5px solid #c2c2c6;box-sizing:border-box;box-shadow:0px 5px 15px rgba(0,0,0,0.1)}.registration form[data-v-1befc092]{display:flex;flex-direction:column;text-align:left}.registration form input[data-v-1befc092]{margin-bottom:5px}.registration form input[data-v-1befc092]:last-child,.registration form input[type=checkbox][data-v-1befc092]{margin-bottom:0}.registration form .twolined[data-v-1befc092]{display:flex;flex-wrap:wrap}.registration form .colx[data-v-1befc092],.registration form .line[data-v-1befc092]{display:flex;padding:5px;border:1px solid grey;margin:5px 0;border-radius:4px}.registration form .colx[data-v-1befc092]{flex-direction:column}.registration form .row[data-v-1befc092]{display:flex}.registration form .err_span[data-v-1befc092]{color:#c00;margin-left:5px}.registration form .spacebetw[data-v-1befc092]{justify-content:space-between;margin-bottom:26px}.submitBtn[data-v-1befc092]{margin:0 auto;width:45%;font-weight:700;letter-spacing:2px}.reg-label[data-v-1befc092]{color:var(--color1);font-family:Montserrat,sans-serif;font-weight:500;font-size:14px;line-height:17px;text-align:left;margin-bottom:7px;display:block}@media screen and (max-width:550px){.reg-label[data-v-1befc092]{margin-bottom:6px}}.cb1rules-label[data-v-1befc092]{font-size:14px;line-height:17px}@media screen and (max-width:550px){.cb1rules-label[data-v-1befc092]{font-size:11px;line-height:13px}}.cb1rules-link[data-v-1befc092]{font-size:14px;line-height:17px}@media screen and (max-width:550px){.cb1rules-link[data-v-1befc092]{font-size:11px;line-height:13px}}",""]),t.exports=i}}]);