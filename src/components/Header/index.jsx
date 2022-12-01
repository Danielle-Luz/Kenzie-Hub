import tinyLogo from "../../assets/imgs/logo-tiny.svg";
import bigLogo from "../../assets/imgs/logo-big.svg";

import { ButtonSecondary } from "../Button/Terciary";
import { HeaderStyled } from "./styles";

export function Header ({hasTinyLogo, buttonText, to}) {
  return (
    <HeaderStyled buttonText={buttonText}>
      <img src={hasTinyLogo ? tinyLogo : bigLogo} alt="logo" />
      {
        buttonText && <ButtonSecondary to={to}>{buttonText}</ButtonSecondary>
      }
    </HeaderStyled>
  );
}