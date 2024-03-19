import { styled } from "@styles/stitches.config";
import arrow from "@img/icons/arrow.svg";

export const ProjectShowcaseContainer = styled("div", {
  ".carousel": {
    width: "100%",
    ".control-dots": {
      zIndex: 1,
      position: "absolute",
      ".dot": {
        background: "$gray3",
      },
      ".dot.selected": {
        background: "$orange",
      },
    },
  },
});
