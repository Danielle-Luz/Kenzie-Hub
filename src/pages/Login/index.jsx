import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { fieldsList } from "./loginFormFieldsList";
import { Form } from "../../components/Form";
import { useEffect } from "react";
import { FormContainer } from "../../components/Form/styles";
import { Header } from "../../components/Header";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { ButtonSecondary } from "../../components/Button/Secondary";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useState } from "react";

export function Login() {
  const [loading, setLoading] = useState(false);
  const {login} = useContext(UserContext);
  
  useEffect(() => {
    localStorage.clear();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormContainer>
      <Header />
      <main>
        <TitleStyled tag="h2">Login</TitleStyled>
        <Form
          button
          buttonText="Entrar"
          errors={errors}
          handleSubmit={handleSubmit}
          loading={loading}
          submitData={(data) => login(data, setLoading)}
          fieldsList={fieldsList}
          register={register}
        />
        <TextStyled tag="span" weight="medium">
          Ainda não possui uma conta?
        </TextStyled>
        <ButtonSecondary to="/register" size>
          Cadastre-se
        </ButtonSecondary>
      </main>
    </FormContainer>
  );
}
