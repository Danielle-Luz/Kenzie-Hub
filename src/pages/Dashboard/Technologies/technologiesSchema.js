import * as yup from "yup";

export const technologiesSchema = yup.object().shape({
  title: yup.string().required("Insira o nome da tecnologia")
});