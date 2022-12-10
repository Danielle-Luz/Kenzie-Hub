import { TextStyled } from "../../../../components/fonts/Text/styles";
import { TitleStyled } from "../../../../components/fonts/Title/styles";
import { ButtonWrapper, CardTechStyled } from "./styles";
import trash from "../../../../assets/imgs/trash.svg";

export function CardTech() {
  return (
    <CardTechStyled>
        <TitleStyled tag="h3">Tecnologias</TitleStyled>
        <ButtonWrapper>
          <TextStyled tag="span">Intermediário</TextStyled>
          <button>
            <img src={trash} alt="ícone de lixeira" />
          </button>
        </ButtonWrapper>
    </CardTechStyled>
  );
}