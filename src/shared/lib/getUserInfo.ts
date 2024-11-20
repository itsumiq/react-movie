"use server";

import { cookies } from "next/headers";

export const getUserInfo = async () => {
  const cookiesStorage = await cookies();
  const username = cookiesStorage.get("Username") as string | undefined;
  const password = cookiesStorage.get("Auth") as string | undefined;

  if (!username || !password) {
    return { username: null, password: null };
  }

  return { username, password };
};
