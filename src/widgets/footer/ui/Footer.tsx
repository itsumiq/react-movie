import { Container } from "@/src/shared/ui";
import { Github } from "lucide-react";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container className="flex items-center justify-between">
        <Link href="/contacts">
          <p className="text-[14px] text-neutral-300 duration-300 ease-in-out hover:text-neutral-50">
            Контакты
          </p>
        </Link>
        <a className="cursor-pointer" href="">
          <Github
            size="22px"
            className="text-neutral-300 duration-300 ease-in-out hover:text-neutral-50"
          />
        </a>
      </Container>
    </footer>
  );
};
