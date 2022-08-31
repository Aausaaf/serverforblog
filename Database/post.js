const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Post = mongoose.model('POST',PostSchema)

module.exports = {Post}