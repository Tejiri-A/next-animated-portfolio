"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/navLink";
import { motion } from "motion/react";

const links = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/contact", label: "Contact" },
  { url: "/portfolio", label: "Portfolio" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        // parent animates first, then animates the children
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav
      className={
        "h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
      }
    >
      {/*DESKTOP NAVIGATION LINKS*/}
      <div className={"hidden md:flex gap-4 w-1/3"}>
        {links.map((link) => (
          <NavLink link={link} key={link.label} />
        ))}
      </div>

      {/*LOGO*/}
      <div className={"md:hidden lg:flex xl:w-1/3 xl:justify-center"}>
        <Link
          href={"/"}
          className={
            "text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          }
        >
          <span className={"text-white mr-1"}>Lama</span>
          <span
            className={
              "w-12 h-8 rounded bg-white text-black flex items-center justify-center"
            }
          >
            Dev
          </span>
        </Link>
      </div>

      {/*SOCIAL MEDIA LINKS (tablet and desktop only)*/}
      <div className={"hidden md:flex gap-4 w-1/3 justify-end"}>
        <Link href={"https://github.com/Tejiri-A"} target={"_blank"}>
          <Image src={"/github.png"} alt={""} width={24} height={24} />
        </Link>
        <Link href={"#"} target={"_blank"}>
          <Image src={"/pinterest.png"} alt={""} width={24} height={24} />
        </Link>
        <Link href={"#"} target={"_blank"}>
          <Image src={"/dribbble.png"} alt={""} width={24} height={24} />
        </Link>
        <Link href={"#"} target={"_blank"}>
          <Image src={"/instagram.png"} alt={""} width={24} height={24} />
        </Link>
        <Link href={"#"} target={"_blank"}>
          <Image src={"/facebook.png"} alt={""} width={24} height={24} />
        </Link>
        <Link href={"#"} target={"_blank"}>
          <Image src={"/linkedin.png"} alt={""} width={24} height={24} />
        </Link>
      </div>

      {/*RESPONSIVE MENU*/}
      <div className={"md:hidden"}>
        <button
          className={"w-10 h-8 flex flex-col justify-between z-50 relative "}
          type={"button"}
          aria-label={isOpen ? "close menu" : "open menu"}
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
          aria-controls={"menu"}
        >
          <motion.div
            animate={isOpen ? "opened" : "closed"}
            variants={topVariants}
            className={"w-10 h-1 rounded bg-black origin-left"}
          ></motion.div>
          <motion.div
            animate={isOpen ? "opened" : "closed"}
            variants={centerVariants}
            className={"w-10 h-1 rounded bg-black"}
          ></motion.div>
          <motion.div
            animate={isOpen ? "opened" : "closed"}
            variants={bottomVariants}
            className={"w-10 h-1 rounded bg-black origin-left"}
          ></motion.div>
        </button>

        {/*  MENU LIST*/}
        {isOpen ? (
          <motion.div
            id={"menu"}
            variants={listVariants}
            initial="closed"
            animate="opened"
            className={
              "absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            }
          >
            {links.map((link) => (
              <motion.div key={link.label} variants={listItemVariants}>
                <Link href={link.url}>{link.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
