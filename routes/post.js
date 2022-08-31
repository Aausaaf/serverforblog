const express = require('express');
const { createpostwithoutID, getAllPosts, getPostsByUser, createPost, deletePost } = require('../handlers/post');


const postrouter = express.Router();

postrouter.post('/createpostwithoutid',createpostwithoutID)
postrouter.get('/getallpost',getAllPosts)
postrouter.get('/getpostbyuser',getPostsByUser)
postrouter.post('/createpostwithid',createPost)
postrouter.delete("/:postId",deletePost)

module.exports={postrouter}