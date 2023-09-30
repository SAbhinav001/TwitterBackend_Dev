
const mongoose = require('mongoose')
// const { Schema } = mongoose;

const comments = new mongoose.Schema({
    comment: {
        type : String,
        require: true
      },
      onModel:{
        type: String,
        required: true,
        enum :['Tweet', 'Comment']
    },
    Ccommentable:{
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            refPath : 'onModel',
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
}, {timestamps:true});

const Comment = new mongoose.model('Comment', comments)



module.exports = Comment