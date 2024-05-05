const router = require('express').Router();
// Import the Comments model from the models folder
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');


// If a POST request is made to /api/posts, a new post is created. If there is an error, the function returns with a 400 error. 
router.post('/',withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // If a DELETE request is made to /api/posts/:id, that posts is deleted. 
  router.delete('/:id',withAuth, async (req, res) => {
    try {
      const commentData = await Comments.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

