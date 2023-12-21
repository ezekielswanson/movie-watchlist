



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




                console.log(data)
                console.log(plot) 
            
            })
            .catch(error => {
                console.error('Error:', error);
            });


        })


        
    })
    .catch(error => {
        console.error('Error:', error);
    });



  
    e.preventDefault()




})





