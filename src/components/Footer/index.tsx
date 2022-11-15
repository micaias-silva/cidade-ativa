import {
  Container,
  Flex,
  FlexColumn,
  Grid,
  LItem,
  UList,
} from "../../styles/Containers";
import { Text, TopicTitle } from "../../styles/Text";
import { AiFillPhone } from "react-icons/ai";
import imageLogo from "../../assets/img/logo.svg";
import { FootStyle } from "./styles";
import { Image } from "../../styles/Image";

const Footer = () => {
  return (
    <FootStyle>
      <Container>
        <Grid>
          <div>
            <TopicTitle color="white">Acompanhe o Cidade Ativa!</TopicTitle>
            <UList>
              <LItem>Instagram</LItem>
            </UList>
          </div>
          <div>
            <TopicTitle color="white">Entre em Contato</TopicTitle>
          </div>
          <Image>
            <img src={imageLogo} alt="" />
          </Image>
        </Grid>
      </Container>
    </FootStyle>
  );
};

export default Footer;
