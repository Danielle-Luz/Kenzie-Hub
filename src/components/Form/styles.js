import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: ${({theme}) => theme.colors.greyScale[3]};

  border-radius: ${({theme}) => theme.radius}px;

  padding: 42px 22px;
`