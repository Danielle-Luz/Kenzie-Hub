import { Form } from "../../components/Form";
import { FormContainer } from "../../components/Form/styles";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { Header } from "../../components/Header";
import { ButtonPrimary } from "../../components/Button/Primary";

export function Register() {
  const fieldsList = [
    {
      label: "Nome",
      placeholder: "Digite aqui seu nome",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "Digite aqui seu email",
      name: "email",
    },
    {
      label: "Senha",
      placeholder: "Digite aqui sua senha",
      name: "password",
    },
    {
      label: "Confirmar senha",
      placeholder: "Digite novamente sua senha",
      name: "confirmPassword",
    },
    {
      label: "Bio",
      placeholder: "Fale sobre você",
      name: "bio",
    },
    {
      label: "Contato",
      placeholder: "Opção de contato",
      name: "contact",
    },
    {
      label: "Selecionar módulo",
      name: "module",
      placeholder: "Primeiro módulo",
      options: [
        "Primeiro módulo",
        "Segundo módulo",
        "Terceiro módulo",
        "Quarto módulo",
        "Quinto módulo",
        "Sexto módulo",
      ],
    },
  ];

  function createUser() {}

  return (
    <FormContainer>
      <Header buttonText="Voltar" />
      <main>
        <TitleStyled tag="h2">Crie sua conta</TitleStyled>
        <TextStyled tag="span">Rápido e grátis, vamos nessa</TextStyled>
        <Form fieldsList={fieldsList} onSubmit={createUser} />
        <ButtonPrimary type="default">Cadastrar</ButtonPrimary>
      </main>
    </FormContainer>
  );
}
