import styled from "styled-components";
import { Container } from "../styles";

export const UserInfoStyled = styled.article`
  
  border: 1px solid ${({theme}) => theme.colors.greyScale[3]};
  
  padding: 20px;
  
  ${Container} {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 50px;
    justify-content: space-between;
  }
`