import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes } = createStitches({
  media: {
    mobile: "(max-width: 768px)",
    smallMobile: "(max-width: 420px)",
  },
  theme: {
    colors: {
      orange: "#FF4A1B",
      orange2: "#C62368",
      brandGradient: "linear-gradient(135deg, $orange, $orange2)",
      gray: "#0c0c0c",
      gray2: "#ececec",
      gray3: "#868686",
      white: "#fafafa",
      opRed: "rgba(255, 0, 0, .25)",
      opGreen: "rgba(0, 255, 0, .25)",
      opBlue: "rgba(0, 0, 255, .25)",
      opYellow: "rgba(255, 255, 0, .25)",
      socialInstagram: "#CF50AC",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontSizes: {
      smallest: "0.625rem",
      smaller: "0.75rem",
      small: "0.875rem",
      regular: "1rem",
      subtitle: "1.25rem",
      topic: "1.5rem",
      title: "1.5rem",
    },
    space: {
      1: "0.5rem",
      2: "0.75rem",
      3: "1rem",
      4: "1rem",
      containerPadding: "2rem",
      mobileContainerPadding: "0.5rem",
    },
  },
});
