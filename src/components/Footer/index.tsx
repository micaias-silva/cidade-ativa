import {
  Container,
  Flex,
  Grid,
  ListItem,
  UnorderedList,
} from "@styles/Containers";
import imageLogo from "@img/logo.svg";
import { GrInstagram } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { InGridContainer, StyledFooter } from "./styles";
import { ImageContainer } from "@styles/Image";
import { contactData } from "@config/contactData";
import { GenericLink, Topic, Text, Span, Subtitle } from "@styles/Text";
import { formatPhone } from "@tools/format.tools";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex className="splitter">
          <ImageContainer>
            <img src={imageLogo} alt="" />
          </ImageContainer>
          <Grid>
            <InGridContainer>
              <Subtitle color="white">Redes Sociais</Subtitle>
              <UnorderedList>
                <ListItem>
                  <GrInstagram />
                  <GenericLink href={contactData.instagram} target="_blank">
                    Instagram
                  </GenericLink>
                </ListItem>
              </UnorderedList>
            </InGridContainer>
            <InGridContainer>
              <Subtitle color="white">Entre em Contato</Subtitle>
              <UnorderedList>
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
                    <GenericLink href={`mailto:${email}`}>{email}</GenericLink>
                  </ListItem>
                ))}
              </UnorderedList>
            </InGridContainer>
          </Grid>
        </Flex>
      </Container>
      <hr />
      <Span color="gray3">©2024, TODOS OS DIREITOS RESERVADOS</Span>
    </StyledFooter>
  );
};

export default Footer;
