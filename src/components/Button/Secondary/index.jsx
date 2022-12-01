import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, to}) {
  return (
    <ButtonSecondaryStyled to={to}>{children}</ButtonSecondaryStyled>
  );
}