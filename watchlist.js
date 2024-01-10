/*** Wathclist Js  ***/


//Adding movie to local storage
document.querySelector('.movie-list__body').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-movie-id]');

    if (btn) {
        const selectedMovie = btn.dataset.movieId; // Use 'btn' instead of 'e.target'
        console.log(selectedMovie);

        //access data id

        /*
        const movieObject = {
            poster: 
            title: 
            rating: 
            runtime: 
            genre: 
            plot: 

        }
        */

    }
});