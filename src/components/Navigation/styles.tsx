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
  ".mobile-button-container": {
    position: "relative",
    display: "none",
    height: 16,
    width: 24,
    cursor: "pointer",
    div: {
      transition: "500ms",
      height: 2,
      width: "100%",
      background: "$white",
    },
    "& :first-child": {
      position: "absolute",
      top: 0,
    },

    "& :nth-child(2)": {
      position: "absolute",
      top: 14,
    },
    "@mobile": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  ".open": {
    "& :first-child": {
      position: "absolute",
      top: "50%",
      transform: "rotate(135deg)",
    },

    "& :nth-child(2)": {
      position: "absolute",
      top: "50%",
      transform: "rotate(-135deg)",
    },
  },
});

export const StyledNav = styled("nav", {
  "@mobile": {
    display: "none",
  },
});

export const StyledNavMobile = styled("nav", {
  display: "none",
  "@mobile": {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  [`${GenericLink}`]: {
    width: "100%",
    padding: "1rem .5rem",
    "&:hover": {
      backdropFilter: "brightness(1.2)",
    },
  },
});
