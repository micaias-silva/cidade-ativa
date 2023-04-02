import { fadeIn } from "../../styles/Animations";
import { Flex } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";
import { Title } from "../../styles/Text";

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
  overflowX: "hidden",
});

export const HeaderImage = styled("img", {
  zIndex: 0,
  right: 0,
  bottom: 0,
  position: "absolute",
  animation: `${fadeIn} 2s `,

  objectFit: "cover",
  height: "80%",
  "@mobile": {
    height: "50%",
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
  [`${Title}`]: {
    textShadow: "0 0 20px rgba(0, 0, 0, 0.75)",
  },
});
