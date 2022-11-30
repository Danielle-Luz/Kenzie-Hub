import styled, { css } from "styled-components";

import { Title } from ".";

const titleTypes = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
    font-weight: ${({theme}) => theme.weight.bold}
  `,

  h1: css`
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    font-weight: ${({theme}) => theme.weight.bold}
  `
};

export const TextStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.weight[weight] : theme.weight.regular};
`;