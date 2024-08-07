"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3191,1181],{70126:(e,t,a)=>{a.d(t,{A:()=>v});var l=a(90221),n=a(26441),s=(a(65043),a(79456)),i=a(2364),r=a(57290),o=a(70579);const c=e=>(0,o.jsx)(r.c.DropdownIndicator,{...e,children:(0,o.jsx)(l.QDT,{size:"0.625rem"})}),u={control:e=>({...e,borderTopRightRadius:".125rem",borderBottomRightRadius:".125rem",borderTopLeftRadius:"0",borderBottomLeftRadius:"0",fontSize:"0.75rem",fontWeight:"400",padding:"0.375rem 0.3125rem",color:"#071F45",outline:"none",border:"none",boxShadow:"none",cursor:"pointer",height:"100%",backgroundColor:"#F79009",minHeight:"100%","&:hover":{backgroundColor:"#DC6803"}}),container:e=>({...e,height:"100%",position:"absolute",right:0,width:"3rem",top:0,bottom:0}),option:(e,t)=>{let{isFocused:a,isSelected:l}=t;return{...e,fontSize:".75rem",fontWeight:"400",color:l||a?"#ffffff":"#071F45",backgroundColor:l?"#0090A3":a?"#00B4CC":"#ffffff",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer",textAlign:"center"}},menu:e=>({...e,overflow:"hidden"}),singleValue:e=>({...e,fontSize:".75rem",fontWeight:"400",color:"#ffffff",margin:0,textAlign:"center"}),valueContainer:e=>({...e,padding:0}),indicatorsContainer:e=>({...e}),dropdownIndicator:e=>({...e,padding:0,color:"#ffffff"})};var d=a(72096);const m=function(e){let{value:t,onChange:a,option:l,onSelect:n}=e;const{currencyType:r}=(0,s.d4)((e=>e.currency)),m=[{value:r,label:r},{value:"%",label:"%"}];return(0,o.jsxs)("div",{className:"flex w-[11.75rem] border border-warning-500 rounded-[0.25rem] outline outline-transparent outline-0 focus-within:outline-2 focus-within:outline-warning-500 transition-all ease-in-out duration-100 relative",children:[(0,o.jsx)("input",{className:"w-[8.6875rem] placeholder-blue-200 py-[0.3125rem] px-[.3125rem] rounded-l-[0.25rem] outline-0 text-sm text-right transition-all ease-in-out duration-100",placeholder:"".concat((0,d.t)("misol"),": 100 000 000"),type:"number",value:t,onChange:e=>{a(e.target.value)},onWheel:e=>e.target.blur(),min:0}),(0,o.jsx)(i.Ay,{onChange:n,styles:u,isSearchable:!1,value:l,options:m,components:{IndicatorSeparator:()=>null,DropdownIndicator:c}})]})},p=e=>{let{value:t,onChange:a,option:l,onSelect:n}=e;return(0,o.jsxs)("div",{className:"flex justify-between w-full items-center mb-[1rem]",children:[(0,o.jsxs)("div",{className:"text-black-700 text-[0.875rem]",children:[(0,d.t)("Chegirma")," :"]}),(0,o.jsx)(m,{onChange:a,onSelect:n,value:t,option:l})]})};var h=a(66899);const b=e=>{let{onClick:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{onClick:t,className:"exitbtn",children:(0,o.jsx)(l.FyX,{size:"0.75rem"})})})};const g=function(e){let{mix:t,value:a,onChange:l,label:n,onClose:s,keyInput:i,placeholder:r,type:c,disabled:u}=e;return(0,o.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[n," :"]}),(0,o.jsxs)("div",{className:"flex items-center w-[11.75rem] gap-[0.625rem]",children:[(0,o.jsx)(h.A,{placeholder:r||"".concat((0,d.t)("misol"),": 100 000 000"),type:c||"number",value:a,disabled:u,onChange:e=>{l(e.target.value,i)}}),t&&(0,o.jsx)(b,{onClick:()=>s(i)})]})]})};var x=a(73216),f=a(9762);const v=function(e){let{returned:t,active:a,togglePaymentModal:i,hasCalendar:r,hiddenDebt:c,type:u="cash",showPayEndDate:m,cash:h="",card:b="",transfer:v="",hiddenMixed:y,discount:N,hasDiscount:C,hasDiscountBtn:j,debt:k,allPayment:S,paid:w=0,client:z="",onChange:D,onClose:_,changePaymentType:P,discountSelectOption:q,handleClickDiscountBtn:T,handleChangeDiscountSelectOption:I,handleChangeDiscount:A,handleClickPay:E,clickdelay:M,disableInputsCashCard:O,payEndDate:Q,handlePayEndDateChange:U,disablePayButton:Y}=e;const B=(0,x.zy)(),F=()=>{switch(u){case"card":return(0,o.jsx)(g,{value:b,keyInput:u,onChange:D,onClose:_,disabled:O,label:(0,d.t)("Plastik")},"sale-card1");case"transfer":return(0,o.jsx)(g,{value:v,keyInput:u,onChange:D,onClose:_,disabled:O,label:(0,d.t)("O`tkazma")},"sale-transfer");case"mixed":return[{label:(0,d.t)("Naqd"),key:"cash",value:h},{label:(0,d.t)("Plastik"),key:"card",value:b},{label:(0,d.t)("O`tkazma"),key:"transfer",value:v}].map((e=>(0,o.jsx)(g,{value:e.value,keyInput:e.key,onChange:D,onClose:_,label:(0,d.t)(e.label)},"sale-".concat(e.key))));default:return(0,o.jsx)(g,{disabled:O,value:h,onChange:D,keyInput:u,onClose:_,label:(0,d.t)("Naqd")},"sale-cash")}},{currencyType:R}=(0,s.d4)((e=>e.currency));return(0,o.jsxs)("section",{className:"fixed transition-all left-0 top-0 right-0 bottom-0 overflow-hidden duration-200 ease-out bg-black-300 backdrop-blur-[3px] z-20 ".concat(a?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"),onClick:i,children:[(0,o.jsx)("h3",{className:"text-white-900 text-lg leading-[1.875rem absolute top-[50%] left-[35%] -translate-x-[50%]",children:(0,d.t)("")}),(0,o.jsxs)("div",{className:"customerPay-head-style transition-all duration-200 ease-linear h-full overflow-auto absolute top-0 bottom-0 right-0 ".concat(a?"translate-x-0":"translate-x-full"),onClick:e=>e.stopPropagation(),autoFocus:!0,children:[(0,o.jsxs)("div",{className:"top-payment w-full",children:[z&&(0,o.jsxs)("div",{className:"customer-head-icon",children:[(0,o.jsxs)("div",{className:"flex items-center custom-payment-text-style",children:[(0,o.jsx)(l.uSr,{className:"mr-[0.75rem]"}),(0,o.jsxs)("span",{children:[(0,d.t)("Mijoz")," : "]})]}),(0,o.jsx)("h3",{className:"text-[0.875rem]",children:z})]}),(0,o.jsxs)("div",{className:"mb-[1.25rem] font-medium text-[1.25rem] text-center leading-[23.44px]",children:[null===S||void 0===S?void 0:S.toLocaleString("ru-Ru")," ",R]}),(0,o.jsxs)("ul",{className:"w-full pb-[1.25rem]",children:[!t&&F(),(B.pathname.includes("/kassa/debts")||B.pathname.includes("/qarzdorlar")||B.pathname.includes("/maxsulotlar/qabul/qabulqilish")||B.pathname.includes("/maxsulotlar/qabul/qabullar"))&&F(),C&&(0,o.jsx)(p,{value:N,onChange:A,option:q,onSelect:I}),m&&(0,o.jsxs)("li",{className:"custom-payment-ul-li justify-between flex gap-x-5",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[(0,d.t)("To'lov sanasi"),":"]}),(0,o.jsx)(f.A,{onChange:U,value:Q,placeholder:"To'lov sanasi",disableIcon:!0})]}),c?null:(0,o.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[(0,d.t)("Qarzlar")," :"," "]}),(0,o.jsxs)("h3",{className:"text-error-500 text-[1rem]",children:[k.toLocaleString("ru-Ru")," ",R]})]}),(0,o.jsxs)("li",{className:"custom-payment-ul-li",children:[(0,o.jsxs)("span",{className:"custom-payment-text-style",children:[S<0?(0,d.t)("Qaytarilayotgan"):(0,d.t)("To`lanayotgan")," ",":"," "]}),(0,o.jsxs)("h3",{className:"text-[1rem] text-loginButton",children:[null===w||void 0===w?void 0:w.toLocaleString("ru-Ru")," ",R]})]})]})]}),(0,o.jsxs)("div",{className:"bottom-payment w-full flex flex-col gap-[1.25rem] border-t-[1px] border-black-200 pt-[1.25rem]",children:[(0,o.jsxs)("div",{className:"custom-paymet-btn",children:[(0,o.jsx)(n.Gv,{text:(0,d.t)("Naqd"),type:"cash",active:"cash"===u,onClick:P}),(0,o.jsx)(n.Gv,{text:(0,d.t)("Plastik"),type:"card",active:"card"===u,onClick:P}),(0,o.jsx)(n.Gv,{text:(0,d.t)("O'tkazma"),type:"transfer",active:"transfer"===u,onClick:P}),!t||y&&(0,o.jsx)(n.Gv,{text:(0,d.t)("Aralash"),type:"mixed",active:"mixed"===u,onClick:P}),B.pathname.includes("/kassa/debts")&&(0,o.jsx)(n.Gv,{text:(0,d.t)("Aralash"),type:"mixed",active:"mixed"===u,onClick:P})]}),!t&&j&&(0,o.jsx)(n.eV,{text:(0,d.t)("Chegirma"),onClick:T}),(0,o.jsx)(n.p2,{text:(0,d.t)("To'lash"),disablePayButton:M,loading:M,onClick:M?()=>console.log("wait"):E})]})]})]})}},88747:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(65043),n=a(79456),s=a(80502),i=a(18446),r=a(37919),o=a(76926),c=a(12602),u=a(30200),d=a(73216),m=a(49092),p=a(53536),h=a(73734),b=a(70126),g=a(63270),x=a(70579);const f=()=>{const{t:e}=(0,m.B)(["common"]),t=(0,n.wA)(),a=(0,d.Zp)(),{market:{_id:f},user:v}=(0,n.d4)((e=>e.login)),{currency:y,currencyType:N}=(0,n.d4)((e=>e.currency)),{suppliers:C,products:j,successAdd:k,successTemporary:S,temporary:w,loading:z}=(0,n.d4)((e=>e.incoming)),[D,_]=(0,l.useState)([]),[P,q]=(0,l.useState)([]),[T,I]=(0,l.useState)({}),[A,E]=(0,l.useState)([]),[M,O]=(0,l.useState)({}),[Q,U]=(0,l.useState)([]),[Y,B]=(0,l.useState)(""),[F,R]=(0,l.useState)(""),[$,G]=(0,l.useState)(!1),[L,W]=(0,l.useState)("cash"),[Z,H]=(0,l.useState)(""),[J,V]=(0,l.useState)(""),[K,X]=(0,l.useState)(""),[ee,te]=(0,l.useState)(""),[ae,le]=(0,l.useState)(""),[ne,se]=(0,l.useState)(""),[ie,re]=(0,l.useState)(0),[oe,ce]=(0,l.useState)(0),[ue,de]=(0,l.useState)(0),[me,pe]=(0,l.useState)(0),[he,be]=(0,l.useState)(0),[ge,xe]=(0,l.useState)(0),[fe,ve]=(0,l.useState)("registerincomingbody"),[ye,Ne]=(0,l.useState)(!1),[Ce,je]=(0,l.useState)(y),[ke,Se]=(0,l.useState)("");let we=null;const ze=e=>{const t=[...(0,p.filter)([...j],(t=>t._id===e))][0];O({_id:t._id,oldprice:t.price.incomingprice,oldpriceuzs:t.price.incomingpriceuzs,product:{...t.productdata,_id:t._id},pieces:"",unitprice:"",unitpriceuzs:"",totalprice:"",totalpriceuzs:"",user:v._id,unit:t.unit,sellingprice:t.price.sellingprice,sellingpriceuzs:t.price.sellingpriceuzs,tradeprice:t.price.tradeprice,tradepriceuzs:t.price.tradepriceuzs,procient:"",supplier:{...T}}),ve("registerincomingbody"),Ne(!0)},De=(e,t,a)=>{const l=Number(e.target.value),n=e=>t===e,s=!a&&{...M}||{...(0,p.filter)([...A],(e=>e._id===a))[0]},i="USD"===N?l:(0,u.Ch)(l,y),r="UZS"===N?l:(0,u.IQ)(l,y),o=e=>"UZS"===N?Math.round(e/100*l)+e:Math.round(e/100*l*1e3)/1e3+e;var c;n("pieces")&&((c=s).pieces=l,c.totalprice=(0,u.tE)(l*c.unitprice),c.totalpriceuzs=(0,u.Df)(l*c.unitpriceuzs)),n("unitprice")&&(e=>{e.unitprice=i,e.unitpriceuzs=r,e.totalprice=(0,u.tE)(i*e.pieces),e.totalpriceuzs=(0,u.Df)(r*e.pieces)})(s),n("sellingprice")&&(e=>{e.sellingprice=i,e.sellingpriceuzs=r,e.procient=0})(s),n("procient")&&(e=>{e.procient=l,e.sellingprice=o(e.unitprice),e.sellingpriceuzs=o(e.unitpriceuzs)})(s),n("tradeprice")&&(e=>{e.tradeprice=i,e.tradepriceuzs=r})(s),a?E([...(0,p.map)([...A],(e=>e._id===a?s:e))]):O(s)},_e=t=>Number(t.pieces)<1?(0,h.lY)(e("Mahsulot sonini kiriting!"),"warning"):Number(t.unitprice)<.01?(0,h.lY)(e("Mahsulot qabul narxini kiriting!"),"warning"):Number(t.sellingprice)<Number(t.unitprice)&&(0,h.lY)(e("Sotish narxi olish narxidan kam bo'lmasin"),"warning"),Pe=()=>{w.incomings&&w.incomings.length>0&&Q.length>0&&(t((0,r.vf)({_id:w._id})),t((0,r.$b)()))},qe=[{title:e("\u2116"),styles:"w-[8%]"},{title:e("Kodi"),styles:"w-[10%]"},{title:e("Nomi")},{title:e("Soni"),styles:"w-[10%]"},{title:e("Narxi"),styles:"w-[10%]"},{title:e("Avvalgi narxi"),styles:"w-[15%]"},{title:e("Jami"),styles:"w-[15%]"},{title:e("Sotish"),styles:"w-[15%]"},{title:e("Optom narx"),styles:"w-[15%]"},{title:"",styles:"w-[5%]"}],Te=()=>{Ne(!ye),R(""),setTimeout((()=>{ve("")}),500)},Ie=(e,t)=>{const a=Math.abs(ue),l=Math.abs(me);if("USD"===N)if("cash"===t){const t=Number(e)+Number(K)+Number(ae),n=Number((0,u.IQ)(e,Ce))+Number(ee)+Number(ne);t<=a?(H(e),V((0,u.IQ)(e,Ce)),re((0,u.tE)(a-t)),ce((0,u.Df)(l-n)),be(t),xe(n)):(0,h.OC)()}else if("card"===t){const t=Number(e)+Number(Z)+Number(ae),n=Number(J)+Number((0,u.IQ)(e,Ce))+Number(ne);t<=a?(X(e),te((0,u.IQ)(e,Ce)),re((0,u.tE)(a-t)),ce((0,u.Df)(l-n)),be(t),xe(n)):(0,h.OC)()}else{const t=Number(e)+Number(Z)+Number(K),n=Number(J)+Number(ee)+Number((0,u.IQ)(e,Ce));t<=a?(le(e),se((0,u.IQ)(e,Ce)),re((0,u.tE)(a-t)),ce((0,u.Df)(l-n)),be(t),xe(n)):(0,h.OC)()}else if("cash"===t){const t=Number(e)+Number(ee)+Number(ne),n=Number((0,u.Ch)(e,Ce))+Number(K)+Number(ae);t<=l?(V(e),H((0,u.Ch)(e,Ce)),re((0,u.tE)(a-n)),ce((0,u.Df)(l-t)),be(n),xe(t)):(0,h.OC)()}else if("card"===t){const t=Number(e)+Number(J)+Number(ne),n=Number(Z)+Number((0,u.Ch)(e,Ce))+Number(ae);t<=l?(X((0,u.Ch)(e,Ce)),te(e),re((0,u.tE)(a-n)),ce((0,u.Df)(l-t)),be((0,u.Ch)(t,Ce)),xe(t)):(0,h.OC)()}else{const t=Number(e)+Number(J)+Number(ee),n=Number(Z)+Number(K)+Number((0,u.Ch)(e,Ce));t<=l?(le((0,u.Ch)(e,Ce)),se(e),re((0,u.tE)(a-n)),ce((0,u.Df)(l-t)),be(n),xe(t)):(0,h.OC)()}},Ae=()=>{if(!z){const e=(0,p.map)(A,(e=>{let t={...e};return delete t._id,delete t.procient,t}));t((0,r.Iv)({products:[...e],user:v._id,payment:{totalprice:Number(ue),totalpriceuzs:Number(me),type:L,cash:Number(Z),cashuzs:Number(J),card:Number(K),carduzs:Number(ee),transfer:Number(ae),transferuzs:Number(ne)}})).then((e=>{let{error:l}=e;Pe(),t((0,r.d$)()),!l&&a("/maxsulotlar/qabul/qabullar")}))}};return(0,l.useEffect)((()=>{C.length<1&&t((0,r.Jr)(f)),C.length>0&&(e=>{const t=(0,p.map)(e,(e=>({label:e.name,value:e._id})));_(t)})(C)}),[t,f,C]),(0,l.useEffect)((()=>{j.length<1&&t((0,r.d$)({market:f})),j.length>0&&(e=>{const t=(0,p.map)(e,(e=>({label:e.productdata.code+" - "+e.productdata.name,value:e._id})));q(t)})(j)}),[t,f,j]),(0,l.useEffect)((()=>{k&&(E([]),t((0,r.g5)()))}),[t,k]),(0,l.useEffect)((()=>{S&&(E([]),t((0,r._O)()))}),[t,S]),(0,l.useEffect)((()=>{Object.keys(w).length>0&&(I(w.supplier),E(w.incomings),U(w.incomings),B({label:w.supplier.name,value:w.supplier._id}))}),[w,t]),(0,l.useEffect)((()=>()=>{t((0,r.$b)()),E([]),U([]),I({})}),[t]),(0,x.jsxs)(x.Fragment,{children:[z&&(0,x.jsx)("div",{className:"absolute top-0 left-0 z-30",children:(0,x.jsx)(g.A,{})}),(0,x.jsxs)("div",{className:"relative grow overflow-auto",children:[(0,x.jsx)(b.A,{returned:!0,type:L,active:$,togglePaymentModal:e=>{G(e?!$:e),W("cash"),re(0),ce(0)},changePaymentType:e=>{if(L!==e)switch(W(e),e){case"cash":H(ue),V(me),X(""),te(""),le(""),se(""),be(ue),xe(me),re(0),ce(0);break;case"card":X(ue),te(me),H(""),V(""),le(""),se(""),be(ue),xe(me),re(0),ce(0);break;case"transfer":le(ue),se(me),H(""),V(""),X(""),te(""),be(ue),xe(me),re(0),ce(0);break;default:H(""),V(""),X(""),te(""),le(""),se(""),be(0),xe(0),re(ue),ce(me)}},onChange:(e,t)=>{Ie(e,t)},client:"",allPayment:"USD"===N?ue:me,card:"USD"===N?K:ee,cash:"USD"===N?Z:J,debt:"USD"===N?ie:oe,hasDiscount:!1,transfer:"USD"===N?ae:ne,paid:"USD"===N?he:ge,handleClickPay:()=>{null===we&&(we=window.setTimeout((()=>{we=null,ve("complete"),Ne(!0)}),300))},changeComment:e=>{Se(e)},saleComment:ke,onDoubleClick:()=>{z||(window.clearTimeout(we),we=null,Ae())}}),(0,x.jsxs)("div",{className:"flex items-center mainPadding",children:[(0,x.jsx)("div",{className:"w-full pr-[1.25rem] border-r border-blue-100",children:(0,x.jsx)(s.A,{options:D,onSelect:e=>{B({label:e.label,value:e.value}),I(...(0,p.filter)([...C],(t=>t._id===e.value))),A.length>0&&E([...(0,p.map)([...A],(t=>({...t,supplier:{_id:e.value,name:e.label}})))])},value:Y,placeholder:e("Yetkazib beruvchi")})}),(0,x.jsx)("div",{className:"w-full pl-[1.25rem]",children:(0,x.jsx)(s.A,{value:F,options:P,onSelect:t=>{R({label:t.label,value:t.value}),A.some((e=>e._id===t.value&&e.supplier._id===T._id))?(0,h.lY)(e("Diqqat mahsulot ro'yxatda mavjud"),"warning"):ze(t.value)},isDisabled:!T._id,placeholder:e("Maxsulotlar")})})]}),(0,x.jsxs)("p",{className:"text-[1.25rem] text-blue-900 mainPadding",children:[e("Yetkazib beruvchi"),": ",T.name]}),(0,x.jsxs)("div",{className:"".concat(A.length>0?"tableContainerPadding":"hidden"),children:[(0,x.jsx)(i.A,{page:"registerincoming",headers:qe,data:A,currency:N,changeHandler:De,Delete:e=>{const a=(0,p.filter)(A,(t=>t._id!==e._id));E(a);const l=(0,p.filter)(Q,(t=>t._id!==e._id));U(l),0===l.length&&t((0,r.$b)())}}),(0,x.jsxs)("div",{className:"flex items-center justify-end gap-[0.625rem] pt-[1.25rem]",children:[(0,x.jsx)(o.g,{text:e("Saqlash"),onClick:()=>{Pe(),t((0,r.hd)({market:f,temporaryincoming:{supplier:T,incomings:A}})).then((t=>{let{error:l}=t;l||(B({label:e("Yetkazib beruvchi"),value:""}),R({label:e("Mahsulotlar"),value:""}),a("/maxsulotlar/qabul/saqlanganlar"))}))}}),(0,x.jsx)(o.Z,{text:e("Tasdiqlash"),onClick:()=>{if(!(t=>{for(const a of t){if(a.pieces<1)return(0,h.lY)(e("Mahsulot sonini kiriting!"),"warning");if(a.unitprice<.01)return(0,h.lY)(e("Mahsulot qabul narxini kiriting!"),"warning");if(a.sellingprice<a.unitprice)return(0,h.lY)(e("Sotish narxi olish narxidan kam bo'lmasin"),"warning")}return!1})((0,p.map)(A,(e=>{let t={...e};return delete t._id,delete t.procient,t}))))if(A.length){const e=(0,u.D$)(A,"totalprice"),t=(0,u.D$)(A,"totalpriceuzs");de(e),pe(t),H(e),V(t),be(e),xe(t),G(!0),je((0,u.Hl)(t,e))}else y?(0,h.$5)():(0,h.QC)()}})]})]}),(0,x.jsx)(c.A,{isOpen:ye,body:fe,headerText:e("To'lovni amalga oshirishni tasdiqlaysizmi ?"),title:e("To'lovni amalga oshirgach bu ma`lumotlarni o`zgaritirb bo`lmaydi !"),product:M,toggleModal:Te,changeProduct:De,approveFunction:"complete"===fe?Ae:()=>{_e(M)||(E([M,...A]),Te())},currency:N})]})]})}}}]);
//# sourceMappingURL=3191.26a6d77f.chunk.js.map