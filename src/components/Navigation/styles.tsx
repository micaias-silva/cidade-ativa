import { Flex } from "@styles/Containers";
import { styled } from "@styles/stitches.config";

export const NavigationContainer = styled("div", {
  height: 80,
  width: "100%",
  padding: "0 2rem",
  top: 0,
  left: 0,
  position: "absolute",
  zIndex: 5,
  [`& ${Flex}`]: {
    height: "100%",
  },
});

export const StyledNav = styled("nav", {
  "@mobile": {
    display: "none",
  },
});
