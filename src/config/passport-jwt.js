const JWT = require("passport-jwt")
const User = require("../models/user")

const JwtStrategy = JWT.Strategy
const ExtractJwt = JWT.ExtractJwt

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter-secret'
}
//to validate the user----jwt payload-------token
const passwordAuth = (passport)=>{
    passport.use(new JwtStrategy(opts, async(jwt_payload, done)=>{
        const user = await User.findById(jwt_payload.id)
        if(!user){
            done(null,false)
        }
        else{
            done(null,user)
        }
    }));
}

module.exports = {
    passwordAuth
}