import z from "zod";

// creating an object schema
const acceptMessageSchema = z.object({
  acceptMessages: z.boolean(),
});

export default acceptMessageSchema