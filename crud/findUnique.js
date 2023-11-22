const prisma = require("../library/PrismaClient");

prisma.post
  .findUnique({
    select: {
      id: true,
      title: true,
    },
    where: {
      slug: "this-is-my-very-first-post",
    },
  })
  .then((post) => {
    console.log("Request Post Found: ", post);
  })
  .catch((err) => {
    console.error(err);
  });
