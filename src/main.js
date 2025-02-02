import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loading');

import { cardTemplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

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

     fetchPhotos(searchedQuery)
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