import styled from "styled-components";

import { Button } from "../styles";

export const ButtonSecondaryStyled = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale[3]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding: 8px 16px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
  }
`;
