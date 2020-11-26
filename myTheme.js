export default {
  button: {
    base:
      "font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out",
    size: {
      large: "px-8 py-3 shadow-lg",
      regular: "px-4 py-2 shadow-md text-sm",
      small: "px-3 py-1 shadow-md text-sm",
    },
    // Backdrop
    backdrop: {
      base:
        "fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",
    },
    avatar: {
      base: "relative rounded-full inline-block",
      size: {
        xxxLarge: "w-60 h-60",
        xxLarge: "w-40 h-40",
        xLarge: "w-20 h-20",
        large: "w-10 h-10",
        regular: "w-8 h-8",
        small: "w-6 h-6",
      },
    },
  },
}
