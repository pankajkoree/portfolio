import Image from "next/image";
import React from "react";
import github from "../../../public/github.jpeg";
import linkedin from "../../../public/linkedin.jpg";
import youtube from "../../../public/youtube.webp";
import sololearn from "../../../public/sololearn.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center top-12 gap-4 text-gray-600 text-xl">
      <div className="relative flex justify-center ">
        <Image src={github} alt="github" className="w-[50px] h-[50px]" />
        <Image src={linkedin} alt="linkedin" className="w-[50px] h-[50px]" />
        <Image src={youtube} alt="youtube" className="w-[50px] h-[50px]" />
        <Image src={sololearn} alt="sololearn" className="w-[50px] h-[50px]" />
      </div>
      <div className="relative flex justify-center ">
        <p>
          © 2024{" "}
          <Link
            className="underline hover:font-bold"
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
