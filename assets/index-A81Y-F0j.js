import{d as D,e as E,r as C,f as F,g as h,o as n,h as o,a as s,F as g,i as z,j as c,k as a,n as S,t as i,l as B,c as L,w,m as V,p as T,q as W,s as Y,v as G,b as $,x as k,u as O,_ as j}from"./app-s8jKEiBj.js";const q={flex:"",pointer:"","flex-wrap":""},H=["onClick"],I={key:0,py2:"",op50:""},U={"text-8em":"","color-transparent":"",absolute:"","left--3rem":"","top--2rem":"","font-bold":"","text-stroke-2":"","text-stroke-hex-aaa":"",op17:""},A={class:"no-underline",flex:"~ col md:row gap-2 md:items-center"},J={class:"title text-lg leading-1.2em",flex:"~ gap-2 wrap"},K={key:0,"align-middle":"","flex-none":"",class:"text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--12 mr2 my-auto hidden md:block"},M={"align-middle":""},Q={flex:"~ gap-2 items-center"},X={key:0,"align-middle":"",op50:"","flex-none":"","text-xs":"","ml--1":"","mt--1":"","i-carbon-arrow-up-right":"",title:"External"},Z={key:1,"align-middle":"",op50:"","flex-none":"","i-ri:group-2-line":"",title:"In person"},ee={key:2,"align-middle":"",op50:"","flex-none":"","i-ri:film-line":"",title:"Provided in video"},te={key:3,"align-middle":"",op50:"","flex-none":"","i-ri:radio-line":"",title:"Provided in radio"},ne={"text-sm":"",op50:"","ws-nowrap":""},oe={key:4,"text-sm":"",op40:"","ws-nowrap":""},ae={key:5,"text-sm":"",op40:"","ws-nowrap":""},se={key:6,"text-sm":"",op40:"","ws-nowrap":"","md:hidden":""},re={key:7,"align-middle":"","flex-none":"",class:"text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"},le={key:8,"text-sm":"",op40:"","ws-nowrap":"","text-green":""},ie={key:0,op50:"","text-sm":"",hidden:"","mt--2":"","md:block":""},ce=D({__name:"ListPosts",props:{type:{},posts:{},extra:{}},setup(f){const d=f,p=E().getRoutes().filter(e=>e.path.startsWith("/posts")&&e.meta.frontmatter.date&&!e.meta.frontmatter.draft).filter(e=>!e.path.endsWith(".html")&&(e.meta.frontmatter.type||"blog").split("+").includes(d.type)).map(e=>({path:e.meta.frontmatter.redirect||e.path,title:e.meta.frontmatter.title,date:e.meta.frontmatter.date,lang:e.meta.frontmatter.lang,duration:e.meta.frontmatter.duration,recording:e.meta.frontmatter.recording,upcoming:e.meta.frontmatter.upcoming,redirect:e.meta.frontmatter.redirect,place:e.meta.frontmatter.place,tag:e.meta.frontmatter.tag}));console.log(p);const m=C([]),l=C("");p.forEach(e=>{m.value.includes(e.tag)||m.value.push(e.tag)});function x(e){e===l.value?l.value="":l.value=e}console.log(m.value);const _=F(()=>[...d.posts||p,...d.extra||[]].sort((e,r)=>+new Date(r.date)-+new Date(e.date)).filter(e=>!h.value||e.lang!=="zh").filter(e=>l.value!==""?e.tag===l.value:e)),y=e=>new Date(e).getFullYear(),v=e=>e&&new Date(e)>new Date,N=(e,r)=>e&&r&&y(e)===y(r);function P(e,r){return v(e.date)===v(r==null?void 0:r.date)&&N(e.date,r==null?void 0:r.date)}function R(e){return v(e.date)?"Upcoming":y(e.date)}return(e,r)=>(n(),o(g,null,[s("div",q,[(n(!0),o(g,null,z(c(m),t=>(n(),o("div",{class:S(["text-xs bg-zinc:15 rounded px-1 py-0.5 cursor-pointer mr-[10px]",c(l)===t?"text-green-600":"text-zinc5"]),onClick:u=>x(t)},i(t),11,H))),256))]),s("ul",null,[c(_).length?a("",!0):(n(),o("div",I," { nothing here yet } ")),(n(!0),o(g,null,z(c(_),(t,u)=>(n(),o(g,{key:t.path},[P(t,c(_)[u-1])?a("",!0):(n(),o("div",{key:0,"select-none":"",relative:"",h20:"","pointer-events-none":"","slide-enter":"",style:B({"--enter-stage":u-2,"--enter-step":"60ms"})},[s("span",U,i(R(t)),1)],4)),s("div",{class:"slide-enter",style:B({"--enter-stage":u,"--enter-step":"60ms"})},[(n(),L(W(t.path.includes("://")?"a":"RouterLink"),T(t.path.includes("://")?{href:t.path,target:"_blank",rel:"noopener noreferrer"}:{to:t.path},{class:"item block font-normal mb-6 mt-2 no-underline"}),{default:w(()=>[s("li",A,[s("div",J,[t.lang==="zh"?(n(),o("span",K,"中文")):a("",!0),s("span",M,i(t.title),1)]),s("div",Q,[t.redirect?(n(),o("span",X)):a("",!0),t.inperson?(n(),o("span",Z)):a("",!0),t.recording||t.video?(n(),o("span",ee)):a("",!0),t.radio?(n(),o("span",te)):a("",!0),s("span",ne,i(c(V)(t.date,!0)),1),t.duration?(n(),o("span",oe,"· "+i(t.duration),1)):a("",!0),t.platform?(n(),o("span",ae,"· "+i(t.platform),1)):a("",!0),t.place?(n(),o("span",se,"· "+i(t.place),1)):a("",!0),t.lang==="zh"?(n(),o("span",re,"中文")):a("",!0),t.tag?(n(),o("span",le,i(t.tag),1)):a("",!0)])]),t.place?(n(),o("div",ie,i(t.place),1)):a("",!0)]),_:2},1040))],4)],64))),128))])],64))}}),de={class:"prose m-auto mb-8 select-none animate-none! op100!"},pe=["i"],me={"mb-0":"",flex:"~ col gap-1 sm:row sm:gap-3 wrap","text-3xl":""},_e="opacity-20 hover:opacity-50",ue="opacity-100 underline",ge=D({__name:"SubNav",setup(f){const d=Y();return(b,p)=>{const m=G("RouterLink");return n(),o("div",de,[s("button",{flex:"~ gap1","items-center":"",mb2:"",op30:"","text-sm":"",onClick:p[0]||(p[0]=l=>h.value=!c(h))},[s("div",{i:c(h)?"carbon-checkbox-checked":"carbon-checkbox"},null,8,pe),$(" English Only ")]),s("div",me,[k(m,{to:"/posts",class:S(["!border-none",c(d).path==="/posts"?ue:_e])},{default:w(()=>[$(" Blog ")]),_:1},8,["class"])])])}}}),he={class:"prose m-auto slide-enter-content"},xe={__name:"index",setup(f){const d={title:"Blog - Carlos",display:"",plum:!0,meta:[{property:"og:title",content:"Blog - Carlos"},{name:"twitter:title",content:"Blog - Carlos"}]};return O({title:"Blog - Carlos",meta:[{property:"og:title",content:"Blog - Carlos"},{name:"twitter:title",content:"Blog - Carlos"}]}),(p,m)=>{const l=ge,x=ce,_=j;return n(),L(_,{frontmatter:d},{default:w(()=>[s("div",he,[k(l),k(x,{"only-date":"",type:"blog"})])]),_:1})}}};export{xe as default};
