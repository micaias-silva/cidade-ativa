import { fadeIn } from "../../styles/Animations";
import { Flex } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";
import { Title } from "../../styles/Text";
import backgroundImage from "../../assets/img/header/background.png";

export const StyledHeader = styled("header", {
  zIndex: 1,
  height: 550,
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "@mobile": {
    background: "linear-gradient(135deg, $orange2, $orange)",
  },
  ".background": {
    position: "absolute",
    transform: "scaleX(-1)",
    bottom: 0,
    right: -10,
    zIndex: 0,
    width: "101%",
    minWidth: 1024,
    height: "100%",
    "@mobile": {
      display: "none"
    }
  }
});

export const HeaderContainer = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  overflowX: "hidden",
  padding: "$containerPadding",
  "@mobile": {
    alignItems: "center",
    padding: "$mobileContainerPadding",
  }
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
  maxWidth: 620,
  "@mobile": {
    textAlign: "center"
  }
});
