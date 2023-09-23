
const mongoose = require('mongoose')
// const { Schema } = mongoose;

const comments = new mongoose.Schema({
    comment: {
        type : String,
        require: true
      }
}, {timestamps:true});

const Comment = new mongoose.model('Comment', comments)



module.exports = Comment