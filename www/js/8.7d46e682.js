(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{6235:function(t,a,e){},9293:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"feedback"},["ready"==t.state?e("div",{staticClass:"fb_inner"},[e("p",{staticClass:"fb__header"},[t._v(t._s(t.$t("fb.header")))]),e("div",{staticClass:"fb__core"},[e("label",{staticClass:"fb-label",attrs:{for:"fb_topicInp1"}},[t._v(t._s(t.$t("fb.topic")))]),e("q-input",{attrs:{for:"fb_topicInp1",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",counter:"",maxlength:"75"},model:{value:t.fbData.topic,callback:function(a){t.$set(t.fbData,"topic",a)},expression:"fbData.topic"}}),e("label",{staticClass:"fb-label",attrs:{for:"fb_yn1"}},[t._v(t._s(t.$t("fb.yourname")))]),e("q-input",{attrs:{for:"fb_yn1",dense:"",counter:"",maxlength:"25","bg-color":"white",color:"deep-purple-10",outlined:""},model:{value:t.fbData.name,callback:function(a){t.$set(t.fbData,"name",a)},expression:"fbData.name"}}),e("label",{staticClass:"fb-label",attrs:{for:"fb_mail"}},[t._v(t._s(t.$t("fb.hyphenMail")))]),e("q-input",{attrs:{for:"fb_mail",dense:"","bg-color":"white",color:"deep-purple-10",outlined:"",counter:"",maxlength:"70",rules:[function(a){return!!a||t.$t("fb.mailValReq")},function(a){return t.mailregex.test(a)||t.$t("fb.mailValFormat")}]},model:{value:t.fbData.mail,callback:function(a){t.$set(t.fbData,"mail",a)},expression:"fbData.mail"}}),e("label",{staticClass:"fb-label",attrs:{for:"fb_mail"}},[t._v(t._s(t.$t("fb.textLabel")))]),e("q-input",{staticClass:"fb_textarea",attrs:{maxlength:"500",counter:"",dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",type:"textarea"},model:{value:t.fbData.body,callback:function(a){t.$set(t.fbData,"body",a)},expression:"fbData.body"}}),e("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{"margin-top":"15px","min-width":"180px","background-color":"var(--violet-btn-color) !important"},attrs:{color:"red-10",label:t.$t("fb.btnSend")},on:{click:t.sendFB}})],1)]):e("div",{staticClass:"fb_inner"},[e("p",[t._v(t._s("OK"==t.state?t.$t("fb.messageSuccess"):t.$t("fb.messageError")))]),e("div",{staticStyle:{width:"100%"}},[e("q-btn",{staticClass:"headerBtns1 headerBtnRed",staticStyle:{"margin-right":"10px"},attrs:{color:"red-10",label:t.$t("fb.btnSendMore")},on:{click:function(a){t.state="ready"}}}),e("q-btn",{staticClass:"headerBtns1 headerBtnRed",attrs:{color:"red-10",label:t.$t("fb.toMain")},on:{click:function(a){t.fbDataFlush(),t.state="ready",t.$router.push("/")}}})],1)])])},n=[],i={name:"FeedBack",data:function(){return{state:"ready",mailregex:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,fbData:{topic:"",name:"",mail:"",body:""}}},methods:{fbDataFlush:function(){this.fbData={topic:"",name:"",mail:"",body:""}},sendFB:function(){var t=this;if(this.fbData.mail.length>3&&this.fbData.mail.length<71&&this.mailregex.test(this.fbData.mail)){var a="/fb";this.$axios.post(a,this.fbData,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(a){"OK"==a.data?(t.$q.notify(t.$t("fb.fbSuccess")),t.state="OK",t.fbDataFlush()):(t.$q.notify(t.$t("fb.fbError")),t.state="BAD")}))}else this.$q.notify({type:"negative",message:this.$t("fb.reqMail")})}}},l=i,o=(e("fba7"),e("a3be"),e("2877")),r=e("eebe"),b=e.n(r),c=e("27f9"),f=e("9c40"),d=e("8572"),u=Object(o["a"])(l,s,n,!1,null,"5663bcbf",null);a["default"]=u.exports;b()(u,"components",{QInput:c["a"],QBtn:f["a"],QField:d["a"]})},a3be:function(t,a,e){"use strict";var s=e("6235"),n=e.n(s);n.a},c722:function(t,a,e){},fba7:function(t,a,e){"use strict";var s=e("c722"),n=e.n(s);n.a}}]);