import { styled } from "./stitches.config";

export const GenericButton = styled("button", {
  border: "1px solid $gray",
  padding: "5px 10px",
  fontWeight: 600,
  fontSize: "$smaller",
  cursor: "pointer",
  background: "transparent",
  transition: ".1s",
  textTransform: "uppercase",
  color: "$gray",
  "&:disabled": {
    background: "$gray2",
    cursor: "not-allowed",
    color: "$gray",

    "&:hover": {
      color: "$gray",
      background: "$gray2",
    },
  },

  "&:active": {
    borderColor: "$white",
    filter: "brightness(0.8)",
  },

  "&:focus": {
    borderColor: "$gray",
    color: "$white",
    background: "$gray",
  },
  "&:hover": {
    borderColor: "$gray",
    color: "$white",
    background: "$gray",
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
