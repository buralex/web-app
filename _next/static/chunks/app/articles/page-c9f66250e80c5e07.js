(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{1530:function(e,t,a){Promise.resolve().then(a.bind(a,7504))},7504:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7437),r=a(9376),s=a(2265),i=a(3464);let c=i.Z.create({baseURL:"https://hn.algolia.com/api/v1"}),l=(e,t)=>c.get("/search",{params:e,signal:t});var o=a(8661);let d=()=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16",children:[(0,n.jsx)("path",{fillRule:"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"}),(0,n.jsx)("path",{fillRule:"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"})]});var u=a(1941),h=a(3976),_=a(2941),x=a.n(_);let v=e=>{let{article:t}=e,[a,i]=(0,s.useState)(!1),c=(0,r.useRouter)(),l=(0,r.usePathname)(),_=(0,r.useSearchParams)(),v=(0,s.useCallback)(e=>{let t=_.get("filters"),a="NOT objectID:".concat(e),n=new URLSearchParams(_);n.set("page","1"),n.set("filters",t?"".concat(t," AND ").concat(a):a),c.push("".concat(l,"?").concat(n.toString()))},[l,c,_]),f=(0,s.useCallback)((e,t)=>{let a=_.get("tags");if((null==a?void 0:a.split(h.Yd)[1])!==e){t.stopPropagation();let a=new URLSearchParams(_);a.set("page","1"),a.set("tags","".concat(h.Yd).concat(e)),c.push("".concat(l,"?").concat(a.toString()))}},[l,c,_]),m=Number(t.objectID)%2==0;return(0,n.jsxs)("li",{className:x().box,onClick:e=>{if(!a)return i(!0);let t=e.target;(0,o.YM)(t,x().field)&&i(!1)},children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:(0,o.UX)([x().field,x().status,m&&x().active]),children:m?"active":"not active"})}),(0,n.jsxs)("div",{className:x().expandable,children:[(0,n.jsxs)("div",{className:x().header,children:[(0,n.jsxs)("div",{className:x().info,children:[(0,n.jsx)("div",{className:"".concat(x().field," ").concat(x().author),onClick:e=>f(t.author,e),children:t.author}),!a&&t.title&&(0,n.jsx)("div",{className:x().field,children:t.title})]}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"".concat(x().field," ").concat(x().date),children:new Date(t.created_at).toLocaleString("en-US")})})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"d-flex",children:(0,n.jsx)("div",{className:x().info,children:t.title&&(0,n.jsxs)("div",{className:x().field,children:[(0,n.jsx)(d,{}),"\xa0",(0,n.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:t.title})]})})}),(0,n.jsxs)("div",{className:x().buttons,children:[(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(u.z,{onClick:()=>{},children:"Action"}),(0,n.jsx)(u.z,{onClick:()=>{},children:"Action"})]}),(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(u.z,{onClick:()=>{},children:"Action"}),(0,n.jsx)(u.z,{onClick:()=>{},children:"Action"}),(0,n.jsx)(u.z,{onClick:()=>{},children:"Action"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(u.z,{variant:"danger",onClick:()=>v(t.objectID),children:"Delete"})})]})]})]})]})};var f=a(7740),m=a.n(f);let g=()=>(0,n.jsx)("div",{className:m().wrapper,children:(0,n.jsxs)("div",{className:m().bouncingLoader,children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})});var j=a(5935);function p(){let{setTotalPages:e}=(0,j.q)(),t=(0,r.useSearchParams)(),[a,c]=(0,s.useState)([]),[d,u]=(0,s.useState)(""),[_,x]=(0,s.useState)(!0),{currentPage:f,itemsPerPage:m}=(0,o.ue)(t);return((0,s.useEffect)(()=>{let a=new AbortController,n=a.signal;return x(!0),(async()=>{try{let a=await l({tags:t.get("tags")||h.uz,hitsPerPage:m,page:f-1,filters:t.get("filters")},n);c(a.data.hits),e(Math.ceil(a.data.nbHits/m)),u(""),x(!1)}catch(e){i.Z.isCancel(e)||(console.error(e),u((0,o.dr)(e)),x(!1))}})(),()=>{a.abort()}},[f,m,t,e]),_)?(0,n.jsx)("div",{className:"p-5 text-center",children:(0,n.jsx)(g,{})}):d?(0,n.jsx)("div",{className:"p-5 text-center",children:d}):0===a.length?(0,n.jsx)("div",{className:"p-5 text-center",children:"No articles"}):(0,n.jsx)("div",{className:"page",children:(0,n.jsx)("ul",{className:"list",children:a.map(e=>(0,n.jsx)(v,{article:e},e.objectID))})})}},5935:function(e,t,a){"use strict";a.d(t,{T:function(){return i},q:function(){return c}});var n=a(7437),r=a(2265);let s=(0,r.createContext)({totalPages:0,setTotalPages:()=>{}}),i=e=>{let{children:t}=e,[a,i]=(0,r.useState)(0);return(0,n.jsx)(s.Provider,{value:{totalPages:a,setTotalPages:i},children:t})},c=()=>(0,r.useContext)(s)},1941:function(e,t,a){"use strict";a.d(t,{z:function(){return i}});var n=a(7437),r=a(3596),s=a.n(r);let i=e=>{let{variant:t="primary",size:a="medium",onClick:r,disabled:i,children:c,className:l}=e,o=s()[t],d=s()[a];return(0,n.jsx)("button",{className:"".concat(s().button," ").concat(o," ").concat(d," ").concat(l||""),onClick:r,disabled:i,children:c})}},3976:function(e,t,a){"use strict";a.d(t,{L1:function(){return n},Yd:function(){return s},bV:function(){return i},uz:function(){return r}});let n={articles:"articles",helpCenter:"help-center",home:""},r="front_page",s="author_",i="Some server error, please try later."},8661:function(e,t,a){"use strict";a.d(t,{UX:function(){return s},YM:function(){return c},dr:function(){return l},ue:function(){return i}});var n=a(3976),r=a(3464);let s=e=>e.filter(Boolean).join(" "),i=e=>({currentPage:Number(e.get("page"))||1,itemsPerPage:Number(e.get("hitsPerPage"))||10}),c=(e,t)=>{var a;return(null===(a=e.firstChild)||void 0===a?void 0:a.nodeType)!==Node.TEXT_NODE&&!["svg","path"].includes(e.tagName.toLowerCase())&&!String(null==e?void 0:e.className).includes(t)},l=e=>{if(r.Z.isAxiosError(e)){var t,a;return(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message)||n.bV}return n.bV}},2941:function(e){e.exports={box:"Card_box__UNy0t",field:"Card_field__SZj3U",status:"Card_status__x5JO8",active:"Card_active__I8v_o",expandable:"Card_expandable__3m8gB",header:"Card_header__JYQR0",info:"Card_info__5SgNc",date:"Card_date__0CSPR",author:"Card_author__P_0T3",buttons:"Card_buttons__0mu4x"}},3596:function(e){e.exports={button:"Button_button__exqP_",primary:"Button_primary__DEC_1",secondary:"Button_secondary__9ex2D",info:"Button_info__bChu8",danger:"Button_danger__MnjLX",small:"Button_small__dvm_S",medium:"Button_medium__j0vFR",large:"Button_large__C72gW"}},7740:function(e){e.exports={wrapper:"Loading_wrapper__74_SS",bouncingLoader:"Loading_bouncingLoader__q3nna"}}},function(e){e.O(0,[664,301,971,117,744],function(){return e(e.s=1530)}),_N_E=e.O()}]);