const router = require('express').Router();
// Import the Posts model from the models folder
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');


// If a POST request is made to /api/posts, a new post is created. If there is an error, the function returns with a 400 error. 
router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Posts.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


// If a DELETE request is made to /api/posts/:id, that posts is deleted. 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
