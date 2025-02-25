import z from "zod";

// creating an object schema
const messageSchema = z.object({
  content: z
  .string()
  .min(10, "Content must be at least 10 characters")
  .max(300, "Content must be not more then 300 characters")
  
});

export default messageSchema