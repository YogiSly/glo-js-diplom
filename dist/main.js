(()=>{"use strict";(()=>{const e=document.querySelector(".overlay"),t=document.querySelectorAll(".fancyboxModal"),s=document.querySelector(".header-modal"),l=document.querySelector(".services-modal"),n=document.querySelectorAll(".fancybox-skin");t.forEach((t=>{t.addEventListener("click",(t=>{e.style.display="block",t.target.classList.contains("call-back")?s.style.display="block":t.target.classList.contains("service-btn")&&(l.style.display="block")}))})),e.addEventListener("click",(()=>{s.style.display="none",l.style.display="none",e.style.display="none"})),n.forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("header-modal__close")?(s.style.display="none",e.style.display="none"):t.target.classList.contains("services-modal__close")&&(l.style.display="none",e.style.display="none")}))}))})(),(()=>{const e=document.querySelector(".benefits-wrap"),t=document.querySelectorAll(".benefits__item"),s=document.querySelector(".benefits-arrows");let l,n=e.style.transform.match(/\d+/gi),r=0,a=0,i=0,o=0;const c=(e,t,s)=>{e[t].classList.remove(s)},d=(e,t,s)=>{e[t].classList.add(s)},y=()=>{c(t,r,"slide-active"),r++,l=window.screen.width>576?3:1,o=+(t[0].style.width=e.offsetWidth/l),n=Number(e.style.transform.replace(/[^\-\d+]/gi,"")),r>=t.length-(l-1)?(r=0,i=0):i=n-o,e.style.transform=`translateX(${i}px)`,e.style.transitionDuration=".5s",d(t,r,"slide-active")},m=(e=2e3)=>{a=setInterval(y,e)},u=()=>{clearInterval(a)};m(),s.addEventListener("click",(s=>{s.preventDefault(),u(),c(t,r,"slide-active"),s.target===document.querySelector(".benefits__arrow--right img")?(r++,l=window.screen.width>576?3:1,o=+(t[0].style.width=e.offsetWidth/l),n=Number(e.style.transform.replace(/[^\-\d+]/gi,"")),r>=t.length-(l-1)?(r=0,i=0):i=n-o,e.style.transform=`translateX(${i}px)`,e.style.transitionDuration=".5s",m()):s.target===document.querySelector(".benefits__arrow--left img")&&(u(),r--,l=window.screen.width>576?3:1,o=+(t[0].style.width=e.offsetWidth/l),n=Number(e.style.transform.replace(/[^\-\d+]/gi,"")),r<0?(r=t.length-l,i=-o*(t.length-l)):i=n+o,e.style.transform=`translateX(${i}px)`,e.style.transitionDuration=".5s",m()),d(t,r,"slide-active")}))})()})();