import z from "zod";

// creating an object schema
const verifySchema = z.object({
  code: z
    .string()
    .length(6, { message: "Verification code must be 6 digits" })
});

export default verifySchema