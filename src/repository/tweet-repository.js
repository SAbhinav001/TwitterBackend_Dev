const Tweet = require("../models/tweet");
const Crudrepository = require("./crud-repo");

class TweetRepository extends Crudrepository {
  constructor() {
    super(Tweet);
  }

  async find(id) {
    try {
      const result = await Tweet.findById(id).populate("likes");
      return result;
    } catch (error) {
      console.log("something wrong in crud repo");
      throw error;
    }
  }

  async getwithcomments(id) {
    try {
      const result = await Tweet.findById(id).populate("comments");
      return result;
    } catch (error) {
      console.log("something wrong in crud repo");
      throw error;
    }
  }

}

module.exports = TweetRepository;
