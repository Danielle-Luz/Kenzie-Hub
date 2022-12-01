import { Form } from "../../components/Form";
import { FormContainer } from "../../components/Form/styles";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { Header } from "../../components/Header";
import { ButtonPrimary } from "../../components/Button/Primary";
import { api } from "../../services/api";
import { fieldsList } from "./registerFormFieldsList";
import { registerSchema } from "./registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";

export function Register() {
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema)
  });

  async function createUser(data) {
    try {
      await api.post("/users", data);

      toast.success("Usuário cadastrado com sucesso.");

      reset();
    } catch (err) {
      console.log(err);
    }
  }

  async function submitData(data) {
    await createUser(data);
  }

  return (
    <FormContainer>
      <Header buttonText="Voltar" to="/login" />
      <main>
        <TitleStyled tag="h2">Crie sua conta</TitleStyled>
        <TextStyled tag="span">Rápido e grátis, vamos nessa</TextStyled>
        <Form errors={errors} handleSubmit={handleSubmit} submitData={submitData} fieldsList={fieldsList} register={register} />
        <ButtonPrimary type="default">Cadastrar</ButtonPrimary>
      </main>
    </FormContainer>
  );
}
