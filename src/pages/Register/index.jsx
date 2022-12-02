import { Form } from "../../components/Form";
import { FormContainer } from "../../components/Form/styles";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { fieldsList } from "./registerFormFieldsList";
import { registerSchema } from "./registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Register() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  async function createUser(data) {
    try {
      setLoading(true);

      await api.post("/users", data);

      reset();

      toast.success("Usuário cadastrado com sucesso.");

      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch ({ response }) {
      const hasErrorMessage = response?.data?.message;
      if (hasErrorMessage) {
        toast.error("Email já cadastrado");
      } else {
        toast.error("Não foi possível cadastrar o usuário");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer>
      <Header buttonText="Voltar" to="/login" />
      <main>
        <TitleStyled tag="h2">Crie sua conta</TitleStyled>
        <TextStyled tag="span">Rápido e grátis, vamos nessa</TextStyled>
        <Form
          button
          buttonText="Cadastrar"
          errors={errors}
          handleSubmit={handleSubmit}
          loading={loading}
          submitData={createUser}
          fieldsList={fieldsList}
          register={register}
        />
      </main>
    </FormContainer>
  );
}
