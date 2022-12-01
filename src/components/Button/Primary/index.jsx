import { ButtonPrimaryStyled } from "./styles";

export function ButtonPrimary ({button, children, onClick, to, type}) {
  return (
    <ButtonPrimaryStyled button={button} onClick={onClick} to={to} type={type}>{children}</ButtonPrimaryStyled>
  );
}