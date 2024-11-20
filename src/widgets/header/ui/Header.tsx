"use server";

import { getLoginUser } from "@/src/shared/lib";
import { Container } from "@/src/shared/ui";
import { Search } from "lucide-react";
import Link from "next/link";

import { ItemMenu } from "./ItemMenu";

export const Header = async (): Promise<JSX.Element> => {
  const { username, isLogin } = await getLoginUser();

  return (
    <header>
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-x-11">
          <Link href="/" className="title-1-medium">
            movieStorage
          </Link>
          <ul className="flex items-center gap-x-9">
            <li>
              <ItemMenu href="/">Главная</ItemMenu>
            </li>
            <li>
              <ItemMenu href="/films">Фильмы</ItemMenu>
            </li>
            <li>
              <ItemMenu href="/serials">Сериалы</ItemMenu>
            </li>
            <li>
              <ItemMenu href="/anime">Аниме</ItemMenu>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-9">
          <Search size="1.375rem" color="#ffffff" />
          {isLogin
            ? (
                <p className="text-white">{username}</p>
              )
            : (
                <ItemMenu href="/auth">Вход</ItemMenu>
              )}
        </div>
      </Container>
    </header>
  );
};
