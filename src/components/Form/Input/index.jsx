import styled from "styled-components";
import { FieldStyled } from "./styles";

export const Input = ({ className, name, options, placeholder }) => {
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

export const InputWrapper = ({ label, placeholder, name, options }) => {};
