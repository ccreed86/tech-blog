const sequelize = require('../config/connection');
const { User, Posts, Comments } = require('../models');

const userData = require('./userData.json');
const postsData = require('./postsData.json');
const commentsData=require('./commentsData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const posts of postsData) {
  //   await Posts.create({
  //     ...posts,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }
  // for (const comment of commentsData) {
  //   await Comments.create({
  //     ...comment,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

console.log(users)
const posts = await Posts.bulkCreate(postsData)
console.log(posts)

await Comments.bulkCreate(commentsData)
console.log("Fuck YEEEEES!")

  process.exit(0);
};

seedDatabase();