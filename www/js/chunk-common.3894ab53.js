(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0368":function(t,a,e){"use strict";var i=e("fc8b"),s=e.n(i);s.a},1646:function(t,a,e){"use strict";var i=e("2ed4"),s=e.n(i);s.a},"220e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"*[data-v-634aab50]{margin:0}.jobsstats[data-v-634aab50]{box-sizing:border-box;width:100%;font-size:16px;line-height:22px;color:var(--color1)}@media screen and (max-width:550px){.jobsstats[data-v-634aab50]{font-size:14px;line-height:20px}}.jobsstats__display[data-v-634aab50]{display:flex;flex-direction:column}.jobsstats__item[data-v-634aab50]{background:#fff;box-shadow:0px 0px 15px rgba(0,0,0,0.15);border-radius:10px;margin-bottom:10px;display:flex;justify-content:space-between;padding:10px 14px}@media screen and (max-width:550px){.jobsstats__item[data-v-634aab50]{margin-bottom:5px}}.jobsstats .jobstat[data-v-634aab50]:hover{transition-duration:0.3s;background-color:#359dfd;color:#fff}.jobsstats .jobstat:hover .link1[data-v-634aab50]{color:#fff}.left-side[data-v-634aab50]{text-align:left;max-width:calc(70% - 3px);width:calc(70% - 3px)}@media screen and (max-width:550px){.left-side[data-v-634aab50]{max-width:calc(50% - 3px);width:calc(50% - 3px)}}.right-side[data-v-634aab50]{text-align:right;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(30% - 3px);width:calc(30% - 3px)}@media screen and (max-width:550px){.right-side[data-v-634aab50]{max-width:calc(50% - 3px);width:calc(50% - 3px)}}.controlbtn[data-v-634aab50]{margin-left:8px}@media screen and (max-width:550px){.controlbtn[data-v-634aab50]{max-width:30px}}.title-link[data-v-634aab50]{text-decoration:none;color:var(--color1);transition-duration:0.3s;font-weight:700;font-size:16px;line-height:18px}.title-link[data-v-634aab50]:hover{color:var(--violet-btn-color)}@media screen and (max-width:550px){.title-link[data-v-634aab50]{font-size:12px;line-height:15px}}.jstatus[data-v-634aab50]{color:var(--violet-btn-color);line-height:16px}",""]),t.exports=a},"221b":function(t,a,e){var i=e("a358");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("b9226e72",i,!0,{sourceMap:!1})},"27bd":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"jobsstats"},[e("div",{staticClass:"jobsstats__display"},t._l(t.jobslist,(function(a){return e("div",{key:a.job_id,staticClass:"jobsstats__item"},[e("div",{staticClass:"left-side"},[e("p",{staticClass:"job-title"},[e("a",{staticClass:"title-link",attrs:{target:"_blank",href:"/jobpage?id="+a.job_id}},[t._v(t._s(a.title))])]),e("div",[t._v(t._s(t.$t("jobsStats.views"))+" "+t._s(Number(a.hits_all)))]),e("div",[t._v(t._s(t.$t("jobsStats.uniqViews"))+" "+t._s(a.hits_uniq))])]),e("div",{staticClass:"right-side"},[e("div",{staticClass:"jstatus"},[t._v("\n          "+t._s(!0===a.is_published&&!1===a.is_closed?t.$t("jobsStats.published"):!0===a.is_published&&!0===a.is_closed?t.$t("jobsStats.closedByUser"):!1===a.is_published&&!1===a.is_closed?t.$t("jobsStats.awaitsAdmin"):null!==a.closed_why&&a.closed_why.length>0?t.$t("jobsStats.closedByAdmin")+': "'+a.closed_why+'"':t.$t("jobsStats.closedByAdmin"))+"\n        ")]),e("div",[a.is_closed?1==a.is_published&&1==a.is_closed?e("q-btn",{staticClass:"controlbtn",attrs:{icon:"work",size:"sm",color:"blue",glossy:""},on:{click:function(e){return t.$store.dispatch("reopenJobById",a.job_id)}}},[e("q-tooltip",[e("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.reopenHint")))])])],1):0==a.is_published&&1==a.is_closed?e("q-btn",{staticClass:"controlbtn",attrs:{icon:"build",size:"sm",color:"purple",glossy:""},on:{click:function(e){return t.$store.dispatch("reopenJobById",a.job_id)}}},[e("q-tooltip",[e("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.resendHint")))])])],1):t._e():e("q-btn",{staticClass:"controlbtn",attrs:{icon:"edit",size:"sm",color:"green",glossy:""},on:{click:function(e){return t.editJob(a.job_id)}}},[e("q-tooltip",[e("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.editHint")))])])],1),e("div",{staticStyle:{display:"inline"}},[e("q-btn",{staticClass:"controlbtn",attrs:{disable:a.is_closed,icon:"work_off",size:"sm",color:"orange",glossy:""},on:{click:function(e){return t.$store.dispatch("closeJobById",{jid:a.job_id,notifier:t.$q.notify})}}}),e("q-tooltip",[e("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.closeHint")))])])],1),e("q-btn",{staticClass:"controlbtn",attrs:{icon:"delete_forever",size:"sm",color:"red",glossy:""},on:{click:function(e){return t.$store.dispatch("deleteJobById",{jid:a.job_id,notifier:t.$q.notify})}}},[e("q-tooltip",[e("p",{staticStyle:{"font-size":"15px",margin:"0"}},[t._v(t._s(t.$t("jobsStats.deleteHint")))])])],1)],1)])])})),0),0==t.jobslist.length?e("p",[t._v(t._s(t.$t("jobsStats.none")))]):t._e()])},s=[],n=(e("7514"),e("f751"),{name:"JobsStats",computed:{jobslist:function(){return this.$store.state.user.ownJobs}},methods:{editJob:function(t){this.$store.dispatch("setAJNewJobsPageType","edit");var a,e=Object.assign({},this.jobslist.find((function(a){return a.job_id==t}))),i=this.$t("App.jcats"),s=this.$t("App.jtypeOptions"),n=this.$t("App.expOpts"),o=this.$t("App.curOpts");a=i.find((function(t){return t.value==e.jcategory})),a||(a=i[0]),e.jcategory=a,a=o.find((function(t){return t.value==e.currency})),a||(a=o[0]),e.currency=a,a=n.find((function(t){return t.value==e.experience})),a||(a=n[0]),e.experience=a,a=s.find((function(t){return t.value==e.jtype})),a||(a=s[0]),e.jtype=a,null==e.contact_mail&&(e.contact_mail=""),null==e.contact_tel&&(e.contact_tel=""),this.$store.dispatch("setAJEditedObj",e),this.$router.push("/addJob")}}}),o=n,r=(e("8fae"),e("2877")),l=e("9c40"),c=e("05c0"),d=e("eebe"),p=e.n(d),u=Object(r["a"])(o,i,s,!1,null,"634aab50",null);a["a"]=u.exports;p()(u,"components",{QBtn:l["a"],QTooltip:c["a"]})},2817:function(t,a,e){"use strict";var i=e("221b"),s=e.n(i);s.a},"2ed4":function(t,a,e){var i=e("b615");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("79b1f262",i,!0,{sourceMap:!1})},4396:function(t,a,e){"use strict";var i=e("c924"),s=e.n(i);s.a},6721:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w586"},[e("div",{staticClass:"addJoblabel",staticStyle:{display:"flex","margin-bottom":"8px"}},[e("p",{staticClass:"startP",class:{reqd:t.reqd}},[t._v(t._s(t.label))])]),e("q-input",{ref:"qinput",style:{width:"100%"},attrs:{dense:"",outlined:"","bg-color":"white",color:"deep-purple-10",hint:null,value:t.value,placeholder:t.ph,rules:t.rules,"lazy-rules":t.lazy,counter:t.maxlength!==1/0&&!t.maxlhidden,maxlength:t.maxlength},on:{input:function(a){return t.$emit("input",a)}}})],1)},s=[],n=(e("c5f6"),{props:{maxlhidden:{type:Boolean,default:!1},maxlength:{type:Number,default:1/0},label:{type:String,default:""},reqd:{type:Boolean,default:!1},value:{type:String,default:""},ph:{type:String,default:""},rules:{type:Array,default:function(){return[]}},lazy:{type:Boolean,default:!1}}}),o=n,r=(e("4396"),e("2877")),l=e("27f9"),c=e("eebe"),d=e.n(c),p=Object(r["a"])(o,i,s,!1,null,"730780eb",null);a["a"]=p.exports;d()(p,"components",{QInput:l["a"]})},8009:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".profilenav-wrap[data-v-0e0154f3]{padding-right:16px}@media screen and (max-width:550px){.profilenav-wrap[data-v-0e0154f3]{padding:0}}@media screen and (max-width:550px){.profilenav[data-v-0e0154f3]{display:flex;flex-wrap:wrap;justify-content:space-between}}.badge1[data-v-0e0154f3]{background-color:var(--btn-color);border-radius:100%;width:28px;height:28px;margin-right:auto;text-align:center;justify-content:center;box-shadow:0px 0px 10px rgba(0,0,0,0.2);font-family:Montserrat;font-weight:700;font-size:14px;line-height:17px}@media screen and (max-width:550px){.badge1[data-v-0e0154f3]{height:22px;width:22px}}.nav__link[data-v-0e0154f3]{background-color:var(--menubg-color);box-shadow:0px 5px 15px rgba(0,0,0,0.1);border-radius:10px;margin-bottom:15px;font-family:Montserrat,sans-serif;font-size:16px;line-height:20px;color:var(--color1);border:0.5px solid rgba(0,0,0,0.2);padding:0}@media screen and (max-width:550px){.nav__link[data-v-0e0154f3]{width:calc(50% - 6px);font-size:12px;line-height:15px;height:35px;margin-bottom:10px}}.nav__link-active[data-v-0e0154f3]{color:#fff;background-color:var(--color1)}",""]),t.exports=a},"8fae":function(t,a,e){"use strict";var i=e("e8b5"),s=e.n(i);s.a},"9dc3":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'*[data-v-730780eb]{margin:0}.w586[data-v-730780eb]{width:586px}@media screen and (max-width:550px){.w586[data-v-730780eb]{width:100%}}.startP[data-v-730780eb]{font-family:Montserrat;font-size:14px;font-weight:500;line-height:17px;color:var(--color1);position:relative;text-align:left}.star[data-v-730780eb]{margin-right:4px}.reqd[data-v-730780eb]:before,.star[data-v-730780eb]{font-family:Montserrat,sans-serif;font-size:14px;line-height:17px;color:var(--btn-color);width:6px}.reqd[data-v-730780eb]:before{content:"*";left:-10px;position:absolute}',""]),t.exports=a},"9e40":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"profilenav-wrap",staticStyle:{"min-width":"270px"}},[e("q-list",{staticClass:"profilenav rounded-borders text-primary",attrs:{padding:""}},[t._l(t.localroutes,(function(a,i){return e("q-item",{key:i,staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute===a.r,"active-class":"nav__link-active"},on:{click:function(e){return t.$emit("setLocalRoute",a.r)}}},[e("q-item-section",{staticStyle:{position:"relative","flex-direction":"row","align-items":"center"}},[a.badges>0?e("span",{staticStyle:{"margin-left":"auto","margin-right":"10px"}},[t._v(t._s(a.l))]):e("span",{staticStyle:{display:"inline !important"}},[t._v(t._s(a.l))]),a.badges>0?e("q-badge",{staticClass:"badge1",attrs:{label:a.badges}}):t._e()],1)],1)})),e("q-item",{staticClass:"nav__link",attrs:{clickable:"",active:t.localRoute==t.localroutesX.r,"active-class":"nav__link-active"},on:{click:function(a){return t.$emit("setLocalRoute",t.localroutesX.r)}}},[e("q-item-section",[t._v(t._s(t.localroutesX.l))])],1)],2)],1)},s=[],n={name:"ProfileNav",props:{localRoute:String,localroutes:Array,localroutesX:Object}},o=n,r=(e("2817"),e("0368"),e("2877")),l=e("1c1c"),c=e("66e5"),d=e("4074"),p=e("58a8"),u=e("eb85"),f=e("eebe"),b=e.n(f),v=Object(r["a"])(o,i,s,!1,null,"0e0154f3",null);a["a"]=v.exports;b()(v,"components",{QList:l["a"],QItem:c["a"],QItemSection:d["a"],QBadge:p["a"],QSeparator:u["a"]})},a358:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"@media screen and (max-width:550px){.nav__link.q-item{height:36px;min-height:36px}}",""]),t.exports=a},adcf:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w586"},[e("p",{staticClass:"startP",staticStyle:{"font-weight":"600"},style:t.noStarPMarginTop?"margin-bottom: 20px":"margin: 20px 0 20px"},[t._v(t._s(t.label))]),t._l(t.vals.length,(function(a){return e("label",{key:a,staticStyle:{display:"flex","align-items":"center",margin:"12px 0",cursor:"pointer",color:"var(--color1)","font-size":"14px","user-select":"none","font-weight":"500"}},[e("q-radio",{staticStyle:{"margin-right":"10px"},attrs:{value:t.value,val:t.vals[a-1],color:"red-10",dense:""},on:{input:function(a){return t.$emit("input",a)}}}),t._v("\n    "+t._s(t.labels[a-1])+"\n  ")],1)}))],2)},s=[],n={props:{vals:{type:Array,default:function(){return[!0,!1]}},labels:{type:Array,default:function(){return[]}},label:{type:String,default:""},noStarPMarginTop:{type:Boolean,default:!1},value:{type:[Boolean,String],default:null}}},o=n,r=(e("1646"),e("2877")),l=e("3786"),c=e("eebe"),d=e.n(c),p=Object(r["a"])(o,i,s,!1,null,"1410860c",null);a["a"]=p.exports;d()(p,"components",{QRadio:l["a"]})},b615:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'*[data-v-1410860c]{margin:0}.w586[data-v-1410860c]{width:586px}@media screen and (max-width:550px){.w586[data-v-1410860c]{width:100%}}.startP[data-v-1410860c]{font-family:Montserrat;font-size:14px;font-weight:500;line-height:17px;color:var(--color1);position:relative;text-align:left}.star[data-v-1410860c]{margin-right:4px}.reqd[data-v-1410860c]:before,.star[data-v-1410860c]{font-family:Montserrat,sans-serif;font-size:14px;line-height:17px;color:var(--btn-color);width:6px}.reqd[data-v-1410860c]:before{content:"*";left:-10px;position:absolute}',""]),t.exports=a},c924:function(t,a,e){var i=e("9dc3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("5fbe4107",i,!0,{sourceMap:!1})},e8b5:function(t,a,e){var i=e("220e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("3a4fdf94",i,!0,{sourceMap:!1})},fc8b:function(t,a,e){var i=e("8009");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("febcf11a",i,!0,{sourceMap:!1})}}]);