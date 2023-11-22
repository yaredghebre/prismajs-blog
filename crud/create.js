const prisma = require("../library/PrismaClient");

prisma.post
  .create({
    data: {
      title: "This is my very first post",
      content: "Shit, I hope you'll like it!",
      slug: "this-is-my-very-first-post",
      image: "post.jpeg",
      published: true,
    },
  })
  .then((newPost) => {
    console.log("New Post Created Correctly", newPost);
  })
  .catch((err) => {
    console.error(err);
  });
