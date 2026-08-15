import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import thumbnail from "../thumbnaildark.jpeg";
const projects = [
  {
    title: "Product Management Dashboard",
    description:
      "لوحة تحكم متكاملة لإدارة المنتجات والمخزون، توفر تحليلات مفصلة، تتبع حالة الطلبات، وإدارة المهام بواجهة مستخدم عصرية وسريعة الاستجابة.",
    image: thumbnail,
    technologies: ["Framer Motion", "Tailwind", "TypeScript", "React"],
    featured: true,
    repo: "https://github.com/medo-dev-00/inventory-management",
    demo: "https://inventorytrue.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
    bg-slate-200 px-6 py-20
    transition-colors duration-300
    dark:bg-[#031427]
    md:px-10
  "
    >
      {/* Heading */}
      <div className="mb-12 flex flex-col items-center">
        <h2
          className="
        text-3xl font-bold
        text-slate-900
        dark:text-[#D3E4FE]
        md:text-4xl
      "
        >
          مشاريعي
        </h2>

        <span className="mt-4 h-1 w-16 rounded-full bg-[#6366F1] dark:bg-[#B9B8FF]" />
      </div>

      <div className="mx-auto max-w-7xl space-y-8">
        {projects.map((project) => {
          const isFeatured = project.featured;

          return (
            <article
              key={project.title}
              className={
                isFeatured
                  ? `
                grid grid-cols-2  overflow-hidden rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg

                dark:border-[#1C304A]
                dark:bg-[#10243D]
                dark:shadow-none
              `
                  : `
                overflow-hidden rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg

                dark:border-[#1C304A]
                dark:bg-[#10243D]
                dark:shadow-none
              `
              }
            >
              {/* Content */}
              <div
                className={
                  isFeatured
                    ? "flex flex-col justify-center px-6 py-8 text-right sm:px-8 md:px-10 lg:px-12"
                    : "px-6 py-7 text-right sm:px-8"
                }
              >
                {/* Featured */}
                {isFeatured && (
                  <span
                    className="
                  mb-5 self-end rounded-md
                  bg-indigo-100
                  px-3 py-1
                  text-xs text-[#494BD6]

                  dark:bg-[#2C3B78]
                  dark:text-[#D3E4FE]
                "
                  >
                    مشروع مميز
                  </span>
                )}

                {/* Title */}
                <h3
                  className={
                    isFeatured
                      ? `
                    mb-4 text-2xl font-bold
                    text-slate-900
                    md:text-3xl

                    dark:text-[#D3E4FE]
                  `
                      : `
                    mb-3 text-xl font-semibold
                    text-slate-900

                    dark:text-[#D3E4FE]
                  `
                  }
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                mb-6 text-sm leading-7
                text-slate-600

                dark:text-[#AEB8C9]
              "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7 flex flex-wrap justify-end gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                    rounded-md
                    bg-slate-100
                    px-3 py-1.5
                    text-xs text-slate-600
                    transition-colors

                    dark:bg-[#06182D]
                    dark:text-[#C7D5EA]
                  "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center justify-end gap-5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  flex items-center gap-2
                  text-sm
                  text-slate-600
                  transition-colors

                  hover:text-[#494BD6]

                  dark:text-[#C7C4D7]
                  dark:hover:text-[#B9B8FF]
                "
                  >
                    عرض مباشر
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  flex items-center gap-2
                  text-sm
                  text-slate-600
                  transition-colors

                  hover:text-[#494BD6]

                  dark:text-[#C7C4D7]
                  dark:hover:text-[#B9B8FF]
                "
                  >
                    Repository
                    <Code2 size={17} />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
                className={
                  isFeatured
                    ? "relative min-h-90 md:min-h-110 h-100"
                    : "relative"
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={`${isFeatured ? "(max-width: 768px) 100vw, 50vw" : "100vw"} `}
                  className="object-contain"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
