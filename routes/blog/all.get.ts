import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const blogs = await prisma.post.findMany();

  return {
    statusCode: 200,
    blogs,
  };
});
