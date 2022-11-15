import { Flex } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";

export const StyledHeader = styled("header", {
  height: 80,
  width: "100vw",
  background: "$white",
  padding: "0 2rem",
  position: "fixed",
  zIndex: 5,
  [`& ${Flex}`]: {
    justifyContent: "space-between",
    height: "100%",
  },
});

export const Navigation = styled("nav", {
  [`& ${Flex}`]: {},
});
