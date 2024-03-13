import { Flex, Grid } from "@styles/Containers";
import { ImageContainer } from "@styles/Image";
import { styled } from "@styles/stitches.config";
import { GenericLink, Span, Subtitle, Topic } from "@styles/Text";

export const StyledFooter = styled("footer", {
  position: "relative",
  width: "100%",
  minHeight: 200,
  height: "100%",
  background: "$gray",
  padding: "$1 0 $1 0",

  [`& ${Grid}`]: {
    gridTemplateColumns: "50% 50%",
    paddingBottom: "$3",
    rowGap: "2rem",
    width: "100%",
    marginBottom: "$2",

    "@smallMobile": {
      gridTemplateColumns: "100%",
    },
  },
  hr: {
    border: "none",
    height: 1,
    width: "100%",
    background: "$gray3",
    position: "absolute",
    bottom: "2rem",
    zIndex: 2,
  },
  [`& > ${Span}`]: {
    textAlign: "center",
    display: "block",
    fontSize: "$smallest",
  },

  ".splitter": {
    justifyContent: "space-between",
    padding: "60px 0",
    [`& ${ImageContainer}`]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      maxHeight: 300,
      maxWidth: 300,
      img: {
        width: "50%",
      },
    },
    "@mobile": {
      flexDirection: "column-reverse",
      alignItems: "center",
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

export const InGridContainer = styled("div", {});

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
