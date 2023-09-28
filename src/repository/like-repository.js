const Like = require("../models/like");
const Crudrepository = require("./crud-repo")

class LikeRepository extends Crudrepository{
    constructor(){
        super(Like)
    }

    async findByIdAndLikeable(data){
        try {
            const like = await Like.findOne(data)
            return like
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = LikeRepository