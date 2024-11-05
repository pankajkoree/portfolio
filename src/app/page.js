"use client";
import Image from "next/image";
import coder from "../../public/coder.jpeg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
        className="h-[120px] xl:h-[200px] w-[120px] xl:w-[200px] rounded-full mt-6 xl:mt-8"
      />

      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
        🟢 Available for new projects
      </p>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 font-serif">
        Crafting seamless, full-stack digital experiences with precision
      </h2>

      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 max-w-3xl font-mono">
        I&apos;m <span className="text-green-600">Pankaj Kori</span> , a{" "}
        <span className="text-yellow-300">full-stack developer</span> with a
        passion for building fast, scalable, and visually engaging web
        applications, combining front-end creativity with back-end efficiency to
        deliver seamless user experiences
      </h3>

      <div className="relative flex flex-col xl:flex-row gap-2 m-4">
        <Button variant="outline" onClick={gotoProjects}>
          Explore my work ⬇️
        </Button>
        <Button variant="outline" onClick={gotoLinkedIn}>
          Let&apos;s connect
        </Button>
      </div>
    </div>
  );
}
