var n,t,e,o,a,c,i,s,u,r,d,f,l;e=function(n){return document.querySelector(n)},o=function(n,t){n.innerHTML=t},a=function(n,t,e){n.addEventListener(t,e)},c=function(n,t){return a(n,"click",t)},i={},s=function(n,t){i[n]=t},u="<div>THIS IS THE HOME PAGE VIEW</div>",r="<div>this is the about page view</div>",n=document.querySelector("body"),t='\n    <a href="#" class="home">HOME</a>\n    <a href="#about" class="about">ABOUT</a>\n    '.concat("<h".concat(1,' class="').concat("U4fuBG_header",'">').concat("This template is set up to use ES6 modules and scss in css modules format  to use a component focused approach to build a static web app for github pages. Microverse student linter configurations are in place.","</").concat(1,">"),'\n    <div class="page">\n    ').concat(u,"\n    </div>"),n.innerHTML=t,s("",u),s("about",r),window.addEventListener("popstate",function(){o(void 0,i[window.location.hash.substring(1)])}),d=e(".home"),f=e(".about"),l=e(".page"),c(d,function(){return o(l,u)}),c(f,function(){return o(l,r)});
//# sourceMappingURL=index.acf54c05.js.map