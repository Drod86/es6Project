const e=e=>document.querySelector(e),s=(e,s)=>{e.innerHTML=s},t=(e,s,t)=>{e.addEventListener(s,t)},a=(e,s)=>t(e,"click",s);var o=(e,s)=>`<h${e} class="U4fuBG_header">${s}</${e}>`;const i={},n=(e,s)=>{i[e]=s},c="<div>THIS IS THE HOME PAGE VIEW</div>",d="<div>this is the about page view</div>";(t=>{let a=e("body"),i=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${o(3,"This template is set up to use ES6 modules and scss in css modules format  to use a component focused approach to build a static web app for github pages. Microverse student linter configurations are in place.")}
    <div class="page">
    ${t}
    </div>`;s(a,i)})(c);const u=e(".page");n("",c),n("about",d),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);s(u,i[e])});const r=e(".home"),l=e(".about");a(r,()=>s(u,c)),a(l,()=>s(u,d));
//# sourceMappingURL=index.408e74e0.js.map
