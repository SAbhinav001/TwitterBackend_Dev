const express = require("express")
const app = express()
const connect = require('./config/database')
const Tweet = require('./models/tweet')
const Comment = require("./models/comments")
const tweetservice = require("./services/tweet-service")

app.listen(3019, async()=>{
    console.log('server started')
    await connect()
    console.log("Db connected")

})