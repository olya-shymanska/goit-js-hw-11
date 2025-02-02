import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m=t=>` <li class="photo-card">
        <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
            <p>Likes: <span>${t.likes}</span></p>
            <p>Views: <span>${t.views}</span></p>
            <p>Comments: <span>${t.comments}</span></p>
            <p>Downloads: <span>${t.downloads}</span></p>
        </div>
    </li>`,d=t=>{const s=new URLSearchParams({key:"48576644-2047f7a262d439c7b8152f8c6",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},p=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loading"),h=t=>{t.preventDefault(),c.innerHTML="";const s=t.currentTarget.elements.query.value.trim();if(s===""){l.show({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Please enter a search term!"});return}n.style.display="block",d(s).then(o=>{if(o.total===0){l.show({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none";return}const i=o.hits.map(r=>m(r)).join("");c.innerHTML=i,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}).refresh(),n.style.display="none"}).catch(o=>{console.log(o),n.style.display="none"}),p.reset()};p.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
