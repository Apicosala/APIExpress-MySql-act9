const PostModel = require('../models/posts.model');

//GET
const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostModel.selectAllPost();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};
const getPostById = async (req, res) => {
    try {
        const { postId } = req.params;
        const [post] = await PostModel.selectPostById(postId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};
const getPostByAutorId = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await PostModel.selectPostByAutorId(autorId);
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
};

//POST
const createPost = async (req, res) => {
    try {
        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

};

//PUT
const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const [result] = await PostModel.updatePostById(postId, req.body);
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

//DELETE
const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const [result] = await PostModel.deletePostById(postId);
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};


module.exports = {
    getAllPosts,
    getPostById,
    getPostByAutorId,
    createPost,
    updatePost,
    deletePost
};