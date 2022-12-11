import { useContext } from "react";
import { TextStyled } from "../../../../components/fonts/Text/styles";
import { TitleStyled } from "../../../../components/fonts/Title/styles";
import { TechContext } from "../../../../providers/TechContext";
import { CardTechStyled } from "./styles";

export function CardTech({id, title, status}) {
  const {showModal, setTechnology} = useContext(TechContext);

  function showEditModal() {
    setTechnology({id, title, status});

    showModal("edit");
  }

  return (
    <CardTechStyled onClick={showEditModal}>
        <TitleStyled tag="h3">{title}</TitleStyled>
        <TextStyled tag="span">{status}</TextStyled>
    </CardTechStyled>
  );
}