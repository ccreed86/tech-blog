const User = require('./user');
const Posts = require('./posts');
const Comments = require('./comments')

// Creates a relationship between User and Posts model, with the User having a "has many" relationship with Posts model.
User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and Posts model, with a "belongs to" relationship of the Posts to the User.
Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

// Creates a relationship between Posts and Comments model, with the Post having a "has many" relationship with Comments model.
Posts.hasMany(Comments, {
  foreignKey: 'post_id'
});

// Creates a relationship between Comments and Posts model, with a "belongs to" relationship of the Comments to the Posts.
Comments.belongsTo(Posts, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Posts, Comments };
