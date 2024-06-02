/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1800px",
      },
    },
    extend: {
      colors: {
        // CUSTOM COLORS
        lightPurple: "hsl(var(--light-purple))",
        whitePurple: "hsl(var(--white-purple))",
        deepBlue: "hsl(var(--deep-blue))",
        black: "hsl(var(--black))",
        red: "hsl(var(--red))",
        redLight: "hsl(var(--red-light))",
        borderGrey: "hsl(var(--border-grey))",
        darkBlue: "hsl(var(--dark-blue))",
        bgGreyLight: "hsl(var(--bg-grey-light))",
        grey64: "hsl(var(--grey-64))",
        white: "hsl(var(--white))",
        darkGray70: "hsl(var(--dark-gray-70))",
        opacityDark: "hsla(var(--opacity-dark))",
        opacityWhite: "hsla(var(--opacity-white))",
        opacityDark70: "hsla(var(--opacity-dark70))",
        greyTxt: "hsl(var(--grey-txt))",
        deepGreen: "hsl(var(--deep-green))",
        greenLight: "hsl(var(--green-light))",
        lightBlue: "hsl(var(--light-blue))",
        //  SHADCN
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
