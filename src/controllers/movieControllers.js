const movieModel = require('../models/movieModels')

function createMovie(req, res, next){
    const newMovie = movieModel.create(req.body)
  
    if(newMovie.error) return next( { status: 400, message: newMovie })
    
    res.status(201).send({ data: newMovie })
  }
  
  function modifyMovie(req, res, next){
    const newMovie = movieModel.modify(req.params.movieId, req.body)
  
    if(newMovie.error) return next( { status: 400, message: newMovie })
    
    res.status(201).send({ data: newMovie })
  }
  
  function readAllMovies(req, res, next){
    const movies = movieModel.getAll()
    
    res.send({data: movies})
  }
  
  
  function readOneMovie(req, res, next){
    const movie = movieModel.getOne(req.params.movieId)
  
    if(!movie) return next({status: 404, message: movie })
  
    res.status(200).send(movie)
  }
  
  function removeMovie(req, res, next){
    const movie = movieModel.remove(req.params.movieId)
  
    if(!movie) return next({status: 404, message: movie })
  
    res.status(200).send(movie)
  }
  

  module.exports = { createMovie, readAllMovies, readOneMovie, removeMovie, modifyMovie }