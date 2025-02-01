import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loading"),m=r=>` <li class="photo-card">
        <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
            <p>Likes: <span>${r.likes}</span></p>
            <p>Views: <span>${r.views}</span></p>
            <p>Comments: <span>${r.comments}</span></p>
            <p>Downloads: <span>${r.downloads}</span></p>
        </div>
    </li>`,d=r=>{r.preventDefault(),c.innerHTML="";const s=r.currentTarget.elements.query.value.trim();if(s===""){l.show({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Please enter a search term!"});return}a.style.display="block";const n=new URLSearchParams({key:"48576644-2047f7a262d439c7b8152f8c6",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${n}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.total===0){l.show({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none";return}const e=o.hits.map(i=>m(i)).join("");c.innerHTML=e,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}).refresh(),a.style.display="none"}).catch(o=>{console.log(o),a.style.display="none"}),p.reset()};p.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
