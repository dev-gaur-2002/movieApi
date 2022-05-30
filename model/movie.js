const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    timeInMinutes:{
        type:Number,
        required:true
    },
    director:{
        type:String,
        required:true,
    },
    releaseYear:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        enum:['fiction','drama','horror','comedy','romantic'],
        required:false
    }
})

module.exports = mongoose.model('movie',movieSchema)
