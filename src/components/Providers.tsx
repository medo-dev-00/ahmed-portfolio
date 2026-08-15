"use client";

import { ThemeProvider } from "next-theme";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      {children}

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          className: "custom-toast",
          style: {
            borderRadius: "10px",
            padding: "12px 16px",
            transition: "300ms",
          },
        }}
      />
    </ThemeProvider>
  );
}
