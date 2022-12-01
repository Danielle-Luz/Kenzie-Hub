import { ButtonPrimaryStyled } from "./styles";

export function ButtonPrimary ({children, onClick}) {
  return (
    <ButtonPrimaryStyled onClick={onClick}>{children}</ButtonPrimaryStyled>
  );
}