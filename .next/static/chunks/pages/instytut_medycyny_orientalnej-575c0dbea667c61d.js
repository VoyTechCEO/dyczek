(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{1784:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instytut_medycyny_orientalnej",function(){return a(929)}])},5583:function(n,e,a){"use strict";var i=a(7294);let s=n=>{let{element:e,content:a,className:s}=n,t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{t.current&&(t.current.innerHTML=a)}),(0,i.createElement)(e,{ref:t,className:s&&s},a)};e.Z=s},4416:function(n,e,a){"use strict";var i=a(5893);a(7294);var s=a(2523),t=a.n(s),c=a(5260);let r=()=>{let{t:n}=(0,c.$G)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"container ".concat(t().container),children:(0,i.jsxs)("div",{className:t().banner,children:[(0,i.jsx)("div",{className:t().blur}),(0,i.jsx)("div",{className:t().signature,children:(0,i.jsxs)("div",{className:t().icon,children:[(0,i.jsx)("img",{src:"/svg/instytut_medycyny_orientalnej_logo.svg",alt:"Instytut Medycyny Orientalnej"}),(0,i.jsx)("h1",{children:n("imoMain:pageName")})]})})]})})})};e.Z=r},2185:function(n,e,a){"use strict";var i=a(5893);a(7294);var s=a(9401),t=a.n(s),c=a(5260),r=a(1163);let o=()=>{let n=(0,r.useRouter)(),{t:e}=(0,c.$G)();return(0,i.jsx)("div",{className:"container ".concat(t().container),children:(0,i.jsx)("p",{className:n.pathname.includes("instytut_medycyny_orientalnej")?t().imo:"",children:n.pathname.includes("instytut_medycyny_orientalnej")?e("imoMain:smallerInfo"):n.pathname.includes("szlachetne_zdrowie")?e("szlaZdMain:smallerInfo"):""})})};e.Z=o},2066:function(n,e,a){"use strict";a.d(e,{Z:function(){return f}});var i=a(5893),s=a(7294),t=a(4729),c=a(1664),r=a.n(c),o=a(1163),l=a(4480),_=a(1026),d=a.n(_),u=a(8741);let m=()=>{let n=(0,o.useRouter)(),{subNavContent:e}=(0,u.Z)(),[a,c]=(0,s.useState)(""),[_,m]=(0,l.FV)(t.Jw);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{className:"container ".concat(d().container,"\n        ").concat("shown"===a?d().shown:"hidden"===a?d().hidden:"","\n        ").concat("imo"===_?d().imo:"akuChi"===_?d().aku_chi:"szlaZd"===_?d().szla_zd:"akuKos"===_?d().aku_kos:""),children:[(0,i.jsxs)("button",{className:d().switch,onClick:()=>{""===a||"hidden"===a?c("shown"):c("hidden")},children:[(0,i.jsx)("div",{className:d().line}),(0,i.jsx)("div",{className:d().line}),(0,i.jsx)("div",{className:d().line})]}),e.map((e,a)=>{var s;return(0,i.jsx)("li",{children:e.link?(0,i.jsx)(r(),{href:"".concat(e.link,"#startView"),className:n.pathname===e.link?d().active:"",children:e.name}):(0,i.jsxs)("div",{className:e.dropdown.find((e,a)=>n.pathname===e.link)?"".concat(d().dropdown," ").concat(d().active):d().dropdown,children:[(0,i.jsx)("p",{children:e.name}),(0,i.jsx)("ul",{children:null===(s=e.dropdown)||void 0===s?void 0:s.map((e,a)=>(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:"".concat(e.link,"#startView"),className:n.pathname===e.link?d().active:"",children:e.name})},"".concat(e.link,"subNav").concat(a)))})]})},"".concat(e.name).concat(a,"subNav"))})]})})};var h=a(4310),x=a.n(h),v=a(5145),j=a(1882);let N=n=>{let{children:e}=n,[a,s]=(0,l.FV)(t.cG),[c,r]=(0,l.FV)(t.R6),_=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"container ".concat(x().container," ").concat(_.pathname.includes("/akademia_chiropraktyki")&&x().akademia_ch),children:[(0,i.jsx)(m,{}),(0,i.jsx)("div",{children:e})]}),!a&&!_.pathname.includes("[")&&(0,i.jsx)(v.Z,{}),c&&(0,i.jsx)(j.Z,{})]})};var f=N},929:function(n,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return m}});var i=a(5893),s=a(4705),t=a(9414),c=a(48),r=a(2066),o=a(4416),l=a(2185),_=a(5260),d=a(5583);let u=()=>{let{t:n}=(0,_.$G)(),e=n("imoHome:target",{returnObjects:!0});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{}),(0,i.jsxs)("main",{id:"main",className:"main-yellow",children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(r.Z,{children:(0,i.jsxs)("article",{className:"container main-container imo-container",children:[(0,i.jsx)("h1",{children:n("imoHome:targetTitle")}),(0,i.jsx)("ul",{className:"dashed",children:e.map((n,e)=>(0,i.jsx)("li",{children:n},"".concat(n,"targets").concat(e)))}),(0,i.jsx)("h1",{children:n("imoHome:missionTitle")}),(0,i.jsx)(d.Z,{element:"p",content:n("imoHome:mission")}),(0,i.jsx)("h1",{children:"Henryk Dyczek"}),(0,i.jsx)("p",{children:n("imoHome:date")})]})}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(s.Z,{})]})]})};var m=!0;e.default=u},2523:function(n){n.exports={container:"imoHeader_container__fF6Y_",banner:"imoHeader_banner__QWJlY",blur:"imoHeader_blur__VeLng",signature:"imoHeader_signature__TTge6",icon:"imoHeader_icon__FuxDl"}},9401:function(n){n.exports={container:"smallerInfo_container__wUeQi",imo:"smallerInfo_imo__x_MyX"}},4310:function(n){n.exports={container:"standardMainContent_container___JqUy",akademia_ch:"standardMainContent_akademia_ch__F8Kp7"}},1026:function(n){n.exports={container:"subNav_container__Dk4P8",switch:"subNav_switch__rmwwn",dropdown:"subNav_dropdown__N_fRS",active:"subNav_active__vltJQ",imo:"subNav_imo__0ssND",szla_zd:"subNav_szla_zd__4i6F5",aku_kos:"subNav_aku_kos__RLpTm",aku_chi:"subNav_aku_chi__UxEBx",shown:"subNav_shown__npcGG",showNav:"subNav_showNav__T37kn",hidden:"subNav_hidden__kUdws",hideNav:"subNav_hideNav__CXIMG",line:"subNav_line__2bIfw",switchOn:"subNav_switchOn__EpYHi",switchOff:"subNav_switchOff__h0i6u"}}},function(n){n.O(0,[212,183,774,888,179],function(){return n(n.s=1784)}),_N_E=n.O()}]);