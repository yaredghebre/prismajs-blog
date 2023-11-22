const prisma = require("../library/PrismaClient");

prisma.post
  .update({
    where: {
      id: 8,
    },
    data: {
      content: "This content has been edited",
    },
  })
  .then((post) => {
    console.log("The following post has been modified: ", post);
  })
  .catch((err) => {
    console.error(err);
  });
