import styled from "styled-components";

import { Link } from "react-router-dom";

function ClickableElement({ button, className, children, to }) {
  return (
    <>
      {button ? <button className={className}>{children}</button> : <Link className={className} to={to}>{children}</Link>}
    </>
  );
}

export const Button = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  border-radius: ${({ theme }) => theme.radius}px;
`;
