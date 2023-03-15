import { styled } from "./stitches.config";

export const Form = styled("form", {
  color: "$white",
  width: "100%",
  maxWidth: 512,
  margin: "0 auto",
  padding: "0 10px",
});

export const Input = styled("input", {
  display: "block",
  padding: "10px ",
  width: "100%",
  border: "none",
  height: 50,
  borderRadius: 5,
  marginBottom: 20,

  "&:focus": {
    boxShadow: "0 0 0 0",
    outline: "none",
  },
});
