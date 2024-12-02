import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        primary: "var(--primary)",
        navActive: "var(--nav-active)",
        navInactive: "var(--nav-inactive)",
        bgTertiary: "var(--bg-tertiary)",
        grayText: "var(--gray-text)",

      },
      boxShadow: {
        primary: "0px 6px 18px 0px rgba(0,0,0,0.75)",
      },	
      fontFamily: {
        rethinkSans: "var(--font-rethink-sans)",
        sourceSerifPro: "var(--font-source-serif-pro)",
        josefinSans: "var(--font-josefin-sans)",
      },
    },
  },
  plugins: [],
} satisfies Config;
