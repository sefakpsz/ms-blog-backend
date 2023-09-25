import { PrismaClient } from "@prisma/client";
import { useValidatedParams } from "h3-zod";
import { QueryValidaton } from "../../validation/blog";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = await useValidatedParams(event, QueryValidaton)

  const blog = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  return {
    statusCode: 200,
    blog,
  };
});
