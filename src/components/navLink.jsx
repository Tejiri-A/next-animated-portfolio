"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@sglara/cn";

function NavLink({ link }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={link.url}
      className={cn(
        "rounded p-1",
        pathName === link.url ? "bg-black text-white" : null,
      )}
    >
      {link.label}
    </Link>
  );
}

export default NavLink;
