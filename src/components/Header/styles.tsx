import { fadeIn } from "@styles/Animations";
import { styled } from "@styles/stitches.config";

export const StyledHeader = styled("header", {
  zIndex: 1,
  height: 700,
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "@mobile": {
    background: "$brandGradient",
  },
  ".background": {
    position: "absolute",
    top: 0,
    zIndex: 0,
    width: "100%",
    minWidth: 1024,
    height: "120%",
    "@mobile": {
      display: "none",
    },
  },
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
  },
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
    textAlign: "center",
  },
});
