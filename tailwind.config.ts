import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#ffb694",
        "surface-container": "#f2ede4",
        "primary-fixed": "#ffdbcc",
        "secondary": "#5f5e5a",
        "error": "#ba1a1a",
        "surface-container-high": "#ece8df",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#003035",
        "on-secondary": "#ffffff",
        "on-background": "#1c1c16",
        "on-error-container": "#93000a",
        "on-surface-variant": "#55433b",
        "on-secondary-fixed-variant": "#474743",
        "on-primary-fixed": "#351000",
        "on-error": "#ffffff",
        "surface-container-low": "#f7f3ea",
        "outline": "#887269",
        "primary-fixed-dim": "#ffb694",
        "surface-bright": "#fdf9f0",
        "inverse-on-surface": "#f5f0e7",
        "tertiary-fixed": "#8af2ff",
        "on-tertiary-fixed-variant": "#004f56",
        "on-secondary-container": "#63635f",
        "background": "#fdf9f0",
        "tertiary": "#006972",
        "surface": "#fdf9f0",
        "surface-variant": "#e6e2d9",
        "secondary-fixed": "#e5e2dd",
        "primary": "#994618",
        "on-primary": "#ffffff",
        "on-secondary-fixed": "#1c1c19",
        "secondary-container": "#e2dfda",
        "primary-container": "#d97745",
        "secondary-fixed-dim": "#c9c6c1",
        "surface-dim": "#dedad1",
        "surface-tint": "#994618",
        "outline-variant": "#dbc1b6",
        "on-primary-container": "#4d1b00",
        "on-primary-fixed-variant": "#7a3000",
        "on-surface": "#1c1c16",
        "tertiary-container": "#00a1ae",
        "inverse-surface": "#32302b",
        "on-tertiary-fixed": "#001f23",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#e6e2d9",
        "tertiary-fixed-dim": "#5fd7e5"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        unit: "4px",
        "container-max": "1280px",
        "section-gap": "80px"
      },
      fontFamily: {
        "label-sm": ["Inter"],
        "label-md": ["Inter"],
        "headline-sm": ["Source Serif 4"],
        "body-md": ["Inter"],
        "headline-md": ["Source Serif 4"],
        "display-lg-mobile": ["Source Serif 4"],
        "display-lg": ["Source Serif 4"],
        "body-lg": ["Inter"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "headline-sm": ["24px", { lineHeight: "1.2", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.15", fontWeight: "400" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.7", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
};
export default config;
