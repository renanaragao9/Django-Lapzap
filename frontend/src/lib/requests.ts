import { SignInData, SignUpData } from "@/lib/schemas/authSchema";
import { newChatData } from "@/lib/schemas/chatSchema";
import { api } from "@/lib/api";
import { APISignIn, APISignUp } from "@/types/Auth";
import { APIUpdateUser } from "@/types/User";
import { APICreateChat, APIDeleteChat, APIGetChats } from "@/types/Chat";
import {
  APICreateMessage,
  APIDeleteMessage,
  APIGetMessages,
} from "@/types/Message";

/* Auth / User */
export const signIn = async (data: SignInData) => {
  return await api<APISignIn>({
    endpoint: "accounts/signin",
    method: "POST",
    data,
    withAuth: false,
  });
};

export const signUp = async (data: SignUpData) => {
  return await api<APISignUp>({
    endpoint: "accounts/signup",
    method: "POST",
    data,
    withAuth: false,
  });
};

export const updateUser = async (data: FormData) => {
  return await api<APIUpdateUser>({
    endpoint: "accounts/me",
    method: "PUT",
    data,
    withAuth: true,
    withAttachment: true,
  });
};

/* Chat */
export const getChats = async () => {
  return await api<APIGetChats>({
    endpoint: "chats/",
    method: "GET",
    withAuth: true,
  });
};

export const createChat = async (data: newChatData) => {
  return await api<APICreateChat>({
    endpoint: "chats/",
    method: "POST",
    data,
    withAuth: true,
  });
};

export const deleteChat = async (chat_id: number) => {
  return await api<APIDeleteChat>({
    endpoint: `chats/${chat_id}`,
    method: "DELETE",
    withAuth: true,
  });
};

export const getChatMessages = async (chat_id: number) => {
  return await api<APIGetMessages>({
    endpoint: `chats/${chat_id}/messages`,
    method: "GET",
    withAuth: true,
  });
};

export const createChatMessage = async (chat_id: number, data: FormData) => {
  return await api<APICreateMessage>({
    endpoint: `chats/${chat_id}/messages`,
    method: "POST",
    data,
    withAuth: true,
    withAttachment: true,
  });
};

export const deleteChatMessage = async (
  chat_id: number,
  message_id: number
) => {
  return await api<APIDeleteMessage>({
    endpoint: `chats/${chat_id}/messages/${message_id}`,
    method: "DELETE",
    withAuth: true,
  });
};
