import{d as C,e as S,f as $,g as u,o as n,h as o,i as c,j as s,F as v,r as L,n as w,a as r,t as i,c as B,w as y,k as N,m as P,l as R,p as F,q as V,b,s as x,v as E,u as W,_ as Y}from"./app-DMbD2_df.js";const G={key:0,py2:"",op50:""},O={"text-8em":"","color-transparent":"",absolute:"","left--3rem":"","top--2rem":"","font-bold":"","text-stroke-2":"","text-stroke-hex-aaa":"",op10:""},j={class:"no-underline",flex:"~ col md:row gap-2 md:items-center"},q={class:"title text-lg leading-1.2em",flex:"~ gap-2 wrap"},H={key:0,"align-middle":"","flex-none":"",class:"text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--12 mr2 my-auto hidden md:block"},I={"align-middle":""},T={flex:"~ gap-2 items-center"},U={key:0,"align-middle":"",op50:"","flex-none":"","text-xs":"","ml--1":"","mt--1":"","i-carbon-arrow-up-right":"",title:"External"},A={key:1,"align-middle":"",op50:"","flex-none":"","i-ri:group-2-line":"",title:"In person"},J={key:2,"align-middle":"",op50:"","flex-none":"","i-ri:film-line":"",title:"Provided in video"},K={key:3,"align-middle":"",op50:"","flex-none":"","i-ri:radio-line":"",title:"Provided in radio"},M={"text-sm":"",op50:"","ws-nowrap":""},Q={key:4,"text-sm":"",op40:"","ws-nowrap":""},X={key:5,"text-sm":"",op40:"","ws-nowrap":""},Z={key:6,"text-sm":"",op40:"","ws-nowrap":"","md:hidden":""},tt={key:7,"align-middle":"","flex-none":"",class:"text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"},et={key:0,op50:"","text-sm":"",hidden:"","mt--2":"","md:block":""},nt=C({__name:"ListPosts",props:{type:{},posts:{},extra:{}},setup(h){const l=h,m=S().getRoutes().filter(t=>t.path.startsWith("/posts")&&t.meta.frontmatter.date&&!t.meta.frontmatter.draft).filter(t=>!t.path.endsWith(".html")&&(t.meta.frontmatter.type||"blog").split("+").includes(l.type)).map(t=>({path:t.meta.frontmatter.redirect||t.path,title:t.meta.frontmatter.title,date:t.meta.frontmatter.date,lang:t.meta.frontmatter.lang,duration:t.meta.frontmatter.duration,recording:t.meta.frontmatter.recording,upcoming:t.meta.frontmatter.upcoming,redirect:t.meta.frontmatter.redirect,place:t.meta.frontmatter.place})),d=$(()=>[...l.posts||m,...l.extra||[]].sort((t,a)=>+new Date(a.date)-+new Date(t.date)).filter(t=>!u.value||t.lang!=="zh")),p=t=>new Date(t).getFullYear(),_=t=>t&&new Date(t)>new Date,g=(t,a)=>t&&a&&p(t)===p(a);function z(t,a){return _(t.date)===_(a==null?void 0:a.date)&&g(t.date,a==null?void 0:a.date)}function D(t){return _(t.date)?"Upcoming":p(t.date)}return(t,a)=>(n(),o("ul",null,[c(d).length?s("",!0):(n(),o("div",G," { nothing here yet } ")),(n(!0),o(v,null,L(c(d),(e,f)=>(n(),o(v,{key:e.path},[z(e,c(d)[f-1])?s("",!0):(n(),o("div",{key:0,"select-none":"",relative:"",h20:"","pointer-events-none":"","slide-enter":"",style:w({"--enter-stage":f-2,"--enter-step":"60ms"})},[r("span",O,i(D(e)),1)],4)),r("div",{class:"slide-enter",style:w({"--enter-stage":f,"--enter-step":"60ms"})},[(n(),B(R(e.path.includes("://")?"a":"RouterLink"),P(e.path.includes("://")?{href:e.path,target:"_blank",rel:"noopener noreferrer"}:{to:e.path},{class:"item block font-normal mb-6 mt-2 no-underline"}),{default:y(()=>[r("li",j,[r("div",q,[e.lang==="zh"?(n(),o("span",H,"中文")):s("",!0),r("span",I,i(e.title),1)]),r("div",T,[e.redirect?(n(),o("span",U)):s("",!0),e.inperson?(n(),o("span",A)):s("",!0),e.recording||e.video?(n(),o("span",J)):s("",!0),e.radio?(n(),o("span",K)):s("",!0),r("span",M,i(c(N)(e.date,!0)),1),e.duration?(n(),o("span",Q,"· "+i(e.duration),1)):s("",!0),e.platform?(n(),o("span",X,"· "+i(e.platform),1)):s("",!0),e.place?(n(),o("span",Z,"· "+i(e.place),1)):s("",!0),e.lang==="zh"?(n(),o("span",tt,"中文")):s("",!0)])]),e.place?(n(),o("div",et,i(e.place),1)):s("",!0)]),_:2},1040))],4)],64))),128))]))}}),ot={class:"prose m-auto mb-8 select-none animate-none! op100!"},at=["i"],st={"mb-0":"",flex:"~ col gap-1 sm:row sm:gap-3 wrap","text-3xl":""},rt="opacity-20 hover:opacity-50",lt="opacity-100 underline",it=C({__name:"SubNav",setup(h){const l=F();return(k,m)=>{const d=V("RouterLink");return n(),o("div",ot,[r("button",{flex:"~ gap1","items-center":"",mb2:"",op30:"","text-sm":"",onClick:m[0]||(m[0]=p=>u.value=!c(u))},[r("div",{i:c(u)?"carbon-checkbox-checked":"carbon-checkbox"},null,8,at),b(" English Only ")]),r("div",st,[x(d,{to:"/posts",class:E(["!border-none",c(l).path==="/posts"?lt:rt])},{default:y(()=>[b(" Blog-List ")]),_:1},8,["class"])])])}}}),ct={class:"prose m-auto slide-enter-content"},pt={__name:"index",setup(h){const l={title:"Blog - Carlos",display:"",plum:!0,meta:[{property:"og:title",content:"Blog - Carlos"},{name:"twitter:title",content:"Blog - Carlos"}]};return W({title:"Blog - Carlos",meta:[{property:"og:title",content:"Blog - Carlos"},{name:"twitter:title",content:"Blog - Carlos"}]}),(m,d)=>{const p=it,_=nt,g=Y;return n(),B(g,{frontmatter:l},{default:y(()=>[r("div",ct,[x(p),x(_,{"only-date":"",type:"blog"})])]),_:1})}}};export{pt as default};
