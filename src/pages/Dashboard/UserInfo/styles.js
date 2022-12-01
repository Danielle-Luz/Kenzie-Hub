import styled from "styled-components";

export const UserInfoStyled = styled.article`
  align-items: center;
  display: flex;
  justify-content: center;
  
  border: 1px solid ${({theme}) => theme.colors.greyScale[3]};
  
  padding: 20px;
`