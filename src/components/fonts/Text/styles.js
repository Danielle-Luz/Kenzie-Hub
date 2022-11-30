import styled, { css } from "styled-components";

import { Text } from ".";

const textTypes = {
  label: css`
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
  `,

  span: css`
  
  `
};

export const TextStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.weight[weight] : theme.weight.regular};
`;