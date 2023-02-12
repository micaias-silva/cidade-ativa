import { colors } from "./Global";
import { styled } from "./stitches.config";

const baseText = {
  color: "$gray",
  fontSize: "$normal",
  fontWeight: "$regular",
};

export const Link = styled("a", {
  ...baseText,
  textDecoration: "none",
  fontWeight: "$bold",

  "&:hover": {
    filter: "brightness(5)",
  },
  variants: { ...colors },
});

export const Text = styled("p", {
  ...baseText,
  fontWeight: "$light",
  wordBreak: "break-all",
  variants: { ...colors },
});

export const Title = styled("h1", {
  ...baseText,
  margin: "0 0 $2 0",
  fontSize: "$title",
  fontWeight: "$bold",
  variants: { ...colors },
});

export const TopicTitle = styled("h2", {
  ...baseText,
  margin: "0 0 $1 0",
  fontSize: "$topic",
  fontWeight: "$bold",
  variants: { ...colors },
});
