import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { Form } from "../../components/Form";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  async function login(data) {
    try {
      await api.post("sessions", data);

      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);

      navigate("/dashboard");
    } catch ({ response }) {
      const hasErrorMessage = response?.data?.message;

      if (hasErrorMessage) {
        toast.error("Email ou senha incorretos");
      } else {
        toast.error("Não foi possível entrar no sistema");
      }
    }
  }
}
