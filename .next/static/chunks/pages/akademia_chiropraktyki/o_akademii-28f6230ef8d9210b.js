(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{1421:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/akademia_chiropraktyki/o_akademii",function(){return n(9199)}])},9448:function(a,e,n){"use strict";n.d(e,{Z:function(){return x}});var i=n(5893),s=n(1664),t=n.n(s),c=n(7294),r=n(606),d=n.n(r),o=n(8666),l=n.n(o),h=n(5260),u=n(5583),_=n(6005);let m=()=>{let{t:a}=(0,h.$G)(),[e,n]=(0,c.useState)(0),s=(0,c.useRef)(null),{scrollYProgress:t}=(0,_.vO)({onChange:a=>{let{value:{scrollYProgress:e}}=a;document.body.scrollHeight>3800?n(20*e):document.body.scrollHeight>3300?n(15*e):document.body.scrollHeight>3100?n(13*e):n(8*e)}});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(_.q.div,{className:"container ".concat(l().container),style:{opacity:e},ref:s,children:[(0,i.jsx)("div",{className:l().edge}),(0,i.jsx)(u.Z,{element:"h1",content:a("akademiaChMain:motto")}),(0,i.jsx)("div",{className:l().edge})]})})},k=()=>{let{t:a}=(0,h.$G)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"container ".concat(d().container),children:[(0,i.jsx)("div",{className:d().banner}),(0,i.jsx)("div",{className:d().overlay,children:(0,i.jsx)(t(),{href:"/akademia_chiropraktyki",children:(0,i.jsx)("img",{src:"/svg/akademia_chiropraktyki_logo.svg",alt:"Akademia Chiropraktyki"})})}),(0,i.jsx)("h3",{children:"Akademia Chiropraktyki oferuje prawdziwą niezmienną sztukę, istny majstersztyk w subtelnym wykonaniu."}),(0,i.jsxs)("p",{className:d().author,children:["Kamil Rządkowski, ",a("akademiaChMain:quoteMonth")," 2022"]}),(0,i.jsx)(m,{})]})})};var x=k},9095:function(a,e,n){"use strict";var i=n(5893),s=n(1664),t=n.n(s),c=n(1163);n(7294);var r=n(8533),d=n.n(r),o=n(5260);let l=()=>{let a=(0,c.useRouter)(),{t:e}=(0,o.$G)(),n=(e,n)=>(0,i.jsxs)("div",{className:d().block,children:[a.pathname.includes(e)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:d().edge}),(0,i.jsx)("div",{className:d().edge})]}),(0,i.jsx)(t(),{href:"/akademia_chiropraktyki/".concat(e,"#startView"),children:n})]});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"container ".concat(d().container),children:[n("szkolenie_podstawowe",e("akademiaChMain:basicTraining")),n("szkolenie_zaawansowane",e("akademiaChMain:advancedTraining"))]})})};e.Z=l},5583:function(a,e,n){"use strict";var i=n(7294);let s=a=>{let{element:e,content:n,className:s}=a,t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{t.current&&(t.current.innerHTML=n)}),(0,i.createElement)(e,{ref:t,className:s&&s},n)};e.Z=s},2066:function(a,e,n){"use strict";n.d(e,{Z:function(){return N}});var i=n(5893),s=n(7294),t=n(4729),c=n(1664),r=n.n(c),d=n(1163),o=n(4480),l=n(1026),h=n.n(l),u=n(8741);let _=()=>{let a=(0,d.useRouter)(),{subNavContent:e}=(0,u.Z)(),[n,c]=(0,s.useState)(""),[l,_]=(0,o.FV)(t.Jw);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{className:"container ".concat(h().container,"\n        ").concat("shown"===n?h().shown:"hidden"===n?h().hidden:"","\n        ").concat("imo"===l?h().imo:"akuChi"===l?h().aku_chi:"szlaZd"===l?h().szla_zd:"akuKos"===l?h().aku_kos:""),children:[(0,i.jsxs)("button",{className:h().switch,onClick:()=>{""===n||"hidden"===n?c("shown"):c("hidden")},children:[(0,i.jsx)("div",{className:h().line}),(0,i.jsx)("div",{className:h().line}),(0,i.jsx)("div",{className:h().line})]}),e.map((e,n)=>{var s;return(0,i.jsx)("li",{children:e.link?(0,i.jsx)(r(),{href:"".concat(e.link,"#startView"),className:a.pathname===e.link?h().active:"",children:e.name}):(0,i.jsxs)("div",{className:e.dropdown.find((e,n)=>a.pathname===e.link)?"".concat(h().dropdown," ").concat(h().active):h().dropdown,children:[(0,i.jsx)("p",{children:e.name}),(0,i.jsx)("ul",{children:null===(s=e.dropdown)||void 0===s?void 0:s.map((e,n)=>(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:"".concat(e.link,"#startView"),className:a.pathname===e.link?h().active:"",children:e.name})},"".concat(e.link,"subNav").concat(n)))})]})},"".concat(e.name).concat(n,"subNav"))})]})})};var m=n(4310),k=n.n(m),x=n(5145),j=n(1882);let v=a=>{let{children:e}=a,[n,s]=(0,o.FV)(t.cG),[c,r]=(0,o.FV)(t.R6),l=(0,d.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"container ".concat(k().container," ").concat(l.pathname.includes("/akademia_chiropraktyki")&&k().akademia_ch),children:[(0,i.jsx)(_,{}),(0,i.jsx)("div",{children:e})]}),!n&&!l.pathname.includes("[")&&(0,i.jsx)(x.Z,{}),c&&(0,i.jsx)(j.Z,{})]})};var N=v},9199:function(a,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return _}});var i=n(5893);n(7294);var s=n(4705),t=n(9414),c=n(48),r=n(9448),d=n(2066),o=n(9095),l=n(5260),h=n(5583);let u=()=>{let{t:a}=(0,l.$G)(),e=a("akademiaChAbout:scientistsList",{returnObjects:!0}),n=a("akademiaChAbout:benefitsList1",{returnObjects:!0}),u=a("akademiaChAbout:benefitsList2",{returnObjects:!0});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{}),(0,i.jsxs)("main",{id:"main",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(d.Z,{children:(0,i.jsxs)("article",{className:"container main-container akademiaCh-container about",children:[(0,i.jsx)("h1",{children:a("akademiaChAbout:header1")}),(0,i.jsx)("ul",{children:e.map((a,e)=>(0,i.jsx)("li",{children:a},"".concat(a,"akademiaChScientist").concat(e)))}),(0,i.jsx)("img",{src:"/img/chiropraktyka2.png",alt:"Nauka w Akademii",className:"view"}),(0,i.jsx)("h1",{children:a("akademiaChAbout:header2")}),(0,i.jsx)(h.Z,{element:"p",content:a("akademiaChAbout:history"),className:"hard"}),(0,i.jsx)(h.Z,{element:"p",content:a("akademiaChAbout:currently"),className:"hard"}),(0,i.jsx)("img",{src:"/img/chiropraktyka3.png",alt:"Nauka w Akademii",className:"view"}),(0,i.jsx)("h1",{children:a("akademiaChAbout:header3")}),(0,i.jsx)("p",{children:a("akademiaChAbout:target")}),(0,i.jsx)("ul",{children:n.map((a,e)=>(0,i.jsx)("li",{children:a},"".concat(a,"akademiaChBenefit1").concat(e)))}),(0,i.jsx)("p",{children:a("akademiaChAbout:declaration")}),(0,i.jsx)("ul",{children:u.map((a,e)=>(0,i.jsx)("li",{children:a},"".concat(a,"akademiaChBenefit2").concat(e)))})]})}),(0,i.jsx)(s.Z,{})]})]})};var _=!0;e.default=u},606:function(a){a.exports={container:"akademiaHeader_container__E_jdV",banner:"akademiaHeader_banner__Se0bg",overlay:"akademiaHeader_overlay__UYOpv",author:"akademiaHeader_author__RmseW"}},8666:function(a){a.exports={container:"akademiaMotto_container__YtGLw",edge:"akademiaMotto_edge__CJpx5"}},8533:function(a){a.exports={container:"akademiaTrainings_container__a3Wu4",block:"akademiaTrainings_block__1n_xD",edge:"akademiaTrainings_edge__S_OjW"}},4310:function(a){a.exports={container:"standardMainContent_container___JqUy",akademia_ch:"standardMainContent_akademia_ch__F8Kp7"}},1026:function(a){a.exports={container:"subNav_container__Dk4P8",switch:"subNav_switch__rmwwn",dropdown:"subNav_dropdown__N_fRS",active:"subNav_active__vltJQ",imo:"subNav_imo__0ssND",szla_zd:"subNav_szla_zd__4i6F5",aku_kos:"subNav_aku_kos__RLpTm",aku_chi:"subNav_aku_chi__UxEBx",shown:"subNav_shown__npcGG",showNav:"subNav_showNav__T37kn",hidden:"subNav_hidden__kUdws",hideNav:"subNav_hideNav__CXIMG",line:"subNav_line__2bIfw",switchOn:"subNav_switchOn__EpYHi",switchOff:"subNav_switchOff__h0i6u"}}},function(a){a.O(0,[212,5,183,774,888,179],function(){return a(a.s=1421)}),_N_E=a.O()}]);