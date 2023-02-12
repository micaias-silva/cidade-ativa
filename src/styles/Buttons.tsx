import { colors } from "./Global";
import { styled } from "./stitches.config";

export const GenericButton = styled("button", {
  border: "none",
  borderRadius: "15px",
  padding: "5px 10px",
  fontWeight: "$bold",
  cursor: "pointer",
  background: "$gray",
  color: "$white",
  "&:hover": {
    background: "$gray2",
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
