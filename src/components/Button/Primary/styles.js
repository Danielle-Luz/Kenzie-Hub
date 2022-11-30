import styled from "styled-components";

import { Button } from "../styles";

export const ButtonPrimaryStyled = styled(Button)`
  background-color: ${({ theme, type }) => theme.colors.primary[type]};

  font-size: ${({ theme }) => theme.fontSizes[1]};
  
  padding: 12px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.focus};
  }
`;
