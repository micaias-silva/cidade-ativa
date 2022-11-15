import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  media: {
    mobile: "(max-width: 768px)",
  },
  theme: {
    colors: {
      orange: "#FF4A1B",
      gray: "#232323",
      gray2: "#373737",
      white: "#fafafa",
      opRed: "rgba(255, 0, 0, .25)",
      opGreen: "rgba(0, 255, 0, .25)",
      opBlue: "rgba(0, 0, 255, .25)",
      opYellow: "rgba(255, 255, 0, .25)",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontSizes: {
      normal: "1rem",
      topic: "1.5rem",
      title: "2.25rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
    },
  },
});
