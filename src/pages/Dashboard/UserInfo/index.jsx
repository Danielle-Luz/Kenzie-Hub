import { UserInfoStyled } from "./styles";
import { TitleStyled } from "../../../components/fonts/Title/styles";
import { TextStyled } from "../../../components/fonts/Text/styles";
import { Container } from "../styles";

export function UserInfo({user:{name, course_module} }) {
  return (
    <UserInfoStyled>
      <Container>
        <TitleStyled tag="h1">Olá, {name}</TitleStyled>
        <TextStyled tag="span">{course_module}</TextStyled>
      </Container>
    </UserInfoStyled>
  );
}

