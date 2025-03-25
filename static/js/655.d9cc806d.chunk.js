"use strict";(self.webpackChunklibrary_app=self.webpackChunklibrary_app||[]).push([[655],{655:(e,r,d)=>{d.r(r),d.d(r,{default:()=>i});d(43);var a=d(828),t=d(464),s=d(579);const o=t.Ay.button`
  background-color: ${e=>e.read?"#28a745":"#dc3545"};
  color: white;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 3px;  
`,l=e=>{let{post:r,toggleReadStatus:d}=e;return(0,s.jsxs)("div",{className:a.A.postCard,style:{backgroundColor:r.read?"#d4edda":"#f8d7da",width:"40%"},children:[(0,s.jsx)("h3",{children:r.title}),(0,s.jsx)("p",{children:r.body}),(0,s.jsxs)(o,{onClick:()=>d(r.id),children:["Mark as ",r.read?"Unread":"Read"]})]})},i=e=>{let{posts:r,filter:d,toggleReadStatus:a}=e;const t=r.filter((e=>"read"===d?e.read:"unread"!==d||!e.read));return(0,s.jsx)("div",{children:t.length>0?t.map((e=>(0,s.jsx)(l,{post:e,toggleReadStatus:a},e.id))):(0,s.jsx)("p",{children:"No posts found."})})}}}]);
//# sourceMappingURL=655.d9cc806d.chunk.js.map