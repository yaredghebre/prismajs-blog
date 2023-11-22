const prisma = require("../library/PrismaClient");

prisma.post
  .findMany({
    // select: {
    //   id: true,
    //   title: true,
    // },
    where: {
      // published: true,
      content: {
        contains: "Shit",
      },
    },
  })
  .then((posts) => {
    console.log("Posts found: ", posts);
  })
  .catch((err) => {
    console.error(err);
  });
