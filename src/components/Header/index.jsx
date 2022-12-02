import tinyLogo from "../../assets/imgs/logo-tiny.svg";
import bigLogo from "../../assets/imgs/logo-big.svg";

import { ButtonSecondary } from "../Button/Secondary";
import { HeaderStyled } from "./styles";

export function Header({ hasTinyLogo, buttonText, to, darker }) {
  return (
    <HeaderStyled buttonText={buttonText}>
      <img src={hasTinyLogo ? tinyLogo : bigLogo} alt="logo" />
      {buttonText && <ButtonSecondary to={to} darker>{buttonText}</ButtonSecondary>}
    </HeaderStyled>
  );
}
