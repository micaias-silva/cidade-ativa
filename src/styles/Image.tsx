import { styled } from "./stitches.config";

export const ImageContainer = styled("figure", {
  textAlign: "center",
  variants: {
    type: {
      banner: {
        maxHeight: "40vh",
      },
    },
  },
});


export const Img = styled("img", {
  width: "100%",
  height: "100%",
  maxHeight: "40vh",
  objectFit: "cover",
});
