import { Button } from "@/components/ui/button";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="relative flex justify-center top-4 text-gray-600">
      <div className="relative flex bg-blue-200 p-2 rounded-full text-xl">
        <Button variant="nav" className="hover:scale-125">
          Home
        </Button>
        <Button variant="nav" className="hover:scale-125">
          Projects
        </Button>
        <Button variant="nav" className="hover:scale-125">
          About
        </Button>
        <Button variant="nav" className="hover:scale-125">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
