import styled from "styled-components";

export const CardTechStyled = styled.li`
  align-items: center;
  background-color: ${({theme}) => theme.colors.greyScale[4]};
  border-radius: ${({theme}) => theme.radius}px;
  display: flex;
  justify-content: space-between;
  padding: 14px 22px;

  &:hover {
    background-color: ${({theme}) => theme.colors.greyScale[2]};
  }
`

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 22px;

  button {
    background-color: transparent;
    width: 19px;
  }
`