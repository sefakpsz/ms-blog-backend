import jwt from "jsonwebtoken";

export default defineEventHandler((event) => {
  if (!getRequestURL(event).pathname.startsWith("/blog/")) return;

  const { req } = event;
  const { authorization } = req.headers;

  if (!authorization) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "msblog");
    event.context.user = decoded;
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }
});
