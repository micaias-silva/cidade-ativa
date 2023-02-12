import { Flex } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";

export const StyledHeader = styled("header", {
  height: 550,
  background: "$orange",
});

export const HeaderContainer = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  img: {
    zIndex: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    width: "100%",
    objectFit: "cover",
    "@mobile": {
      height: "50%",
    },
  },
});

export const HeaderPresention = styled("section", {
  zIndex: 1,
  maxWidth: 400,
  position: "absolute",
  left: 100,
  "@mobile": {
    left: "5%",
  },
});
