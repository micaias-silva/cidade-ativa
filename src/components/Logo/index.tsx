import { useHistory } from "react-router-dom";
import logoSvg from "../../assets/img/logo.svg";
import { Image } from "../../styles/Image";
import { LogoContainer } from "./styles";

const Logo = () => {
  const history = useHistory();
  return (
    <LogoContainer onClick={() => history.push("/")}>
      <Image>
        <img src={logoSvg} alt="instituto-logo" />
      </Image>
    </LogoContainer>
  );
};

export default Logo;
