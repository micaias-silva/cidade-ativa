import { keyframes } from "@stitches/react";
import { GenericLink } from "@styles/Text";
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
  zIndex: 3,
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
    transition: "1s",
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

export const ModalContainer = styled("div", {
  position: "absolute",

  ".modal-content": {
    position: "relative",
    top: 80,
    left: 0,
    right: "auto",
    bottom: "auto",
    border: "none",
    background: "$brandGradient",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "0 0 1rem 1rem",
    /* borderBottom: "1rem solid $white", */
    outline: "none",
    width: "100%",
  },
  ".modal-overlay": {
    zIndex: 2,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  ".ReactModal__Overlay": {
    opacity: 0,
    transition: "opacity 250ms ease-in-out",
  },
  ".ReactModal__Overlay--after-open": {
    opacity: 1,
    animation: ToggleViewShowing,
    animationDuration: "250ms",
  },
  ".ReactModal__Overlay--before-close": {
    opacity: 0,
    animation: ToggleViewHiding,
    animationDuration: "250ms",
  },
});
