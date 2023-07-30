const e=document.querySelector(".page"),t={},n=(e,n)=>{t[e]=n},o="<div>THIS IS THE HOME PAGE VIEW</div>",a="<div>this is the about page view</div>";(e=>{let t=document.querySelector("body"),n=`
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    <div class="page">
    ${e}
    </div>`;t.innerHTML=n})(o),n("",o),n("about",a),window.addEventListener("popstate",()=>{let n=window.location.hash.substring(1);e.innerHTML=t[n]});const i=document.querySelector(".home"),c=document.querySelector(".about"),d=document.querySelector(".page");i.addEventListener("click",()=>{d.innerHTML=o}),c.addEventListener("click",()=>{d.innerHTML=a});
//# sourceMappingURL=index.a12f50a6.js.map
