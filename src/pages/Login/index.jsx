import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { fieldsList } from "./loginFormFieldsList";
import { Form } from "../../components/Form";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormContainer } from "../../components/Form/styles";
import { Header } from "../../components/Header";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { ButtonSecondary } from "../../components/Button/Secondary";

export function Login() {
  const navigate = useNavigate();

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

  async function login(data) {
    try {
      const userData = await api.post("/sessions", data);

      const  {token, user: {id}} = userData.data;

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", id);

      navigate("/dashboard");
    } catch (err) {
      const hasErrorMessage = err?.response?.data?.message;

      if (hasErrorMessage) {
        toast.error("Email ou senha incorretos");
      } else {
        toast.error("Não foi possível entrar no sistema");
      }
    }
  }

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
          submitData={login}
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
