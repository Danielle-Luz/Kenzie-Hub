import styled from "styled-components";

import { Button } from "../styles";

export const ButtonPrimaryStyled = styled(Button)`
  background-color: ${({ theme, type }) => theme.colors.primary[type]};

  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  padding: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.focus};
  }
`;
