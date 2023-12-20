



/*Search Api

get input value 
get click eent on submit
send api
*/

document.querySelector('form button').addEventListener('click', (e) => {

    //Variables
    const movieTitle = document.querySelector('#searchInput').value
    e.preventDefault()


    //Fetching by search to return all serach results
    fetch(`http://www.omdbapi.com/?apikey=f89c6c72&s=${movieTitle}`)
    .then(res => res.json())
    .then(data => {

        //console.log(data)
        //get run time, Ratings, Genre, 
        data.Search.slice(0, 15).forEach(movie => {
            //console.log(movie.imdbID)
            const movieId = movie.imdbID
            //console.log(movieId)

            //Fetching by id to return id specific properties 
            fetch(`http://www.omdbapi.com/?apikey=f89c6c72&t=${movieId}`)
            .then(res => res.json())
            .then(data => {

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



  





})





