import { Flex } from "../../styles/Containers";
import { Link } from "../../styles/Text";
import Logo from "../Logo";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Flex>
        <Logo />
        <nav>
          <Flex>
            <Link href="/#atividades">Nossas atividades</Link>
            <Link href="/#quem-somos">Quem somos</Link>
          </Flex>
        </nav>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
