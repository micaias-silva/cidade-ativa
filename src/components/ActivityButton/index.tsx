import { ImageContainer } from "../../styles/Image";
import { Text } from "../../styles/Text";
import { ButtonContainer } from "./styles";

interface IActivityProps {
  title: string;
  image: string;
  background: string;
  to: string;
}

const FrameButton = ({ image, title, background, to }: IActivityProps) => {
  return (
    <ButtonContainer
      as="a"
      href={to}
      css={{ "&::before": { backgroundColor: background } }}
    >
      <img src={image} alt="" />
      <Text color="white">{title}</Text>
    </ButtonContainer>
  );
};

export default FrameButton;
