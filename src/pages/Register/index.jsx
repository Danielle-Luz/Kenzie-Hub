import { Form } from "../../components/Form";
import { FormContainer } from "../../components/Form/styles";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { Header } from "../../components/Header";
import { fieldsList } from "./registerFormFieldsList";
import { registerSchema } from "./registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useState } from "react";
import { ButtonPrimary } from "../../components/Button/Primary";

export function Register() {
  const {createUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);

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

  function RegisterButton() {
    return (
      <ButtonPrimary
        button
        colorType={Object.keys(errors).length != 0 ? "negative" : "default"}
        loading={loading}
      >
        Cadastrar
      </ButtonPrimary>
    );
  }

  return (
    <FormContainer>
      <Header buttonText="Voltar" to="/login" />
      <main>
        <TitleStyled tag="h2">Crie sua conta</TitleStyled>
        <TextStyled tag="span">Rápido e grátis, vamos nessa</TextStyled>
        <Form
          buttons={[<RegisterButton />]}
          errors={errors}
          handleSubmit={handleSubmit}
          submitData={(data) => createUser(data, reset, setLoading)}
          fieldsList={fieldsList}
          register={register}
        />
      </main>
    </FormContainer>
  );
}
