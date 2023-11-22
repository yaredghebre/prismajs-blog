const prisma = require("../library/PrismaClient");

prisma.post
  .delete({
    where: {
      id: 8,
    },
  })
  .then((post) => {
    console.log("This post has been deleted:", post);
  })
  .catch((err) => {
    console.error(err);
  });
