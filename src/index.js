const express = require("express")
const connect = require('./config/database')
const apiroutes = require("./routes/index")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', apiroutes)


app.listen(3019, async()=>{
   
    console.log('server started')
    await connect()
    console.log("Db connected")

})