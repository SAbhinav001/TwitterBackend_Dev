const express = require("express")
const connect = require('./config/database')
const apiroutes = require("./routes/index")
const passport = require("passport")
const {passwordAuth} = require("./config/passport-jwt")


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', apiroutes)
app.use(passport.initialize())
passwordAuth(passport)


app.listen(3019, async()=>{
   
    console.log('server started')
    await connect()
    console.log("Db connected")

  
})