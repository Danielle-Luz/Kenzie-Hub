import { ButtonPrimaryStyled } from "./styles";

export function ButtonPrimary ({children, onClick, to, type}) {
  return (
    <ButtonPrimaryStyled onClick={onClick} to={to} type={type}>{children}</ButtonPrimaryStyled>
  );
}