const express = require('express')
const movieController = require('../controllers/movieControllers')
const router = express.Router()


router.get('/', movieController.readAllMovies)
router.get('/:movieId', movieController.readOneMovie)
router.post('/', movieController.createMovie)
router.put('/:movieId', movieController.modifyMovie)
router.delete('/:movieId', movieController.removeMovie)

module.exports = router
