import styled from "styled-components";

import { Button } from "../styles";

export const ButtonSecondaryStyled = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale[1]};

  align-items: center;
  display: flex;
  justify-content: center;

  font-size: ${({ theme, size }) => size ? theme.fontSizes[1] :  theme.fontSizes[3]}px;

  padding: 12px 17px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
  }
`;
