import { TechHeaderStyled } from "./styles";
import { Container } from "../styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ButtonSecondary } from "../../../components/Button/Secondary";

export function Technologies() {
  return (
    <Container>
      <TechHeaderStyled>
        <TitleStyled tag="h2">Tecnologias</TitleStyled>
        <ButtonSecondary button>+</ButtonSecondary>
      </TechHeaderStyled>
    </Container>
  );
}