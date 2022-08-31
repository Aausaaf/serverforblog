const express = require('express')
const { Review } = require('../database/review')

const getreview = async(req,res) => {
   let data = await Review.find()
   res.status(200).send(data) 
}

const postreview = async(req,res) => {
    let {review} = req.body
    if(!review)
    {
        res.send("please Write review")
    }
    let createreview  = await Review.create({
        body:review
    })
   
    res.status(200).send(createreview) 
 }


 module.exports = {
    postreview,
    getreview
 }
 
