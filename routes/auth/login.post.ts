import { z, zh } from "h3-zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { LoginValidation } from "../validation/auth";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  const bodyValidation = await zh.useSafeValidatedBody(event, LoginValidation);

  if (!bodyValidation.success)
    throw createError({
      statusCode: 400,
      message: "Invalid request body",
    });

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const match = await bcrypt.compare(password, user.password);

  if (!match)
    throw createError({
      statusCode: 401,
      message: "Invailed password",
    });

  delete user.password;
  const token = jwt.sign(user, "msblog");

  return {
    token,
  };
});
