import { ReactNode } from "react";
import { globalCss } from "./stitches.config";
import { styled } from "./stitches.config";

interface GlobalStylesProps {
  children: ReactNode;
}

export const colors = {
  color: {
    orange: { color: "$orange" },
    gray: { color: "$gray" },
    gray2: { color: "$gray2" },
    white: { color: "$white" },
  },
  background: {
    orange: { background: "$orange" },
    gray: { background: "$gray" },
    gray2: { background: "$gray2" },
    white: { background: "$white" },
  },
};

const globalStyles = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap')",

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontSize: "$normal",
  },
  a: {
    textDecoration: "none",
  },
  html: {
    fontFamily: "Inter",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: 10,
      background: "$white",
    },
    "&::-webkit-scrollbar-thumb": {
      width: 10,
      background: "$orange",
      "&:hover": {
        background: "$orange",
      },
    },
  },
});

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};
