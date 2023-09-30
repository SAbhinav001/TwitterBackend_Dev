const {TweetRepository, LikeRepository} = require("../repository/index")

class LikeService {
    constructor() {
        this.tweetRepository = new TweetRepository()
        this.likeRepository = new LikeRepository()
    }

    async toggleLike(modelId, modelName, userId){   //api/v1/likes/toogle?id=modelId&type=tweet 
            if(modelName == "Tweet"){
                    var likeable = await this.tweetRepository.find(modelId)
            }
            else if(modelName == "Comment"){
                    //to do
            }
            else{
                    console.log("Errror in modelName")
            }

            const existLike = await this.likeRepository.findByIdAndLikeable({
                user : userId,
                onModel :modelName,
                likeable : modelId
            })
         //   console.log(existLike)
            if(existLike){
                 likeable.likes.pull(existLike.id)
               await likeable.save()
               await existLike.deleteOne()
               var isAdded = false
            }
            else{
                const newlike = await this.likeRepository.create({
                    user : userId,
                    onModel :modelName,
                    likeable : modelId
                })
                likeable.likes.push(newlike)
                await likeable.save()
                var isAdded = true
            }

            return isAdded
    }
}

module.exports = LikeService