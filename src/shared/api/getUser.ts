import { api } from "./api";

export const getUser = async <U>(username: string | null) => {
  if (username) {
    const user = await api<U>(`users?username=${username}`);

    return user;
  }

  return [null];
};
