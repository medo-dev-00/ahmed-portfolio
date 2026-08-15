import { Monitor, Code2 } from "lucide-react";
import { TbApi } from "react-icons/tb";
import { PiDevices } from "react-icons/pi";

const about = [
  {
    title: "UI Development",
    description:
      "تحويل التصميمات المعقدة إلى واجهات مستخدم بكسل-مثالية باستخدام أحدث تقنيات الويب.",
    icon: Monitor,
  },
  {
    title: "React & TS",
    description:
      "بناء تطبيقات قابلة للتوسع والصيانة باستخدام React مع قوة TypeScript.",
    icon: Code2,
  },
  {
    title: "Responsive Design",
    description:
      "تصميم واجهات تتكيف بسلاسة مع جميع أحجام الشاشات والأجهزة لضمان تجربة مستخدم متسقة.",
    icon: PiDevices,
  },
  {
    title: "REST APIs",
    description:
      "ربط الواجهات الأمامية بالخوادم بكفاءة واستهلاك البيانات بشكل آمن وسريع.",
    icon: TbApi,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
    bg-slate-200 px-6 py-26
    transition-colors duration-300
    dark:bg-[#000F21]
  "
    >
      {/* Section Title */}
      <div className="mb-16 flex flex-col items-center">
        <h2
          className="
        text-3xl font-semibold
        text-slate-900
        dark:text-[#D3E4FE]
      "
        >
          نبذة عني
        </h2>

        <span className="mt-4 h-1 w-16 rounded-full bg-[#6366F1] dark:bg-[#B9B8FF]" />
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {about.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
            group rounded-xl
            bg-white
            px-7 py-6
            shadow-sm
            transition-all duration-300
            hover:-translate-y-2
            hover:bg-slate-100

            dark:bg-[#10243D]
            dark:shadow-none
            dark:hover:bg-[#142B48]
          "
            >
              {/* Icon */}
              <div className="mb-5 flex">
                <div
                  className="
                flex h-12 w-12 items-center justify-center
                rounded-lg
                bg-indigo-100
                text-[#494BD6]
                transition-transform duration-300
                group-hover:scale-110

                dark:bg-[#2C3B78]
                dark:text-[#B9B8FF]
              "
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>
              </div>

              {/* Content */}
              <h3
                className="
              mb-3 text-xl font-semibold
              text-slate-900
              dark:text-[#D3E4FE]
            "
              >
                {item.title}
              </h3>

              <p
                className="
              text-sm leading-7
              text-slate-600
              dark:text-[#AEB8C9]
            "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
