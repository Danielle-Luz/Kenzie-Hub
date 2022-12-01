import { FormStyled } from "./styles";
import { FieldWrapper } from "./Field";
import { ButtonPrimary } from "../../components/Button/Primary";

export function Form({ button, buttonText, errors, fieldsList, handleSubmit, submitData, register }) {
  return (
    <FormStyled onSubmit={handleSubmit(submitData)} noValidate>
      <>
        {fieldsList.map(({ label, placeholder, name, options, type }) => {
          return (
            <FieldWrapper
              label={label}
              placeholder={placeholder}
              name={name}
              options={options}
              error={errors[name]}
              register={register}
              type={type}
            />
          );
        })}
        <ButtonPrimary
          button={button}
          colorType={Object.keys(errors).length != 0 ? "negative" : "default"}
        >
          {buttonText}
        </ButtonPrimary>
      </>
    </FormStyled>
  );
}
