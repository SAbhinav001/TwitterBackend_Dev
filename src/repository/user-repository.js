const User = require("../models/user");
const Crudrepository = require("./crud-repo")

class UserRepository extends Crudrepository{
    constructor(){
        super(User)
    } 
}

module.exports = UserRepository