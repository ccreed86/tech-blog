const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postsRoutes');
const commentsRoutes = require('./commentsRoutes');

// When a request is made to the /users, /posts, or /comments path, 
//it will be directed to the index.js in the /users, /posts or /comments folder.
router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
