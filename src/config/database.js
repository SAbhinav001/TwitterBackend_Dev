const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://localhost/Twitter_Dev')
}

module.exports = connect