const windmill = require("@windmill/react-ui/config");

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./myTheme.js",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A2A2A8",
          500: "#6E6E76",
          600: "#52525A",
          700: "#3F3F45",
          800: "#2E2E33",
          900: "#1D1D20",
        },
        teal: {
          50: "#F4FFFD",
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
        indigo: {
          50: "#F8FBFF",
          100: "#EBF4FF",
          200: "#C3DAFE",
          300: "#A3BFFA",
          400: "#7F9CF5",
          500: "#667EEA",
          600: "#5A67D8",
          700: "#4C51BF",
          800: "#34399B",
          900: "#1E2156",
        },
        purple: {
          100: "#F4F4FF",
          200: "#E2E1FF",
          300: "#CBCCFF",
          400: "#ABABFF",
          500: "#8D8DFF",
          600: "#5D5DFF",
          700: "#4B4ACF",
          800: "#38379C",
          900: "#262668",
        },
        pink: {
          50: "#FFF5F7",
          100: "#FFEBEF",
          200: "#FED7E2",
          300: "#FBB6CE",
          400: "#F687B3",
          500: "#ED64A6",
          600: "#D53F8C",
          700: "#B83280",
          800: "#97266D",
          900: "#702459",
        },
        "matte-black": "#212121",
        darkBlueBg: "#1f1d2b",
        "tertiary-lightest": "#DDD9FE",
        "tertiary-lighter": "#BBB3FD",
        "tertiary-lighter": "#BBB3FD",
        "tertiary-light": "#8879FC",
        tertiary: "#267DEB",
        "tertiary-dark": "#3B2DB0",
        "tertiary-darker": "#221A64",
        "tertiary-darkest": "#110D32",
        "tertiary-matte-darkest": "#292547",
        "primary-darkest": "#061D33",
        "primary-matte-darkest": "#092b4c",
        instagram: "#4C5FD7",
        facebook: "#3B5998",
        yelp: "#af0606",
      },
      linearBorderGradients: {
        colors: {
          "purp-blue": ["#7146ea", "#0498eb"],
        },
      },
      backgroundSize: {
        animate: "200% 200%",
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
        "red-hat-display": ["Poppins", "sans-serif"],
        "architects-daughter": ['"Architects Daughter"', "sans-serif"],
      },
      // fontSize: {
      //   xs: ["0.75rem", { lineHeight: "1.5" }],
      //   sm: ["0.875rem", { lineHeight: "1.5" }],
      //   base: ["1rem", { lineHeight: "1.5" }],
      //   lg: ["1.125rem", { lineHeight: "1.5" }],
      //   xl: ["1.25rem", { lineHeight: "1.5" }],
      //   "2xl": ["1.63rem", { lineHeight: "1.35" }],
      //   "3xl": ["2.63rem", { lineHeight: "1.24" }],
      //   "4xl": ["3.5rem", { lineHeight: "1.18" }],
      //   "5xl": ["4rem", { lineHeight: "1.16" }],
      //   "6xl": ["5rem", { lineHeight: "1.11" }],
      // },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "slow-reveal": "gradient 9s ease-in-out infinite",
        blob: "blob 7s infinite",
        teeter: "teeter 1.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-1.5%)" },
          "50%": { transform: "translateY(1.5%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
        },
        teeter: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      spacing: {
        128: "32rem",
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      height: {
        scroll: "2000px",
      },
      maxWidth: {
        logo: "200px",
        mobileLogo: "150px",
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
        dark40: "0px 0px 1px rgba(13, 13, 13, 0.9), 0px 2px 4px #0D0D0D",
      },
      customForms: (theme) => ({
        default: {
          "input, textarea, multiselect, select, checkbox, radio": {
            backgroundColor: theme("colors.white"),
            borderColor: theme("colors.gray.300"),
            borderRadius: theme("borderRadius.default"),
            "&:focus": {
              borderColor: theme("colors.gray.500"),
            },
          },
          "input, textarea, multiselect, select": {
            backgroundColor: theme("colors.white"),
            paddingTop: theme("spacing.3"),
            paddingRight: theme("spacing.4"),
            paddingBottom: theme("spacing.3"),
            paddingLeft: theme("spacing.4"),
          },
          "input, textarea": {
            "&::placeholder": {
              color: theme("colors.gray.500"),
            },
          },
          select: {
            paddingRight: theme("spacing.10"),
            iconColor: theme("colors.gray.400"),
          },
          "checkbox, radio": {
            color: theme("colors.gray.800"),
            backgroundColor: theme("colors.white"),
            borderRadius: theme("borderRadius.sm"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
      display: ["dark"],
      opacity: ["dark"],
      boxShadow: ["dark"],
      rotate: ["group-hover"],
      textColor: ["hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-border-gradients")(),
    require("tailwind-easing-gradients")({
      variants: ["responsive"],
      // required
      gradients: {
        "purp-blue": ["#D53F8C", "#667EEA"], // must be two colors
        ex2: { easing: "ease-in-out", steps: 5, color: ["#4ae", "#0da"] },
        ex3: {
          easing: "cubic-bezier(0.48, 0.3, 0.64, 1)",
          color: ["#4ae", "#0da"],
        },
        ex4: { easing: "steps(4, skip-none)", color: ["#4ae", "#0da"] },
      },
      // defaults
      alphaDecimals: 5,
      colorMode: "lrgb",
      type: "linear",
      easing: "ease", // default settings
      colorStops: 15,
      directions: {
        t: "to top",
        r: "to right",
        b: "to bottom",
        l: "to left",
      },
    }),
  ],
};
