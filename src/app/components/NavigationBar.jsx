import { Button } from "@/components/ui/button";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="relative flex justify-center top-4 text-gray-500">
      <div className="relative flex bg-red-400 p-2">
        <Button variant="nav">Home</Button>
        <Button variant="nav">Projects</Button>
        <Button variant="nav">About</Button>
        <Button variant="nav">Contact</Button>
      </div>
    </div>
  );
};

export default NavigationBar;
