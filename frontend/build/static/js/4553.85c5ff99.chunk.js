"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4553,1181],{31204:(e,t,a)=>{a.d(t,{A:()=>n});a(65043);var l=a(35475),s=a(90221),r=a(70579);const n=e=>{let{link:t}=e;return(0,r.jsx)(l.N_,{to:t,className:"lg:mt-[10px] lg:ms-[20px] mt-[50px] ms-[30px] linktoback",children:(0,r.jsx)(s.feN,{className:"mt-[]"})})}},38805:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(65043),s=a(79456),r=a(73216),n=a(31204),i=a(54964),c=a(37424),d=a(18446),u=a(3297),o=a(82512),g=a(53536),m=a(12602),h=a(72096),f=a(70579);const p=()=>{const[e,t]=(0,l.useState)(window.innerWidth<=768);(0,l.useEffect)((()=>{const e=()=>{t(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const{id:a}=(0,r.g)(),p=(0,s.wA)(),y=[{title:"\u2116"},{title:(0,h.t)("Sana"),filter:"createdAt"},{title:(0,h.t)("Mijoz")},{title:(0,h.t)("Jami")},{title:(0,h.t)("Chegirma")},{title:(0,h.t)("Qarz")},{title:(0,h.t)("Qarzdan to'lov"),styles:"w-[7rem]"},{title:"",styles:"w-[7rem]"}],x=[{title:(0,h.t)("Sotuvlar soni")},{title:(0,h.t)("Sotilgan mahsulotlar")},{title:(0,h.t)("Jami tushum")}],{currencyType:v}=(0,s.d4)((e=>e.currency)),{sellersreport:w,count:j}=(0,s.d4)((e=>e.sellers)),[P,S]=(0,l.useState)([]),[D,N]=(0,l.useState)(0),[C,k]=(0,l.useState)(10),[A,E]=(0,l.useState)({id:"",client:""}),[b,B]=(0,l.useState)({id:"",client:""}),[z,L]=(0,l.useState)(null),[W,I]=(0,l.useState)(!1),[M,F]=(0,l.useState)({}),[J,Q]=(0,l.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[T,O]=(0,l.useState)(new Date),Y=e=>{L(e),I(!0)},_=e=>{"Enter"===e.key&&(N(0),B(A))};return(0,l.useEffect)((()=>{let e={startDate:J,endDate:T,currentPage:D,countPage:C,search:b,seller:a};p((0,o.jy)(e))}),[p,J,T,D,C,a,b]),(0,l.useEffect)((()=>{if(S(w),w.length>0){const e=(0,g.reduce)(w,((e,t)=>e+(0,g.reduce)(t.payments,((e,t)=>e+t.payment),0)),0),t=(0,g.reduce)(w,((e,t)=>e+(0,g.reduce)(t.payments,((e,t)=>e+t.paymentuzs),0)),0),a=(0,g.reduce)(w,((e,t)=>e+t.products.length),0);F({salesCount:w.length,totalprice:e,totalpriceuzs:t,saleProducts:a})}}),[w]),(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsx)(m.A,{printedSelling:z,currency:v,body:"allChecks",isOpen:W,toggleModal:()=>{I(!W),L(null)}}),(0,f.jsx)("div",{className:"flex items-center justify-between ",children:(0,f.jsx)(n.A,{link:"/hamkorlar/sotuvchilar"})}),(0,f.jsx)("div",{className:"flex w-full",children:(0,f.jsx)(c.A,{filterBy:["total","startDate","endDate","id","clientName"],filterByTotal:e=>k(e.value),startDate:J,setStartDate:Q,endDate:T,setEndDate:O,searchById:A.id,searchByClientName:A.client,filterByClientName:e=>{const t=e.target.value.toLowerCase(),a=(0,g.filter)(w,(e=>{var a,l;return null!==e&&void 0!==e&&null!==(a=e.client)&&void 0!==a&&a.name?null===e||void 0===e||null===(l=e.client)||void 0===l?void 0:l.name.toLowerCase().includes(t):e}));S(a),E({...A,client:t})},filterById:e=>{const t=e.target.value.replace(/\s+/g," ").trim(),a=(0,g.filter)(w,(e=>e.id.includes(t)));S(a),E({...A,id:t})},filterByClientNameWhenPressEnter:_,filterByIdWhenPressEnter:_})}),P.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"lg:tableContainerPadding",children:e?(0,f.jsx)(u.A,{data:M,currency:v,page:"generalreport",headers:x}):(0,f.jsx)(d.A,{data:M,currency:v,page:"generalreport",headers:x})}),(0,f.jsx)("div",{className:"lg:tableContainerPadding mt-4",children:e?(0,f.jsx)(u.A,{data:P,currentPage:D,currency:v,countPage:C,page:"saleslist",headers:y,sellers:!0,Print:Y}):(0,f.jsx)(d.A,{data:P,currentPage:D,currency:v,countPage:C,page:"clientssales",headers:y,sellers:!0,Print:Y})}),(0,f.jsx)("div",{className:"flex justify-center mt-[30px] mb-[30px]",children:(0,f.jsx)(i.A,{countPage:C,totalDatas:j||1,currentPage:D,setCurrentPage:N})})]})]})}}}]);
//# sourceMappingURL=4553.85c5ff99.chunk.js.map