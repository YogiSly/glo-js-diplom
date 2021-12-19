(()=>{"use strict";const e=({view:e,wrap:t,arrows:o,item:n,times:a})=>{const l=document.querySelector(t),c=document.querySelectorAll(n),r=document.querySelectorAll(o);let s,i=l.style.transform.match(/\d+/gi),d=0,m=0,u=0,y=0;const f=(e,t,o)=>{e[t].classList.remove(o)},p=(e,t,o)=>{e[t].classList.add(o)},v=()=>{s=window.screen.width>576?e:1,y=+(c[0].style.width=l.offsetWidth/s),i=Number(l.style.transform.replace(/[^\-\d+]/gi,"")),l.style.transitionDuration=".5s"},h=()=>{f(c,d,"slide-active"),d++,v(),d>=c.length-(s-1)?(d=0,u=0):u=i-y,l.style.transform=`translateX(${u}px)`,p(c,d,"slide-active")},g=(e=a)=>{m=setInterval(h,e)},E=()=>{clearInterval(m)};g(),r.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),E(),f(c,d,"slide-active"),e.target===document.querySelector(`${o}--right img`)?(d++,v(),d>=c.length-(s-1)?(d=0,u=0):u=i-y,l.style.transform=`translateX(${u}px)`,g()):e.target===document.querySelector(`${o}--left img`)&&(E(),d--,v(),d<0?(d=c.length-s,u=-y*(c.length-s)):u=i+y,l.style.transform=`translateX(${u}px)`,g()),p(c,d,"slide-active")}))}))},t=e=>e<10?`0${e}`:e,o=({formName:e,someElem:t=[]})=>{const o=document.getElementsByName(e)[0],n=document.createElement("div");let a=!1,l=!1;o.noValidate=!0;try{o.addEventListener("submit",(e=>{e.preventDefault(),console.log("Perfect"),(()=>{const e=o.querySelectorAll("input"),c=new FormData(o),r={};var s;n.innerHTML="<img src='./src/images/load.png'>",o.append(n),c.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{console.log(e.id);const t=document.getElementById(e.id);e.type,r[e.id]=t.value})),function(e){let t=!1;return a=!1,l=!1,e.forEach((e=>{"fio"===e.attributes.name.value&&(/^[а-яА-Яa-zA-Z]{2,}$/gi.test(e.value)?a=!0:(e.setCustomValidity("Заполните не менее 2-х символов"),e.reportValidity())),"phone"===e.attributes.name.value&&(/^[\d\+]{5,16}$/gi.test(e.value)?l=!0:(e.setCustomValidity("Заполните номер цифрами, не более 16 цифр"),e.reportValidity()))})),!0===a&&!0===l&&(t=!0),t}(e)?(s=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Наш менеджер с вами свяжется",setTimeout((()=>{n.textContent=""}),5e3),e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка..."})):n.textContent=""})()}))}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".overlay"),t=document.querySelectorAll(".fancyboxModal"),o=document.querySelector(".header-modal"),n=document.querySelector(".services-modal"),a=document.querySelectorAll(".fancybox-skin");t.forEach((t=>{t.addEventListener("click",(t=>{e.style.display="block",t.target.classList.contains("call-back")?o.style.display="block":t.target.classList.contains("service-btn")&&(n.style.display="block")}))})),e.addEventListener("click",(()=>{o.style.display="none",n.style.display="none",e.style.display="none"})),a.forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("header-modal__close")?(o.style.display="none",e.style.display="none"):t.target.classList.contains("services-modal__close")&&(n.style.display="none",e.style.display="none")}))}))})(),e({view:3,wrap:".benefits-wrap",arrows:".benefits__arrow",item:".benefits__item",times:2e3}),e({view:2,wrap:".services-wrap",arrows:".services__arrow",item:".services__item",times:4e3}),(e=>{const o=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),a=document.querySelectorAll(".count_3 span"),l=document.querySelectorAll(".count_4 span"),c=()=>{let r=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t/60/60),n=Math.floor(o/24);return{timeRemaining:t,hours:o,minutes:Math.floor(t/60%60),seconds:Math.floor(t%60),day:n}})();r.timeRemaining<0?(clearInterval(c),o.forEach((e=>{e.textContent="00"})),n.forEach((e=>{e.textContent="00"})),a.forEach((e=>{e.textContent="00"})),l.forEach((e=>{e.textContent="00"}))):(o.forEach((e=>{e.textContent=t(r.day)})),n.forEach((e=>{e.textContent=t(r.hours%24)})),a.forEach((e=>{e.textContent=t(r.minutes)})),l.forEach((e=>{e.textContent=t(r.seconds)})))};setInterval(c,1e3)})("22 december 2021"),(()=>{const e=document.querySelector(".smooth-scroll"),t=document.getElementById("offer"),o=()=>{window.pageYOffset<=t.offsetTop+t.offsetHeight?e.style.opacity="0":e.style.opacity="1"};window.addEventListener("scroll",o),o(),e.addEventListener("click",(e=>{e.preventDefault(),document.body.scrollIntoView({behavior:"smooth"})}))})(),((e=100)=>{const t=document.getElementById("calc"),o=document.getElementById("calc-type"),n=document.getElementById("calc-type-material"),a=document.getElementById("calc-input"),l=document.getElementById("calc-total");t&&t.addEventListener("input",(t=>{t.target!==o&&t.target!==a&&t.target!==n||(()=>{let t,c=1;a.value=a.value.replace(/[^\d\.]+/gi,""),"--"!=n.value&&(c=+n.value),t=e*+o.value*+a.value*c,l.value=t})()}))})(),(()=>{const e=document.querySelectorAll(".sertificate-document");let t,o;var n;n=()=>{t.addEventListener("click",(e=>{e.target.classList.contains("view-modal")&&t.remove()}))},e.forEach((e=>{e.addEventListener("click",(a=>{a.preventDefault(),t=document.createElement("div"),o=document.createElement("img"),t.className="view-modal",o.setAttribute("src",e.getAttribute("href")),document.body.append(t),t.append(o),n()}))}))})(),o({formName:"action-form2",someElem:[{type:"block",id:"calc-total"}]}),o({formName:"action-form",someElem:[{type:"block",id:"calc-total"}]})})();