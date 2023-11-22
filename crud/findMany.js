const prisma = require("../library/PrismaClient");
const posts = require("../db/posts");

prisma.post.findMany({});
