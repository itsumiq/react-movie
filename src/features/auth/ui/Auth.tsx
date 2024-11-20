"use client";

import { setLoginUser } from "@/src/shared/lib";
import { Button, Input } from "@/src/shared/ui";
import Form from "next/form";
import { useActionState } from "react";

export const Auth = (): JSX.Element => {
  const [message, formAction] = useActionState(setLoginUser, null);

  return (
    <Form className="flex flex-col items-center gap-y-4" action={formAction}>
      <div className="flex flex-col items-center gap-y-3">
        {message && (
          <div className="flex h-[34px] w-full items-center rounded-lg bg-red-950 px-2">
            <p className="text-[14px] text-red-400">{message}</p>
          </div>
        )}

        <Input type="text" placeholder="Имя пользователя" tint="outline" name="username" />
        <Input type="password" placeholder="Пароль" tint="outline" name="password" />
      </div>
      <Button w="full" h="base" tint="brand" rounded="md" type="submit">
        Продолжить
      </Button>
    </Form>
  );
};
