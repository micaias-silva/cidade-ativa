import { Container, Flex, Grid, Section } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";
import { Topic, Text } from "../../styles/Text";

export const StyledHome = styled("main", {});

export const AboutUsSection = styled(Section, {
  paddingRight: 50,
  paddingLeft: 50,
  background: "$orange",

  [`& ${Flex}`]: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  [`& ${Topic}`]: {
    marginBottom: 20,
  },
});

export const AboutUsTextContainer = styled("div", {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  "@mobile": {
    width: "100%",
  },
});

export const AboutUsImageContainer = styled("div", {
  width: "50%",
  textAlign: "center",
  alignSelf: "center",
  "@mobile": {
    display: "none",
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: "100%",
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
