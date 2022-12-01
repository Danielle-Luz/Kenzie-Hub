import { ButtonPrimaryStyled } from "./styles";

export function ButtonPrimary({ button, children, onClick, to, colorType }) {
  return (
    <ButtonPrimaryStyled
      button={button}
      onClick={onClick}
      to={to}
      colorType={colorType}
    >
      {children}
    </ButtonPrimaryStyled>
  );
}
