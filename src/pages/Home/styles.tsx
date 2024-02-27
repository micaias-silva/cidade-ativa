import { Container, Flex, Section } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";
import { Topic, Text } from "../../styles/Text";
import decorationImg from "../../assets/img/etc/decoration-2.svg";

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
    paddingLeft: "$mobileContainerPadding",
  },
  ".decoration": {
    position: "absolute",
    bottom: "$containerPadding",
    right: "calc(50% + $containerPadding)",
    "@mobile": {
      bottom: "$containerPadding",
      right: "$mobileContainerPadding",
    },
  },
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
  display: "flex",
  flexDirection: "column",
  [`${Topic}`]: {
    textAlign: "right",
    marginTop: "$4",
    maxWidth: 250,
    right: 0,
    alignSelf: "flex-end",
    "@mobile": {
      padding: "0 $mobileContainerPadding",
    },
  },
  [`${Text}`]: {
    marginTop: "$4",
    fontWeight: "$medium",
    maxWidth: 400,
    "@mobile": {
      padding: "0 $mobileContainerPadding",
    },
  },
});

export const FormSection = styled(Section, {
  position: "relative",
  width: "100%",
  [`${Topic}`]: {
    maxWidth: 420,
  },
  "@mobile": {
    margin: "0 auto",
  },
  [`${Flex}`]: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    "@mobile": {
      justifyContent: "center",
    },
  },
});

export const ContribContainer = styled(Container, {
  "@mobile": {
    margin: "0 auto",
  },
});

export const ContribTextContainer = styled("div", {
  padding: "0 50px",
  margin: "0 auto",
  "@mobile": {
    display: "none",
  },
});

export const HorizontalDivisionContainer = styled(Container, {
  position: "relative",
  hr: {
    backgroundColor: "$gray3",
    border: "none",
    height: 1,
    width: "100%",
    zIndex: -1,
  },
  textAlign: "center",
  [`${Topic}`]: {
    top: "-50%",
    background: "#ffffff",
    display: "inline-block",
    transform: "translate(0%, -50%)",
    margin: 0,
    padding: "0 2px 0 2px",
  },
});

export const PromotionImg = styled("figure", {
  maxWidth: 512,
  img: {
    borderRadius: "100%",
    width: "100%",
    "@mobile": {
      display: "none",
    },
  },
});

export const DecorationBackground = styled("div", {
  width: "100%",
  background: `url(${decorationImg})`,
  height: 670,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "absolute",
  bottom: 0,
  margin: 0,
  "@mobile": {
    backgroundSize: "768px 600px",
  },
  zIndex: -1,
});
