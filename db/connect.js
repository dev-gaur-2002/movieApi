const mongoose = require('mongoose')

const connectDb = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : false,
        useUnifiedTopology:true
    }).then(console.log("database connected!!"))

    if(conn){
        console.log("done")
    }
}

module.exports = connectDb