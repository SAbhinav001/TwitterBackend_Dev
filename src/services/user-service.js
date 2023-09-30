
const  { UserRepository} = require("../repository")

class UserService {
    constructor(){
        this.userRepository = new UserRepository()
    }

    async signUp(data){
        try {
            const user = await this.userRepository.create(data)
        return user
        } catch (error) {
            throw error
        }
    }

    async findByEmail(email){
        try {
            
            const user = await this.userRepository.findBy({email})
           
            return user
        } catch (error) {
            throw error
        }
    }

    async login(data){
        try {
       
            const user = await this.findByEmail(data.email)
            
            if(!user){
                throw {
                    meassge : "no user found"
                   }
            }
    
            if(!user.comparePassword(data.password)){
               throw {
                meassge : "incorrect password"
               }
            }
    
            const token = user.genJWT()
           return token
        } catch (error) {
           throw error
        }
    }
}

module.exports = UserService