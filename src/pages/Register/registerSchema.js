import * as yup from "yup";

export const registerSchema = {
  name: yup.string().required("O nome é obrigatório").min(4, "Insira um nome com pelo menos 4 caracteres").max(150, "Insira um nome com no máximo 150 caracteres").matches(/[0-9]/g, "Não insira números no nome"),
  email: yup.string().required("O email é obrigatório").email("Informe um email com formato válido"),
  password: yup.string().required("A senha é obrigatória").min(8, "A senha deve ter no mínimo 8 caracteres").matches(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra").matches(/[0-9]/, "A senha deve conter no mínimo um número").matches(/[!@#\$%\^\&*\)\(+=._-]+/, "A senha deve ter pelo menos um caractere especial"),
  confirmPassword: yup.string().required("Insira novamente a senha").oneOf(yup.ref("password"), "As senhas não são iguais"),
  bio: yup.string().required("A bio é obrigatória"),
  contact: yup.string().required("A informação de contato é obrigatória")
}