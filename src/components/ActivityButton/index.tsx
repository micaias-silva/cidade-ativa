import { Image } from "../../styles/Image";
import { Text } from "../../styles/Text";
import { ButtonContainer } from "./styles";
import { useHistory } from "react-router-dom";

interface IActivityProps {
  title: string;
  image: string;
  background: string;
}

const ActivityButton = ({ image, title, background }: IActivityProps) => {
  const history = useHistory();
  return (
    <a href="/atividades">
      <ButtonContainer css={{ "&::before": { backgroundColor: background } }}>
        <img src={image} alt="" />
        <Text color="white">{title}</Text>
      </ButtonContainer>
    </a>

  );
};

export default ActivityButton;
