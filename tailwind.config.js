const windmill = require("@windmill/react-ui/config")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./myTheme.js",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      opacity: ["disabled"],
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
        darkBlueBg: "#031332",
        "tertiary-lightest": "#DDD9FE",
        "tertiary-lighter": "#BBB3FD",
        "tertiary-lighter": "#BBB3FD",
        "tertiary-light": "#8879FC",
        tertiary: "#267DEB",
        "tertiary-dark": "#3B2DB0",
        "tertiary-darker": "#221A64",
        "tertiary-darkest": "#110D32",
        "tertiary-matte-darkest": "#292547",
        // "primary-lightest": "#DDD9FE",
        // "primary-lighter": "#BBB3FD",
        // "primary-lighter": "#BBB3FD",
        // "primary-light": "#8879FC",
        // primary: "#5540FB",
        // "primary-dark": "#3B2DB0",
        // "primary-darker": "#221A64",
        "primary-darkest": "#061D33",
        "primary-matte-darkest": "#092b4c",
        instagram: "#4C5FD7",
        facebook: "#3B5998",
        yelp: "#af0606",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "red-hat-display": ['"Red Hat Display"', "sans-serif"],
        "architects-daughter": ['"Architects Daughter"', "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.63rem", { lineHeight: "1.35" }],
        "3xl": ["2.63rem", { lineHeight: "1.24" }],
        "4xl": ["3.5rem", { lineHeight: "1.18" }],
        "5xl": ["4rem", { lineHeight: "1.16" }],
        "6xl": ["5rem", { lineHeight: "1.11" }],
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-1.5%)" },
          "50%": { transform: "translateY(1.5%)" },
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
      // letterSpacing: {
      //   tightish: "-.02em",
      // },
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
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme("colors.gray.500"),
            },
          },
          "input, textarea, multiselect, select": {
            backgroundColor: theme("colors.white"),
            fontSize: undefined,
            lineHeight: undefined,
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
  ],
}
