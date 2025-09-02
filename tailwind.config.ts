import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  darkMode: "class", // التحكم في الـ Dark Mode باستخدام class
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1DA1F2", // اللون الرئيسي (مثال تويتر بلو)
          dark: "#1A91DA",
          light: "#E8F5FD",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    lineClamp, // للتحكم بعدد الأسطر النصية
  ],
};

export default config;
