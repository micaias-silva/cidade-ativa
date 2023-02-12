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
});

export const Flex = styled("div", {
  display: "flex",
  height: "100%",
  alignItems: "center",
  gap: "$4",
});

export const FlexColumn = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  flexDirection: "column",
});

export const Section = styled("section", {
  margin: "$2 0",
  padding: "80px 0 0 0",
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gridGap: "1px 1px",
  "@mobile": {
    gridTemplateColumns: "100%",
  },
});

export const UnorderedList = styled("ul", {
  textAlign: "left",
  listStyle: "none",
  color: "$white",
});

export const ListItem = styled("li", {});
