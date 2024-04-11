import { z } from "zod";

export const createUserSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const createUserSignUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
});

export type createUserSignInData = z.infer<typeof createUserSignInSchema>;
export type createUserSignUpData = z.infer<typeof createUserSignUpSchema>;
