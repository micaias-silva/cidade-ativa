import { Flex, Grid } from "../../styles/Containers";
import { ImageContainer } from "../../styles/Image";
import { styled } from "../../styles/stitches.config";
import { GenericLink, Topic } from "../../styles/Text";

export const StyledFooter = styled("footer", {
  width: "100%",
  minHeight: 200,
  height: "100%",
  background: "$gray",
  paddingTop: "$1",

  [`& ${Grid}`]: {
    gridTemplateColumns: "33% 33% 33%",
    gap: "$1",

    "@mobile": {
      gridTemplateColumns: "100%",
      rowGap: "$2",
    },
  },
});

export const SocialMediaLink = styled("a", {
  fontWeight: "$light",
  textDecoration: "none",
  color: "$white",
  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export const InGridContainer = styled("div", {
  padding: "40px 20px",

  [`& ${ImageContainer}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    img: {
      width: "50%",
    },
  },
  [`& ${Topic}`]: {
    marginBottom: 10,
  },
});

export const SocialMediaButton = styled("button", {
  width: 48,
  height: 48,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  position: "relative",
  color: "$white",
  background: "$transparent",
  border: "2px solid $white",
  "&:hover": {
    color: "$white",
    background: "transparent",
  },

  variants: {
    media: {
      instagram: {
        borderColor: "$socialInstagram",
        background: "$socialInstagram",
        "&:hover": {
          color: "$socialInstagram",
        },
      },
    },
  },
});