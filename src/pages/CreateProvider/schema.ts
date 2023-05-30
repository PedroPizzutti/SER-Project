import * as yup from "yup";

export const form_validation = yup.object().shape({
  profilePhoto: yup.string(),
  name: yup.string().required("O nome � obrigat�rio"),
  email: yup
    .string()
    .email("O email deve ser v�lido")
    .required("O email � obrigat�rio"),
  phone: yup.string().required("O telefone � obrigat�rio"),
  cpf: yup.string().required("O cpf � obrigat�rio"),
  bio: yup.string().required("A bio � obrigat�ria"),
});
