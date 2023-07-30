const e={},t=(t,n)=>e[t]=n,n="<div>THIS IS THE HOME PAGE VIEW</div>",o="<div>this is the about page view</div>";(e=>{let t=document.querySelector("body"),n=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    <div class="page">
    ${e}
    </div>`;t.innerHTML=n})(n);const i=document.querySelector(".home"),a=document.querySelector(".about"),d=document.querySelector(".page");i.addEventListener("click",()=>d.innerHTML=n),a.addEventListener("click",()=>d.innerHTML=o),t("",n),t("about",o),window.addEventListener("popstate",()=>{let t=window.location.hash.substring(1);d.innerHTML=e[t]});
//# sourceMappingURL=index.e5b7fa68.js.map
