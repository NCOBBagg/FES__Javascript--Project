function movieInfo() {
    const id = localStorage.getItem("imdbID")
}

movieInfo()

const id = localStorage.getItem("imdbID")

async function movieDescription() {
    const movieDesc = await fetch(`https://www.omdbapi.com/?apikey=cca6a59&i=${localStorage.getItem("imdbID")}`)
    let movieResult = await movieDesc.json()
    if (!Array.isArray(movieResult)) {
        movieResult = [movieResult]
    }

    const movieDescriptionEl = document.querySelector(' .movie__info--container')
    movieDescriptionEl.innerHTML = movieResult.map((movie) => movieDescHTML(movie))
    console.log(movieResult)
    
    // if (movieResult.Search) {
    //     movieDescriptionEl.innerHTML = movieResult.Search.map((movie) => movieDescHTML(movie)).join()
    // }
    // else {
    //     console.error("No IMBD data found")
    // }
}

 movieDescription()

function movieDescHTML(movie) {
    return `<div class="movie__img--wrapper">
    <h1>${movie.Title}</h1>
    <img src="${movie.Poster}" alt="">
</div>
<div class="movie__info--wrapper">
    <h3><span class="red">Released: </span>${movie.Released}</h3>
    <h3><span class="red">Actors: </span>${movie.Actors}</h3>
    <h3><span class="red">Genre: </span>${movie.Genre}</h3>
    <h3><span class="red">Director: </span>${movie.Director}</h3>
    <h3><span class="red">Writer: </span>${movie.Writer}</h3>
    <h3><span class="red">Language: </span>${movie.Language}</h3>
    <h3><span class="red">Plot: </span>${movie.Plot}</h3>
</div>`
}