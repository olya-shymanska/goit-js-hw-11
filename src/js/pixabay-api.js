export const fetchPhotos = searchedQuery => {
    const params = new URLSearchParams({
        key: '48576644-2047f7a262d439c7b8152f8c6',
        q: `${searchedQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    return fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        });
};