import styled, { css } from "styled-components";

const formFlexSpacing = css`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

export const FormStyled = styled.form`
  background-color: ${({theme}) => theme.colors.greyScale[3]};

  border-radius: ${({theme}) => theme.radius}px;

  padding: 42px 22px;

  ${formFlexSpacing}
`

export const FormContainer = styled.section`
  max-width: 370px;
  width: 100%;

  header {
    margin-bottom: 40px;
  }

  main {
    ${formFlexSpacing}
  }
`