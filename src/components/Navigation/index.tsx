import { Flex } from "../../styles/Containers";
import { GenericLink } from "../../styles/Text";
import Logo from "../Logo";
import { NavigationContainer, StyledNav } from "./styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Flex>
        <Logo />
        <StyledNav>
          <Flex>
            <GenericLink href="#">Projeto</GenericLink>
            <GenericLink href="#">Quem Somos</GenericLink>
            <GenericLink href="#">Onde Estamos?</GenericLink>
            <GenericLink href="#">Deseja Contribuir?</GenericLink>
          </Flex>
        </StyledNav>
      </Flex>
    </NavigationContainer>
  );
};

export default Navigation;
