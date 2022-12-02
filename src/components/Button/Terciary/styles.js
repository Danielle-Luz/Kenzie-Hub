import styled from "styled-components";

import { Button } from "../styles";

export const ButtonTerciaryStyled = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale[3]};

  align-items: center;
  display: flex;
  justify-content: center;

  height: fit-content;

  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  padding: 8px 17px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
  }
`;
