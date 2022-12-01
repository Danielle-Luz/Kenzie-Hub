import styled from "styled-components";

import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  border-radius: ${({ theme }) => theme.radius}px;
`;
