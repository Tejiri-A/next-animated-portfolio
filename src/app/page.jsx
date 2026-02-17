import Image from "next/image";

const Homepage = () => {
  return (
    <div
      className={
        "flex flex-col h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row"
      }
    >
      {/*  IMAGE CONTAINER*/}
      <div className={"h-1/2 relative lg:h-full lg:w-1/2"}>
        <Image
          src={"/hero.png"}
          alt={"hero img"}
          fill
          className={"object-contain"}
        />
      </div>
      {/*  TEXT CONTAINER*/}
      <div
        className={
          "h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2"
        }
      >
        {/*  TITLE*/}
        <h1 className={"text-4xl font-bold md:text-6xl"}>
          Crafting Digital Experiences, Designing Tomorrow
        </h1>
        {/*  DESCRIPTION*/}
        <p className={""}>
          Welcome to my creative portfolio. I am a passionate developer and
          designer crafting beautiful digital experiences. Explore my work and
          let us create something amazing together.
        </p>
        <div className={"flex gap-4 w-full"}>
          <button
            className={"p-4 rounded-lg ring-1 ring-black bg-black text-white"}
          >
            View My Work
          </button>
          <button className={"p-4 rounded-lg ring-1 ring-black"}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
