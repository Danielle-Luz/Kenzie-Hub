import { TechHeaderStyled, TechListStyled } from "./styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ButtonTerciary } from "../../../components/Button/Terciary";
import plus from "../../../assets/imgs/plus.svg";
import { CardTech } from "./CardTech";
import { TechContext } from "../../../providers/TechContext";
import { useContext } from "react";

export function Technologies({userData}) {
  const {modal, showModal} = useContext(TechContext);

  return (
    <>
      <TechHeaderStyled>
        <TitleStyled tag="h2">Tecnologias</TitleStyled>
        <ButtonTerciary button onClick={() => showModal(true)}>
          <img src={plus} alt="ícone de adição" />
        </ButtonTerciary>
      </TechHeaderStyled>
      <TechListStyled>
        {
          userData?.techs?.map(({title, status}, index) => {
            <CardTech key={index} title={title} status={status} />
          })
        }
      </TechListStyled>
    </>
  );
}