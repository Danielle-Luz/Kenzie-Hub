import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, onClick, type, to, button, size}) {
  return (
    <ButtonSecondaryStyled button={button} type={type} onClick={onClick} to={to} size={size}>{children}</ButtonSecondaryStyled>
  );
}