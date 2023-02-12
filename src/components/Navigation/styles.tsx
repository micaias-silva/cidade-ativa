import { Flex } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";

export const NavigationContainer = styled("div", {
  height: 80,
  width: "100vw",
  padding: "0 2rem",
  position: "fixed",
  background: "rgba(12,12,12,0.20)",
  zIndex: 5,
  [`& ${Flex}`]: {
    height: "100%",
  },
});

export const StyledNav = styled("nav", {});
