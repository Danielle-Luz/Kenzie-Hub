import styled from "styled-components";

export const Input = ({placeholder, name, options}) => {
  return (
    options ? 
      <select>
        
      </select>
    :
    <input placeholder={placeholder} />
  );
}

export const InputWrapper = ({label, placeholder, name, options}) => {

}