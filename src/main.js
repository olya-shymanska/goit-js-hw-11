import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loading');

const cardTemplate = cardInfo => {
    return ` <li class="photo-card">
        <a href="${cardInfo.largeImageURL}">
            <img src="${cardInfo.webformatURL}" alt="${cardInfo.tags}" />
        </a>
        <div class="info">
            <p>Likes: <span>${cardInfo.likes}</span></p>
            <p>Views: <span>${cardInfo.views}</span></p>
            <p>Comments: <span>${cardInfo.comments}</span></p>
            <p>Downloads: <span>${cardInfo.downloads}</span></p>
        </div>
    </li>`
};



const searchFormSubmit = event => {
    event.preventDefault();

    gallery.innerHTML = '';

    const searchedQuery = event.currentTarget.elements.query.value.trim();

    if (searchedQuery === '') {

       iziToast.show({
                    
                    title: '',
                    backgroundColor: 'red',
                    messageColor: 'white',
                    position: 'topRight',
           message: 'Please enter a search term!'
       });
    

        return;
    };

    loading.style.display = 'block';


    const params = new URLSearchParams({
        key: '48576644-2047f7a262d439c7b8152f8c6',
        q: `${searchedQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });


    fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .then(data => {
            

            if (data.total === 0) {

                iziToast.show({
                    
                    title: '',
                    backgroundColor: 'red',
                    messageColor: 'white',
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                
                loading.style.display = 'none'; 
                
                return;
            }

            const galleryTemplate = data.hits.map(el => cardTemplate(el)).join('');

            gallery.innerHTML = galleryTemplate;

            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionPosition: 'bottom',
                captionDelay: 500,
            });

            lightbox.refresh();  

            loading.style.display = 'none';

        })
        .catch(error => {
            console.log(error);
            loading.style.display = 'none'; 
        });
    
     searchForm.reset();
    
};

searchForm.addEventListener('submit', searchFormSubmit);