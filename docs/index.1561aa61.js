var n,t,e,o,a,c,i,s,u,r,d;n=function(n){return document.querySelector(n)},t=function(n,t){n.innerHTML=t},e=function(n,t,e){n.addEventListener(t,e)},o=function(n,t){return e(n,"click",t)},a={},c=function(n,t){a[n]=t},i="<div>THIS IS THE HOME PAGE VIEW</div>",s="<div>this is the about page view</div>",t(n("body"),'\n    <a href="#" class="home">HOME</a>\n    <a href="#about" class="about">ABOUT</a>\n    '.concat("<h".concat(3,' class="').concat("U4fuBG_header",'">').concat("This template is set up to use ES6 modules and scss in css modules format  to use a component focused approach to build a static web app for github pages. Microverse student linter configurations are in place.","</").concat(3,">"),'\n    <div class="page">\n    ').concat(i,"\n    </div>")),u=n(".page"),c("",i),c("about",s),window.addEventListener("popstate",function(){t(u,a[window.location.hash.substring(1)])}),r=n(".home"),d=n(".about"),o(r,function(){return t(u,i)}),o(d,function(){return t(u,s)});
//# sourceMappingURL=index.1561aa61.js.map
