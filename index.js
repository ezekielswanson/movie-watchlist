/*Search Api

get input value 
get click eent on submit
send api
*/

document.querySelector('form button').addEventListener('click', handleMovieSearch)

    //Holds logic for the all the api items
    async function handleMovieSearch(e) {
        e.preventDefault(); 

        //Removing film icon on load
        removeFilmIcon()

        //Variables
        const movieTitle = document.querySelector('#searchInput').value;

        //get movie id of the searched movie and use thhat id ine the second fetch
 

        //Fetch by search
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=f89c6c72&s=${movieTitle}`);
            const data = await res.json();
            console.log(data);
    
            if (data.Search) {
                //Looping through and grabbing id
                for (const movie of data.Search) {
                    const movieId = movie.imdbID;
                    console.log(movieId);
    
                    try {
                        const resDetails = await fetch(`http://www.omdbapi.com/?apikey=f89c6c72&i=${movieId}`);
                        const movieData = await resDetails.json();
                        console.log(movieData);

                        const title = movieData.Title;
                        const poster = movieData.Poster;
                        const ratings = movieData.imdbRating;
                        const runTime = movieData.Runtime;
                        const genre = movieData.Genre;
                        const plot = movieData.Plot;
            
                    } 
                    catch (error) {
                        console.error('Error fetching movie details:', error);
                    }
                }
            }
        } 
        
        catch (error) {
            console.error('Error:', error);
        }

    }
   



    




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
