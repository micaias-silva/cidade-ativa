import { Flex } from "@styles/Containers";
import { GenericLink } from "@styles/Text";
import Logo from "@components/Logo";
import { NavigationContainer, StyledNav } from "./styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Flex>
        <Logo />
        <StyledNav>
          <Flex>
            <GenericLink href="#projects">Projetos</GenericLink>
            <GenericLink href="#about-us">Quem Somos</GenericLink>
            <GenericLink href="#location">Onde Estamos?</GenericLink>
            <GenericLink href="#contrib-form">Deseja Contribuir?</GenericLink>
          </Flex>
        </StyledNav>
      </Flex>
    </NavigationContainer>
  );
};

export default Navigation;
