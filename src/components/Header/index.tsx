import { Title } from "../../styles/Text";
import {
  HeaderContainer,
  HeaderImage,
  HeaderPresention,
  StyledHeader,
} from "./styles";
import backgroundImage from "../../assets/img/background.png";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderPresention>
          <Title color="white">
            LAZER, ESPORTE E CULTURA. CONHEÇA O PROJETO CIDADE ATIVA
          </Title>
        </HeaderPresention>
        <HeaderImage src={backgroundImage} />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
