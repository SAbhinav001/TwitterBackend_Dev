const Comment = require("../models/comments");
const Crudrepository = require("./crud-repo");

class CommentRepository extends Crudrepository {
  constructor() {
    super(Comment);
  }
}

module.exports = CommentRepository;
