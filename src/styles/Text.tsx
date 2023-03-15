import { colorVariants } from "./Global";
import { styled } from "./stitches.config";

const baseText = {
  color: "$gray",
  fontSize: "$regular",
  fontWeight: "$regular",
};

export const GenericLink = styled("a", {
  ...baseText,
  textDecoration: "none",
  color: "$white",
  fontWeight: "$bold",

  "&:hover": {
    filter: "brightness(0.8)",
  },
  variants: { ...colorVariants },
});

export const Text = styled("p", {
  ...baseText,
  fontWeight: "$light",
  wordBreak: "break-word",
  variants: { ...colorVariants },
});

export const Title = styled("h1", {
  ...baseText,
  margin: "0 0 $2 0",
  fontSize: "$title",
  fontWeight: "$bold",
  "@mobile": {
    fontSize: "$topic",
  },
  variants: { ...colorVariants },
});

export const SubTitle = styled("h2", {
  ...baseText,

  marginBottom: 80,
  fontSize: "$topic",
  fontWeight: "$bold",
  variants: { ...colorVariants },
});

export const Label = styled("label", {
  ...baseText,
  color: "$white",
  variants: { ...colorVariants },
});
