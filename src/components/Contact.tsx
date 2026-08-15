"use client";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function ContactForm() {
  const [info, setInfo] = useState<Form>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  async function handleSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      toast.error("من فضلك املأ جميع الحقول");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "فشل إرسال الرسالة");
        return;
      }

      toast.success("تم إرسال الرسالة بنجاح");

      setInfo({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("حدث خطأ أثناء إرسال الرسالة");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section
      id="contact-me"
      dir="rtl"
      className="
    bg-slate-50 px-5 py-20
    transition-colors duration-300
    dark:bg-[#000F21]
  "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-right">
          <h2
            className="
          text-3xl font-bold
          text-slate-900
          dark:text-[#D3E4FE]
          md:text-4xl
        "
          >
            تواصل معي
          </h2>

          <p
            className="
          mt-3 max-w-xl
          text-sm leading-7
          text-slate-600
          dark:text-[#AEB8C9]
        "
          >
            لديك فكرة أو مشروع تريد مناقشته؟ أرسل لي رسالة وسأكون سعيدًا
            بالتواصل معك.
          </p>
        </div>

        {/* Form */}
        <div
          className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-colors duration-300
        sm:p-8
        md:p-10

        dark:border-[#1C304A]
        dark:bg-[#10243D]
        dark:shadow-none
      "
        >
          <form className="space-y-6" onSubmit={handleSubmission}>
            {/* Name & Email */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
          mb-2 block text-sm font-medium
          text-slate-900
          dark:text-[#D3E4FE]
        "
                >
                  الاسم
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="
            absolute right-4 top-1/2
            -translate-y-1/2
            text-slate-400
            dark:text-[#71809A]
          "
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="أدخل اسمك"
                    value={info?.name}
                    onChange={(e) =>
                      setInfo((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="
            w-full
            rounded-lg
            border border-slate-200
            bg-slate-50
            py-3
            pr-11
            pl-4
            text-lg
            text-slate-900
            outline-none
            placeholder:text-slate-400
            transition-colors

            focus:border-[#6366F1]
            focus:ring-2
            focus:ring-[#6366F1]/10

            dark:border-[#1C304A]
            dark:bg-[#06182D]
            dark:text-[#D3E4FE]
            dark:placeholder:text-[#71809A]
            dark:focus:border-[#B9B8FF]
            dark:focus:ring-[#B9B8FF]/10
          "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
          mb-2 block text-sm font-medium
          text-slate-900
          dark:text-[#D3E4FE]
        "
                >
                  البريد الإلكتروني
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="
            absolute right-4 top-1/2
            -translate-y-1/2
            text-slate-400
            dark:text-[#71809A]
          "
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={info?.email}
                    onChange={(e) =>
                      setInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="
            w-full
            rounded-lg
            border border-slate-200
            bg-slate-50
            py-3
            pr-11
            pl-4
            text-lg
            text-slate-900
            outline-none
            placeholder:text-slate-400
            transition-colors

            focus:border-[#6366F1]
            focus:ring-2
            focus:ring-[#6366F1]/10

            dark:border-[#1C304A]
            dark:bg-[#06182D]
            dark:text-[#D3E4FE]
            dark:placeholder:text-[#71809A]
            dark:focus:border-[#B9B8FF]
            dark:focus:ring-[#B9B8FF]/10
          "
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="
        mb-2 block text-sm font-medium
        text-slate-900
        dark:text-[#D3E4FE]
      "
              >
                الموضوع
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="موضوع الرسالة"
                value={info?.subject}
                onChange={(e) =>
                  setInfo((prev) => ({
                    ...prev,
                    subject: e.target.value,
                  }))
                }
                className="
        w-full
        rounded-lg
        border border-slate-200
        bg-slate-50
        px-4
        py-3
        text-lg
        text-slate-900
        outline-none
        placeholder:text-slate-400
        transition-colors

        focus:border-[#6366F1]
        focus:ring-2
        focus:ring-[#6366F1]/10

        dark:border-[#1C304A]
        dark:bg-[#06182D]
        dark:text-[#D3E4FE]
        dark:placeholder:text-[#71809A]
        dark:focus:border-[#B9B8FF]
        dark:focus:ring-[#B9B8FF]/10
      "
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="
        mb-2 block text-sm font-medium
        text-slate-900
        dark:text-[#D3E4FE]
      "
              >
                الرسالة
              </label>

              <div className="relative">
                <MessageSquare
                  size={18}
                  className="
          absolute right-4 top-4
          text-slate-400
          dark:text-[#71809A]
        "
                />

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="اكتب رسالتك هنا..."
                  value={info?.message}
                  onChange={(e) =>
                    setInfo((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="
          w-full
          resize-none
          rounded-lg
          border border-slate-200
          bg-slate-50
          px-4
          py-3
          pr-11
          text-lg
          leading-7
          text-slate-900
          outline-none
          placeholder:text-slate-400
          transition-colors

          focus:border-[#6366F1]
          focus:ring-2
          focus:ring-[#6366F1]/10

          dark:border-[#1C304A]
          dark:bg-[#06182D]
          dark:text-[#D3E4FE]
          dark:placeholder:text-[#71809A]
          dark:focus:border-[#B9B8FF]
          dark:focus:ring-[#B9B8FF]/10
        "
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        bg-[#494BD6]
        px-6
        py-3
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#5759E5]

        dark:bg-[#B9B8FF]
        dark:text-[#10243D]
        dark:hover:bg-[#D3D2FF]
      "
              >
                إرسال الرسالة
                <Send size={17} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
