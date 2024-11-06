"use client";
import Image from "next/image";
import coder from "../../public/coder.jpeg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import linkedin from "../../public/linkedin.png";

export default function Home() {
  const router = useRouter();

  const gotoLinkedIn = () => {
    router.push("https://www.linkedin.com/in/pankaj-koree/");
  };

  const gotoProjects = () => {
    router.push("/projects");
  };

  return (
    <div className="relative flex flex-col items-center mx-auto max-w-full xl:max-w-4xl xl:mt-4 text-center px-4">
      <Image
        src={coder}
        alt="cartoon profile"
        className="h-[120px] xl:h-[250px] w-[120px] xl:w-[250px] rounded-full mt-6 xl:mt-8"
      />

      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
        🟢 Available for new projects
      </p>

      <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mt-4 font-serif">
        Crafting seamless, full-stack digital experiences with precision
      </h2>

      <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-3xl mt-2 max-w-3xl font-mono">
        I&apos;m <span className="text-blue-600">Pankaj Kori</span>, a{" "}
        <span className="text-purple-600">full-stack developer</span> with a
        passion for building fast, scalable, and visually engaging web
        applications, combining front-end creativity with back-end efficiency to
        deliver seamless user experiences.
      </h3>

      <div className="relative flex flex-col xl:flex-row gap-4 m-4 xl:mt-8">
        <Button
          variant="outline"
          onClick={gotoProjects}
          className="relative xl:text-2xl xl:p-6 font-semibold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          Explore my work{" "}
          <span className="ml-2 inline-block animate-bounce">⬇️</span>
        </Button>
        <Button
          variant="outline"
          onClick={gotoLinkedIn}
          className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          <span className="ml-2 inline-block">
            <Image
              src={linkedin}
              alt="linkedin"
              className="w-[25px] h-[25px]"
            />
          </span>
          Let&apos;s connect
        </Button>
      </div>
    </div>
  );
}
