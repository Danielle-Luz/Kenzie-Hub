import styled from "styled-components";

import { Button } from "../styles";

export const ButtonSecondaryStyled = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale[3]};

  align-items: center;
  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  padding: 12px 17px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
  }
`;
