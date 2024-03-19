import { Flex } from "@styles/Containers";
import { GenericLink } from "@styles/Text";
import Logo from "@components/Logo";
import {
  ModalContainer,
  NavigationContainer,
  StyledNav,
  StyledNavMobile,
} from "./styles";
import {useState } from "react";
import ReactModal from "react-modal";

const Navigation = () => {
  const [isShowing, setShowing] = useState<boolean>(true);
  const [viewBackground, setViewBackground] = useState<boolean>(false);
  const [mobileModalOpen, setModalOpen] = useState<boolean>(false);

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

  const handleCloseModal = () => setModalOpen(false);

  return (
    <NavigationContainer>
      <Flex
        className={`nav-wrapper 
        ${isShowing || mobileModalOpen ? "toggle-showing" : "toggle-hiding"}
        ${viewBackground || mobileModalOpen ? "toggle-background" : ""}`}
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
        <div
          className={`mobile-button-container ${mobileModalOpen && "open"}`}
          onClick={() => setModalOpen(!mobileModalOpen)}
        >
          <div />
          <div />
        </div>
      </Flex>
      <ModalContainer>
        <ReactModal
          isOpen={mobileModalOpen}
          onRequestClose={() => setModalOpen(false)}
          preventScroll
          portalClassName={ModalContainer.className}
          className="modal-content"
          overlayClassName="modal-overlay"
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          closeTimeoutMS={250}
        >
          <StyledNavMobile id="mobile-links">
            <GenericLink onClick={handleCloseModal} href="#apoiadores">
              APOIADORES
            </GenericLink>
            <GenericLink onClick={handleCloseModal} href="#nossos-projetos">
              PROJETOS
            </GenericLink>
            <GenericLink onClick={handleCloseModal} href="#sobre-nos">
              SOBRE NÓS
            </GenericLink>
            <GenericLink onClick={handleCloseModal} href="#localização">
              ONDE ESTAMOS
            </GenericLink>
            <GenericLink onClick={handleCloseModal} href="#fale-conosco">
              FALE CONOSCO
            </GenericLink>
          </StyledNavMobile>
        </ReactModal>
      </ModalContainer>
    </NavigationContainer>
  );
};

export default Navigation;
