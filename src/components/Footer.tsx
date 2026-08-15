import {
  FaGithub,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const footerLinks = [
  {
    href: "#home",
    label: "الرئيسية",
  },
  {
    href: "#projects",
    label: "المشاريع",
  },
  {
    href: "#contact",
    label: "تواصل معي",
  },
];

const socialLinks = [
  {
    href: "https://github.com/medo-dev-00",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.tiktok.com/@mdeo_dev",
    label: "TikTok",
    icon: FaTiktok,
  },
  {
    href: "https://www.youtube.com/@medo-dev-00",
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: "https://wa.me/201273826818",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
  {
    href: "mailto:medo.reda.dev@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-white
        px-6 py-16
        transition-colors duration-300
        dark:border-[#1C304A]
        dark:bg-[#10243D]
        md:px-10
      "
    >
      <div
        className="
          mx-auto flex max-w-7xl
          flex-col-reverse
          items-center
          justify-between
          gap-10
          md:flex-row
        "
      >
        {/* Navigation + Social */}
        <div className="flex flex-col items-center gap-6 md:items-start">
          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      text-sm
                      text-slate-600
                      transition-colors duration-300
                      hover:text-[#494BD6]

                      dark:text-[#C7C4D7]
                      dark:hover:text-[#B9B8FF]
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="
                    flex size-10 items-center justify-center
                    rounded-lg
                    bg-slate-100
                    text-[#494BD6]
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:bg-[#6366F1]
                    hover:text-white

                    dark:bg-[#0B1D32]
                    dark:text-[#B9B8FF]
                    dark:hover:bg-[#2C3B78]
                    dark:hover:text-white
                  "
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <h2
            className="
              mb-2 text-2xl font-bold
              text-[#494BD6]
              dark:text-[#B9B8FF]
            "
          >
            أحمد رضا
          </h2>

          <p
            className="
              text-sm
              text-slate-500
              dark:text-[#C7C4D7]
            "
          >
            © 2026 أحمد رضا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
