"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{713:(n,e,t)=>{t.d(e,{Gc:()=>s,N6:()=>i,Ph:()=>c,jr:()=>l,oO:()=>o});var r=t(294);const a="6737ef5101d688762393da727963265b";r.Z.defaults.baseURL="https://api.themoviedb.org/3";const o=async()=>{try{return await(0,r.Z)("/trending/all/day?api_key=".concat(a))}catch(n){throw n}},c=async n=>{try{return await(0,r.Z)("/search/movie?api_key=".concat(a,"&query=").concat(n,"&include_adult=false"))}catch(e){throw e}},i=async n=>{try{const{data:e}=await r.Z.get("/movie/".concat(n,"?api_key=").concat(a));return e}catch(e){throw e}},s=async n=>{try{const{data:e}=await(0,r.Z)("/movie/".concat(n,"/credits?api_key=").concat(a));return e}catch(e){throw e}},l=async n=>{try{return await(0,r.Z)("/movie/".concat(n,"/reviews?api_key=").concat(a))}catch(e){throw e}}},854:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(137),a=t(184);const o=()=>(0,a.jsx)(r.RL,{visible:!0,height:"80",width:"80",radius:"48",color:"#3c2bd6",ariaLabel:"watch-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},wrapperClass:""})},313:(n,e,t)=>{t.r(e),t.d(e,{default:()=>M});var r=t(791),a=t(689),o=t(87),c=t(713);const{useState:i,useEffect:s}=t(791);var l,d=t(696),h=t(766),p=t(924);const x=p.ZP.button(l||(l=(0,h.Z)(["\n  border-radius: 4px;\n  margin-left: 25px;\n  font-weight: 700;\n"])));var Z=t(184);const m=n=>{let{path:e}=n;return(0,Z.jsx)(o.rU,{to:e,children:(0,Z.jsxs)(x,{type:"button",children:[(0,Z.jsx)(d.And,{style:{marginRight:"5px"}}),"Back"]})})};var j,u,v,f,g,y,w,b,P,k,_,N=t(854);const U=p.ZP.div(j||(j=(0,h.Z)(["\n  display: flex;\n  gap: 15px;\n  margin: 15px;\n"]))),R=p.ZP.img(u||(u=(0,h.Z)(["\n  border-radius: 4px;\n"]))),T=p.ZP.div(v||(v=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=p.ZP.h3(f||(f=(0,h.Z)(["\n  margin-bottom: 0;\n  color: #086866;\n"]))),S=p.ZP.h4(g||(g=(0,h.Z)(["\n  margin-top: 10px;\n  color: #92c090;\n"]))),F=p.ZP.h3(y||(y=(0,h.Z)(["\n  margin-top: 10px;\n  color: #74886b;\n"]))),L=p.ZP.h3(w||(w=(0,h.Z)(["\n  margin-top: 10px;\n  color: #086866;\n"]))),O=p.ZP.p(b||(b=(0,h.Z)(["\n  margin-top: 5px;\n  color: #92c090;\n"]))),A=p.ZP.h3(P||(P=(0,h.Z)(["\n  margin-top: 10px;\n  color: #086866;\n"]))),G=p.ZP.p(k||(k=(0,h.Z)(["\n  margin-top: 5px;\n  color: #85a584;\n"]))),H=p.ZP.h4(_||(_=(0,h.Z)(["\n  text-align: center;\n  color: #a790a5;\n"]))),q=n=>{let{movie:{title:e,poster_path:t,release_date:r,overview:a,genres:o,vote_average:c}}=n;const i=o?o.map((n=>n.name)).join(","):"There is no information yet";return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(U,{children:[(0,Z.jsx)(R,{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://prnt.sc/ktaaieNQK6Hc",alt:e,width:250}),(0,Z.jsxs)(T,{children:[e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C,{children:e}),(0,Z.jsx)(S,{children:r})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C,{children:"Title:"}),(0,Z.jsx)("p",{children:"No info"})]}),(0,Z.jsxs)(F,{children:["User Score: ",c||"No info"]}),(0,Z.jsx)(L,{children:"Overview:"}),(0,Z.jsx)(O,{children:a||"No info"}),(0,Z.jsx)(A,{children:"Genres:"}),(0,Z.jsx)(G,{children:i})]})]}),(0,Z.jsx)(H,{children:"Additional information"})]})};var B,E,I,K;const Q=p.ZP.div(B||(B=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=p.ZP.ul(E||(E=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n"]))),D=p.ZP.li(I||(I=(0,h.Z)(["\n  &:hover,\n  &:focus {\n    h4 {\n      color: #6c2ffc;\n      transition: color 0.3s ease-in-out;\n    }\n  }\n"]))),J=p.ZP.h4(K||(K=(0,h.Z)(["\n  color: black;\n"]))),M=()=>{var n,e;const{movie:t,error:l,loading:d}=(()=>{const[n,e]=i([]),[t,r]=i(null),[o,l]=i(!1),{movieId:d}=(0,a.UO)();return s((()=>{d&&(l(!0),(async()=>{try{const n=await(0,c.N6)(d);e(n)}catch(t){r("Try to reload the page")}finally{l(!1)}})())}),[d]),{movie:n,error:t,loading:o}})(),h=(0,a.TH)(),p=(0,r.useRef)(null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,Z.jsxs)(Q,{children:[d&&(0,Z.jsx)(N.Z,{}),l&&(0,Z.jsx)("h3",{children:"Try to reload the page"}),(0,Z.jsx)(m,{path:p.current}),t&&(0,Z.jsx)(q,{movie:t}),(0,Z.jsxs)(z,{children:[(0,Z.jsx)(D,{children:(0,Z.jsx)(o.rU,{to:"cast",children:(0,Z.jsx)(J,{children:"Cast"})})}),(0,Z.jsx)(D,{children:(0,Z.jsx)(o.rU,{to:"reviews",children:(0,Z.jsx)(J,{children:"Reviews"})})})]}),(0,Z.jsx)(r.Suspense,{fallback:(0,Z.jsx)(N.Z,{}),children:(0,Z.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=313.81d720d5.chunk.js.map