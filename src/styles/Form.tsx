import { styled } from "./stitches.config";

export const Form = styled("form", {
  color: "$white",
  width: "100%",
  maxWidth: 512,
});

export const Input = styled("input", {
  display: "block",
  padding: "10px ", 
  width: "100%",
  border: "$gray 1px solid",
  height: 36,
  transition: "0.2s",
  fontSize: "$smaller",
  fontWeight: "$medium",
  "&:disabled": {
    cursor: "not-allowed",
    background: "$gray2",
  },

  "&:focus": {
    boxShadow: "0 0 0 0",
    outline: "none",
    border: "$gray 1px solid",
  },
  "&::placeholder": {
    textTransform: "uppercase"
  }
});

export const TextArea = styled("textarea", {
  fontFamily: "Inter",
  resize: "none",
  display: "block",
  padding: "10px ",
  width: "100%",
  fontSize: "$smaller",
  height: 150,
  border: "$gray 1px solid",
  transition: "0.2s",
  "&:disabled": {
    cursor: "not-allowed",
    background: "$gray2",
  },

  "&:focus": {
    boxShadow: "0 0 0 0",
    outline: "none",
    border: "$gray 1px solid",
  },
});
