import styled, { css } from "styled-components";

const formFlexSpacing = css`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const FormStyled = styled.form`
  ${formFlexSpacing}
`;

export const FormContainer = styled.section`
  max-width: 370px;
  min-height: 100vh;
  width: 100%;
  margin: 50px 20px; 

  header {
    margin-bottom: 40px;
  }

  main {
    background-color: ${({ theme }) => theme.colors.greyScale[3]};

    border-radius: ${({ theme }) => theme.radius}px;

    padding: 42px 22px;

    ${formFlexSpacing}
  }

  h2, span {
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 22px;

  button {
    font-size: ${({theme}) => theme.fontSizes[1]}px;
  }

  button:nth-child(1) {
    flex-grow: 2;
  }
`