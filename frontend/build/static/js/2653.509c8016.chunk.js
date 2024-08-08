"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2653,1181],{3307:(e,t,a)=>{a.d(t,{A:()=>r});a(65043);var s=a(90221),l=a(70579);const r=e=>{let{text:t,onClick:a}=e;return(0,l.jsxs)("button",{onClick:a,className:"bg-blue-600 flex items-center gap-[0.3125rem] justify-center p-[10px] text-white-900 rounded-[0.5rem] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all ease-in-out duration-200 active:shadow-none hover:bg-blue-700",children:[(0,l.jsx)(s.zo4,{className:"text-white-900",size:"1.125rem"})," ",t&&(0,l.jsx)("span",{className:"text-sm leading-[1.125rem]",children:t})]})}},31204:(e,t,a)=>{a.d(t,{A:()=>n});a(65043);var s=a(35475),l=a(90221),r=a(70579);const n=e=>{let{link:t}=e;return(0,r.jsx)(s.N_,{to:t,className:"lg:mt-[10px] lg:ms-[20px] mt-[50px] ms-[30px] linktoback",children:(0,r.jsx)(l.feN,{className:"mt-[]"})})}},70126:(e,t,a)=>{a.d(t,{A:()=>v});var s=a(90221),l=a(26441),r=(a(65043),a(79456)),n=a(2364),i=a(57290),o=a(70579);const c=e=>(0,o.jsx)(i.c.DropdownIndicator,{...e,children:(0,o.jsx)(s.QDT,{size:"0.625rem"})}),u={control:e=>({...e,borderTopRightRadius:".125rem",borderBottomRightRadius:".125rem",borderTopLeftRadius:"0",borderBottomLeftRadius:"0",fontSize:"0.75rem",fontWeight:"400",padding:"0.375rem 0.3125rem",color:"#071F45",outline:"none",border:"none",boxShadow:"none",cursor:"pointer",height:"100%",backgroundColor:"#F79009",minHeight:"100%","&:hover":{backgroundColor:"#DC6803"}}),container:e=>({...e,height:"100%",position:"absolute",right:0,width:"3rem",top:0,bottom:0}),option:(e,t)=>{let{isFocused:a,isSelected:s}=t;return{...e,fontSize:".75rem",fontWeight:"400",color:s||a?"#ffffff":"#071F45",backgroundColor:s?"#0090A3":a?"#00B4CC":"#ffffff",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer",textAlign:"center"}},menu:e=>({...e,overflow:"hidden"}),singleValue:e=>({...e,fontSize:".75rem",fontWeight:"400",color:"#ffffff",margin:0,textAlign:"center"}),valueContainer:e=>({...e,padding:0}),indicatorsContainer:e=>({...e}),dropdownIndicator:e=>({...e,padding:0,color:"#ffffff"})};var d=a(72096);const m=function(e){let{value:t,onChange:a,option:s,onSelect:l}=e;const{currencyType:i}=(0,r.d4)((e=>e.currency)),m=[{value:i,label:i},{value:"%",label:"%"}];return(0,o.jsxs)("div",{className:"flex w-[11.75rem] border border-warning-500 rounded-[0.25rem] outline outline-transparent outline-0 focus-within:outline-2 focus-within:outline-warning-500 transition-all ease-in-out duration-100 relative",children:[(0,o.jsx)("input",{className:"w-[8.6875rem] placeholder-blue-200 py-[0.3125rem] px-[.3125rem] rounded-l-[0.25rem] outline-0 text-sm text-right transition-all ease-in-out duration-100",placeholder:"".concat((0,d.t)("misol"),": 100 000 000"),type:"number",value:t,onChange:e=>{a(e.target.value)},onWheel:e=>e.target.blur(),min:0}),(0,o.jsx)(n.Ay,{onChange:l,styles:u,isSearchable:!1,value:s,options:m,components:{IndicatorSeparator:()=>null,DropdownIndicator:c}})]})},f=e=>{let{value:t,onChange:a,option:s,onSelect:l}=e;return(0,o.jsxs)("div",{className:"flex justify-between w-full items-center mb-[1rem]",children:[(0,o.jsxs)("div",{className:"text-black-700 text-[0.875rem]",children:[(0,d.t)("Chegirma")," :"]}),(0,o.jsx)(m,{onChange:a,onSelect:l,value:t,option:s})]})};var h=a(66899);const x=e=>{let{onClick:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{onClick:t,className:"exitbtn",children:(0,o.jsx)(s.FyX,{size:"0.75rem"})})})};const b=function(e){let{mix:t,value:a,onChange:s,label:l,onClose:r,keyInput:n,placeholder:i,type:c,disabled:u}=e;return(0,o.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[l," :"]}),(0,o.jsxs)("div",{className:"flex items-center w-[11.75rem] gap-[0.625rem]",children:[(0,o.jsx)(h.A,{placeholder:i||"".concat((0,d.t)("misol"),": 100 000 000"),type:c||"number",value:a,disabled:u,onChange:e=>{s(e.target.value,n)}}),t&&(0,o.jsx)(x,{onClick:()=>r(n)})]})]})};var p=a(73216),g=a(9762);const v=function(e){let{returned:t,active:a,togglePaymentModal:n,hasCalendar:i,hiddenDebt:c,type:u="cash",showPayEndDate:m,cash:h="",card:x="",transfer:v="",hiddenMixed:y,discount:j,hasDiscount:N,hasDiscountBtn:S,debt:z,allPayment:D,paid:w=0,client:k="",onChange:C,onClose:U,changePaymentType:P,discountSelectOption:L,handleClickDiscountBtn:R,handleChangeDiscountSelectOption:E,handleChangeDiscount:I,handleClickPay:A,clickdelay:q,disableInputsCashCard:T,payEndDate:O,handlePayEndDateChange:B,disablePayButton:M}=e;const Q=(0,p.zy)(),F=()=>{switch(u){case"card":return(0,o.jsx)(b,{value:x,keyInput:u,onChange:C,onClose:U,disabled:T,label:(0,d.t)("Plastik")},"sale-card1");case"transfer":return(0,o.jsx)(b,{value:v,keyInput:u,onChange:C,onClose:U,disabled:T,label:(0,d.t)("O`tkazma")},"sale-transfer");case"mixed":return[{label:(0,d.t)("Naqd"),key:"cash",value:h},{label:(0,d.t)("Plastik"),key:"card",value:x},{label:(0,d.t)("O`tkazma"),key:"transfer",value:v}].map((e=>(0,o.jsx)(b,{value:e.value,keyInput:e.key,onChange:C,onClose:U,label:(0,d.t)(e.label)},"sale-".concat(e.key))));default:return(0,o.jsx)(b,{disabled:T,value:h,onChange:C,keyInput:u,onClose:U,label:(0,d.t)("Naqd")},"sale-cash")}},{currencyType:_}=(0,r.d4)((e=>e.currency));return(0,o.jsxs)("section",{className:"fixed transition-all left-0 top-0 right-0 bottom-0 overflow-hidden duration-200 ease-out bg-black-300 backdrop-blur-[3px] z-20 ".concat(a?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"),onClick:n,children:[(0,o.jsx)("h3",{className:"text-white-900 text-lg leading-[1.875rem absolute top-[50%] left-[35%] -translate-x-[50%]",children:(0,d.t)("")}),(0,o.jsxs)("div",{className:"customerPay-head-style transition-all duration-200 ease-linear h-full overflow-auto absolute top-0 bottom-0 right-0 ".concat(a?"translate-x-0":"translate-x-full"),onClick:e=>e.stopPropagation(),autoFocus:!0,children:[(0,o.jsxs)("div",{className:"top-payment w-full",children:[k&&(0,o.jsxs)("div",{className:"customer-head-icon",children:[(0,o.jsxs)("div",{className:"flex items-center custom-payment-text-style",children:[(0,o.jsx)(s.uSr,{className:"mr-[0.75rem]"}),(0,o.jsxs)("span",{children:[(0,d.t)("Mijoz")," : "]})]}),(0,o.jsx)("h3",{className:"text-[0.875rem]",children:k})]}),(0,o.jsxs)("div",{className:"mb-[1.25rem] font-medium text-[1.25rem] text-center leading-[23.44px]",children:[null===D||void 0===D?void 0:D.toLocaleString("ru-Ru")," ",_]}),(0,o.jsxs)("ul",{className:"w-full pb-[1.25rem]",children:[!t&&F(),(Q.pathname.includes("/kassa/debts")||Q.pathname.includes("/qarzdorlar")||Q.pathname.includes("/maxsulotlar/qabul/qabulqilish")||Q.pathname.includes("/maxsulotlar/qabul/qabullar"))&&F(),N&&(0,o.jsx)(f,{value:j,onChange:I,option:L,onSelect:E}),m&&(0,o.jsxs)("li",{className:"custom-payment-ul-li justify-between flex gap-x-5",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[(0,d.t)("To'lov sanasi"),":"]}),(0,o.jsx)(g.A,{onChange:B,value:O,placeholder:"To'lov sanasi",disableIcon:!0})]}),c?null:(0,o.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[(0,d.t)("Qarzlar")," :"," "]}),(0,o.jsxs)("h3",{className:"text-error-500 text-[1rem]",children:[z.toLocaleString("ru-Ru")," ",_]})]}),(0,o.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[D<0?(0,d.t)("Qaytarilayotgan"):(0,d.t)("To`lanayotgan")," ",":"," "]}),(0,o.jsxs)("h3",{className:"text-[1rem] text-loginButton",children:[null===w||void 0===w?void 0:w.toLocaleString("ru-Ru")," ",_]})]})]})]}),(0,o.jsxs)("div",{className:"bottom-payment w-full flex flex-col gap-[1.25rem] border-t-[1px] border-black-200 pt-[1.25rem]",children:[(0,o.jsxs)("div",{className:"custom-paymet-btn",children:[(0,o.jsx)(l.Gv,{text:(0,d.t)("Naqd"),type:"cash",active:"cash"===u,onClick:P}),(0,o.jsx)(l.Gv,{text:(0,d.t)("Plastik"),type:"card",active:"card"===u,onClick:P}),(0,o.jsx)(l.Gv,{text:(0,d.t)("O'tkazma"),type:"transfer",active:"transfer"===u,onClick:P}),!t&&(0,o.jsx)(l.Gv,{text:(0,d.t)("Aralash"),type:"mixed",active:"mixed"===u,onClick:P}),Q.pathname.includes("/kassa/debts")&&(0,o.jsx)(l.Gv,{text:(0,d.t)("Aralash"),type:"mixed",active:"mixed"===u,onClick:P})]}),!t&&S&&(0,o.jsx)(l.eV,{text:(0,d.t)("Chegirma"),onClick:R}),(0,o.jsx)(l.p2,{text:(0,d.t)("To'lash"),disablePayButton:q,loading:q,onClick:q?()=>console.log("wait"):A})]})]})]})}},2977:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var s=a(65043),l=a(79456),r=a(73216),n=a(30200),i=a(31204),o=a(12602),c=a(54964),u=a(3307),d=a(70126),m=a(37424),f=a(18446),h=a(3297),x=a(73734),b=a(66752),p=a(73444),g=a(72096);const v=e=>({sale:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("ID"),filter:(0,g.t)("id")},{title:(0,g.t)("Mijoz")},{title:(0,g.t)("Jami")},{title:(0,g.t)("To'langan")},{title:(0,g.t)("Qarz")},{title:(0,g.t)("Izoh")},{title:"",styles:"w-[7rem]"}],income:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("ID"),filter:"saleconnector.id"},{title:(0,g.t)("Kelgan narxi")},{title:(0,g.t)("Sotilgan narxi")},{title:(0,g.t)("Chegirma")},{title:(0,g.t)("Foyda")},{title:""}],debts:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("ID"),filter:"saleconnector.id"},{title:(0,g.t)("Agent")},{title:(0,g.t)("Mijoz"),filter:"client"},{title:(0,g.t)("Telefon")},{title:(0,g.t)("Qarz izoh")},{title:(0,g.t)("To'lov sanasi")},{title:(0,g.t)("Jami")},{title:(0,g.t)("Qarz")},{title:""}],expenses:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("Summa")},{title:(0,g.t)("Izoh")},{title:(0,g.t)("Turi")}],discounts:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("ID"),filter:"saleconnector.id"},{title:(0,g.t)("Mijoz"),filter:"client"},{title:(0,g.t)("Jami")},{title:(0,g.t)("Chegirma")},{title:(0,g.t)("Foiz")}],backproducts:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("ID"),filter:"saleconnector.id"},{title:(0,g.t)("Mijoz"),filter:"client"},{title:(0,g.t)("Soni")},{title:(0,g.t)("Jami")},{title:(0,g.t)("Qaytarilgan")},{title:""}],payments:[{title:"\u2116"},{title:(0,g.t)("Sana"),filter:"createdAt"},{title:(0,g.t)("ID"),filter:"saleconnector.id"},{title:(0,g.t)("Mijoz")},{title:(0,g.t)("Naqt")},{title:(0,g.t)("Plastik")},{title:(0,g.t)("O'tkazma")},{title:(0,g.t)("Qarzdan to'lov")},{title:(0,g.t)("Qaytarilgan")},{title:""}]}["".concat(e)]);var y=a(53536),j=a(43054),N=a(91154),S=a(21069),z=a(95702),D=a(77275),w=a(38069),k=a(4235),C=a(70579);const U=e=>{var t,a,U,P,L,R,E,I,A,q,T,O,B;let{accessToSaller:M}=e;const[Q,F]=(0,s.useState)(window.innerWidth<=768);(0,s.useEffect)((()=>{const e=()=>{F(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);let{id:_}=(0,r.g)();M&&(_="debts");const W=(0,l.wA)(),{market:H,user:J}=(0,l.d4)((e=>e.login)),{expenses:Y}=(0,l.d4)((e=>e.expense)),{datas:Z,count:G,startDate:K,endDate:X,successDebtComment:V,totalpayment:$}=(0,l.d4)((e=>e.reports)),{sellings:ee}=(0,l.d4)((e=>e.sellings)),{currencyType:te,currency:ae}=(0,l.d4)((e=>e.currency)),[se,le]=(0,s.useState)(0),[re,ne]=(0,s.useState)(10),[ie,oe]=(0,s.useState)(1),[ce,ue]=(0,s.useState)(""),[de,me]=(0,s.useState)({id:"",client:""}),[fe,he]=(0,s.useState)({id:"",client:""}),[xe,be]=(0,s.useState)([]),[pe,ge]=(0,s.useState)(Z),[ve,ye]=(0,s.useState)([]),[je,Ne]=(0,s.useState)(!1),[Se,ze]=(0,s.useState)(!1),[De,we]=(0,s.useState)(!1),[ke,Ce]=(0,s.useState)("cash"),[Ue,Pe]=(0,s.useState)(""),[Le,Re]=(0,s.useState)(""),[Ee,Ie]=(0,s.useState)(""),[Ae,qe]=(0,s.useState)(""),[Te,Oe]=(0,s.useState)(""),[Be,Me]=(0,s.useState)(""),[Qe,Fe]=(0,s.useState)(""),[_e,We]=(0,s.useState)(""),[He,Je]=(0,s.useState)(""),[Ye,Ze]=(0,s.useState)(!1),[Ge,Ke]=(0,s.useState)(null),[Xe,Ve]=(0,s.useState)(""),[$e,et]=(0,s.useState)(!1),[tt,at]=(0,s.useState)({label:"%",value:"%"}),[st,lt]=(0,s.useState)({filter:"",sort:"",count:0}),[rt,nt]=(0,s.useState)(Z),[it,ot]=(0,s.useState)(0),[ct,ut]=(0,s.useState)(0),[dt,mt]=(0,s.useState)(0),[ft,ht]=(0,s.useState)(0),[xt,bt]=(0,s.useState)(0),[pt,gt]=(0,s.useState)(0),[vt,yt]=(0,s.useState)(""),[jt,Nt]=(0,s.useState)(null),[St,zt]=(0,s.useState)({usd:0,uzs:0}),[Dt,wt]=(0,s.useState)(null),[kt,Ct]=(0,s.useState)(new Date),[Ut,Pt]=(0,s.useState)(!1),[Lt,Rt]=(0,s.useState)({}),Et=e=>{let{value:t}=e;ne(Number(t)),le(0)},It=(0,s.useMemo)((()=>({cash:{uzs:Y.filter((e=>"cash"===e.type)).reduce(((e,t)=>{let{sumuzs:a}=t;return e+a}),0),usd:Y.filter((e=>"cash"===e.type)).reduce(((e,t)=>{let{sum:a}=t;return e+a}),0)},card:{uzs:Y.filter((e=>"card"===e.type)).reduce(((e,t)=>{let{sumuzs:a}=t;return e+a}),0),usd:Y.filter((e=>"card"===e.type)).reduce(((e,t)=>{let{sum:a}=t;return e+a}),0)},transfer:{uzs:Y.filter((e=>"transfer"===e.type)).reduce(((e,t)=>{let{sumuzs:a}=t;return e+a}),0),usd:Y.filter((e=>"transfer"===e.type)).reduce(((e,t)=>{let{sum:a}=t;return e+a}),0)}})),[Y]),At=e=>{we(e?!De:e),Ce("cash"),Ze(!1),Fe(""),We(""),Je(""),ot(0),ut(0),at({label:"%",value:"%"})},qt=()=>{ze(!Se),yt(""),Nt(null)},Tt=e=>Math.round(1e3*e)/1e3,Ot=e=>Math.round(e),Bt=e=>{const{useSessionStorage:t}=e;if(t){const e=JSON.parse(sessionStorage.getItem("selected_debts"))||[],t=e.reduce(((e,t)=>e+t.debt),0),a=e.reduce(((e,t)=>e+t.debtuzs),0);mt(t),ht(a),Pe(t),Re(a),bt(t),gt(a),Ke(e),we(!0),Ne(!1)}else{const t=e.debt,a=e.debtuzs;mt(t),ht(a),Pe(t),Re(a),bt(t),gt(a),Ke(e._id),0===e.saleconnectors.length?we(!0):(yt("debtsList"),Ne(!0),ye(e.saleconnectors))}},Mt=e=>{Pe(""),Re(""),Ie(""),qe(""),Oe(""),Me(""),ot(0),ut(0),bt(0),gt(0),Ve(""),Ke(null),ye([]),Ne(!1),At(e)},Qt=()=>{ze(!1),setTimeout((()=>{yt("")}),500)},Ft=e=>{"debts"===_&&(Nt(e),yt("allChecks"),ze(!0)),"sale"===_&&(Nt(e),yt("allChecks"),ze(!0)),"backproducts"===_&&(yt("allChecks"),Nt(e),ze(!Se)),"income"===_&&(yt("allChecks"),Nt(e),ze(!Se)),"payments"===_&&(e.payment?(yt("checkSell"),Nt(e),ze(!Se)):(yt("allChecks"),Nt(e),ze(!Se)))},_t=e=>{let t=e.target.value;ge([...(0,y.filter)([...xe],(e=>e.saleconnector?e.saleconnector.id.includes(t):e.id.includes(t)))]),he({...fe,id:t})},Wt=e=>{let t=e.target.value.toLowerCase();ge([...(0,y.filter)([...xe],(e=>e.client&&e.client.name.toLowerCase().includes(t)))]),he({...fe,client:t})},[Ht,Jt]=(0,s.useState)(""),Yt=e=>{"Enter"===e.key&&me(fe)},Zt=e=>{let t=new Date(e.setHours(0,0,0));wt(t)},Gt=e=>{let t=new Date(e.setHours(23,59,59));Ct(t)},Kt=e=>{if(e===st.filter)switch(st.count){case 1:lt({filter:e,sort:"1",count:2}),(0,n.Yc)(pe,ge,e,1,rt);break;case 2:lt({filter:e,sort:"",count:0}),(0,n.Yc)(pe,ge,e,"",rt);break;default:lt({filter:e,sort:"-1",count:1}),(0,n.Yc)(pe,ge,e,-1,rt)}else lt({filter:e,sort:"-1",count:1}),(0,n.Yc)(pe,ge,e,-1,rt)},Xt=(e,t)=>{console.log(e),W((0,b.ZT)({comment:e,debtid:t})),yt("debtcomment"),ze(!Se)};return(0,s.useEffect)((()=>{const e=e=>_===e;let t={type:_,currentPage:se,countPage:re,startDate:Dt,endDate:kt,market:H,search:de},a={startDate:Dt,endDate:kt};return e("sale")&&W((0,j.WL)(t)),e("income")&&W((0,b.Dd)(t)),e("payments")&&W((0,b.Hj)(t)),e("debts")&&W((0,b.N7)(a)),e("discounts")&&W((0,b.bV)(t)),e("backproducts")&&W((0,b.s3)(t)),e("expenses")&&W((0,b.Qj)(t)),()=>{W((0,b.fo)())}}),[W,de,se,re,Dt,kt,H,_]),(0,s.useEffect)((()=>("cash"!==_&&"card"!==_&&"transfer"!==_||(ge([...Z.filter((e=>0!==e[_]))]),be([...Z.filter((e=>0!==e[_]))])),"sale"===_?(ge(ee),be(ee)):(ge(Z),be(Z)),()=>{ge([]),be([])})),[Z,_,ee]),(0,s.useEffect)((()=>{G>0&&oe(G)}),[G]),(0,s.useEffect)((()=>{"debts"===_&&zt({usd:(0,n.tE)(Z.reduce(((e,t)=>{let{debt:a}=t;return e+a}),0)),uzs:(0,n.Df)(Z.reduce(((e,t)=>{let{debtuzs:a}=t;return e+a}),0))})}),[Z,_]),(0,s.useEffect)((()=>{if("debts"===_){const e=[...Z].filter((e=>new Date(e.createdAt)>=Dt&&new Date(e.createdAt)<=kt));ge(e)}ge(Z),nt(Z)}),[_,Z,Dt,kt]),(0,s.useEffect)((()=>{if(V){let e={startDate:Dt,endDate:kt,market:H};W((0,b.N7)(e)),W((0,b.Z0)())}}),[W,V,_,H,de,Dt,kt]),(0,s.useEffect)((()=>{let e={currentPage:0,countPage:1e7,startDate:Dt,endDate:kt};W((0,p.$R)(e))}),[W,Dt,kt]),(0,s.useEffect)((()=>{if("debts"===_){let e=new Date,t=e.getMonth(),a=e.getFullYear(),s=e.getDate(),l=new Date(a,t-3,s);wt(l)}else wt(K?new Date(K):new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()).setHours(0,0,0)),X&&Ct(new Date(X))}),[_,K,X]),(0,C.jsxs)("div",{className:"relative overflow-auto ",children:[Ut&&(0,C.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,C.jsx)(k.A,{})}),(0,C.jsxs)("div",{className:"flex lg:justify-start mb-3 justify-between items-center pe-4",children:[(0,C.jsx)("span",{className:"lg:mt-[20px]",children:(0,C.jsx)(i.A,{link:"/kassa"})}),Q?(0,C.jsxs)("div",{className:"flex justify-between items-center gap-4",children:[(0,C.jsx)("div",{className:"mt-12",children:(0,C.jsx)(w.A,{onSelect:Et},"total_1")}),(0,C.jsx)("button",{onClick:()=>et(!0),className:"hover:bg-blue-200  bg-blue-400 focus-visible:outline-none w-[50px] h-[33px] lg:mt-2 lg:ms-2 mt-[50px]  createElement ",children:(0,C.jsx)(S.OuI,{})})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:"mt-6",children:(0,C.jsx)(w.A,{onSelect:Et},"total_1")}),(0,C.jsx)(m.A,{filterBy:"debts"===_?["id","clientName","clientPhoneNumber"]:"income"===_?["total","id","startDate","endDate"]:"expenses"===_?["startDate","endDate"]:["id","clientName","startDate","endDate"],filterById:_t,filterByClientPhoneNumber:e=>{let t=e.target.value.toLowerCase();Jt(t),ge([...(0,y.filter)([...xe],(e=>e.client&&e.client.phoneNumber.toLowerCase().includes(t)))]),he({...fe,client:t})},phoneNumber:Ht,filterByClientName:Wt,filterByIdWhenPressEnter:Yt,filterByClientNameWhenPressEnter:Yt,startDate:Dt,endDate:kt,setStartDate:Zt,setEndDate:Gt}),(0,C.jsxs)("button",{className:"mt-6 exportButton",children:[(0,C.jsx)(z.A,{id:"reacthtmltoexcel",table:"excel-tabel",sheet:"Sheet",buttonText:"Excel",filename:"income"===_?"Sof foyda":"expenses"===_?"Xarajatlar":"payments"===_?"Tushumlar":"backproducts"===_?"Qaytarilganlar":"discounts"===_?"Chegirmalar":"Qarzlar"}),(0,C.jsx)("span",{className:"btn-icon bg-white-900 p-[8px]",children:(0,C.jsx)("img",{src:D.A,alt:"excel icon"})})]})]})]}),"payments"===_&&(0,C.jsx)("div",{className:"ml-3 px-4 py-2 flex justify-end",children:(0,C.jsx)(u.A,{text:"".concat((0,g.t)("Savdo hisoboti")),onClick:async e=>{Pt(!0);try{let e={startDate:new Date(K),endDate:new Date(X),search:{client:"",id:"",product:""}},t={startDate:new Date(K).toISOString(),endDate:new Date(X)};const[{saleconnectors:a},{income:s,debts:l,discounts:r},{totalpieces:n},{totalpieces:i,totalprice:o,totalpriceuzs:c,producttypes:u}]=await Promise.all([await W((0,j.ah)(e)).unwrap(),await W((0,b.RI)(t)).unwrap(),await W((0,b.U7)(t)).unwrap(),await W((0,b.d$)()).unwrap()]);qt(),yt("dailySaleCheck"),Rt({boshsana:K,tugashsana:X,sotuvlarsoni:a.length,tushumlar:{naqt:{sum:$.payment.cashuzs,dollar:$.payment.cash},plastik:{sum:$.payment.carduzs,dollar:$.payment.card},utkazma:{sum:$.payment.transferuzs,dollar:$.payment.transfer}},qaytarilganlar:{naqt:{sum:$.back.cashuzs,dollar:$.back.cash},plastik:{sum:$.back.carduzs,dollar:$.back.card},utkazma:{sum:$.back.transferuzs,dollar:$.back.transfer}},xarajatlar:{naqt:{sum:It.cash.uzs,dollar:It.cash.usd},plastik:{sum:It.card.uzs,dollar:It.card.usd},utkazma:{sum:It.transfer.uzs,dollar:It.transfer.usd}},foyda:{sum:s.incomeuzs,dollar:s.income},qarzlar:{sum:l.debtsuzs,dollar:l.debts},chegirmalar:{sum:r.discountsuzs,dollar:r.discounts},kassaqoldiq:{naqt:{sum:$.result.cashuzs-It.cash.uzs,dollar:$.result.cash-It.cash.usd},plastik:{sum:$.result.carduzs-It.card.uzs,dollar:$.result.card-It.card.usd},utkazma:{sum:$.result.transferuzs-It.transfer.uzs,dollar:$.result.transfer-It.transfer.usd}},sotilganmaxsulotlarsoni:n,qolganmaxsulotlarsoni:u,qolganmaxsulotlarumumiysoni:i,qolganmaxsulotlarqiymati:{sum:c,dollar:o}})}catch(t){return Pt(!1),console.error(t)}Pt(!1)}})}),(0,C.jsx)("div",{className:"flex items-center justify-between",children:$e?(0,C.jsxs)("div",{className:"fixed w-[100%] h-[100vh] top-0 start-0 bg-[white] z-50 ",children:[(0,C.jsx)(N.RQJ,{onClick:()=>et(!1),className:"absolute text-3xl end-[25px] top-[25px] cursor-pointer"}),(0,C.jsx)("div",{className:"pl-[0px] flex items-center justify-between mainPadding mt-[30px]",children:(0,C.jsx)(m.A,{filterBy:"debts"===_?["startDate","endDate","id","clientName"]:"income"===_?["id","client","startDate","endDate"]:"expenses"===_?["startDate","endDate"]:["id","clientName","startDate","endDate"],filterById:_t,filterByClientName:Wt,filterByIdWhenPressEnter:Yt,filterByClientNameWhenPressEnter:Yt,startDate:Dt,endDate:kt,setStartDate:Zt,setEndDate:Gt})}),(0,C.jsx)("div",{className:"flex justify-center",children:(0,C.jsxs)("button",{onClick:()=>et(!1),className:" hover:bg-blue-200  bg-blue-400 focus-visible:outline-none w-[150px] lg:h-[33px] h=[40px] createElement ",children:[(0,C.jsx)(S.OuI,{})," ",(0,g.t)("izlash")]})})]}):null}),(0,C.jsxs)("div",{className:"lg:ps-[20px] lg:tableContainerPadding ",children:[pe.length>0&&(Q?(0,C.jsx)(h.A,{page:"sale"===_?"saleslist":_,headers:v(_),data:pe,currentPage:se,countPage:re,currency:te,type:_,Pay:Bt,reports:!0,Print:Ft,Sort:Kt,sortItem:st,Edit:Xt,totalDebt:St}):(0,C.jsx)(f.A,{page:"sale"===_?"saleslist":_,headers:v(_),data:pe,currentPage:se,countPage:re,currency:te,type:_,Pay:Bt,reports:!0,Print:Ft,Sort:Kt,sortItem:st,Edit:Xt,totalDebt:St})),(0,C.jsx)("div",{className:"flex justify-center mt-3",children:"debts"!==_&&(0,C.jsx)(c.A,{countPage:re,currentPage:se,totalDatas:ie,setCurrentPage:le})}),"payments"===_&&(null===$||void 0===$||null===(t=$.payment)||void 0===t?void 0:t.cash)&&(0,C.jsxs)("div",{className:"flex items-center justify-between gap-10 mt-6 bg-white py-6 md:py-0 flex-col md:flex-row",children:[(0,C.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,C.jsx)("div",{className:"text-[18px] font-bold mb-2",children:(0,g.t)("Tushumlar")}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Naqt"),":"]}),(0,C.jsxs)("div",{children:["USD"===te?(0,n.tE)($.payment.cash).toLocaleString("ru-RU"):(0,n.Df)($.payment.cashuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Plastik"),":"]}),(0,C.jsxs)("div",{children:["USD"===te?(0,n.tE)($.payment.card).toLocaleString("ru-RU"):(0,n.Df)($.payment.carduzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("O'tkazma"),":"]}),(0,C.jsxs)("div",{children:["USD"===te?(0,n.tE)($.payment.transfer).toLocaleString("ru-RU"):(0,n.Df)($.payment.transferuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"text-[18px] font-semibold w-full text-end",children:["USD"===te?(0,n.tE)($.payment.cash+$.payment.card+$.payment.transfer).toLocaleString("ru-RU"):(0,n.Df)($.payment.cashuzs+$.payment.carduzs+$.payment.transferuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,C.jsx)("div",{className:"text-[18px] font-bold mb-2",children:(0,g.t)("Komissiya to'lovi")}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Naqt"),":"]})," ",(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)(null===$||void 0===$||null===(a=$.agentProfit)||void 0===a?void 0:a.cash).toLocaleString("ru-RU"):(0,n.Df)(null===$||void 0===$||null===(U=$.agentProfit)||void 0===U?void 0:U.cashuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Plastik"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)(null===$||void 0===$||null===(P=$.agentProfit)||void 0===P?void 0:P.card).toLocaleString("ru-RU"):(0,n.Df)(null===$||void 0===$||null===(L=$.agentProfit)||void 0===L?void 0:L.carduzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("O'tkazma"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)(null===$||void 0===$||null===(R=$.agentProfit)||void 0===R?void 0:R.transfer).toLocaleString("ru-RU"):(0,n.Df)(null===$||void 0===$||null===(E=$.agentProfit)||void 0===E?void 0:E.transferuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"text-[18px] font-semibold w-full text-end",children:["USD"===te?(0,n.tE)((null===$||void 0===$||null===(I=$.agentProfit)||void 0===I?void 0:I.cash)+(null===$||void 0===$||null===(A=$.agentProfit)||void 0===A?void 0:A.card)+(null===$||void 0===$||null===(q=$.agentProfit)||void 0===q?void 0:q.transfer)).toLocaleString("ru-RU"):(0,n.Df)((null===$||void 0===$||null===(T=$.agentProfit)||void 0===T?void 0:T.cashuzs)+(null===$||void 0===$||null===(O=$.agentProfit)||void 0===O?void 0:O.carduzs)+(null===$||void 0===$||null===(B=$.agentProfit)||void 0===B?void 0:B.transferuzs)).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,C.jsx)("div",{className:"text-[18px] font-bold mb-2",children:(0,g.t)("Qaytarilganlar")}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Naqt"),":"]})," ",(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)($.back.cash).toLocaleString("ru-RU"):(0,n.Df)($.back.cashuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Plastik"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)($.back.card).toLocaleString("ru-RU"):(0,n.Df)($.back.carduzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("O'tkazma"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)($.back.transfer).toLocaleString("ru-RU"):(0,n.Df)($.back.transferuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"text-[18px] font-semibold w-full text-end",children:["USD"===te?(0,n.tE)($.back.cash+$.back.card+$.back.transfer).toLocaleString("ru-RU"):(0,n.Df)($.back.cashuzs+$.back.carduzs+$.back.transferuzs).toLocaleString("ru-RU")," ",te]})]}),Y&&(0,C.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,C.jsx)("div",{className:"text-[18px] font-bold mb-2",children:(0,g.t)("Xarajatlar")}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Naqt"),":"]})," ",(0,C.jsxs)("span",{children:["-","USD"===te?(0,n.tE)(It.cash.usd).toLocaleString("ru-RU"):(0,n.Df)(It.cash.uzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Plastik"),":"]}),(0,C.jsxs)("span",{children:["-","USD"===te?(0,n.tE)(It.card.usd).toLocaleString("ru-RU"):(0,n.Df)(It.card.uzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("O'tkazma"),":"]}),(0,C.jsxs)("span",{children:["-","USD"===te?(0,n.tE)(It.transfer.usd).toLocaleString("ru-RU"):(0,n.Df)(It.transfer.uzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"text-[18px] font-semibold w-full text-end",children:["-","USD"===te?(0,n.tE)(It.cash.usd+It.card.usd+It.transfer.usd).toLocaleString("ru-RU"):(0,n.Df)(It.cash.uzs+It.card.uzs+It.transfer.uzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,C.jsx)("div",{className:"text-[18px] font-bold mb-2",children:(0,g.t)("Kassadagi qoldiq")}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Naqt"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)($.result.cash-It.cash.usd).toLocaleString("ru-RU"):(0,n.Df)($.result.cashuzs-It.cash.uzs-$.agentProfit.cashuzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("Plastik"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)($.result.card-It.card.usd-$.agentProfit.card).toLocaleString("ru-RU"):(0,n.Df)($.result.carduzs-It.card.uzs-$.agentProfit.carduzs).toLocaleString("ru-RU")," ",te]})]}),(0,C.jsxs)("div",{className:"font-semibold w-full gap-5 flex justify-between",children:[(0,C.jsxs)("div",{children:[(0,g.t)("O'tkazma"),":"]}),(0,C.jsxs)("span",{children:["USD"===te?(0,n.tE)($.result.transfer-It.transfer.usd).toLocaleString("ru-RU"):(0,n.Df)($.result.transferuzs-It.transfer.uzs-$.agentProfit.transferuzs).toLocaleString("ru-RU")," ",te]})]})]})]})]}),(0,C.jsx)("div",{children:(0,C.jsx)(d.A,{returned:!0,type:ke,active:De,togglePaymentModal:At,changePaymentType:e=>{const t=dt-Number(Qe),a=ft-Number(_e);if(ke!==e)switch(Ce(e),e){case"cash":Pe(t),Re(a),Ie(""),qe(""),Oe(""),Me(""),bt(t),gt(a),ot(0),ut(0);break;case"card":Ie(t),qe(a),Pe(""),Re(""),Oe(""),Me(""),bt(t),gt(a),ot(0),ut(0);break;case"transfer":Oe(t),Me(a),Pe(""),Re(""),Ie(""),qe(""),bt(t),gt(a),ot(0),ut(0);break;default:Pe(""),Re(""),Ie(""),qe(""),Oe(""),Me(""),bt(0),gt(0),ot(dt-Number(Qe)),ut(ft-Number(_e))}},onChange:(e,t)=>{((e,t)=>{const a=dt-Number(Qe),s=ft-Number(_e);if("USD"===te)if("cash"===t){const t=Number(e)+Number(Ee)+Number(Te),s=Number(Le)+Number(Ae)+Number(Be);t<=a?(Pe(e),Re((0,n.IQ)(e,ae)),ot(Tt(a-t)),ut((0,n.IQ)(a-t,ae)),bt(t),gt(s)):(0,x.OC)()}else if("card"===t){const t=Number(e)+Number(Ue)+Number(Te),s=Number(Le)+Number(Ae)+Number(Be);t<=a?(Ie(e),qe((0,n.IQ)(e,ae)),ot(Tt(a-t)),ut((0,n.IQ)(a-t,ae)),bt(t),gt(s)):(0,x.OC)()}else{const t=Number(e)+Number(Ue)+Number(Ee),s=Number(Le)+Number(Ae)+Number(Be);t<=a?(Oe(e),Me((0,n.IQ)(e,ae)),ot(Tt(a-t)),ut((0,n.IQ)(a-t,ae)),bt(t),gt(s)):(0,x.OC)()}else if("cash"===t){const t=Number(e)+Number(Ae)+Number(Be),a=Number(Ue)+Number(Ee)+Number(Te);t<=s?(Re(e),Pe((0,n.Ch)(e,ae)),ot((0,n.Ch)(s-t,ae)),ut(Ot(s-t)),bt(a),gt(t)):(0,x.OC)()}else if("card"===t){const t=Number(e)+Number(Le)+Number(Be);t<=s?(Ie((0,n.Ch)(e,ae)),qe(e),ot((0,n.Ch)(s-t,ae)),ut(Ot(s-t)),bt((0,n.Ch)(t,ae)),gt(t)):(0,x.OC)()}else{const t=Number(e)+Number(Le)+Number(Ae),a=Number(Ue)+Number(Ee)+Number(Te);t<=s?(Oe((0,n.Ch)(e,ae)),Me(e),ot((0,n.Ch)(s-t,ae)),ut(Ot(s-t)),bt(a),gt(t)):(0,x.OC)()}})(e,t)},client:Xe,allPayment:"USD"===te?dt:ft,card:"USD"===te?Ee:Ae,cash:"USD"===te?Ue:Le,debt:"USD"===te?it:ct,discount:"USD"===te?"USD"===tt.value?Qe:He:"UZS"===tt.value?_e:He,handleChangeDiscount:e=>{const t=Math.round(5*dt/100*10)/10,a=Math.round(5*ft/100*10)/10;if("USD"===tt.value)e>t?(0,x.nN)("".concat(t," USD")):(Fe(e),We((0,n.IQ)(e,ae)),Je(Math.round(dt*e/100*10)/10),ot(dt-e),ut((0,n.IQ)(dt-e,ae)));else if("UZS"===tt.value)e>a?(0,x.nN)("".concat(a," UZS")):(We(e),Fe((0,n.Ch)(e,ae)),Je(Math.round(ft*e/100*10)/10),ot((0,n.Ch)(ft-e,ae)),ut(ft-e));else if(e>5)(0,x.nN)("5%");else{const t=Math.round(dt*e/100*10)/10,a=Math.round(ft*e/100*10)/10;Je(e),Fe(t),We(a),ot(Tt(dt-t)),ut(Ot(ft-a)),bt(dt-t),gt(ft-a)}Pe(""),Re(""),Ie(""),qe(""),Oe(""),Me(""),bt(0),gt(0)},hasDiscount:Ye,disableInputsCashCard:!0,transfer:"USD"===te?Te:Be,handleClickDiscountBtn:()=>{Ze(!Ye),"cash"===ke?(Pe(dt),Re(ft),bt(dt),gt(ft)):"card"===ke?(Ie(dt),qe(ft),bt(dt),gt(ft)):"transfer"===ke?(Oe(dt),Me(ft),bt(dt),gt(ft)):(Pe(""),Re(""),Ie(""),qe(""),Oe(""),Me(""),bt(0),gt(0),ot(dt),ut(ft)),Fe(""),We(""),Je("")},discountSelectOption:tt,handleChangeDiscountSelectOption:e=>{tt.value!==e.value&&(at(e),Fe(""),We(""),Je(""),Pe(""),Re(""),Ie(""),qe(""),Oe(""),Me(""),ot(dt),ut(ft),bt(0),gt(0))},paid:"USD"===te?xt:pt,handleClickPay:()=>{yt("complete"),ze(!0)}})}),(0,C.jsxs)(o.A,{body:"debtsList",isOpen:je,closeModal:()=>Mt(!1),payDebt:()=>Bt({useSessionStorage:!0,tableType:"innerDebts"}),children:[" ",(0,C.jsx)(f.A,{page:"debtsList",hiddenPayButton:!0,hiddenInfoButton:!0,headers:v(_),data:ve,currentPage:se,countPage:re,currency:te,type:_,Pay:Bt,reports:!0,Print:Ft,Sort:Kt,sortItem:st,Edit:Xt,totalDebt:St})]}),(0,C.jsx)(o.A,{body:vt,toggleModal:"sell"===vt?()=>{yt(""),ze(!Se),setTimeout((()=>{}),500)}:"complete"===vt?Qt:"allChecks"===vt?()=>{ze(!Se),yt(""),yt(null)}:"debtcomment"===vt?()=>{W((0,b.ZT)({comment:null,debtid:null})),yt(""),ze(!Se)}:qt,approveFunction:()=>{Qt();if(Number(Ee)+Number(Ae)+Number(Ue)+Number(Le)+Number(Te)+Number(Be)<Number(dt)+Number(ft))(0,x.YX)();else if(Array.isArray(Ge)){let e={paymentuzs:0,cashuzs:0,carduzs:0,transferuzs:0},t=[];for(let a of Ge){const e={payment:{totalprice:Number(a.debt),totalpriceuzs:Number(a.debtuzs),type:ke,cash:"cash"===ke?Number(a.debt):0,cashuzs:"cash"===ke?Number(a.debtuzs):0,card:"card"===ke?Number(a.debt):0,carduzs:"card"===ke?Number(a.debtuzs):0,transfer:"transfer"===ke?Number(a.debt):0,transferuzs:"transfer"===ke?Number(a.debtuzs):0,discount:0,discountuzs:0},user:J._id,saleconnectorid:a._id};t.push(W((0,b.IH)(e)))}Promise.all(t).then((t=>{for(let a of t){let t=a.payload;e={...e,...t,paymentuzs:e.paymentuzs+t.paymentuzs,cashuzs:e.cashuzs+t.cashuzs,carduzs:e.carduzs+t.carduzs,transferuzs:e.transferuzs+t.transferuzs},Nt(e),W((0,b.N7)()),setTimeout((()=>{yt("allDebtPayedCheck"),ze(!0),Mt()}),500)}sessionStorage.removeItem("selected_debts")}))}else{const e={payment:{totalprice:Number(dt),totalpriceuzs:Number(ft),type:ke,cash:Number(Ue),cashuzs:Number(Le),card:Number(Ee),carduzs:Number(Ae),transfer:Number(Te),transferuzs:Number(Be),discount:0,discountuzs:0},user:J._id,saleconnectorid:Ge};W((0,b.IH)(e)).then((e=>{let{payload:t}=e;Nt(t),W((0,b.N7)()),setTimeout((()=>{yt("allDebtPayedCheck"),ze(!0),Mt()}),500)}))}},isOpen:Se,payment:jt,printedSelling:"dailySaleCheck"===vt?Lt:jt,product:jt,headers:[{title:"\u2116"},{title:"Kodi"},{title:"Nomi"},{title:"Soni"},{title:"Narxi"},{title:"Jami",styles:"w-[10rem]"},{title:""}],headerText:"complete"===vt&&"To'lovni amalga oshirishni tasdiqlaysizmi?",title:"complete"===vt&&"To'lovni amalga oshirgach bu ma`lumotlarni o'zgaritirib bo'lmaydi!"})]})}}}]);
//# sourceMappingURL=2653.509c8016.chunk.js.map