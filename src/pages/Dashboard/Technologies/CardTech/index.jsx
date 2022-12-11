import { useContext } from "react";
import { TextStyled } from "../../../../components/fonts/Text/styles";
import { TitleStyled } from "../../../../components/fonts/Title/styles";
import { TechContext } from "../../../../providers/TechContext";
import { ButtonWrapper, CardTechStyled } from "./styles";

export function CardTech({title, status}) {
  const {showModal, setTechnology} = useContext(TechContext);

  function showEditModal() {
    showModal("edit");

    setTechnology({title, status});
  }
  
  return (
    <CardTechStyled onClick={showEditModal}>
        <TitleStyled tag="h3">{title}</TitleStyled>
        <TextStyled tag="span">{status}</TextStyled>
    </CardTechStyled>
  );
}