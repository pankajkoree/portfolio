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
      <div className="relative flex bg-blue-200 p-1 xl:p-2 rounded-full">
        <Button variant="nav" onClick={gotoHome}>
          Home
        </Button>
        <Button variant="nav" onClick={gotoProjects}>
          Projects
        </Button>
        <Button variant="nav" onClick={gotoAbout}>
          About
        </Button>
        <Button variant="nav" onClick={gotoContact}>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
