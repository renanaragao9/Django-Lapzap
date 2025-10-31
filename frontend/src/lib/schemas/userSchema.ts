import { z } from "zod";

/* Update User */
export const updateUserSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome obrigatório" })
      .max(100, { message: "Nome muito longo" }),
    email: z
      .email({ message: "Email inválido" })
      .max(244, { message: "Email muito longo" }),
    password: z
      .string()
      .min(6, { message: "Senha obrigatória" })
      .max(80, { message: "Senha muito longa" })
      .refine(
        (value) =>
          !value ||
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/.test(value),
        {
          message:
            "A senha deve conter pelo menos uma letra, um número e um caractere especial",
        }
      ),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
  });

export type UpdateUserData = z.infer<typeof updateUserSchema>;
