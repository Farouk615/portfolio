(()=>{let e=document.querySelector(".top-header"),t=document.querySelector("#bulb-light-mode"),s=document.querySelector("#bulb-dark-mode"),o=document.querySelector("header h1"),c=document.querySelector("#sidebar-header h1"),l=document.querySelectorAll(".sidebar-header"),a=document.querySelectorAll("header li"),i=document.querySelectorAll(".element-to-toggle"),r=document.getElementById("resume"),d=document.querySelectorAll(".left-arrow-local"),n=document.querySelectorAll(".right-arrow-local"),u=document.querySelector(".car-holder"),m=document.querySelectorAll(".experience"),g=document.querySelectorAll(".flag"),h=document.querySelector(".email-form "),L=document.querySelectorAll(".sidebar-button"),v=document.querySelector("#sidebar"),y=document.querySelector("#sidebar-button"),b=document.querySelector("#sidebar-header i"),f=document.querySelector("#sidebar-header"),p=document.querySelectorAll(".arrow-left"),S=document.querySelectorAll(".arrow-right"),q=document.querySelectorAll(".certif"),E=0,w=document.querySelector("#email-form"),x=document.querySelector("#overlay"),k=document.querySelector(".loader"),A=document.querySelector("#popup-after-send"),I=document.querySelector("#success-box"),B=document.querySelector("#failure-box"),H=document.querySelector("#popup-ok"),T=document.querySelector(".bubble-holder"),C=document.querySelectorAll(".bubble-holder .bubble"),R=document.querySelector("#my-name"),M=document.querySelector("#intro-section p"),O=document.querySelector("#photo-section img:first-child"),j=document.querySelector("#fname-valid"),D=document.querySelector("#lname-valid"),J=document.querySelector("#body-valid");window.addEventListener("scroll",(function(){const e=T.getBoundingClientRect(),t=R.getBoundingClientRect(),s=O.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0?T.classList.add("hovered"):T.classList.remove("hovered"),t.top<window.innerHeight&&t.bottom>0?(R.classList.add("text-active"),M.classList.add("text-active")):(R.classList.remove("text-active"),M.classList.add("text-active")),s.top<window.innerHeight&&s.bottom>0?O.classList.add("photo-active"):O.classList.remove("photo-active")})),m[0].classList.add("explode-animation");let N='"Hello there !"',P=0;function $(){document.body.classList.toggle("dark-mode"),document.body.classList.toggle("light-mode"),e.classList.toggle("light-mode-box-shadow"),i.forEach((e=>e.classList.toggle("d-none"))),r.classList.toggle("white-background"),o.classList.toggle("purple-color"),c.classList.toggle("purple-color"),f.classList.toggle("sidebar-header-light"),C.forEach((e=>e.classList.toggle("bubble-light"))),a.forEach((e=>e.classList.toggle("purple-color"))),l.forEach((e=>e.classList.toggle("header-white"))),v.classList.toggle("sidebar-background-light"),b.classList.toggle("icons-light"),h.classList.toggle("background-light"),h.classList.toggle("box-shadow-light")}function z(e,t,s,o){let c=document.getElementById(e);s<t.length?(c.innerHTML+=t[s++],setTimeout((function(){z(e,t,s,o)}),o)):F(e,t,t.length-1,o)}function F(e,t,s,o){s>0?(document.getElementById(e).innerHTML=t.substring(0,s--),setTimeout((function(){F(e,t,s,o)}),o)):z("welcome-text",N,0,100)}function G(){m[P].classList.remove("explode-animation"),P++;let e=u.style.right||0;parseInt(e,10)<90&&(u.style.right=`${parseInt(e,10)+30}%`),3===P?g.forEach((e=>e.classList.add("margin-bottom"))):g.forEach((e=>e.classList.remove("margin-bottom"))),m[P].classList.add("explode-animation")}function K(){const e=u.style.right||0;parseInt(e,10)>2&&P>0&&(m[P].classList.remove("explode-animation"),P--,u.style.right=parseInt(e,10)-30+"%",3===P?g.forEach((e=>e.classList.add("margin-bottom"))):g.forEach((e=>e.classList.remove("margin-bottom"))),m[P].classList.add("explode-animation"))}s.addEventListener("click",$),t.addEventListener("click",$),z("welcome-text",N,0,100),d.forEach((e=>{e.addEventListener("click",G)})),n.forEach((e=>{e.addEventListener("click",K)})),p.forEach((e=>e.addEventListener("click",(()=>{q[E].classList.remove("active-certificate"),E--,-1===E&&(E=7),q[E].classList.add("active-certificate")})))),S.forEach((e=>e.addEventListener("click",(()=>{q[E].classList.remove("active-certificate"),E++,8===E&&(E=0),q[E].classList.add("active-certificate")})))),w.addEventListener("submit",(async e=>{e.preventDefault();const t=document.getElementById("first-name").value,s=document.getElementById("last-name").value,o=document.getElementById("message").value;console.log(t);let c=!0;""===t?(j.classList.add("reveal"),c=!1):j.classList.remove("reveal"),""===s?(D.classList.add("reveal"),c=!1):D.classList.remove("reveal"),""===o?(J.classList.add("reveal"),c=!1):J.classList.remove("reveal"),c&&(j.classList.remove("reveal"),D.classList.remove("reveal"),J.classList.remove("reveal"),x.classList.remove("hide"),await fetch("https://mailer-production-ac6c.up.railway.app/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:t,lname:s,message:o})}).then((e=>{A.classList.remove("hide"),k.classList.add("hide")})).catch((e=>{I.classList.add("hide"),B.classList.remove("hide"),A.classList.remove("hide"),k.classList.add("hide")})))})),H.addEventListener("click",(()=>{x.classList.add("hide"),k.classList.remove("hide"),A.classList.add("hide"),I.classList.contains("hide")&&(I.classList.remove("hide"),B.classList.add("hide"))})),L.forEach((e=>{e.addEventListener("click",(()=>{v.classList.toggle("left-change")}))})),document.addEventListener("click",(e=>{v.contains(e.target)||y.contains(e.target)||v.classList.contains("left-change")&&v.classList.remove("left-change"),A.contains(e.target)||x.classList.contains("hide")||A.classList.contains("hide")||(x.classList.add("hide"),A.classList.add("hide"),k.classList.remove("hide"))}))})();