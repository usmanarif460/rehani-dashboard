import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const darkMode = ["class"]
export const content = [
  './pages/**/*.{js,jsx,vue}',
  './components/**/*.{js,jsx,vue}',
  './app/**/*.{js,jsx,vue}',
  './src/**/*.{js,jsx,vue}',
  './node_modules/shadcn-vue/**/*.{vue,js,ts,jsx,tsx}'
]
export const prefix = ""
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    maxWidth: {
      custom: '1320px',
    },
    colors: {
      gradient: 'linear-gradient(180deg, #D7D7D7 0%, #262626 116.95%);',
      blur: 'rgba(255, 255, 255, 0.2);',
      'gradient-2': 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) -34.14%, rgba(0, 0, 0, 0) 211.5%)',
      'gradient-3': 'linear-gradient(180deg, #D7D7D7 0%, #262626 116.95%)',
      primary: 'rgb(240,196,70)',
      grayishBlack: 'rgb(64,55,55)',
      midGray: 'rgb(66,66,66)',
      lightGray: 'rgb(161,161,161)',
      active: '#fffcf3',
    }
  },
}
export const plugins = [animate]