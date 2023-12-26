/*Search Api

get input value 
get click eent on submit
send api

*/



function handleClick() {
    const btn = document.querySelector('form button');
    btn.addEventListener('click', function() {

        //Handling movie Search
        handleMovieSearch();


    })
}

handleClick();




async function handleMovieSearch(e) {
    e.preventDefault();

    //Var's
    const movieTitle = document.querySelector('#searchInput').value;

    try {
        const searchResults = await fetchMoviesBySearch(movieTitle);
        await Promise.all(searchResults.map async (movie) => {
            const movieDetails = await fetchMovieDetails(movie.imdbID);
            renderMovie(movieDetails)
        })
    }

    catch (error) {
        console.error('Error:', error);
    }

    removeFilmIcon();
}

}



    



//Removing film icon on load
function removeFilmIcon() {
    const removeFilmIcon = document.querySelector('.movie-list__film-icon');
    removeFilmIcon.classList.add('remove');
}


/*
// Prevent default form submission behavior

// Var's for first fetch
// const movieTitle = document.querySelector('#searchInput').value

// Fetching by search to return all search results
fetch(`http://www.omdbapi.com/?apikey=f89c6c72&s=${movieTitle}`)
.then(res => res.json())
.then(data => {

    // console.log(data)
    // get run time, Ratings, Genre, 
    data.Search.forEach(movie => {
        // console.log(movie.imdbID)
        const movieId = movie.imdbID
        // console.log(movieId)

        // Fetching by id to return id specific properties 
        fetch(`http://www.omdbapi.com/?apikey=f89c6c72&i=${movieId}`)
        .then(res => res.json())
        .then(data => {

            // Var's for second fetch
            const title = data.Title;
            const poster = data.Poster;
            const ratings = data.imdbRating;
            const runTime = data.Runtime;
            const genre = data.Genre;
            const plot = data.Plot;

            // Now get code to render
            // map method on the data? 
            // render out html and insert values 

            console.log(data)

        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
})
.catch(error => {
    console.error('Error:', error);
});

// Remove icon on click 
const removeFilmIcon = document.querySelector('.movie-list__film-icon');
removeFilmIcon.classList.add('remove')

document.querySelector('form button').addEventListener('click', handleMovieSearch);

async function handleMovieSearch(e) {
    e.preventDefault();
    const movieTitle = document.querySelector('#searchInput').value;

    try {
        const searchResults = await fetchMoviesBySearch(movieTitle);
        await Promise.all(searchResults.map(async (movie) => {
            const movieDetails = await fetchMovieDetails(movie.imdbID);
            renderMovie(movieDetails);
        }));
    } catch (error) {
        console.error('Error:', error);
    }

    removeFilmIcon();
}

async function fetchMoviesBySearch(title) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=f89c6c72&s=${title}`);
    const data = await response.json();
    return data.Search;
}

async function fetchMovieDetails(movieId) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=f89c6c72&i=${movieId}`);
    const data = await response.json();
    return data;
}

function renderMovie(movie) {
    const movieHtml = `
        <div class="movie">
            <h1>${movie.Title}</h1>
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p>Rating: ${movie.imdbRating}</p>
            <p>Runtime: ${movie.Runtime}</p>
            <p>Genre: ${movie.Genre}</p>
            <p>Plot: ${movie.Plot}</p>
        </div>
    `;
    document.querySelector('#moviesContainer').innerHTML += movieHtml;
}
*/
