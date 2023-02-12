import {
  Container,
  Flex,
  FlexColumn,
  Grid,
  ListItem,
  UnorderedList,
} from "../../styles/Containers";

import imageLogo from "../../assets/img/logo.svg";
import {
  InGridContainer,
  SocialMediaButton,
  SocialMediaLink,
  StyledFooter,
} from "./styles";
import { ImageContainer } from "../../styles/Image";
import { contactData } from "../../config/contactData";
import { GrInstagram } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { SubTitle } from "../../styles/Text";
import { formatPhone } from "../../tools/format.tools";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <InGridContainer>
            <SubTitle color="white">Acompanhe o Instituto!</SubTitle>
            <SocialMediaLink href={contactData.instagram} target="_blank">
              Instagram
            </SocialMediaLink>
          </InGridContainer>
          <InGridContainer>
            <SubTitle color="white">Entre em Contato</SubTitle>
            <UnorderedList>
              {contactData.phoneNumbers.map((phone, index) => (
                <ListItem key={"phone" + index}>{formatPhone(phone)}</ListItem>
              ))}
              {contactData.emails.map((email, index) => (
                <ListItem key={"email" + index}>{email}</ListItem>
              ))}
            </UnorderedList>
          </InGridContainer>
          <InGridContainer>
            <ImageContainer>
              <img src={imageLogo} alt="" />
            </ImageContainer>
          </InGridContainer>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
