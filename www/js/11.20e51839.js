(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0289":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cv-detail[data-v-d84faf98]{width:754px;margin-bottom:70px!important}@media screen and (max-width:550px){.cv-detail[data-v-d84faf98]{width:100%;padding:0 20px}}.lds-dual-ring[data-v-d84faf98]{display:inline-block;width:80px;height:80px}.lds-dual-ring[data-v-d84faf98]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #8645ff;border-color:var(--color1) transparent #8645ff transparent;-webkit-animation:lds-dual-ring-data-v-d84faf98 1.2s linear infinite;animation:lds-dual-ring-data-v-d84faf98 1.2s linear infinite}@-webkit-keyframes lds-dual-ring-data-v-d84faf98{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes lds-dual-ring-data-v-d84faf98{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}',""]),t.exports=a},"3bf7":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"cv-list",staticStyle:{"margin-top":"140px"}},[e("div",{staticClass:"lds-dual-ring"})]):"company"===t.$store.state.user.role&&t.$store.state.user.rights&&t.$store.state.user.rights.includes("bauss")?e("div",{staticClass:"cv-detail"},[e("p",{staticClass:"pageHeader"},[t._v(t._s(t.$t("cvList.cvListLabel")))]),e("div",[e("pre",[t._v(t._s(t.cv))]),e("q-btn",{staticClass:"headerBtns1 headerBtnRed addJobMargin550 addJobSpecific",staticStyle:{"margin-right":"20px"},attrs:{"text-color":"white",label:t.$t("cvDetail.goBack"),to:"/cv-list"}})],1)]):e("p",{staticClass:"pageHeader",staticStyle:{margin:"40px auto"}},[t._v("404. Not found")])},r=[],n={data:function(){return{loading:!0,cv:{}}},activated:function(){var t=this;this.loading=!0;var a=this.$route.params.id||-1;this.$axios.get("/cv/"+a,null,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(a){a.data?(t.cv=a.data,t.loading=!1):(t.$q.notify("Error receiving cv data from the server"),t.loading=!1)})).catch((function(a){t.$q.notify("Unknown error with cv data",a),t.loading=!1}))}},s=n,d=(e("c063"),e("2877")),o=e("9c40"),l=e("eebe"),c=e.n(l),f=Object(d["a"])(s,i,r,!1,null,"d84faf98",null);a["default"]=f.exports;c()(f,"components",{QBtn:o["a"]})},b3de:function(t,a,e){var i=e("0289");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("499e").default;r("4e4ed1a8",i,!0,{sourceMap:!1})},c063:function(t,a,e){"use strict";var i=e("b3de"),r=e.n(i);r.a}}]);