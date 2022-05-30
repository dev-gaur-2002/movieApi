const movieModel = require('../model/movie')

const createNewMovie = async(req,res)=>{
    try {
        const {name,time,year,director,category} = req.body
        const movie = await movieModel.create({
            name,
            timeInMinutes:time,
            director,
            releaseYear:year,
            category
        })

        res.status(200).json({
            msg:"movie added",
            movie
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
}


const getAllMovies = async(req,res)=>{
    try {
        const movies = await movieModel.find()
        res.status(200).json({
            movies
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
}

const getSingleMovie = async(req,res)=>{
    try {
        const movie = await movieModel.findById(req.params.id)
        console.log(movie)
        if(!movie){
            return res.status(400).json({
                msg:"movie with this id does not exists"
            })
        }

        res.status(200).json({
            movie
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })       
    }
}

const getPaginated = async(req,res)=>{
    try {
        const movies = await movieModel.find({})
        // console.log(movies)
        let {page,size} = req.query

        //setting this as default values
        if(!page){
            page = 1
        }

        if(!size){
            size = 5
        }

        page = parseInt(page)
        size = parseInt(size)

        let from = ((page-1)*size)
        let to = (page*size)

        if(from >= movies.length){
            return res.status(400).json({
                msg:"page limit exceeded!!"
            })
        }
        if(to >= movies.length){
            to = movies.length
        }
        
        // console.log(movies.length)
        // console.log(from , to)
        
        const finalmovies = movies.slice(from,to)

        console.log(finalmovies)
        res.status(200).json({
            movies:finalmovies
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
}

module.exports = {
    createNewMovie,
    getAllMovies,
    getSingleMovie,
    getPaginated
}