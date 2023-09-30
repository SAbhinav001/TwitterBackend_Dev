const  UserService  =require("../services/user-service")

const userService = new UserService()

const signUp = async(req, res)=>{
  try {
    const user = await userService.signUp({
        email : req.body.email,
        password : req.body.password,
        name : req.body.name
    })
    return res.status(200).json({
        success :true,
        data : user,
        message : "successfully signed up",
        err :{}

    })
  } catch (error) {
    return res.status(500).json({
        success :false,
        data : {},
        message : "faild to signed up",
        err :error

    })
  }
}

const logIn = async(req, res)=>{
    try {
       
        const token = await userService.login(req.body)
        
    
        return res.status(200).json({
            success :true,
            data : token,
            message : "successfully login",
            err :{}
    
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            data : {},
            err :error
    
        })
    }
}

module.exports={
signUp,
logIn
}