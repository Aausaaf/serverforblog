const express = require('express')
const { getdata, postdata } = require('../handlers/dictionary')

const appRoutes = express.Router()

appRoutes.get("/getdata",getdata)

appRoutes.post("/postdata",postdata)


module.exports ={
    appRoutes
}