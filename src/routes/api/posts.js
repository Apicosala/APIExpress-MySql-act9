const router = require('express').Router();

const PostsControllers = require('../../controllers/posts.controllers');

router.get('/', PostsControllers.getAllPosts);
router.get('/:postId', PostsControllers.getPostById);
router.get('/autor/:autorId', PostsControllers.getPostByAutorId)
router.post('/', PostsControllers.createPost);
router.put('/:postId', PostsControllers.updatePost);
router.delete('/:postId', PostsControllers.deletePost);


module.exports = router;