/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.astro",
    "./src/**/*.tsx",
    "**/react-components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "hsl(var(--text))",
          darken: "hsl(var(--text-darken))",
          lighten: "hsl(var(--text-lighten))",
          light: "hsl(var(--text-light))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          darken: "hsl(var(--primary-darken))",
        },
        secondary: "hsl(var(--secondary))",
        accent: {
          DEFAULT: "hsl(var(--accent-500))",
        },
        danger: "hsl(var(--danger))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        gray: {
          DEFAULT: "hsl(var(--gray))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
