const User = require("../models/user");
const Crudrepository = require("./crud-repo")

class UserRepository extends Crudrepository{
    constructor(){
        super(User)
    } 

    async findBy(data){
        const user = await User.findOne(data)
        return user
    }
}

module.exports = UserRepository