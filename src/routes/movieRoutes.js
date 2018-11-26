const express = require('express')
const blogController = require('../controllers/movieControllers')
const router = express.Router()


router.get('/', blogController.readAllMovies)
router.get('/:movieId', blogController.readOneMovie)
router.post('/', blogController.createMovie)
router.put('/:movieId', blogController.modifyMovie)
router.delete('/:movieId', blogController.removeMovie)

module.exports = router
