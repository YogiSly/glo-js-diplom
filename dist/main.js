(()=>{"use strict";(()=>{const e=document.querySelector(".overlay"),t=document.querySelectorAll(".fancyboxModal"),s=(document.querySelectorAll(".call-back"),document.querySelector(".header-modal")),l=document.querySelectorAll(".fancybox-skin");t.forEach((t=>{t.addEventListener("click",(t=>{e.style.display="block",t.target.classList.contains("call-back")&&(s.style.display="block")}))})),e.addEventListener("click",(()=>{s.style.display="none",e.style.display="none"})),l.forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("header-modal__close")&&(s.style.display="none",e.style.display="none")}))}))})(),(()=>{const e=document.querySelector(".benefits-wrap"),t=document.querySelectorAll(".benefits__item"),s=document.querySelector(".benefits-arrows");let l,r=e.style.transform.match(/\d+/gi),n=0,a=0,i=0,o=0;const c=(e,t,s)=>{e[t].classList.remove(s)},d=(e,t,s)=>{e[t].classList.add(s)},y=()=>{c(t,n,"slide-active"),n++,l=window.screen.width>576?3:1,o=+(t[0].style.width=e.offsetWidth/l),r=Number(e.style.transform.replace(/[^\-\d+]/gi,"")),n>=t.length-(l-1)?(n=0,i=0):i=r-o,e.style.transform=`translateX(${i}px)`,e.style.transitionDuration=".5s",d(t,n,"slide-active")},u=(e=2e3)=>{a=setInterval(y,e)},m=()=>{clearInterval(a)};u(),s.addEventListener("click",(s=>{s.preventDefault(),m(),c(t,n,"slide-active"),s.target===document.querySelector(".benefits__arrow--right img")?(n++,l=window.screen.width>576?3:1,o=+(t[0].style.width=e.offsetWidth/l),r=Number(e.style.transform.replace(/[^\-\d+]/gi,"")),n>=t.length-(l-1)?(n=0,i=0):i=r-o,e.style.transform=`translateX(${i}px)`,e.style.transitionDuration=".5s",u()):s.target===document.querySelector(".benefits__arrow--left img")&&(m(),n--,l=window.screen.width>576?3:1,o=+(t[0].style.width=e.offsetWidth/l),r=Number(e.style.transform.replace(/[^\-\d+]/gi,"")),n<0?(n=t.length-l,i=-o*(t.length-l)):i=r+o,e.style.transform=`translateX(${i}px)`,e.style.transitionDuration=".5s",u()),d(t,n,"slide-active")}))})()})();