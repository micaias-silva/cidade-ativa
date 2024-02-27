import { styled } from "@styles/stitches.config";
import { Text } from "@styles/Text";

export const ButtonContainer = styled("div", {
  position: "relative",
  zIndex: 1,
  height: "250px",
  width: "100%",
  cursor: "pointer",
  "&:hover": {
    scale: 1.01,
    zIndex: 2,
    transition: "0.5s",
  },
  "&::before": {
    content: "''",
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  "&:hover::before": {
    filter: "brightness(0.7)",
    transition: "500ms",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    filter: "saturate(0)",
    objectFit: "cover",
  },
  [`& ${Text}`]: {
    fontWeight: "$bold",
    fontSize: "$topic",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 4,
    transform: "translate(-50%, -50%)",
    textShadow: "0 2px 5px black",
  },
});
