import { ButtonPrimaryStyled } from "./styles";
import { LoadingIcon } from "../../LoadingIcon/LoadingIcon";

export function ButtonPrimary({
  button,
  children,
  onClick,
  to,
  colorType,
  loading,
}) {
  return (
    <ButtonPrimaryStyled
      button={button}
      onClick={onClick}
      to={to}
      colorType={colorType}
      disabled={loading || colorType == "negative"}
    >
      {loading ? <LoadingIcon darker size={20} /> : children}
    </ButtonPrimaryStyled>
  );
}
