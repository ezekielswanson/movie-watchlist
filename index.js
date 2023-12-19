



//Search Api
/*
get input value 
get click eent on submit
send api
*/
document.querySelector('form button').addEventListener('click', (e) => {

    //Variables
    const movieTitle = document.querySelector('#searchInput').value

    console.log(movieTitle)
    e.preventDefault()

    fetch(`http://www.omdbapi.com/?apikey=f89c6c72&s=${movieTitle}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
})



