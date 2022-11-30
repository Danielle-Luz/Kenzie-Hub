import styled, { css } from "styled-components";

import { Text } from ".";

const textTypes = {
  label: css`
    color: ${({ theme }) => theme.colors.greyScale[0]};
  `,

  span: css`
    color: ${({ theme }) => theme.colors.greyScale[1]};
  `,
};

export const TextStyled = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  
  font-weight: ${({ theme, weight }) =>
    weight ? theme.weight[weight] : theme.weight.regular};

  ${({ tag }) => textTypes[tag]}
`;
