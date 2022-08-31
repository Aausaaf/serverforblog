const express = require('express')
const { getreview, postreview } = require('../handlers/review')

const reviewrouter = express.Router()

reviewrouter.get("/getreview",getreview)
reviewrouter.post("/postreview",postreview)

module.exports={
    reviewrouter
}