(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{6677:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instytut_medycyny_orientalnej/szkolenia",function(){return a(6426)}])},4416:function(n,e,a){"use strict";var s=a(5893);a(7294);var i=a(2523),c=a.n(i),t=a(5260);let r=()=>{let{t:n}=(0,t.$G)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"container ".concat(c().container),children:(0,s.jsxs)("div",{className:c().banner,children:[(0,s.jsx)("div",{className:c().blur}),(0,s.jsx)("div",{className:c().signature,children:(0,s.jsxs)("div",{className:c().icon,children:[(0,s.jsx)("img",{src:"/svg/instytut_medycyny_orientalnej_logo.svg",alt:"Instytut Medycyny Orientalnej"}),(0,s.jsx)("h1",{children:n("imoMain:pageName")})]})})]})})})};e.Z=r},2185:function(n,e,a){"use strict";var s=a(5893);a(7294);var i=a(9401),c=a.n(i),t=a(5260),r=a(1163);let o=()=>{let n=(0,r.useRouter)(),{t:e}=(0,t.$G)();return(0,s.jsx)("div",{className:"container ".concat(c().container),children:(0,s.jsx)("p",{className:n.pathname.includes("instytut_medycyny_orientalnej")?c().imo:"",children:n.pathname.includes("instytut_medycyny_orientalnej")?e("imoMain:smallerInfo"):n.pathname.includes("szlachetne_zdrowie")?e("szlaZdMain:smallerInfo"):""})})};e.Z=o},2066:function(n,e,a){"use strict";a.d(e,{Z:function(){return k}});var s=a(5893),i=a(7294),c=a(4729),t=a(1664),r=a.n(t),o=a(1163),l=a(4480),_=a(1026),d=a.n(_),u=a(8741);let h=()=>{let n=(0,o.useRouter)(),{subNavContent:e}=(0,u.Z)(),[a,t]=(0,i.useState)(""),[_,h]=(0,l.FV)(c.Jw);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("ul",{className:"container ".concat(d().container,"\n        ").concat("shown"===a?d().shown:"hidden"===a?d().hidden:"","\n        ").concat("imo"===_?d().imo:"akuChi"===_?d().aku_chi:"szlaZd"===_?d().szla_zd:"akuKos"===_?d().aku_kos:""),children:[(0,s.jsxs)("button",{className:d().switch,onClick:()=>{""===a||"hidden"===a?t("shown"):t("hidden")},children:[(0,s.jsx)("div",{className:d().line}),(0,s.jsx)("div",{className:d().line}),(0,s.jsx)("div",{className:d().line})]}),e.map((e,a)=>{var i;return(0,s.jsx)("li",{children:e.link?(0,s.jsx)(r(),{href:"".concat(e.link,"#startView"),className:n.pathname===e.link?d().active:"",children:e.name}):(0,s.jsxs)("div",{className:e.dropdown.find((e,a)=>n.pathname===e.link)?"".concat(d().dropdown," ").concat(d().active):d().dropdown,children:[(0,s.jsx)("p",{children:e.name}),(0,s.jsx)("ul",{children:null===(i=e.dropdown)||void 0===i?void 0:i.map((e,a)=>(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"".concat(e.link,"#startView"),className:n.pathname===e.link?d().active:"",children:e.name})},"".concat(e.link,"subNav").concat(a)))})]})},"".concat(e.name).concat(a,"subNav"))})]})})};var m=a(4310),x=a.n(m),v=a(5145),j=a(1882);let N=n=>{let{children:e}=n,[a,i]=(0,l.FV)(c.cG),[t,r]=(0,l.FV)(c.R6),_=(0,o.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{className:"container ".concat(x().container," ").concat(_.pathname.includes("/akademia_chiropraktyki")&&x().akademia_ch),children:[(0,s.jsx)(h,{}),(0,s.jsx)("div",{children:e})]}),!a&&!_.pathname.includes("[")&&(0,s.jsx)(v.Z,{}),t&&(0,s.jsx)(j.Z,{})]})};var k=N},6426:function(n,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return m}});var s=a(5893),i=a(4705);a(7294);var c=a(9414),t=a(48),r=a(2066),o=a(4416),l=a(2185),_=a(1664),d=a.n(_),u=a(5260);let h=()=>{let{t:n}=(0,u.$G)(),e=n("imoSzkolenia:coursesList",{returnObjects:!0});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{}),(0,s.jsxs)("main",{id:"main",className:"main-yellow",children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)(t.Z,{}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)("article",{className:"container main-container imo-container",children:[(0,s.jsx)("h1",{children:n("imoSzkolenia:coursesHead")}),(0,s.jsx)("ul",{className:"dashed",children:e.map(n=>(0,s.jsxs)("li",{className:"space",children:[n.link?(0,s.jsx)(d(),{href:n.link,target:"_blank",children:(0,s.jsx)("b",{children:n.name})}):(0,s.jsx)("b",{children:n.name}),n.desc&&(0,s.jsx)("p",{className:"description",children:n.desc})]},"".concat(n,"courses")))})]})}),(0,s.jsx)(l.Z,{}),(0,s.jsx)(i.Z,{})]})]})};var m=!0;e.default=h},2523:function(n){n.exports={container:"imoHeader_container__fF6Y_",banner:"imoHeader_banner__QWJlY",blur:"imoHeader_blur__VeLng",signature:"imoHeader_signature__TTge6",icon:"imoHeader_icon__FuxDl"}},9401:function(n){n.exports={container:"smallerInfo_container__wUeQi",imo:"smallerInfo_imo__x_MyX"}},4310:function(n){n.exports={container:"standardMainContent_container___JqUy",akademia_ch:"standardMainContent_akademia_ch__F8Kp7"}},1026:function(n){n.exports={container:"subNav_container__Dk4P8",switch:"subNav_switch__rmwwn",dropdown:"subNav_dropdown__N_fRS",active:"subNav_active__vltJQ",imo:"subNav_imo__0ssND",szla_zd:"subNav_szla_zd__4i6F5",aku_kos:"subNav_aku_kos__RLpTm",aku_chi:"subNav_aku_chi__UxEBx",shown:"subNav_shown__npcGG",showNav:"subNav_showNav__T37kn",hidden:"subNav_hidden__kUdws",hideNav:"subNav_hideNav__CXIMG",line:"subNav_line__2bIfw",switchOn:"subNav_switchOn__EpYHi",switchOff:"subNav_switchOff__h0i6u"}}},function(n){n.O(0,[212,183,774,888,179],function(){return n(n.s=6677)}),_N_E=n.O()}]);