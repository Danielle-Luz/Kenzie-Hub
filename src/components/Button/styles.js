import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  border-radius: ${({ theme }) => theme.radius}px;
`;
