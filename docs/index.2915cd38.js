var n,t,e,o,c,a,i,r,u,d,s,h,v;e=function(n){return document.querySelector(n)},o=function(n,t){n.innerHTML=t},c=function(n,t,e){n.addEventListener(t,e)},a=function(n,t){return c(n,"click",t)},i={},r=function(n,t){i[n]=t},u="<div>THIS IS THE HOME PAGE VIEW</div>",d="<div>this is the about page view</div>",n=document.querySelector("body"),t='\n    <a href="#" class="home">HOME</a>\n    <a href="#about" class="about">ABOUT</a>\n    '.concat("<h".concat(1,' class="').concat("CIdEQa_header",'">').concat("This better work!","</").concat(1,">"),'\n    <div class="page">\n    ').concat(u,"\n    </div>"),n.innerHTML=t,r("",u),r("about",d),window.addEventListener("popstate",function(){o(void 0,i[window.location.hash.substring(1)])}),s=e(".home"),h=e(".about"),v=e(".page"),a(s,function(){return o(v,u)}),a(h,function(){return o(v,d)});
//# sourceMappingURL=index.2915cd38.js.map