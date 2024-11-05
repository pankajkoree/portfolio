"use client";

import Image from "next/image";
import React from "react";
import github from "../../../public/github.jpeg";
import linkedin from "../../../public/linkedin.jpg";
import youtube from "../../../public/youtube.webp";
import sololearn from "../../../public/sololearn.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const gotoGithub = () => {
    router.push("https://github.com/pankajkoree");
  };

  const gotoLinkedIn = () => {
    router.push("https://www.linkedin.com/in/pankaj-koree/");
  };

  const gotoSololearn = () => {
    router.push("https://www.sololearn.com/en/profile/13478902");
  };

  const gotoYoutube = () => {
    router.push("https://www.youtube.com/@pankajkori");
  };

  return (
    <div className="relative flex flex-col justify-center top-2 xl:top-4 gap-2 xl:gap-4 text-gray-600 text-[16px] xl:text-xl">
      <div className="relative flex justify-center ">
        <Image
          src={github}
          alt="github"
          className="w-[36px] xl:w-[50px] h-[36px] xl:h-[50px] hover:cursor-pointer"
          onClick={gotoGithub}
        />
        <Image
          src={linkedin}
          alt="linkedin"
          className="w-[36px] xl:w-[50px] h-[36px] xl:h-[50px] hover:cursor-pointer"
          onClick={gotoLinkedIn}
        />
        <Image
          src={youtube}
          alt="youtube"
          className="w-[36px] xl:w-[50px] h-[36px] xl:h-[50px] hover:cursor-pointer"
          onClick={gotoYoutube}
        />
        <Image
          src={sololearn}
          alt="sololearn"
          className="w-[36px] xl:w-[50px] h-[36px] xl:h-[50px] hover:cursor-pointer"
          onClick={gotoSololearn}
        />
      </div>
      <div className="relative flex justify-center ">
        <p>
          © 2024{" "}
          <Link
            className="underline hover:text-blue-500"
            href="https://github.com/pankajkoree"
          >
            Pankaj Kori
          </Link>{" "}
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
