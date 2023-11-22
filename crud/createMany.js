const prisma = require("../library/PrismaClient");
const postsList = require("../db/posts");

prisma.post
  .createMany({
    data: postsList.map((post) => ({
      title: post.title,
      content: post.content,
      slug: post.slug,
      image: post.image,
      published: post.published,
    })),
  })
  .then((result) => {
    console.log("New Posts Created", result);
  })
  .catch((err) => {
    console.error(err);
  });
