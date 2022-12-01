import { FormStyled } from "./styles";
import { FieldWrapper } from "./Field";

export function Form({ errors, fieldsList, handleSubmit, submitData, register }) {
  console.log(errors);
  return (
    <FormStyled onSubmit={handleSubmit(submitData)}>
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
      </>
    </FormStyled>
  );
}
