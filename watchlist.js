

//Retrieve data from local storage

document.addEventListener("DOMContentLoaded", () => {
    const storedMovies = localStorage.getItem("movieArray");

    let addedMovies;

    if (storedMovies) {
        addedMovies = JSON.parse(storedMovies)
    }

    else {
        addMoves = [];
    }

    console.log(storedMovies)

})

