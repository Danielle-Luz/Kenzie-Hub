import { ButtonPrimaryStyled } from "./styles";

export function ButtonPrimary ({children, onClick, type}) {
  return (
    <ButtonPrimaryStyled onClick={onClick} type={type}>{children}</ButtonPrimaryStyled>
  );
}