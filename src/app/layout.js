"use client";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference =
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkModePreference) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <html lang="en">
      <body
        className={`font-poppins ${
          isDarkMode ? "dark:bg-gray-900 dark:text-gray-100" : ""
        }`}
      >
        <NavigationBar />
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md transition"
        >
          {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        {children}
        <Footer />
      </body>
    </html>
  );
}
