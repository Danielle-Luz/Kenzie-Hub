import { TechHeaderStyled, TechListStyled } from "./styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ButtonTerciary } from "../../../components/Button/Terciary";
import plus from "../../../assets/imgs/plus.svg";
import { CardTech } from "./CardTech";

export function Technologies({userData}) {
  return (
    <>
      <TechHeaderStyled>
        <TitleStyled tag="h2">Tecnologias</TitleStyled>
        <ButtonTerciary button>
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