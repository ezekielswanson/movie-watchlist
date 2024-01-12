
/*** Wathclist Js  ***/

//Storing added movies
const addedMovies = [];



//Adding movie to local storage
document.querySelector('.movie-list__body').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-movie-id]');

    if (btn) {
        const selectedMovie = btn.dataset.movieId; 
        console.log(selectedMovie);

        //access data id

        //how do I get access to the movie object used to created html?
        const movieEl = btn.closest('.movie-list__row')
        
        
        const movieObject = {
            poster: movieEl.querySelector('img').src,
            title: movieEl.querySelector('.movie-list__row--text__title h3').textContent,
            rating: movieEl.querySelector('.movie-list__row--text__title p').textContent,
            runtime: movieEl.querySelector('.movie-list__row--text__info p:first-child').textContent,
            genre: movieEl.querySelector('.movie-list__row--text__info p:nth-child(2)').textContent,
            plot: movieEl.querySelector('.movie-list__row--text__info--desc p').textContent,


        }
        

        addedMovies.push(movieObject)
        

    }
    console.log(addedMovies)
});



