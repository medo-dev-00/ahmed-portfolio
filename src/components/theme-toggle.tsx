"use client";

import { Button } from "@base-ui/react";
import useTheme from "next-theme";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className="relative flex items-center cursor-pointer size-8 rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute text-white left-1/2 top-1/2 p-1 -translate-1/2 size-full rotate-90 scale-0 dark:scale-100 dark:rotate-0 transition-all" />
      <FaMoon className="absolute left-1/2 top-1/2 p-1 -translate-1/2 size-full dark:rotate-90 dark:scale-0 scale-100 rotate-0 transition-all" />
    </Button>
  );
}
