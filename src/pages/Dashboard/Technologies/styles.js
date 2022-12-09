import styled from "styled-components";
import { Container } from "../styles";

export const TechHeaderStyled = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;

  button {
    padding: 11px;
  }
`

export const TechListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 23px 26px;
  
  width: 100%;
`