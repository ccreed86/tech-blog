const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post model and datatypes, including the user_username foreign key.
class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
      unique: true,
        references: {
        model: 'user',
        key: 'username',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;
