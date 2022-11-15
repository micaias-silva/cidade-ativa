import { Flex, Grid } from "../../styles/Containers";
import { Image } from "../../styles/Image";
import { styled } from "../../styles/stitches.config";

export const FootStyle = styled("footer", {
  width: "100%",
  minHeight: 200,
  height: "100%",
  background: "$gray",
  paddingTop: "$1",

  [`& ${Grid}`]: {
    gridTemplateColumns: "33% 33% 33%",

    "@mobile": {
      gridTemplateColumns: "100%",
    },
  },

  [`& ${Flex}`]: {
    justifyContent: "space-evenly",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  [`& ${Image}`]: {
    height: "100%",
    width: "100%",
    img: {
      width: "20%",
    },
  },
});
