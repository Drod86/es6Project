const e=e=>document.querySelector(e),t=(e,t)=>{e.innerHTML=t},a=(e,t,a)=>{e.addEventListener(t,a)},o=(e,t)=>a(e,"click",t);var i=(e,t)=>`<h${e} class="CIdEQa_header">${t}</${e}>`;const s={},d=(e,t)=>{s[e]=t},n="<div>THIS IS THE HOME PAGE VIEW</div>",r="<div>this is the about page view</div>";(e=>{let t=document.querySelector("body"),a=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${i(1,"This better work!")}
    <div class="page">
    ${e}
    </div>`;t.innerHTML=a})(n),d("",n),d("about",r),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);t(void 0,s[e])});const c=e(".home"),h=e(".about"),v=e(".page");o(c,()=>t(v,n)),o(h,()=>t(v,r));
//# sourceMappingURL=index.84875545.js.map
