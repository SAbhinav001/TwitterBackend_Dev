
const mongoose = require('mongoose')
// const { Schema } = mongoose;



const blogSchema = new mongoose.Schema({
  name: {
    type : String,
    require: true
  },
  title:String,
  comments:[
    {
        
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        
    }
  ]
}, {timestamps:true});



const Tweet = new mongoose.model('Tweet', blogSchema)


module.exports = Tweet