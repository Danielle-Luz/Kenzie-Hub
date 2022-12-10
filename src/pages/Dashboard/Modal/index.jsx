import { FieldWrapper } from "../../../components/Field";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { ModalStyled } from "./styles";

export function Modal({
  buttonGroup,
  errors,
  fieldsList,
  handleSubmit,
  loading,
  submitData,
}) {
  return (
    <ModalStyled>
      <article>
        <header>
          <TitleStyled>Cadastrar tecnologias</TitleStyled>
          <button>X</button>
        </header>
        <form>
          <FieldWrapper label="Nome" placeholder="Nome da tecnologia" />
          <FieldWrapper label="Selecionar status" />
        </form>
      </article>
    </ModalStyled>
  );
}
