import { TechHeaderStyled, TechListStyled } from "./styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ButtonTerciary } from "../../../components/Button/Terciary";
import plus from "../../../assets/imgs/plus.svg";
import { CardTech } from "./CardTech";
import { TechContext } from "../../../providers/TechContext";
import { useContext } from "react";
import { useEffect } from "react";

export function Technologies({ user }) {
  const { showModal } = useContext(TechContext);

  return (
    <>
      <TechHeaderStyled>
        <TitleStyled tag="h2">Tecnologias</TitleStyled>
        <ButtonTerciary button onClick={() => showModal("create")}>
          <img src={plus} alt="ícone de adição" />
        </ButtonTerciary>
      </TechHeaderStyled>
      <TechListStyled>
        {user?.techs?.length == 0 ? (
          <TitleStyled tag="h2">Nenhuma tecnologia adicionada</TitleStyled>
        ) : (
          user?.techs?.map(({ id, title, status }) => {
            return <CardTech key={id} id={id} title={title} status={status} />;
          })
        )}
      </TechListStyled>
    </>
  );
}
