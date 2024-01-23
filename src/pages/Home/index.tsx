import ProjectFrame from "../../components/ProjectFrame";
import { Container, Flex, Grid, Section } from "../../styles/Containers";
import { Text, Title, Topic, Label } from "../../styles/Text";
import imageEsportes from "../../assets/img/esportes.jpg";
import imageCultura from "../../assets/img/cultura.jpg";
import imageLazer from "../../assets/img/lazer.jpg";
import imageEdu from "../../assets/img/educação.jpg";
import decorationImg from "../../assets/img/etc/decoration-1.svg"

import {
  AboutUsImageContainer,
  AboutUsSection,
  StyledHome,
  MapSection,
  FormSection,
  ContribContainer,
  ContribTextContainer,
  AboutUsTextContainer,
} from "./styles";
import { GenericButton } from "../../styles/Buttons";
import { Form, Input } from "../../styles/Form";
import ContribForm from "../../components/ContribForm";
import projectImg from "../../assets/img/simas-presentation.jpg";

const Home = () => {
  return (
    <StyledHome>
      <Container behavior="mobileFit">
      <AboutUsSection id="about-us">
        <Topic color="white">QUEM SOMOS NÓS?</Topic>
          <AboutUsTextContainer>
            <Text color="white">
              O <strong>Instituto Cidade Ativa</strong> é uma
              <em> Instituição não governamental</em> sem fins lucrativos que
              atua no desenvolvimento de ações sócio-culturais que promovem a
              formação humana através da educação e atividades esportivas e
              culturais, além de levar a conscientização cidadã abordando temas
              como: <b>meio-ambiente, intolerância e racismo.</b>
            </Text>
            <Text color="white">
              Através de nossos projetos, visamos ampliar as oportunidades de
              crianças, jovens, adultos e idosos, melhorando sua qualidade de
              vida, seu empoderamento e promovendo transformação social na
              comunidade.
            </Text>
            <Text color="white">
              Nossa Missão é contribuir para a redução das desigualdades
              sociais, promovendo o fortalecimento de vínculo comunitário
              através do protagonismo, desenvolvimento das potencialidades
              locais, capacidade criativa, inclusão cultural e esportiva,
              contribuindo com o desenvolvimento social, econômico, cultural e
              esportivo do município, da região, do estado e do Brasil.
            </Text>
          </AboutUsTextContainer>
          <img className="decoration" src={decorationImg} draggable="false" />
          <AboutUsImageContainer>
            <img src={projectImg} />
          </AboutUsImageContainer>
      </AboutUsSection>
      </Container>
      <Container>
        <Section id="projects">
          <Topic>Nós temos projetos em</Topic>
          <Grid>
            <ProjectFrame
              title="Esportes"
              background="$opRed"
              image={imageEsportes}
            />
            <ProjectFrame
              title="Cultura"
              background="$opGreen"
              image={imageCultura}
            />
            <ProjectFrame
              title="Lazer"
              background="$opYellow"
              image={imageLazer}
            />
            <ProjectFrame
              title="Educação"
              background="$opBlue"
              image={imageEdu}
            />
          </Grid>
        </Section>
      </Container>
      <Container>

      </Container>
      <Container behavior="mobileFit">
        <MapSection id="location">
          <Topic>FALE CONOSCO PESSOALMENTE</Topic>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6578260658986!2d-35.753270853166626!3d-9.540725399999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70137ba39233d29%3A0x1a400150989b249d!2sR.%20Sen.%20Teot%C3%B4nio%20Vilela%2C%2015%20-%20Village%20Campestre%2C%20Macei%C3%B3%20-%20AL%2C%2057073-530!5e0!3m2!1spt-BR!2sbr!4v1679404190912!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              loading="lazy"
              aria-readonly="true"
            ></iframe>
            <Text>
              R. Sen. Teotônio Vilela, 15 - Village Campestre Maceió - AL
              57073-383
            </Text>
        </MapSection>
      </Container>
      <ContribContainer>
        <FormSection id="contrib-form">
          <Topic color="white" style={{ textAlign: "center" }}>
            Gostaria de Contribuir?
          </Topic>
          <Grid>
            <ContribTextContainer>
              <Topic color="white">
                CONTRIBUA PARA QUE O PROJETO POSSA CONTINUAR EXISTINDO
              </Topic>
            </ContribTextContainer>
            <ContribForm />
          </Grid>
        </FormSection>
      </ContribContainer>
    </StyledHome>
  );
};

export default Home;
