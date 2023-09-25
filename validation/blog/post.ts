import { z } from "zod";

export const QueryValidaton = z.object({
  id: z.string(),
});

export const BodyValidaton = z.object({
  title: z.string().nonempty({ message: "Title cannot be sent empty" }),
  thumbnail: z.string().nonempty({ message: "Thumbnail cannot be sent empty" }),
  content: z.string().nonempty({ message: "Content cannot be sent empty" }),
});