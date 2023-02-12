import { Title } from "../../styles/Text";
import { HeaderContainer, HeaderPresention, StyledHeader } from "./styles";
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
        <img src={backgroundImage} />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
