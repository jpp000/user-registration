import * as yup from "yup";

const registerFormSchema = yup.object({
  name: yup
    .string()
    .min(3, "O nome deve ter no mínimo 3 digitos")
    .required("O nome é um campo obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é um campo obrigatório"),
  password: yup
    .string()
    .min(3, "A senha deve ter no mínimo 3 digitos")
    .required("A senha é um campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("A confirmação da senha é obrigatória"),
});

type RegisterFormSchema = yup.InferType<typeof registerFormSchema>;

export { registerFormSchema, type RegisterFormSchema };
