"use server";

import { Auth } from "@/src/features/auth";
import { Container } from "@/src/shared/ui";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthPage = async (): Promise<JSX.Element> => {
  const cookieStore = await cookies();
  if (cookieStore.has("Auth")) {
    redirect("/");
  }

  return (
    <main>
      <Container className="flex justify-center">
        <div className="flex flex-col items-center gap-y-6">
          <p className="text-[16px] font-medium text-neutral-50">Вход</p>
          <Auth />
          <p className="text-[14px] font-normal text-neutral-50">
            Нет аккаунта? Зарегистрируйтесь!
          </p>
        </div>
      </Container>
    </main>
  );
};

export default AuthPage;
