import styled from "styled-components";

import { Button } from "../styles";

export const ButtonPrimaryStyled = styled(Button)`
  background-color: ${({ theme, colorType }) =>
    theme.colors.primary[colorType]};

  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  padding: 12px;

  &:hover {
    background-color: ${({ theme, colorType }) =>
      colorType == "negative"
        ? theme.colors.primary.negative
        : theme.colors.primary.focus};
  }
`;
