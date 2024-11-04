import Image from "next/image";
import React from "react";
import github from "../../../public/github.png";

const Footer = () => {
  return (
    <div>
      <Image src={github} alt="github" width={100} height={100} />
    </div>
  );
};

export default Footer;
