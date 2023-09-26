const mongoose = require('mongoose')

const hastagSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
},{timestamps : true})




const Hastag = mongoose.model('Hastag', hastagSchema)


module.exports = Hastag