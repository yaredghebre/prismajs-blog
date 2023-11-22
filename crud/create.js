const prisma = require("../library/PrismaClient");

prisma.post
  .create({
    data: {
      title: "This is my very first post",
      content: "Doing bonus exercise!",
      slug: "this-is-my-very-first-post-bonus",
      image: "post.jpeg",
      published: false,
    },
  })
  .then((newPost) => {
    console.log("New Post Created Correctly", newPost);
  })
  .catch((err) => {
    console.error(err);
  });
