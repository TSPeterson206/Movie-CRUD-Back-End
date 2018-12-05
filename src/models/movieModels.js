const movies = require('../db/movies.js')
const uuid = require('uuid')


/////// movie Functions
function create(newMovie) {
    const error = []
    const {
        id,
        title,
        director,
        year,
        rating,
        poster
    } = newMovie

    if (!title || !director || !year || !rating || !poster) {
        error.push('Please Provide Content To Create')
    }

    if (error.length) return {
        error
    }
    newMovie.id=uuid()
    movies.push(newMovie)
    return movies
}

function modify(movieId, newMovie) {
    const error = []
    const movieidx = movies.findIndex(ele => ele.id === movieId)
    if (movieidx === -1) {
        error.push('Not Found')
    }

    const {
        id,
        title,
        director,
        year,
        rating,
        poster
    } = newMovie
    console.log(newMovie)
    movies[movieidx].title = title
    movies[movieidx].director = director
    movies[movieidx].year = year
    movies[movieidx].rating = rating
    movies[movieidx].poster = poster

    if (!title || !director || !year || !rating || !post) {
        error.push("Please add content")
    }
    if (error.length) return {
        error
    }
    return  movies[movieidx] 
}

function getAll() {
    return movies
}

function getOne(movieId) {

    const movie = movies.find(ele => ele.id === movieId)

    if (!movie) {
        return {
            error: ['movie not found']
        }
    }
    return movie
}

function remove(movieId) {
    const movieidx = movies.findIndex(ele => ele.id = movieId)

    if (movieidx === -1) return {
        error: ['Not Found']
    }

    const savedMovie = movies[movieidx]

    movies.splice(movieidx, 1)

    return savedMovie
}

module.exports = {
    create,
    getAll,
    getOne,
    remove,
    modify
}