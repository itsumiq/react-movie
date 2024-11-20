"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

interface ItemMenuProps {
  children: React.ReactNode
  href: string
}

export const ItemMenu = ({ children, href }: ItemMenuProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-[14px] font-medium ${pathname === href ? "text-neutral-50" : "text-neutral-300"} duration-200 ease-in-out hover:text-neutral-50`}
    >
      {children}
    </Link>
  );
};
