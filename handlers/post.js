const { Post } = require("../database/post")
const jwt = require('jsonwebtoken');


const createpostwithoutID = async(req,res) => {

    try {

        const {post} = req.body

        console.log(post)

        if(!post)
        {
            return res.send('Write a blog')
        }

      
        const createpost = await Post({title:post.title,body:post.body})
       
        const result = await createpost.save()

        return res.send(result) 

    } catch (err) {

      return res.status(500).send(err)  

    }
}
const createPost = async(req, res) => {
    try {
        const {token} = req.headers;
        const decoded = jwt.verify(token,"uyfrurr67r76r7" );
        const post = req.body;
        post.user = decoded._id;
        // console.log(post);
        // const newPost = await (await Post.create(post)).populate('user');
        const newPost = await Post.create({title:post.title,body:post.body,user:decoded._id});
        // return res.status(200).send(newPost);
        return res.status(200).send({message: 'Post created successfully', post: newPost});
        // console.log(decoded);
    } catch (err) {
        res.status(500).json(err);
    }
}
const getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find().populate('user');
        return res.status(200).send(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}


const getPostsByUser = async(req, res) => {
    
        // const id = req.params.userId;
        // const posts = await Post.find({user: id});
        const {token} = req.headers;
        console.log(token)
        const decoded = jwt.verify(token, "uyfrurr67r76r7");
        console.log(decoded._id)
        const posts = await Post.find({user: decoded._id}).populate('user');
        if (!posts) {
            return res.status(400).send({message: 'User does not have any posts'});
        }
        return res.status(200).send(posts);
    
}

const deletePost = async(req, res) => {
    try {
        const {token} = req.headers;
        const decoded = jwt.verify(token, "uyfrurr67r76r7");
        const id = req.params.postId;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(400).send({message: 'Post does not exist'});
        }
        if (post.user.toString() !== decoded._id.toString()) {
            return res.status(400).send({message: 'You are not authorized to delete this post'});
        }
        await Post.findByIdAndDelete(id);
        return res.status(200).send({message: 'Post deleted successfully'});
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    createpostwithoutID,
    createPost,
    getAllPosts,
    getPostsByUser,
    deletePost
}