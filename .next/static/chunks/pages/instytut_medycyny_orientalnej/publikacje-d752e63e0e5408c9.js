(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{8336:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instytut_medycyny_orientalnej/publikacje",function(){return a(8118)}])},5583:function(n,e,a){"use strict";var s=a(7294);let i=n=>{let{element:e,content:a,className:i}=n,c=(0,s.useRef)(null);return(0,s.useEffect)(()=>{c.current&&(c.current.innerHTML=a)}),(0,s.createElement)(e,{ref:c,className:i&&i},a)};e.Z=i},4416:function(n,e,a){"use strict";var s=a(5893);a(7294);var i=a(2523),c=a.n(i),t=a(5260);let r=()=>{let{t:n}=(0,t.$G)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"container ".concat(c().container),children:(0,s.jsxs)("div",{className:c().banner,children:[(0,s.jsx)("div",{className:c().blur}),(0,s.jsx)("div",{className:c().signature,children:(0,s.jsxs)("div",{className:c().icon,children:[(0,s.jsx)("img",{src:"/svg/instytut_medycyny_orientalnej_logo.svg",alt:"Instytut Medycyny Orientalnej"}),(0,s.jsx)("h1",{children:n("imoMain:pageName")})]})})]})})})};e.Z=r},2185:function(n,e,a){"use strict";var s=a(5893);a(7294);var i=a(9401),c=a.n(i),t=a(5260),r=a(1163);let l=()=>{let n=(0,r.useRouter)(),{t:e}=(0,t.$G)();return(0,s.jsx)("div",{className:"container ".concat(c().container),children:(0,s.jsx)("p",{className:n.pathname.includes("instytut_medycyny_orientalnej")?c().imo:"",children:n.pathname.includes("instytut_medycyny_orientalnej")?e("imoMain:smallerInfo"):n.pathname.includes("szlachetne_zdrowie")?e("szlaZdMain:smallerInfo"):""})})};e.Z=l},2066:function(n,e,a){"use strict";a.d(e,{Z:function(){return p}});var s=a(5893),i=a(7294),c=a(4729),t=a(1664),r=a.n(t),l=a(1163),o=a(4480),d=a(1026),u=a.n(d),h=a(8741);let _=()=>{let n=(0,l.useRouter)(),{subNavContent:e}=(0,h.Z)(),[a,t]=(0,i.useState)(""),[d,_]=(0,o.FV)(c.Jw);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("ul",{className:"container ".concat(u().container,"\n        ").concat("shown"===a?u().shown:"hidden"===a?u().hidden:"","\n        ").concat("imo"===d?u().imo:"akuChi"===d?u().aku_chi:"szlaZd"===d?u().szla_zd:"akuKos"===d?u().aku_kos:""),children:[(0,s.jsxs)("button",{className:u().switch,onClick:()=>{""===a||"hidden"===a?t("shown"):t("hidden")},children:[(0,s.jsx)("div",{className:u().line}),(0,s.jsx)("div",{className:u().line}),(0,s.jsx)("div",{className:u().line})]}),e.map((e,a)=>{var i;return(0,s.jsx)("li",{children:e.link?(0,s.jsx)(r(),{href:"".concat(e.link,"#startView"),className:n.pathname===e.link?u().active:"",children:e.name}):(0,s.jsxs)("div",{className:e.dropdown.find((e,a)=>n.pathname===e.link)?"".concat(u().dropdown," ").concat(u().active):u().dropdown,children:[(0,s.jsx)("p",{children:e.name}),(0,s.jsx)("ul",{children:null===(i=e.dropdown)||void 0===i?void 0:i.map((e,a)=>(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"".concat(e.link,"#startView"),className:n.pathname===e.link?u().active:"",children:e.name})},"".concat(e.link,"subNav").concat(a)))})]})},"".concat(e.name).concat(a,"subNav"))})]})})};var m=a(4310),j=a.n(m),x=a(5145),v=a(1882);let N=n=>{let{children:e}=n,[a,i]=(0,o.FV)(c.cG),[t,r]=(0,o.FV)(c.R6),d=(0,l.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{className:"container ".concat(j().container," ").concat(d.pathname.includes("/akademia_chiropraktyki")&&j().akademia_ch),children:[(0,s.jsx)(_,{}),(0,s.jsx)("div",{children:e})]}),!a&&!d.pathname.includes("[")&&(0,s.jsx)(x.Z,{}),t&&(0,s.jsx)(v.Z,{})]})};var p=N},8118:function(n,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return v},default:function(){return N}});var s=a(5893),i=a(4705);a(7294);var c=a(9414),t=a(48),r=a(2066),l=a(4416),o=a(2185),d=a(1664),u=a.n(d),h=a(5583);let _=n=>{let e=n("imoPublikacje:publicsList",{returnObjects:!0}),a=e.map(n=>{let e=n.publics.map(n=>{let e={header:n.header,author:n.author,short:(0,s.jsx)(s.Fragment,{}),doc:n.doc,english:n.english};return e.short=(0,s.jsx)(h.Z,{element:"div",content:n.short}),n.short||(e={header:n.header,author:n.author,doc:n.doc,english:n.english}),e});return{year:n.year,publics:e}});return a};var m=a(5260),j=a(1852);let x=()=>{let{t:n}=(0,m.$G)(),e=(0,j.useMediaQuery)({maxWidth:900});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{}),(0,s.jsxs)("main",{id:"main",className:"main-yellow",children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(t.Z,{}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)("article",{className:"container main-container imo-container",children:[(0,s.jsx)("h1",{children:n("imoPublikacje:head")}),(0,s.jsx)("ul",{children:_(n).map((a,i)=>(0,s.jsxs)("li",{className:"public-sector",children:[(0,s.jsx)("h2",{children:a.year}),(0,s.jsx)("ul",{children:a.publics.map(a=>(0,s.jsxs)("li",{className:"post",children:[(0,s.jsx)("p",{className:"align-left",children:(0,s.jsx)("span",{children:a.header})}),(0,s.jsxs)("h4",{children:[n("imoPublikacje:author"),":"]}),(0,s.jsx)("p",{className:"align-left",children:a.author}),(0,s.jsxs)("h4",{children:[n("imoPublikacje:summaryHead"),":"]}),(0,s.jsx)(s.Fragment,{children:a.short&&a.short}),e?(0,s.jsx)(u(),{href:"/docs/imo/".concat(a.doc),children:n("imoPublikacje:download")}):(0,s.jsxs)(u(),{href:"/docs/imo/".concat(a.doc),children:[n("imoPublikacje:download")," (",a.doc,")",a.english?" - ".concat(n("imoPublikacje:enVersion")):" - ".concat(n("imoPublikacje:plVersion"))]}),(0,s.jsx)("div",{className:"line"})]},"".concat(a,"publics")))})]},"".concat(a,"publicsSectors").concat(i)))})]})}),(0,s.jsx)(o.Z,{}),(0,s.jsx)(i.Z,{})]})]})};var v=!0,N=x},2523:function(n){n.exports={container:"imoHeader_container__fF6Y_",banner:"imoHeader_banner__QWJlY",blur:"imoHeader_blur__VeLng",signature:"imoHeader_signature__TTge6",icon:"imoHeader_icon__FuxDl"}},9401:function(n){n.exports={container:"smallerInfo_container__wUeQi",imo:"smallerInfo_imo__x_MyX"}},4310:function(n){n.exports={container:"standardMainContent_container___JqUy",akademia_ch:"standardMainContent_akademia_ch__F8Kp7"}},1026:function(n){n.exports={container:"subNav_container__Dk4P8",switch:"subNav_switch__rmwwn",dropdown:"subNav_dropdown__N_fRS",active:"subNav_active__vltJQ",imo:"subNav_imo__0ssND",szla_zd:"subNav_szla_zd__4i6F5",aku_kos:"subNav_aku_kos__RLpTm",aku_chi:"subNav_aku_chi__UxEBx",shown:"subNav_shown__npcGG",showNav:"subNav_showNav__T37kn",hidden:"subNav_hidden__kUdws",hideNav:"subNav_hideNav__CXIMG",line:"subNav_line__2bIfw",switchOn:"subNav_switchOn__EpYHi",switchOff:"subNav_switchOff__h0i6u"}}},function(n){n.O(0,[212,183,774,888,179],function(){return n(n.s=8336)}),_N_E=n.O()}]);