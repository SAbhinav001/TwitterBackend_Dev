const Tweet = require("../models/tweet");
const Crudrepository = require("./crud-repo")

class TweetRepository extends Crudrepository{
    constructor(){
      super(Tweet)
    }
}

module.exports = TweetRepository
