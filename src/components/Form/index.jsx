import { FormStyled } from "./styles";
import { FieldWrapper } from "./Field";

export function Form({ fieldsList, onSubmit }) {
  return (
    <FormStyled onSubmit={onSubmit}>
      {fieldsList.map(({ label, placeholder, name, options }) => {
        return (
          <FieldWrapper
            label={label}
            placeholder={placeholder}
            name={name}
            options={options}
          />
        );
      })}
    </FormStyled>
  );
}
