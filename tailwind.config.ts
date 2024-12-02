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
      screens: {
        'xs': '480px',
        // => @media (min-width: 480px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
} satisfies Config;
