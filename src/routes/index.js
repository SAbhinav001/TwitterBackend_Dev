const express = require("express")
const router = express.Router()
const v1routes = require("./v1routes/index")


router.use('/v1', v1routes)

module.exports = router

