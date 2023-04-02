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
  border: "transparent 2px solid",
  height: 50,
  borderRadius: 5,
  transition: "0.2s",
  "&:disabled": {
    cursor: "not-allowed",
    background: "$gray2",
  },

  "&:focus": {
    boxShadow: "0 0 0 0",
    outline: "none",
    border: "$gray 2px solid",
  },
});

export const TextArea = styled("textarea", {
  fontFamily: "Inter",
  resize: "none",
  display: "block",
  padding: "10px ",
  width: "100%",
  height: 150,
  border: "transparent 2px solid",
  borderRadius: 5,
  transition: "0.2s",
  "&:disabled": {
    cursor: "not-allowed",
    background: "$gray2",
  },

  "&:focus": {
    boxShadow: "0 0 0 0",
    outline: "none",
    border: "$gray 2px solid",
  },
});
