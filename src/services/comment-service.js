const { CommentRepository, TweetRepository } = require("../repository/index");

class CommentService {
  constructor() {
    this.commentRepo = new CommentRepository();
    this.tweetRepo = new TweetRepository();
  }

  async create(modelId, modelName, userId, content) {
    if (modelName == "Tweet") {
      var commentable = await this.tweetRepo.get(modelId);
    } else if (modelName == "Comment") {
      var commentable = await this.commentRepo.get(modelId);
    } else {
      throw new Error("Unknown model type");
    }

    const comment = await this.commentRepo.create({
      commentable: modelId,
      onModel: modelName,
      userId: userId,
      content: content,
      comments: [],
    });

    commentable.comments.push(comment);
    await commentable.save();

    return comment;
  }
}

module.exports = CommentService;
