import { Container, Flex, Grid, Section } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";
import { Topic, Text } from "../../styles/Text";

export const StyledHome = styled("main", {});

export const AboutUsSection = styled(Section, {
  background: "$brandGradient",
  borderRadius: 15,
  position: "relative",
  padding: "$containerPadding",
  width: "100%",
  minHeight: 550,
  [`& ${Topic}`]: {
    marginBottom: 20,
  },
  "@mobile": {
    borderRadius: 0,
    paddingRight: "$mobileContainerPadding",
    paddingLeft: "$mobileContainerPadding"
  },
  ".decoration": {
    position: "absolute",
    bottom: "$containerPadding",
    right: "calc(50% + $containerPadding)",
    "@mobile": {
      bottom: "$containerPadding",
      right: "$mobileContainerPadding",
    }
  }
});

export const AboutUsTextContainer = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: 75,
  gap: "$4",
  padding: "0 $containerPadding 0 0",
  "@mobile": {
    width: "100%",
  },
  img: {
    width: 100,
    alignSelf: "flex-end",
  },
});

export const AboutUsImageContainer = styled("figure", {
  width: "50%",
  height: "100%",
  position: "absolute",
  top: 0,
  right: 0,
  "@mobile": {
    display: "none",
  },
  img: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    "@mobile": {
      display: "none",
    },
  },
});

export const MapSection = styled(Section, {
  textAlign: "center",
  [`${Text}`]: {
    marginTop: "$4",
  },
});

export const FormSection = styled(Section, {
  borderRadius: "10px 10px 0 0",
  background: "$orange",
});

export const ContribContainer = styled(Container, {
  "@mobile": {
    margin: "0 auto",
    padding: 0,
  },
});

export const ContribTextContainer = styled("div", {
  padding: "0 50px",
  margin: "0 auto",
  "@mobile": {
    display: "none",
  },
});
