"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{713:(t,e,a)=>{a.d(e,{Gc:()=>i,N6:()=>s,Ph:()=>o,jr:()=>l,oO:()=>c});var n=a(294);const r="6737ef5101d688762393da727963265b";n.Z.defaults.baseURL="https://api.themoviedb.org/3";const c=async()=>{try{return await(0,n.Z)("/trending/all/day?api_key=".concat(r))}catch(t){throw t}},o=async t=>{try{return await(0,n.Z)("/search/movie?api_key=".concat(r,"&query=").concat(t,"&include_adult=false"))}catch(e){throw e}},s=async t=>{try{const{data:e}=await n.Z.get("/movie/".concat(t,"?api_key=").concat(r));return e}catch(e){throw e}},i=async t=>{try{const{data:e}=await(0,n.Z)("/movie/".concat(t,"/credits?api_key=").concat(r));return e}catch(e){throw e}},l=async t=>{try{return await(0,n.Z)("/movie/".concat(t,"/reviews?api_key=").concat(r))}catch(e){throw e}}},444:(t,e,a)=>{a.d(e,{Z:()=>v});a(791);var n,r,c,o,s=a(689),i=a(766),l=a(924),h=a(87);const d=l.ZP.ul(n||(n=(0,i.Z)(["\n  list-style: none;\n"]))),u=l.ZP.li(r||(r=(0,i.Z)(["\n  &:hover,\n  &:focus {\n    h4 {\n      color: #6c2ffc;\n      transition: color 0.3s ease-in-out;\n    }\n  }\n"]))),y=(0,l.ZP)(h.rU)(c||(c=(0,i.Z)(["\n  text-decoration: none;\n"]))),w=l.ZP.h4(o||(o=(0,i.Z)(["\n  color: black;\n  margin: 10px;\n"])));var p=a(184);const v=t=>{let{movies:e}=t;const a=(0,s.TH)();return(0,p.jsx)(d,{children:e.map((t=>{let{id:e,title:n}=t;return n&&(0,p.jsx)(u,{children:(0,p.jsx)(y,{to:"/movies/".concat(e),state:{from:a},children:(0,p.jsx)(w,{children:n})})},e)}))})}},854:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(137),r=a(184);const c=()=>(0,r.jsx)(n.RL,{visible:!0,height:"80",width:"80",radius:"48",color:"#3c2bd6",ariaLabel:"watch-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},wrapperClass:""})},530:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var n=a(854),r=a(444),c=a(791),o=a(713);var s=a(184);const i=()=>{const{movies:t,error:e,loading:a}=(()=>{const[t,e]=(0,c.useState)([]),[a,n]=(0,c.useState)(null),[r,s]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{s(!0),(async()=>{try{const{data:t}=await(0,o.oO)();e(t.results)}catch(a){n("Something went wrong")}finally{s(!1)}})()}),[]),{movies:t,error:a,loading:r}})();return(0,s.jsxs)("div",{children:[a&&(0,s.jsx)(n.Z,{}),e&&(0,s.jsx)("h3",{children:"Try to reload the page"}),0!==t.length&&(0,s.jsx)(r.Z,{movies:t})]})}}}]);
//# sourceMappingURL=530.aad44e74.chunk.js.map