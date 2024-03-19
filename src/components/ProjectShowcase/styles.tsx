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
    ".control-next.control-arrow": {
      "&:before": {
        border: "none",
        content: `url(${arrow})`,
        zIndex: 1,
        rotate: "90deg",
      },
      "@mobile": {
        display: "none",
      },
    },
    ".control-prev.control-arrow": {
      "&:before": {
        border: "none",
        content: `url(${arrow})`,
        zIndex: 1,
        rotate: "-90deg",
      },
      "@mobile": {
        display: "none",
      },
    },
  },

  ".cards-container": {
    display: "flex",
    justifyContent: "center",
    gap: "$1",
    width: "100%",
    height: 370,
  },
});
