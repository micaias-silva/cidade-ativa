import { useHistory } from "react-router-dom";
import logoSvg from "../../assets/img/logo.svg";
import { ImageContainer } from "../../styles/Image";
import { LogoContainer } from "./styles";

const Logo = () => {
  return (
    <LogoContainer as="a" href="/#introduction">
      <ImageContainer>
        <img src={logoSvg} alt="instituto-logo" />
      </ImageContainer>
    </LogoContainer>
  );
};

export default Logo;
