import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const blogs = await prisma.post.findMany();

  return {
    statusCode: 200,
    blogs,
  };
});
