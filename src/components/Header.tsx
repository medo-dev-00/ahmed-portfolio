"use client";
import ThemeToggle from "@/components/theme-toggle";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "نبذة عني" },
  { href: "#skills", label: "المهارات" },
  { href: "#projects", label: "المشاريع" },
  { href: "#contact-me", label: "تواصل معي" },
];

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header
      className="
      fixed top-0 left-0 z-50 w-full
      border-b border-slate-200/70
      bg-white/90
      shadow-xl shadow-slate-200/20
      backdrop-blur-md
      transition-colors duration-300

      dark:border-[#1B2B3F]
      dark:bg-[#031427]/90
      dark:shadow-[#01183478]
   
    "
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="
          relative z-50
          text-2xl font-bold text-nowrap
          text-slate-900
          transition-colors duration-300
          hover:text-[#494BD6]
          dark:text-[#D3E4FE]
          dark:hover:text-[#B9B8FF]
        "
        >
          أحمد رضا
        </a>

        {/* Navigation */}
        <nav
          className={`
          fixed left-1/2  top-full max-md:w-full max-md:h-dvh z-40
          flex items-center justify-center
          bg-white/97 backdrop-blur-md
          transition-transform duration-300
          max-md:items-start
          max-md:justify-start
          max-md:pt-10
        dark:bg-[#0f0f18]/95
          max-md:border-t border-t-gray-200
          md:static
          md:z-auto
          md:block
          md:bg-transparent
          md:backdrop-blur-none
          md:dark:bg-transparent
          md:translate-y-0
          ${showLinks ? "max-md:-translate-x-1/2" : "max-md:translate-x-1/2"}
        `}
        >
          <ul
            className="
            flex items-center justify-center gap-7 
            max-md:items-stretch
            max-md:flex-col
            max-md:gap-8
            max-md:w-full
            max-md:px-8
           
          "
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setShowLinks(false)}
                  className="
      group relative block pb-1

    text-2xl font-medium
    text-slate-600
    transition-colors duration-300
    hover:text-[#494BD6]

    dark:text-[#C7C4D7]
    dark:hover:text-white

    md:text-lg
  "
                >
                  {link.label}

                  <span
                    className="
    absolute
    -bottom-2
    right-0
    h-0.5
    w-full/2
    origin-right
    scale-x-0
    rounded-full
    bg-[#494BD6]
    transition-transform
    duration-300
    group-hover:scale-x-100
    max-md:left-1/2
    max-md:right-0
    md:origin-center
    dark:bg-[#B9B8FF]
  "
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="relative z-50 flex items-center gap-5">
          {/* Hamburger */}
          <button
            onClick={() => setShowLinks((prev) => !prev)}
            className="
            cursor-pointer
            transition-transform duration-200
            hover:scale-105
            dark:text-white
            md:hidden
          "
            aria-label="Toggle navigation"
          >
            <FaBars size={25} />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
