import { keyframes } from "@stitches/react";
import { fadeIn } from "@styles/Animations";
import { Flex } from "@styles/Containers";
import { styled } from "@styles/stitches.config";

const ToggleViewHiding = keyframes({
  from: {
    top: 0,
  },
  to: {
    top: -80,
  },
});

const ToggleViewShowing = keyframes({
  from: {
    top: -80,
  },
  to: {
    top: 0,
  },
});

export const NavigationContainer = styled("div", {
  position: "absolute",
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
    zIndex: 3,
    transition: "1s",
    padding: "0 2rem",
    justifyContent: "space-between",
  },
  ".toggle-background": {
    background: "$brandGradient",
  },
  ".toggle-showing": {
    animation: ToggleViewShowing,
    animationDuration: ".5s",
    animationFillMode: "forwards",
  },
  ".toggle-hiding": {
    animation: ToggleViewHiding,
    animationDuration: ".5s",
    animationFillMode: "forwards",
  },
});

export const StyledNav = styled("nav", {
  "@mobile": {
    display: "none",
  },
});
