

/*Search Api

get input value 
get click eent on submit
send api
*/

document.querySelector('form button').addEventListener('click', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();  

    //Var's for first fetch
    const movieTitle = document.querySelector('#searchInput').value



    //Fetching by search to return all serach results
    fetch(`http://www.omdbapi.com/?apikey=f89c6c72&s=${movieTitle}`)
    .then(res => res.json())
    .then(data => {

        //console.log(data)
        //get run time, Ratings, Genre, 
        data.Search.forEach(movie => {
            //console.log(movie.imdbID)
            const movieId = movie.imdbID
            //console.log(movieId)

            //Fetching by id to return id specific properties 
            fetch(`http://www.omdbapi.com/?apikey=f89c6c72&i=${movieId}`)
            .then(res => res.json())
            .then(data => {

                //Var's for second fetch
                const title = data.Title;
                const poster = data.Poster;
                const ratings = data.imdbRating;
                const runTime = data.Runtime;
                const genre = data.Genre;
                const plot = data.Plot;


                //Now get code to render
                //map method on the data? 
                //render out html and insert values 
                console.log(data)


                //Render HTML

                let  movieList = '';
                movieList += `
                    <div class="movie-list__row">
                        <img src="${data.Poster}">
                        <div class="movie-list__row--text__container">
                            <div class="movie-list__row--text__title">
                                <h3>${data.Title}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654"/>
                                </svg>
                                <p>8.1</p>
                            </div>

                            <div class="movie-list__row--text__info">
                                <p>${data.Runtime}</p>
                                <p>${data.Genre}</p>
                                <div class="movie-list__row--text__info--btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="#111827"/>
                                    </svg>
                                    <p>Watchlist</p>
                                </div>

                            </div>

                            <div class="movie-list__row--text__info--desc">
                                <p>${data.Plot}.</p>
                            </div>

                        </div>
                    </div>
                    `

                //Adding html
                const listContainer = document.querySelector('.movie-list__body');
                listContainer.innerHTML =  movieList;
            
            })
            .catch(error => {
                console.error('Error:', error);
            });




        }) //End loop

        
    })



    .catch(error => {
        console.error('Error:', error);
    });



  //Remove icon on click 
  const removeFilmIcon = document.querySelector('.movie-list__film-icon');
  removeFilmIcon.classList.add('remove')



})

/*
function renderMovie(movie) {
    const html = `
    <div class="movie-list__row">
        <img src="${movie.Poster}">
        <div class="movie-list__row--text__container">
            <div class="movie-list__row--text__title">
                <h3>${movie.Title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654"/>
                </svg>
                <p>8.1</p>
            </div>

            <div class="movie-list__row--text__info">
                <p>${movie.Runtime}</p>
                <p>${movie.Genre}</p>
                <div class="movie-list__row--text__info--btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="#111827"/>
                    </svg>
                    <p>Watchlist</p>
                </div>

            </div>

            <div class="movie-list__row--text__info--desc">
                <p>${movie.Plot}.</p>
            </div>

        </div>
    </div>
    `
}
*/






    



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
