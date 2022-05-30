const { getAllMovies, getSingleMovie, createNewMovie ,getPaginated} = require('../functions/functions')

const router = require('express').Router()

router.route('/get-all').get(getAllMovies)
router.route('/get-single/:id').get(getSingleMovie)
router.route('/addMovie').post(createNewMovie)
router.route('/get-paginated').get(getPaginated)

module.exports = router