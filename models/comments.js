const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post model and datatypes, including the user_id foreign key.
class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_username: {
      type: DataTypes.STRING,
      allowNull: false,
        references: {
        model: 'user',
        key: 'username',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
        model: 'posts',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
