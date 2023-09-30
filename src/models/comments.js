
const mongoose = require('mongoose')
// const { Schema } = mongoose;

const comments = new mongoose.Schema({
    content: {
        type : String,
        require: true
      },
      onModel:{
        type: String,
        required: true,
        enum :['Tweet', 'Comment']
    },
    commentable:{
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            refPath : 'onModel',
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    //We can add it or just get from likes model (search the id and count) 
    // likes :[
    //   {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'Like'
    //   }
    // ],
    comments  :[
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
      }
    ]
}, {timestamps:true});

const Comment = new mongoose.model('Comment', comments)



module.exports = Comment