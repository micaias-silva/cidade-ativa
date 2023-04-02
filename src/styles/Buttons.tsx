import { colorVariants } from "./Global";
import { styled } from "./stitches.config";

export const GenericButton = styled("button", {
  border: "2px solid transparent",
  borderRadius: 5,
  padding: "5px 10px",
  fontWeight: "$bold",
  cursor: "pointer",
  background: "$gray",
  color: "$white",
  transition: ".2s",

  "&:disabled": {
    background: "$gray2",
    cursor: "not-allowed",
    color: "$gray",

    "&:hover": {
      color: "$gray",
      background: "$gray2",
    },
  },

  "&:hover": {
    color: "$gray",
    background: "$white",
  },

  "&:active": {
    border: "2px solid $gray",
    filter: "brightness(0.8)",
  },

  "&:focus": {
    border: "2px solid $gray",
    filter: "brightness(0.8)",
  },
  variants: {
    size: {
      full: {
        width: "100%",
        padding: "15px 25px",
      },
    },
  },
});
