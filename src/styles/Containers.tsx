import { styled } from "./stitches.config";

export const Container = styled("div", {
  margin: "0 auto",
  padding: "0 1rem",
  display: "block",
  maxWidth: "75rem",
  "@mobile": {
    maxWidth: "40rem",
  },
});

export const Wrapper = styled("div", {
  minHeight: "100vh",
  maxWidth: "100vw",
  paddingTop: 80,
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
});

export const FlexColumn = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  flexDirection: "column",
});

export const Section = styled("section", {
  margin: "$2 0",
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gridGap: "1px 1px",
  "@mobile": {
    gridTemplateColumns: "100%",
  },
});

export const UList = styled("ul", {
  listStyle: "none",
  color: "$white",
});

export const LItem = styled("li", {});
