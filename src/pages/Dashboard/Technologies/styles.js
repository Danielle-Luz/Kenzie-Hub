import styled from "styled-components";

export const TechHeaderStyled = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;

  button {
    padding: 11px;
  }
`

export const TechListStyled = styled.ul`
  background-color: ${({theme}) => theme.colors.greyScale[3]};
  border-radius: ${({theme}) => theme.radius}px;
  display: flex;
  flex-direction: column;

  gap: 16px;
  margin-top: 21px;
  padding: 23px 8.5px;

  width: 100%;

  h2 {
    text-align: center;
  }

  @media(min-width: 500px) {
    padding-inline: 26px;
  }
`