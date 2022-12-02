import styled from "styled-components";
import { Container } from "../styles";

export const UserInfoStyled = styled.article`
  
  border: 1px solid ${({theme}) => theme.colors.greyScale[3]};
  
  padding: 20px;
  
  ${Container} {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`