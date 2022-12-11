import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, onClick, to, button, size}) {
  return (
    <ButtonSecondaryStyled button={button} onClick={onClick} to={to} size={size}>{children}</ButtonSecondaryStyled>
  );
}