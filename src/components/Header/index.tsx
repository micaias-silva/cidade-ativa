import { Subtitle, Title } from "../../styles/Text";
import {
  HeaderContainer,
  HeaderImage,
  HeaderPresention,
  StyledHeader,
} from "./styles";
import backgroundImage from "../../assets/img/header/background.png";
import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={backgroundImage} alt="" className="background" />
      <HeaderContainer>
        <HeaderPresention>
          <Title color="white">
            NÓS BUSCAMOS FORTACELER A COMUNIDADE ATRAVÉS DO ESPORTE, CULTURA E LAZER
          </Title>
          <Subtitle color="white">CONHEÇA O PROJETO CIDADE ATIVA</Subtitle>
        </HeaderPresention>
        {/*<HeaderImage src={backgroundImage} />*/}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
