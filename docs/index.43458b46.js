const e=e=>document.querySelector(e),t=(e,t)=>{e.innerHTML=t},a=(e,t,a)=>{e.addEventListener(t,a)},o=(e,t)=>a(e,"click",t);var i=(e,t)=>`<h${e} class="CIdEQa_header">${t}</${e}>`;const n=document.querySelector(".page"),s={},d=(e,t)=>{s[e]=t},r="<div>THIS IS THE HOME PAGE VIEW</div>",c="<div>this is the about page view</div>";(e=>{let t=document.querySelector("body"),a=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${i(1,"This better work!")}
    <div class="page">
    ${e}
    </div>`;t.innerHTML=a})(r),d("",r),d("about",c),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);n.innerHTML=s[e]});const u=e(".home"),h=e(".about"),l=e(".page");o(u,()=>t(l,r)),o(h,()=>t(l,c));
//# sourceMappingURL=index.43458b46.js.map
