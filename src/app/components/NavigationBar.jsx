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
    <div className="relative flex justify-center mt-4">
      <div className="relative flex bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 p-2 xl:p-3 rounded-full shadow-lg">
        <Button
          variant="nav"
          onClick={gotoHome}
          className="mx-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
        >
          Home
        </Button>
        <Button
          variant="nav"
          onClick={gotoProjects}
          className="mx-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
        >
          Projects
        </Button>
        <Button
          variant="nav"
          onClick={gotoAbout}
          className="mx-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
        >
          About
        </Button>
        <Button
          variant="nav"
          onClick={gotoContact}
          className="mx-2 px-4 py-2 text-white dark:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full"
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
