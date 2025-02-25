import z from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .min(20, "Username must be no more then 20 characters")
  .regex(/^[a-zA-Z0-9_]{3,20}$/, "Username must not contain special character")

// creating an object schema
const signupSchema = z.object({
  username: usernameValidation,
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must be not more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least of 6 characters" })
    .max(1024, { message: "Password must be not more than 1024 characters" }),
});

export default signupSchema