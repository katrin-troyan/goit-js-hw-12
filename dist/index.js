import{a as m,S as h,i as y}from"./assets/vendor-CNpXvI_o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="48935513-8997d7f633aa985d826258f4d",b="https://pixabay.com/api/",L=s=>m.get(b,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{console.error(r)}),l=document.querySelector(".gallery"),v=()=>{l.innerHTML=""},q=s=>{const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:u,comments:f,downloads:p})=>`<a class="gallery-item" href="${e}">
          <div class="photo-card">
            <img src="${n}" alt="${t}" />
            <div class="info">
              <p><b>Likes:</b> ${i}</p>
              <p><b>Views:</b> ${u}</p>
              <p><b>Comments:</b> ${f}</p>
              <p><b>Downloads:</b> ${p}</p>
            </div>
          </div>
        </a>`).join("");l.insertAdjacentHTML("beforeend",r),new h(".gallery a").refresh()},a=document.querySelector("#search-form"),S=document.querySelector(".form-input"),d=document.querySelector(".loader");function x(){d.classList.add("active")}function c(){d.classList.remove("active")}a.addEventListener("submit",s=>{s.preventDefault();const r=S.value.trim();v(),x(),L(r).then(o=>{if(c(),o.length===0){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.reset();return}q(o),a.reset()}).catch(o=>{c(),console.error(o)})});
//# sourceMappingURL=index.js.map
