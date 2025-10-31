"use client";

import { z } from "zod";

/* Sign In */
export const signInSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha obrigatória" }),
});

export type SignInData = z.infer<typeof signInSchema>;

/* Sign Up */
export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome obrigatório" })
    .max(100, { message: "Nome muito longo" }),
  email: z.email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha obrigatória" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, {
      message:
        "A senha deve conter pelo menos uma letra, um número e um caractere especial",
    }),
});

export type SignUpData = z.infer<typeof signUpSchema>;
