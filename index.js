// http://www.omdbapi.com/?i=tt3896198&apikey=cca6a59

const movieEl = document.querySelector('.movie__wrapper')

async function onSearchChange(event) {
    const searchItem = event.target.value
    const movieRes = await fetch(`http://www.omdbapi.com/?apikey=cca6a59&s=${searchItem}`)
    const movieData = await movieRes.json()
    movieEl.innerHTML = movieData.map((movie) => movieHTML(movie)).join('')
}


function movieHTML(movie) {
    return `<div class="movie" on>
    <div class="movie__img">
        <img src="${movie.Poster}" alt="">
        <div class="movie__content">
            <h1>${movie.Title}</h1>
            <h1>${movie.Year}</h1>
            <p><a onclick="movieInfo('${movie.imdbID}')">SEE MORE</a></p>
        </div>
    </div>
</div>`
}

function movieInfo(imdbID) {
    localStorage.setItem("imdbID", imdbID)
    window.location.href = `http://127.0.0.1:5501/movie.html`
}