import Image from "next/image";
import hero from "../hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#031427] dark:text-slate-100 md:px-10 md:py-30"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-16">
        {/* Content */}
        <div className="w-full max-w-2xl text-right">
          {/* Availability */}
          <div className="mb-6 inline-flex items-center rounded-full bg-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 dark:bg-[#1B2B3F] dark:text-slate-400">
            <span className="mx-2 inline-block size-2 rounded-full bg-[#4EDEA3]" />
            متاح لفرص Frontend و Internships
          </div>

          {/* Heading */}
          <h1 className="my-6 text-4xl font-bold leading-tight tracking-[-0.8px] text-slate-900 sm:text-5xl md:text-[52px] md:leading-[1.25] dark:text-slate-100">
            مطور واجهات أمامية
            <span className="block bg-linear-to-b from-[#6366F1] to-[#494BD6] bg-clip-text text-transparent dark:from-[#C0C1FF] dark:to-[#494BD6]">
              أبني تجارب ويب
            </span>
            حديثة وسريعة
          </h1>

          {/* Description */}
          <p className="mb-7 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg md:text-xl dark:text-slate-400">
            متخصص في تطوير واجهات مستخدم تفاعلية باستخدام React و TypeScript.
            أركز على كتابة كود نظيف، أداء عالٍ، وتجارب مستخدم استثنائية.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-start gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#494BD6] px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5759E5]"
            >
              شاهد مشاريعي
            </a>

            <a
              href="#contact-me"
              className="rounded-lg border border-slate-400 bg-transparent px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:text-[#494BD6] dark:border-[#908FA0] dark:text-slate-100 dark:hover:border-[#B9B8FF] dark:hover:text-[#B9B8FF]"
            >
              تواصل معي
            </a>
          </div>
        </div>

        {/* Code Preview */}
        <div className="w-full max-w-2xl">
          <div
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-300 dark:border-[#1B2B3F] dark:bg-[#0D1E32]"
            style={{
              boxShadow: "0 25px 50px -12px rgba(16, 47, 84, 0.25)",
            }}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between bg-slate-200 px-4 py-3 dark:bg-[#1B2B3F]">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-[#6366F1] dark:bg-[#C0C1FF]" />
                <span className="size-3 rounded-full bg-[#4EDEA3]" />
                <span className="size-3 rounded-full bg-[#FF7B72] dark:bg-[#FFB4AB]" />
              </div>

              <span className="text-sm text-slate-700 dark:text-slate-200">
                PortfolioProject.tsx
              </span>
            </div>

            {/* Image */}
            <div className="relative aspect-video w-full">
              <Image
                src={hero}
                alt="Portfolio project preview"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
