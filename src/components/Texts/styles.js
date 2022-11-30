import styled, { css } from "styled-components";

import { Text } from ".";

const textTypes = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
    font-weight: ${({theme}) => theme.weight.bold}
  `,

  h1: css`
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    font-weight: ${({theme}) => theme.weight.bold}
  `,

  label: css`
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
  `,

  h2: css`
  
  `,

  span: css`
  
  `
};

export const TextStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.weight[weight] : theme.weight.regular};
`;
