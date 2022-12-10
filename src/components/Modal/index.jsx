import { TitleStyled } from "../fonts/Title/styles";
import { Form } from "../Form";
import { ModalStyled } from "./styles";

export function Modal({
  buttons,
  errors,
  fieldsList,
  handleSubmit,
  modalTitle,
  submitData,
  register,
}) {
  console.log(modalTitle)
  return (
    <ModalStyled>
      <article>
        <header>
          <TitleStyled tag="h3">{modalTitle}</TitleStyled>
          <button>X</button>
        </header>
        <Form
          buttons={buttons}
          errors={errors}
          handleSubmit={handleSubmit}
          submitData={submitData}
          fieldsList={fieldsList}
          register={register}
        />
      </article>
    </ModalStyled>
  );
}
