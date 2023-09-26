const {TweetRepository, HasTagRepository} = require("../repository/index")

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository()
        this.hashtagrepository = new HasTagRepository()
    }

    async create(data){
        const content = data.content
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tags)=>tags.substring(1)) // this regex extracts hastags
        console.log(tags)
        const tweet = await this.tweetRepository.create(data)
        //todo create hastag if it doesnt exist
        let alreadyPresenttags = await this.hashtagrepository.findByName(tags)
        let titleOfpresenttags = alreadyPresenttags.map((tags)=>tags.title)

        let newTags = tags.filter((tag)=> !titleOfpresenttags.includes(tag))
        newTags = newTags.map((tag)=>{
            return {title:tag , tweets : [tweet.id]}
        })

       await this.hashtagrepository.bulkcreate(newTags)
       alreadyPresenttags.forEach((tags)=>{
        tags.tweets.push(tweet.id)
        tags.save()
       })

        return tweet
    
        return tweet
    }
}

module.exports = TweetService