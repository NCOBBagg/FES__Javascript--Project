//http://www.omdbapi.com/?i=tt3896198&apikey=cca6a59


async function findMovies() {
    const URL = "http://www.omdbapi.com/?s=${movieName}&apikey=cca6a59"
    const result = await fetch(`${URL}`)
    const data = await result.json()
    
}

findMovies()