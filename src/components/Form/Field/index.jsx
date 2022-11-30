import { FieldStyled, FieldWrapperStyled } from "./styles";
import { TextStyled } from "../../fonts/Text/styles";

export const Field = ({ className, name, options, placeholder }) => {
  return options ? (
    <select className={className} defaultValue={placeholder}>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  ) : (
    <input className={className} placeholder={placeholder} />
  );
};

export const FieldWrapper = ({ label, placeholder, name, options }) => {
  return (
    <FieldWrapperStyled>
      <TextStyled tag="label">{label}</TextStyled>
      <FieldStyled placeholder={placeholder} options={options} name={name} />
    </FieldWrapperStyled>
  );
};
