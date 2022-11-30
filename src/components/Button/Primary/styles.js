import styled from "styled-components";

import { Button } from "../styles";

export const ButtonPrimaryStyled = styled(Button)`
  background-color: ${({ theme, negative }) =>
    negative ? theme.colors.primary.negative : theme.colors.primary.default};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  padding: 12px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.focus};
  }
`;