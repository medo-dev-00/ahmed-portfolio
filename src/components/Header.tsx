import ThemeToggle from "@/components/theme-toggle";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "نبذة عني" },
  { href: "#skills", label: "المهارات" },
  { href: "#projects", label: "المشاريع" },
  { href: "#contact-me", label: "تواصل معي" },
];

export default function Header() {
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
            text-2xl font-bold
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
        <nav>
          <ul className="flex items-center gap-5 md:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    group relative inline-block pb-1
                    text-sm font-medium
                    text-slate-600
                    transition-colors duration-300
                    hover:text-[#494BD6]

                    dark:text-[#C7C4D7]
                    dark:hover:text-white
                    md:text-lg
                  "
                >
                  {link.label}

                  {/* Underline */}
                  <span
                    className="
                      absolute bottom-0 left-1/2
                      h-0.5 w-full
                      origin-center
                      -translate-x-1/2
                      scale-x-0
                      rounded-full
                      bg-[#494BD6]
                      transition-transform duration-300
                      group-hover:scale-x-100

                      dark:bg-[#B9B8FF]
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
