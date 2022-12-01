import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: ${({theme}) => theme.colors.greyScale[3]};

  border-radius: ${({theme}) => theme.radius}px;

  display: flex;
  flex-direction: column;
  gap: 22px;

  padding: 42px 22px;
`

export const FormContainer = styled.section`
  max-width: 370px;
  width: 100%;
`