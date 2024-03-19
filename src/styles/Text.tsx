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
  fontWeight: 500,
  fontSize: "$small",
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
    fontSize: "$subtitle",
  },
  variants: { ...colorVariants },
});

export const Subtitle = styled("h3", {
  ...baseText,
  margin: "0 0 $2 0",
  fontSize: "$subtitle",
  fontWeight: 500,
  "@mobile": {
    fontSize: "$regular",
  },
  variants: { ...colorVariants },
});

export const Topic = styled("h2", {
  ...baseText,
  marginBottom: 40,
  fontSize: "$topic",
  fontWeight: "$bold",
  variants: { ...colorVariants },
});

export const Label = styled("label", {
  ...baseText,
  color: "$white",
  fontSize: "$small",
  display: "block",
  marginBottom: 5,
  variants: { ...colorVariants },
});

export const Span = styled("span", {
  ...baseText,
  fontSize: "$small",
  color: "$white",
  variants: { ...colorVariants },
});

export const FormError = styled(Span, {
  ...baseText,
  display: "block",
  height: 12,
  fontWeight: "$bold",
  fontSize: "$smaller",
  color: "$gray",
  margin: "5px 0",
  textTransform: "uppercase",
});
