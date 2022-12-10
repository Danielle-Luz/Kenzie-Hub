import { ButtonTerciaryStyled } from "./styles";

export function ButtonTerciary({ button, onClick, children, to }) {
  return <ButtonTerciaryStyled button={button} onClick={onClick} to={to}>{children}</ButtonTerciaryStyled>;
}
