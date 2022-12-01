import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, to, button, size}) {
  return (
    <ButtonSecondaryStyled button={button} to={to} size={size}>{children}</ButtonSecondaryStyled>
  );
}