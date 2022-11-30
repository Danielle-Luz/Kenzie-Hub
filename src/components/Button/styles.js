import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  border-radius: ${({ theme }) => theme.radius}px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme, negative }) =>
    negative ? theme.colors.primary.negative : theme.colors.primary.default};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  padding: 12px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.focus};
  }
`;
