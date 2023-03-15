import { ImageContainer } from "../../styles/Image";
import { Text } from "../../styles/Text";
import { ButtonContainer } from "./styles";

interface IActivityProps {
  title: string;
  image: string;
  background: string;
  // to: string;
}

const ProjectFrame = ({ image, title, background }: IActivityProps) => {
  return (
    <ButtonContainer
      as="a"
      href="https://www.instagram.com/cidadeativa.mcz/"
      target="_blank"
      css={{ "&::before": { backgroundColor: background } }}
    >
      <img src={image} alt="" />
      <Text color="white">{title}</Text>
    </ButtonContainer>
  );
};

export default ProjectFrame;
