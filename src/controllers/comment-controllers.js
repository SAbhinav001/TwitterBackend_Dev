const CommentService = require("../services/comment-service")
const commentservice = new CommentService()

const createComment = async(req,res)=>{
    try {
        const response = await commentservice.create(req.query.modelid , req.query.modelName , req.body.userId, req.body.content)
        console.log(response)
        return res.status(200).json({
            success:true,
            message : "successfully created comment",
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
    createComment
}