import {
  SiReact,
  SiGooglechrome,
  SiPostman,
  SiFigma,
  SiNpm,
  SiVite,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Braces, Network } from "lucide-react";
const frontendSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "CSS3",
  "HTML5",
  "Responsive Design",
  "Tailwind CSS",
  "React Router",
  "UI/UX Principles",
];

const developmentPractices = [
  "JSON",
  "REST APIs",
  "Component-Based Architecture",
  "Form Validation",
  "Clean Code",
  "State Management",
  "Accessibility",
  "API Integration",
];

const tools = [
  {
    name: "React Dev",
    icon: SiReact,
  },
  {
    name: "Chrome Dev",
    icon: SiGooglechrome,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "npm",
    icon: SiNpm,
  },
  {
    name: "Vite",
    icon: SiVite,
  },
  {
    name: "VS Code",
    icon: VscVscode,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Git",
    icon: SiGit,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
    bg-slate-50 px-6 py-26
    transition-colors duration-300
    dark:bg-[#031427]
    md:px-10
  "
    >
      {/* Section Header */}
      <div className="mb-20 flex flex-col items-center">
        <h2
          className="
        text-3xl font-bold
        text-slate-900
        dark:text-[#D3E4FE]
        md:text-4xl
      "
        >
          المهارات والأدوات
        </h2>

        <span className="mt-5 h-1 w-16 rounded-full bg-[#6366F1] dark:bg-[#B9B8FF]" />
      </div>

      {/* Skills Categories */}
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        {/* Frontend Development */}
        <div>
          <div className="mb-8 flex items-center justify-end gap-2">
            <h3
              className="
            text-2xl font-bold
            text-[#494BD6]
            dark:text-[#B9B8FF]
          "
            >
              Frontend Development
            </h3>

            <Braces size={24} className="text-[#494BD6] dark:text-[#B9B8FF]" />
          </div>

          <div className="flex flex-wrap justify-end gap-3">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="
              rounded-lg
              border border-slate-200
              bg-white
              px-5 py-3
              text-base text-slate-600
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#6366F1]
              hover:text-[#494BD6]

              dark:border-[#1C304A]
              dark:bg-[#10243D]
              dark:text-[#C7D5EA]
              dark:shadow-none
              dark:hover:border-[#B9B8FF]
              dark:hover:text-white
            "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Development Practices */}
        <div>
          <div className="mb-8 flex items-center justify-start gap-2">
            <h3
              className="
            text-2xl font-bold
            text-[#494BD6]
            dark:text-[#B9B8FF]
          "
            >
              Development Practices
            </h3>

            <Network size={24} className="text-[#494BD6] dark:text-[#B9B8FF]" />
          </div>

          <div className="flex flex-wrap justify-start gap-3">
            {developmentPractices.map((skill) => (
              <span
                key={skill}
                className="
              rounded-lg
              border border-slate-200
              bg-white
              px-5 py-3
              text-base text-slate-600
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#6366F1]
              hover:text-[#494BD6]

              dark:border-[#1C304A]
              dark:bg-[#10243D]
              dark:text-[#C7D5EA]
              dark:shadow-none
              dark:hover:border-[#B9B8FF]
              dark:hover:text-white
            "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="mx-auto mt-20 max-w-7xl">
        <h3
          className="
        mb-10 text-center text-2xl font-bold
        text-slate-900
        dark:text-[#D3E4FE]
      "
        >
          الأدوات التي أستخدمها
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="
              group flex min-h-24 flex-col
              items-center justify-center
              gap-3 rounded-xl
              border border-slate-200
              bg-white
              shadow-sm
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#6366F1]
              hover:bg-slate-50

              dark:border-[#152B45]
              dark:bg-[#0D2036]
              dark:shadow-none
              dark:hover:border-[#2C3B78]
              dark:hover:bg-[#122945]
            "
              >
                <Icon
                  size={25}
                  className="
                text-[#494BD6]
                transition-transform duration-300
                group-hover:scale-110

                dark:text-[#B9B8FF]
              "
                />

                <span
                  className="
                text-sm
                text-slate-600
                dark:text-[#C7D5EA]
              "
                >
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
