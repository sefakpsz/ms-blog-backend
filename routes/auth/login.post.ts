import { useValidatedBody } from "h3-zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { LoginValidation } from "../../validation/auth";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const { email, password } = await useValidatedBody(event, LoginValidation);

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
