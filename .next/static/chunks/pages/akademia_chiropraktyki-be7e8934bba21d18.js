(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{1184:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/akademia_chiropraktyki",function(){return n(9576)}])},9448:function(a,e,n){"use strict";n.d(e,{Z:function(){return v}});var i=n(5893),s=n(1664),t=n.n(s),c=n(7294),r=n(606),o=n.n(r),d=n(8666),l=n.n(d),_=n(5260),h=n(5583),m=n(6005);let u=()=>{let{t:a}=(0,_.$G)(),[e,n]=(0,c.useState)(0),s=(0,c.useRef)(null),{scrollYProgress:t}=(0,m.vO)({onChange:a=>{let{value:{scrollYProgress:e}}=a;document.body.scrollHeight>3800?n(20*e):document.body.scrollHeight>3300?n(15*e):document.body.scrollHeight>3100?n(13*e):n(8*e)}});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.q.div,{className:"container ".concat(l().container),style:{opacity:e},ref:s,children:[(0,i.jsx)("div",{className:l().edge}),(0,i.jsx)(h.Z,{element:"h1",content:a("akademiaChMain:motto")}),(0,i.jsx)("div",{className:l().edge})]})})},k=()=>{let{t:a}=(0,_.$G)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"container ".concat(o().container),children:[(0,i.jsx)("div",{className:o().banner}),(0,i.jsx)("div",{className:o().overlay,children:(0,i.jsx)(t(),{href:"/akademia_chiropraktyki",children:(0,i.jsx)("img",{src:"/svg/akademia_chiropraktyki_logo.svg",alt:"Akademia Chiropraktyki"})})}),(0,i.jsx)("h3",{children:"Akademia Chiropraktyki oferuje prawdziwą niezmienną sztukę, istny majstersztyk w subtelnym wykonaniu."}),(0,i.jsxs)("p",{className:o().author,children:["Kamil Rządkowski, ",a("akademiaChMain:quoteMonth")," 2022"]}),(0,i.jsx)(u,{})]})})};var v=k},9095:function(a,e,n){"use strict";var i=n(5893),s=n(1664),t=n.n(s),c=n(1163);n(7294);var r=n(8533),o=n.n(r),d=n(5260);let l=()=>{let a=(0,c.useRouter)(),{t:e}=(0,d.$G)(),n=(e,n)=>(0,i.jsxs)("div",{className:o().block,children:[a.pathname.includes(e)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:o().edge}),(0,i.jsx)("div",{className:o().edge})]}),(0,i.jsx)(t(),{href:"/akademia_chiropraktyki/".concat(e,"#startView"),children:n})]});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"container ".concat(o().container),children:[n("szkolenie_podstawowe",e("akademiaChMain:basicTraining")),n("szkolenie_zaawansowane",e("akademiaChMain:advancedTraining"))]})})};e.Z=l},5583:function(a,e,n){"use strict";var i=n(7294);let s=a=>{let{element:e,content:n,className:s}=a,t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{t.current&&(t.current.innerHTML=n)}),(0,i.createElement)(e,{ref:t,className:s&&s},n)};e.Z=s},2066:function(a,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(5893),s=n(7294),t=n(4729),c=n(1664),r=n.n(c),o=n(1163),d=n(4480),l=n(1026),_=n.n(l),h=n(8741);let m=()=>{let a=(0,o.useRouter)(),{subNavContent:e}=(0,h.Z)(),[n,c]=(0,s.useState)(""),[l,m]=(0,d.FV)(t.Jw);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{className:"container ".concat(_().container,"\n        ").concat("shown"===n?_().shown:"hidden"===n?_().hidden:"","\n        ").concat("imo"===l?_().imo:"akuChi"===l?_().aku_chi:"szlaZd"===l?_().szla_zd:"akuKos"===l?_().aku_kos:""),children:[(0,i.jsxs)("button",{className:_().switch,onClick:()=>{""===n||"hidden"===n?c("shown"):c("hidden")},children:[(0,i.jsx)("div",{className:_().line}),(0,i.jsx)("div",{className:_().line}),(0,i.jsx)("div",{className:_().line})]}),e.map((e,n)=>{var s;return(0,i.jsx)("li",{children:e.link?(0,i.jsx)(r(),{href:"".concat(e.link,"#startView"),className:a.pathname===e.link?_().active:"",children:e.name}):(0,i.jsxs)("div",{className:e.dropdown.find((e,n)=>a.pathname===e.link)?"".concat(_().dropdown," ").concat(_().active):_().dropdown,children:[(0,i.jsx)("p",{children:e.name}),(0,i.jsx)("ul",{children:null===(s=e.dropdown)||void 0===s?void 0:s.map((e,n)=>(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:"".concat(e.link,"#startView"),className:a.pathname===e.link?_().active:"",children:e.name})},"".concat(e.link,"subNav").concat(n)))})]})},"".concat(e.name).concat(n,"subNav"))})]})})};var u=n(4310),k=n.n(u),v=n(5145),x=n(1882);let j=a=>{let{children:e}=a,[n,s]=(0,d.FV)(t.cG),[c,r]=(0,d.FV)(t.R6),l=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"container ".concat(k().container," ").concat(l.pathname.includes("/akademia_chiropraktyki")&&k().akademia_ch),children:[(0,i.jsx)(m,{}),(0,i.jsx)("div",{children:e})]}),!n&&!l.pathname.includes("[")&&(0,i.jsx)(v.Z,{}),c&&(0,i.jsx)(x.Z,{})]})};var p=j},9576:function(a,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return k}});var i=n(5893);n(7294);var s=n(4705),t=n(9414),c=n(48),r=n(9448),o=n(2066),d=n(9095),l=n(1664),_=n.n(l),h=n(5260),m=n(5583);let u=()=>{let{t:a}=(0,h.$G)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{}),(0,i.jsxs)("main",{id:"main",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(d.Z,{}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)("article",{className:"container main-container akademiaCh-container home",children:[(0,i.jsx)("h1",{children:a("akademiaChHome:header1")}),(0,i.jsxs)("div",{className:"videos",children:[(0,i.jsxs)("video",{controls:!0,children:[(0,i.jsx)("source",{src:"/video/film1.mp4",type:"video/mp4"}),a("akademiaChHome:notSupported")]}),(0,i.jsxs)("video",{controls:!0,children:[(0,i.jsx)("source",{src:"/video/film3.mp4",type:"video/mp4"}),a("akademiaChHome:notSupported")]})]}),(0,i.jsx)("img",{className:"view",src:"/img/chiropraktyka1.png",alt:"Nauka w Akademii"}),(0,i.jsx)(m.Z,{element:"p",content:a("akademiaChHome:offer")}),(0,i.jsx)("p",{children:a("akademiaChHome:visit")}),(0,i.jsx)("ul",{className:"logos",children:[{link:"http://www.chiropraktycy.pl/",alt:"Chiropraktycy Polscy",src:"/img/chiropraktycy_polscy_logo.png"},{link:"/akupunktura_kosmetyczna",alt:"Akupunktura Kosmetyczna",src:"/svg/akupunktura_kosmetyczna_logo.svg"},{link:"/szlachetne_zdrowie",alt:"Szlachetne Zdrowie",src:"/svg/szlachetne_zdrowie_logo.svg"}].map((a,e)=>(0,i.jsxs)("li",{children:[(0,i.jsx)(_(),{href:a.link,target:"_blank",children:(0,i.jsx)("img",{src:a.src,alt:a.alt})}),(0,i.jsx)("div",{className:"line"})]},"".concat(a.link,"akademiaChLogo").concat(e)))})]})}),(0,i.jsx)(s.Z,{})]})]})};var k=!0;e.default=u},606:function(a){a.exports={container:"akademiaHeader_container__E_jdV",banner:"akademiaHeader_banner__Se0bg",overlay:"akademiaHeader_overlay__UYOpv",author:"akademiaHeader_author__RmseW"}},8666:function(a){a.exports={container:"akademiaMotto_container__YtGLw",edge:"akademiaMotto_edge__CJpx5"}},8533:function(a){a.exports={container:"akademiaTrainings_container__a3Wu4",block:"akademiaTrainings_block__1n_xD",edge:"akademiaTrainings_edge__S_OjW"}},4310:function(a){a.exports={container:"standardMainContent_container___JqUy",akademia_ch:"standardMainContent_akademia_ch__F8Kp7"}},1026:function(a){a.exports={container:"subNav_container__Dk4P8",switch:"subNav_switch__rmwwn",dropdown:"subNav_dropdown__N_fRS",active:"subNav_active__vltJQ",imo:"subNav_imo__0ssND",szla_zd:"subNav_szla_zd__4i6F5",aku_kos:"subNav_aku_kos__RLpTm",aku_chi:"subNav_aku_chi__UxEBx",shown:"subNav_shown__npcGG",showNav:"subNav_showNav__T37kn",hidden:"subNav_hidden__kUdws",hideNav:"subNav_hideNav__CXIMG",line:"subNav_line__2bIfw",switchOn:"subNav_switchOn__EpYHi",switchOff:"subNav_switchOff__h0i6u"}}},function(a){a.O(0,[212,5,183,774,888,179],function(){return a(a.s=1184)}),_N_E=a.O()}]);