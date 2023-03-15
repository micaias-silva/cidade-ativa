import { ReactNode } from "react";
import { globalCss } from "./stitches.config";
import { styled } from "./stitches.config";

interface GlobalStylesProps {
  children: ReactNode;
}

export const colorVariants = {
  color: {
    orange: { color: "$orange" },
    gray: { color: "$gray" },
    white: { color: "$white" },
  },
  background: {
    orange: { background: "$orange" },
    gray: { background: "$gray" },
    white: { background: "$white" },
  },
};

const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontSize: "$regular",
  },
  a: {
    textDecoration: "none",
  },
  html: {
    fontFamily: "Inter",
    scrollBehavior: "smooth",
    // "&::-webkit-scrollbar": {
    //   width: 10,
    //   background: "$white",
    // },
    // "&::-webkit-scrollbar-thumb": {
    //   width: 10,
    //   background: "$orange",
    //   "&:hover": {
    //     background: "$orange",
    //   },
    // },
  },
});

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};