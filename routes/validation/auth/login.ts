import { z } from "zod";

export default z.object({
  email: z.string().email().nonempty({ message: "Username cannot be sent empty" }),
  password: z.string().nonempty({ message: "Password cannot be sent empty" }),
});
