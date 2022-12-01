import tinyLogo from "../../assets/imgs/logo-tiny.svg";
import bigLogo from "../../assets/imgs/logo-big.svg";
import { ButtonSecondary } from "../Button/Secondary";

export function Header ({hasTinyLogo, buttonText, to}) {
  return (
    <header>
      <img src={hasTinyLogo ? tinyLogo : bigLogo} alt="logo" />
      {
        buttonText && <ButtonSecondary to={to}>{buttonText}</ButtonSecondary>
      }
    </header>
  );
}