import { FieldStyled, FieldWrapperStyled } from "./styles";
import { TextStyled } from "../../fonts/Text/styles";

export function Field({ className, name, options, placeholder, register, type }) {
  return options ? (
    <select className={className} defaultValue={placeholder} {...register(name)}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  ) : (
    <input className={className} placeholder={placeholder} {...register(name)} type={type} autoComplete="off" />
  );
}

export function FieldWrapper({ label, placeholder, name, options, error, register, type }) {
  return (
    <FieldWrapperStyled>
      <TextStyled tag="label">{label}</TextStyled>
      <FieldStyled placeholder={placeholder} options={options} name={name} register={register} type={type} />
      {error && (
        <TextStyled error tag="span">
          {error.message}
        </TextStyled>
      )}
    </FieldWrapperStyled>
  );
}
