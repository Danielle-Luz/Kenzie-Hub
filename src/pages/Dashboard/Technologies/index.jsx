import { TechHeaderStyled } from "./styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ButtonSecondary } from "../../../components/Button/Secondary";
import { ButtonTerciary } from "../../../components/Button/Terciary";
import plus from "../../../assets/imgs/plus.svg";

export function Technologies() {
  return (
    <TechHeaderStyled>
      <TitleStyled tag="h2">Tecnologias</TitleStyled>
      <ButtonTerciary button>
        <img src={plus} alt="ícone de adição" />
      </ButtonTerciary>
    </TechHeaderStyled>
  );
}