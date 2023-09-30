const express = require("express")
const router = express.Router()
const {createTweet, getTweet} = require("../../controllers/tweet-controller")
const {toggleLike} =require("../../controllers/like-controller")
const {createComment} = require("../../controllers/comment-controllers")


router.post('/tweets',createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',createComment)
router.get('/tweets/:id', getTweet)


module.exports = router