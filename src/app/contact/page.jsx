"use client";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import * as emailjs from "@emailjs/browser";



function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <motion.div
      className={"h-full"}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className={
          "h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
        }
      >
        {/*  TEXT CONTAINER*/}
        <div
          className={
            "h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl"
          }
        >
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/*  FORM CONTAINER*/}
        <form
          onSubmit={sendEmail}
          className={
            "h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-2"
          }
          ref={form}
        >
          <span>Dear Lama Dev,</span>
          <textarea
            rows="6"
            className={
              "bg-transparent border-b-2 border-b-black outline-none resize-none"
            }
            name={"user_email"}
          ></textarea>
          <span>My email address is:</span>
          <input
            type="text"
            className={"bg-transparent border-b-2 border-b-black outline-none "}
            name={"user_email"}
          />
          <span>Regards</span>
          <button
            type={"submit"}
            className={"bg-purple-200 rounded font-semibold text-gray-600 p-4"}
          >
            Send
          </button>
          {success && (
            <span className={"text-green-600 font-semibold"}>
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className={"text-red-600 font-semibold"}>
              Something went wrong.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
