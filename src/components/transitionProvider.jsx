"use client";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

function TransitionProvider({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode={"wait"}>
      <div
        key={pathname}
        className={
          "w-full min-h-screen bg-gradient-to-b from-blue-50 to-red-100 "
        }
      >
        <motion.div
          className={"h-screen w-screen fixed bg-black z-40 rounded-b-[100px]"}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={
            "fixed m-auto inset-0 text-white text-8xl cursor-default  z-50 w-fit h-fit"
          }
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname === "/" ? "home" : pathname.replace("/", "")}
        </motion.div>
        <motion.div
          className={
            "h-screen w-screen fixed bg-black z-40 rounded-t-[100px] bottom-0"
          }
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <header className={"h-24"}>
          <Navbar />
        </header>
        <main className={"h-[calc(100vh-6rem)]"}>{children}</main>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
