import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, to, button}) {
  return (
    <ButtonSecondaryStyled button={button} to={to}>{children}</ButtonSecondaryStyled>
  );
}