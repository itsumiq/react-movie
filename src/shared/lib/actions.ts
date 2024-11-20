"use server";

import type { UserOptions } from "./types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "../api";

export const setLoginUser = async (formState: string | null, formData: FormData) => {
  const cookiesStorage = await cookies();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const response = await fetch(`http://localhost:3001/users?username=${username}`);

  const user: UserOptions | undefined = (await response.json())[0];

  if (!user || password !== user.password) {
    return "Пользователь не найден!";
  }

  cookiesStorage.set("Auth", password, { httpOnly: true, sameSite: "lax" });
  cookiesStorage.set("Username", username);
  redirect("/");
};

export const getLoginUser = async () => {
  const cookiesStorage = await cookies();
  const usernameCookie = cookiesStorage.get("Username");
  const passwordCookie = cookiesStorage.get("Auth");

  const username = usernameCookie ? usernameCookie.value : null;
  const password = passwordCookie ? passwordCookie.value : null;
  const user = (await getUser<UserOptions[]>(username))[0];

  if (user && user.username === username && user.password === password) {
    return { username, isLogin: true };
  }

  return { username: null, isLogin: false };
};
