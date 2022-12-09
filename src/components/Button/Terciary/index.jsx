import { ButtonTerciaryStyled } from "./styles";

export function ButtonTerciary({ button, children, to }) {
  return <ButtonTerciaryStyled button={button} to={to}>{children}</ButtonTerciaryStyled>;
}
