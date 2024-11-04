"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NavigationBar = () => {
  const router = useRouter();

  const gotoHome = () => {
    router.push("/");
  };

  const gotoProjects = () => {
    router.push("/projects");
  };
  const gotoAbout = () => {
    router.push("/about");
  };
  const gotoContact = () => {
    router.push("/contact");
  };
  return (
    <div className="relative flex justify-center top-2 text-gray-600">
      <div className="relative flex bg-blue-200 p-2 rounded-full text-xl">
        <Button variant="nav" className="hover:scale-125" onClick={gotoHome}>
          Home
        </Button>
        <Button
          variant="nav"
          className="hover:scale-125"
          onClick={gotoProjects}
        >
          Projects
        </Button>
        <Button variant="nav" className="hover:scale-125" onClick={gotoAbout}>
          About
        </Button>
        <Button variant="nav" className="hover:scale-125" onClick={gotoContact}>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
