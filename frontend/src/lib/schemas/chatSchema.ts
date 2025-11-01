import { z } from "zod";

/* New Chat */
export const newChatSchema = z.object({
  email: z.email({ message: "Email inválido" }),
});

export type NewChatData = z.infer<typeof newChatSchema>;
