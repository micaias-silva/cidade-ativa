import ProjectFrame from "../../components/ProjectFrame";
import { Container, Flex, Grid, Section } from "../../styles/Containers";
import { Text, Title, SubTitle, Label } from "../../styles/Text";
import imageEsportes from "../../assets/img/esportes.jpg";
import imageCultura from "../../assets/img/cultura.jpg";
import imageLazer from "../../assets/img/lazer.jpg";
import imageEdu from "../../assets/img/educação.jpg";

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

const Home = () => {
  return (
    <StyledHome>
      <Container>
        <Section id="projects">
          <SubTitle>Nós temos projetos em</SubTitle>
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
      <AboutUsSection id="about-us">
        <SubTitle color="white">Quem somos nós?</SubTitle>
        <Flex>
          <AboutUsTextContainer>
            <Text color="white">
              O <strong>Instituto Cidade Ativa</strong> é uma
              <em> Instituição não governamental</em> sem fins lucrativos que
              atua no desenvolvimento de ações sócio-culturais que promovem a
              formação humana através da educação e atividades esportivas e
              culturais, além de levar a conscientização cidadã abordando temas
              como meio-ambiente, intolerância e racismo.
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
              locaias, capacidade criativa, inclusão cultural e esportiva,
              contribuindo com o desenvolvimento social, econômico, cultural e
              esportivo do município, da região, do estado e do Brasil.
            </Text>
          </AboutUsTextContainer>
          <AboutUsImageContainer>
            <img src="" />
          </AboutUsImageContainer>
        </Flex>
      </AboutUsSection>
      <MapSection id="location">
        <SubTitle>Onde estamos?</SubTitle>
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2339.5412048828034!2d-35.75214404808667!3d-9.541390706008503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70137e4a20f5429%3A0xad0b4d2c21dad98a!2sR.%20Sen.%20Teot%C3%B4nio%20Vilela%2C%2033%20-%20Village%20Campestre%2C%20Macei%C3%B3%20-%20AL%2C%2057073-383!5e0!3m2!1spt-BR!2sbr!4v1676245163866!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            loading="lazy"
            aria-readonly="true"
          ></iframe>
        </Container>
      </MapSection>
      <ContribContainer>
        <FormSection id="contrib-form">
          <SubTitle color="white" style={{ textAlign: "center" }}>
            Gostaria de Contribuir?
          </SubTitle>
          <Grid>
            <ContribTextContainer>
              <SubTitle color="white">
                CONTRIBUA PARA QUE O PROJETO POSSA CONTINUAR EXISTINDO
              </SubTitle>
            </ContribTextContainer>
            <Form>
              <Label htmlFor="name">Nome *</Label>
              <Input name="name" placeholder="Nome completo..." />
              <Label htmlFor="email">E-mail *</Label>
              <Input
                name="email"
                type="email"
                placeholder="exemplo@email.com"
              />

              <Label htmlFor="phone">Nº de Telefone *</Label>
              <Input name="phone" type="tel" placeholder="(00) 00000-0000" />

              <Label htmlFor="phone">Nome da Instituição</Label>
              <Input name="instituition" placeholder="Instituição" />

              <GenericButton type="submit" size="full">
                Enviar uma mensagem
              </GenericButton>
            </Form>
          </Grid>
        </FormSection>
      </ContribContainer>
    </StyledHome>
  );
};

export default Home;
