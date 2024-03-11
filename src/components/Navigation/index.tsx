import { Flex } from "@styles/Containers";
import { GenericLink } from "@styles/Text";
import Logo from "@components/Logo";
import { NavigationContainer, StyledNav } from "./styles";
import { useState } from "react";

const Navigation = () => {
  const [isShowing, setShowing] = useState<boolean>(true);
  const [viewBackground, setViewBackground] = useState<boolean>(false);

  let lastScrollTop = window.scrollY;

  window.addEventListener("scroll", (e) => {
    const scrollTopPosition = window.scrollY;

    if (scrollTopPosition < 200 || scrollTopPosition < lastScrollTop) {
      setShowing(true);
    } else if (scrollTopPosition > lastScrollTop) {
      setShowing(false);
    }

    if (scrollTopPosition > 250) {
      setViewBackground(true);
    } else {
      setViewBackground(false);
    }

    lastScrollTop = scrollTopPosition < 0 ? 0 : scrollTopPosition;
  });

  return (
    <NavigationContainer>
      <Flex
        className={`nav-wrapper 
        ${isShowing ? "toggle-showing" : "toggle-hiding"}
        ${viewBackground && "toggle-background"}`}
      >
        <Logo />
        <StyledNav>
          <Flex>
            <GenericLink href="#apoiadores">APOIADORES</GenericLink>
            <GenericLink href="#nossos-projetos">PROJETOS</GenericLink>
            <GenericLink href="#sobre-nos">SOBRE NÓS</GenericLink>
            <GenericLink href="#localização">ONDE ESTAMOS</GenericLink>
            <GenericLink href="#fale-conosco">FALE CONOSCO</GenericLink>
          </Flex>
        </StyledNav>
      </Flex>
    </NavigationContainer>
  );
};

export default Navigation;
