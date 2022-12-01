import { ButtonSecondaryStyled } from "./styles";

export function ButtonSecondary ({children, icon, onClick}) {
  return (
    <ButtonSecondaryStyled icon={icon} onClick={onClick}>{children}</ButtonSecondaryStyled>
  );
}