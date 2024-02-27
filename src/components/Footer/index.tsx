import {
  Container,
  Grid,
  ListItem,
  UnorderedList,
} from "../../styles/Containers";
import imageLogo from "../../assets/img/logo.svg";
import { GrInstagram } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { InGridContainer, SocialMediaLink, StyledFooter } from "./styles";
import { ImageContainer } from "../../styles/Image";
import { contactData } from "../../config/contactData";
import { GenericLink, Topic, Text } from "../../styles/Text";
import { formatPhone } from "../../tools/format.tools";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <InGridContainer>
            <ImageContainer>
              <img src={imageLogo} alt="" />
            </ImageContainer>
          </InGridContainer>
          <InGridContainer>
            <Topic color="white">Entre em Contato</Topic>
            <UnorderedList>
              <ListItem>
                <GrInstagram />
                <SocialMediaLink href={contactData.instagram} target="_blank">
                  Instagram
                </SocialMediaLink>
              </ListItem>
              {contactData.phoneNumbers.map((phone, index) => (
                <ListItem key={index}>
                  <BsTelephone />
                  <GenericLink href={`tel:${formatPhone(phone)}`}>
                    {formatPhone(phone)}
                  </GenericLink>
                </ListItem>
              ))}
              {contactData.emails.map((email, index) => (
                <ListItem key={"email" + index}>
                  <AiOutlineMail />
                  {email}
                </ListItem>
              ))}
            </UnorderedList>
          </InGridContainer>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;