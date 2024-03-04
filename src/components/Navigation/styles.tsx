import { keyframes } from "@stitches/react";
import { fadeIn } from "@styles/Animations";
import { Flex } from "@styles/Containers";
import { styled } from "@styles/stitches.config";

const ToggleView = keyframes({
  from: {
    top: 0,
  },
  to: {
    top: -80,
  },
});

export const NavigationContainer = styled("div", {
  position: "fixed",
  height: 80,
  top: 0,
  left: 0,
  zIndex: 2,
  width: "100%",
  ".nav-wrapper": {
    height: 80,
    width: "100%",
    top: 0,
    left: 0,
    position: "fixed",
    zIndex: 2,
    transition: ".2s",
    padding: "0 2rem",
    justifyContent: "space-between",
  },
  ".show-background": {
    background: "$orange",
  },
  ".toggle-showing": {
    animation: ToggleView,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    animationDirection: "reverse",
  },
  ".toggle-hiding": {
    animation: ToggleView,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
});

export const StyledNav = styled("nav", {
  "@mobile": {
    display: "none",
  },
});
