import { User } from "@/types/User";

export type APISignIn = {
  User: User;
  access_token: string;
};

export type APISignUp = {
  User: User;
  access_token: string;
};
