import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, icon, to}) {
  return (
    <ButtonSecondaryStyled icon={icon} to={to}>{children}</ButtonSecondaryStyled>
  );
}