import { styled } from "@styles/stitches.config";

export const ProjectCardContainer = styled("div", {
  userSelect: "none",
  "webkit-user-select": "none",
  "ms-user-select": "none",
  display: "flex",
  flexDirection: "column",
  height: 330,
  background: "$white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, .25)",
  borderRadius: 10,
  minWidth: 280,
  width: 280,
  position: "relative",
  textTransform: "uppercase",
  fontSize: "$regular",
  "@mobile": {
    width: "100%",
    margin: "0 $2",
  },
  img: {
    borderRadius: "10px 10px 0 0",
    width: "100%",
    height: 290,
    objectFit: "cover",
  },
  h3: {
    fontWeight: "$bold",
    margin: 0,
  },
  ".info-container": {
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    height: 52,
    padding: ".5rem",
  },
  ".project-image-container": {
    position: "relative",
    height: "100%",
  },
});

export const ProjectCategoryLabel = styled("span", {
  position: "absolute",
  background: "$brandGradient",
  color: "$white",
  fontWeight: "$bold",
  padding: ".25rem .5rem",
  borderRadius: 25,
  bottom: ".5rem",
  left: ".5rem",
  fontSize: "$smaller",
});
