const movies = require('../db/movies.js')
const uuid = require('uuid')


/////// movie Functions
function create(newMovie) {
    const error = []
    const {
        id,
        body
    } = newMovie

    if (!body) {
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
    const movieidx = movies.findIndex(ele => ele.id =movie)
    if (movieidx === -1) {
        error.push('Not Found')
    }

    const {
        id,
        body
    } = newMovie

    movies[movieidx].body = body

    if (!body) {
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

function getOne() {

    const movie = movies.find(ele => ele.id =movie)

    if (!movie) {
        return {
            error: ['movie not found']
        }
    }

    return movie
}

function remove() {
    const movieidx = movies.findIndex(ele => ele.id =movie)

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