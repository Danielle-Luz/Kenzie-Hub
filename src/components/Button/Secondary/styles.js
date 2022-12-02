import styled from "styled-components";

import { Button } from "../styles";

export const ButtonSecondaryStyled = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale[1]};

  font-size: ${({ theme }) => theme.fontSizes[1]};

  padding: 12px 17px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
  }
`;
