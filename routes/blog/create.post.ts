import { PrismaClient } from "@prisma/client";
import { useValidatedBody, zh } from "h3-zod";
import { BodyValidaton } from "../../validation/blog";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { thumbnail, title, content } = await useValidatedBody(
    event,
    BodyValidaton
  );

  try {
    await prisma.post.create({
      data: {
        thumbnail,
        title,
        content,
        authorId: event.context.user.id,
      },
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return {
    statusCode: 200,
    message: "Post created successfully",
  };
});
