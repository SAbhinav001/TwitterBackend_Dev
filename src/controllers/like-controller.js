const LikeService = require("../services/like-service")
const likeService = new LikeService()

const toggleLike = async(req,res)=>{
    try {
        const response = await likeService.toggleLike(req.query.modelid , req.query.modelName , req.body.userId)
        console.log(response)
        return res.status(200).json({
            success:true,
            message : "successfully",
            data :response,
            err :{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message : "something went wrong",
            data :{},
            err :error
        })
    }

}

module.exports={
    toggleLike
}