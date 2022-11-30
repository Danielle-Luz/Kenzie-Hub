import styled, { css } from "styled-components";

import { Title } from ".";

const titleTypes = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
  `,

  h2: css`
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
  `,

  h3: css`
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
  `
};

export const TitleStyled = styled(Title)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  
  font-weight: ${({theme}) => theme.weight.bold};

  ${({tag}) => titleTypes[tag]}
`;