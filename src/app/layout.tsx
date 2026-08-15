import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const ibm = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "أحمد رضا | Frontend Developer",
  description:
    "Portfolio شخصي لأحمد رضا، مطور Frontend متخصص في بناء واجهات ويب حديثة باستخدام React وNext.js وTypeScript.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${ibm.variable} `}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
