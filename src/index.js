const express = require("express")
const app = express()
const connect = require('./config/database')
const Tweet = require('./models/tweet')
const Comment = require("./models/comments")

app.listen(3019, async()=>{
    console.log('server started')
    await connect()
    console.log("Db connected")

   // console.log(typeof(Tweet))

    // const tweet = await Tweet.create({
    //     name: 'shrivastav',
    //     title : 'Ass. engineer'
    // })
    // const tweet = await Tweet.findById('650c8be333835f423cf40b40')
    // console.log(tweet)
    

    // const tweet = await Tweet.create({
    //     name:' Anonymous',
    //     title :'nope'
    // })

    // console.log(tweet)

    // const comment = await Comment.create({
    //     comment :"this is new comment"
    // })

    const tweet = await Tweet.findById('650c8be333835f423cf40b40').populate('comments')

//    const comment = await Comment.find()

// const comment = await Comment.create({
//     comment :"this is new comment"
// }) 

// tweet.comments.push(comment)
//     await tweet.save()
    



    console.log(tweet)



})