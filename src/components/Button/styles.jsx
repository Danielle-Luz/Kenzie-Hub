import styled from "styled-components";

import { Link } from "react-router-dom";

function ClickableElement({ button, className, children, onClick, to, disabled }) {
  return (
    <>
      {button ? (
        <button className={className} disabled={disabled} onClick={onClick}>
          {children}
        </button>
      ) : (
        <Link className={className} to={to}>
          {children}
        </Link>
      )}
    </>
  );
}

export const Button = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.greyScale[0]};
  border-radius: ${({ theme }) => theme.radius}px;

  align-items: center;
  display: flex;
  justify-content: center;
`;
