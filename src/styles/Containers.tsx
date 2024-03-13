import { styled } from "./stitches.config";
import { GenericLink } from "./Text";

export const Container = styled("div", {
  margin: "0 auto",
  padding: "0 1rem",
  display: "block",
  maxWidth: "75rem",
  "@mobile": {
    maxWidth: "40rem",
  },
  variants: {
    behavior: {
      mobileFit: {
        "@mobile": {
          width: "100%",
          maxWidth: "100%",
          margin: 0,
          padding: 0,
        },
      },
    },
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
  width: "100%",
  padding: "80px 0",
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
  width: "100%",
  display: "flex",
  gap: "$1",
  flexDirection: "column",
  a: {
    textDecoration: "underline",
  },

  "*": { color: "$gray3" },
  fontSize: "$smallest",
  [`& ${GenericLink}`]: {
    fontWeight: "$regular",
  },
});

export const ListItem = styled("li", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$3",
});
