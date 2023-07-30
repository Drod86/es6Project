var e=(e,t)=>`<h${e} class="CIdEQa_header">${t}</${e}>`;const t=document.querySelector(".page"),a={},o=(e,t)=>{a[e]=t},n="<div>THIS IS THE HOME PAGE VIEW</div>",r="<div>this is the about page view</div>";(t=>{let a=document.querySelector("body"),o=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${e(1,"This better work!")}
    <div class="page">
    ${t}
    </div>`;a.innerHTML=o})(n),o("",n),o("about",r),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);t.innerHTML=a[e]});const i=document.querySelector(".home"),d=document.querySelector(".about"),c=document.querySelector(".page");i.addEventListener("click",()=>{c.innerHTML=n}),d.addEventListener("click",()=>{c.innerHTML=r});
//# sourceMappingURL=index.4f20f389.js.map
