import { colorVariants } from "./Global";
import { styled } from "./stitches.config";

export const GenericButton = styled("button", {
  border: "none",
  borderRadius: 5,
  padding: "5px 10px",
  fontWeight: "$bold",
  cursor: "pointer",
  background: "$gray",
  color: "$white",
  "&:hover": {
    color: "$gray",
    background: "$white",
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
