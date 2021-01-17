export default {
  button: {
    base:
      "font-medium inline-flex items-center justify-center border border-transparent rounded-md leading-snug transition duration-150 ease-in-out",
    size: {
      large: "px-8 py-3 shadow-lg",
      regular: "px-4 py-2 shadow-md text-sm",
      small: "px-3 py-1 shadow-md text-sm",
    },
    primary: {
      base: "text-white bg-purple-600 border border-transparent",
      active:
        "active:bg-tertiary-light hover:bg-tertiary-dark focus:shadow-outline-tertiary-lighter",
      disabled: "opacity-50 cursor-not-allowed",
    },
  },
  // Backdrop
  backdrop: {
    base:
      "fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",
  },
  // Modal
  modal: {
    base:
      "w-full px-6 py-4 overflow-hidden bg-white border border-gray-100 dark:border-gray-600 rounded-t-sm dark:bg-gray-800 sm:rounded-sm sm:m-4 sm:max-w-xl shadow-2xl dark:shadow-dark40",
  },
  // Dropdown
  dropdown: {
    base:
      "absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-sm shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700",
    align: {
      left: "left-0",
      right: "right-0",
    },
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
  tableContainer: {
    base: "w-full overflow-hidden rounded-sm shadow-md",
  },
  tableCell: {
    base: "px-4 py-3 whitespace-nowrap",
  },
  card: {
    base: "min-w-0 rounded-sm overflow-hidden",
    default: "bg-white dark:bg-gray-800",
  },
}
