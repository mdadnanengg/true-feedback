import z from "zod";

// creating an object schema
const signInSchema = z.object({
  username: z.string(),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least of 4 characters." })
    .max(128, { message: "Password must not be more than 128 characters." }),
});

export default signInSchema