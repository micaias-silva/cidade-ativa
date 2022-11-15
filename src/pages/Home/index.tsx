import ActivityButton from "../../components/ActivityButton";
import { Container, Grid, Section } from "../../styles/Containers";
import { Text, Title, TopicTitle } from "../../styles/Text";
import imageEsportes from "../../assets/img/esportes.jpg";
import imageCultura from "../../assets/img/cultura.jpg";
import imageLazer from "../../assets/img/lazer.jpg";
import imageEdu from "../../assets/img/educação.jpg";
import imageFaixa from "../../assets/img/faixa.png";
import { HomeStyle } from "./styles";

const Home = () => {
  return (
    <HomeStyle>
      <img src={imageFaixa} width="100%" />
      <Container>
        {/* <Title></Title> */}
        <Section>
          <TopicTitle color="orange">Destaques</TopicTitle>
        </Section>
        <Section id="quem-somos">
          <TopicTitle color="orange">
            O que é? O projeto Cidade Ativa
          </TopicTitle>
          <Text>
            O Projeto Cidade Ativa é um projeto sem fins lucrativos, com a
            missão de democratizar o acesso de crianças, jovens e adultos ao
            Esporte, Cultura e Lazer; Trazendo uma oportunidade para melhor
            qualidade de vida, despertando sonhos e os tornando realidade
          </Text>
        </Section>
        <Section>
          <TopicTitle>Nossas atividades</TopicTitle>
          <Grid id="atividades">
            <ActivityButton
              image={imageEsportes}
              background="$opRed"
              title="Esportes"
            />
            <ActivityButton
              image={imageCultura}
              background="$opGreen"
              title="Cultura"
            />
            <ActivityButton
              image={imageEdu}
              background="$opBlue"
              title="Educação"
            />
            <ActivityButton
              image={imageLazer}
              background="$opYellow"
              title="Lazer"
            />
          </Grid>
        </Section>
      </Container>
    </HomeStyle>
  );
};

export default Home;
