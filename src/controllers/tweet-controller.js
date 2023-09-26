const TweetService = require("../services/tweet-service")
const tweetService = new TweetService()

const createTweet = async(req,res)=>{
            try {
                // console.log(req.body)
                const tweet = await tweetService.create(req.body)
                console.log(tweet)
                return res.status(200).json({
                    message: "sucessfully create new tweet",
                    succes :true,
                    data : tweet,
                    error : {}

                })
            } catch (error) {
                return res.status(500).json({
                    message: "failed to create new tweet",
                    succes :false,
                    data : {},
                    err : error

                })
            }
}

module.exports = {
    createTweet
}