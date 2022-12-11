import { FormStyled, ButtonGroup } from "./styles";
import { FieldWrapper } from "../Field";

export function Form({
  buttons,
  errors,
  fieldsList,
  handleSubmit,
  submitData,
  register,
}) {
  return (
    <FormStyled onSubmit={handleSubmit(submitData)} noValidate>
      <>
        {fieldsList.map(
          ({ label, placeholder, name, options, type }, index) => {
            return (
              <FieldWrapper
                key={index}
                label={label}
                placeholder={placeholder}
                name={name}
                options={options}
                error={errors[name]}
                register={register}
                type={type}
              />
            );
          }
        )}
        <ButtonGroup>
          {buttons.map((button) => button)} 
        </ButtonGroup>
      </>
    </FormStyled>
  );
}
