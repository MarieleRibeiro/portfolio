const theme = {
  colors: {
    black: "#252425",
    gray: " #2B2A2B",
    white: "#FFFFFF",
    orange: "#E5A67C",
  },
} as const;

export type MyTheme = typeof theme;

export default theme;
