const mongoose = require('mongoose')
const bcrypt = require( "bcrypt");
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
        email:{
            type: String,
            required: true,
            unique:true,
        },
        password:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true, 
        }

},{timestamps:true})

userSchema.pre('save', function(next){
    const user =this
    const  SALT =  bcrypt.genSaltSync(10)
    const encryptpassword = bcrypt.hashSync(user.password , SALT)
    user.password = encryptpassword;
    next()
})

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password)
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id , email: this.email}, 'twitter-secret', {expiresIn: '1d'} )
}

const User = mongoose.model('User', userSchema)

module.exports = User