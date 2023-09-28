const Tweet = require("../models/tweet");
const Crudrepository = require("./crud-repo")

class TweetRepository extends Crudrepository{
    constructor(){
      super(Tweet)
    }

    async get(id){
      try {
          const result = await this.model.findById(id).populate('likes')
          return result
      } catch (error) {
          console.log("something wrong in crud repo")
          throw error
      }
      
  }
}

module.exports = TweetRepository
