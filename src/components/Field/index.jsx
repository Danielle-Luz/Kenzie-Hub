import { FieldStyled, FieldWrapperStyled } from "./styles";
import { TextStyled } from "../fonts/Text/styles";

export function Field({
  className,
  name,
  disabled,
  options,
  placeholder,
  register,
  type,
}) {
  return options ? (
    <select
      className={className}
      defaultValue={placeholder}
      {...register(name)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  ) : (
    <input
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      {...register(name)}
      type={type}
      autoComplete="off"
    />
  );
}

export function FieldWrapper({
  label,
  placeholder,
  disabled,
  name,
  options,
  error,
  register,
  type,
}) {
  return (
    <FieldWrapperStyled>
      <TextStyled tag="label">{label}</TextStyled>
      <FieldStyled
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        name={name}
        register={register}
        type={type}
      />
      {error && (
        <TextStyled error={error} tag="span">
          {error.message}
        </TextStyled>
      )}
    </FieldWrapperStyled>
  );
}
