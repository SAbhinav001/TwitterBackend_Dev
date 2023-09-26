const Like = require("../models/like");
const Crudrepository = require("./crud-repo")

class LikeRepository extends Crudrepository{
    constructor(){
        super(Like)
    }
}

module.exports = LikeRepository