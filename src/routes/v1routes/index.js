const express = require("express")
const router = express.Router()
const {createTweet} = require("../../controllers/tweet-controller")
const {toggleLike} =require("../../controllers/like-controller")


router.post('/tweets',createTweet)
router.post('/likes/toggle',toggleLike)


module.exports = router