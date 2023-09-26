import Prisma from '@prisma/client';
import { useValidatedParams } from "h3-zod";
import { QueryValidaton } from "../../validation/blog";

const { PrismaClient } = Prisma;

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { id } = await useValidatedParams(event, QueryValidaton);

  await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  return {
    statusCode: 200,
    message: "Post deleted",
  };
});
