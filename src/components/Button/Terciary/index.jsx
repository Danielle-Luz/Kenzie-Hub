import { ButtonTerciaryStyled } from "./styles";

export function ButtonTerciary({ children, to }) {
  return <ButtonTerciaryStyled to={to}>{children}</ButtonTerciaryStyled>;
}
