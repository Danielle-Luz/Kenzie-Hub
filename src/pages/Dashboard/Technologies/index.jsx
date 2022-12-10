import { TechHeaderStyled, TechListStyled } from "./styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ButtonTerciary } from "../../../components/Button/Terciary";
import plus from "../../../assets/imgs/plus.svg";
import { CardTech } from "./CardTech";
import { Modal } from "../Modal";

export function Technologies() {
  return (
    <>
      <Modal />
      <TechHeaderStyled>
        <TitleStyled tag="h2">Tecnologias</TitleStyled>
        <ButtonTerciary button>
          <img src={plus} alt="ícone de adição" />
        </ButtonTerciary>
      </TechHeaderStyled>
      <TechListStyled>
        <CardTech />
        <CardTech />
        <CardTech />
      </TechListStyled>
    </>
  );
}