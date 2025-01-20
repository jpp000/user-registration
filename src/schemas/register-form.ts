import yup from "yup";

const registerFormSchema = yup.object({
  name: yup
    .string()
    .min(3, "O nome deve ter no mínimo 3 digitos")
    .required("O nome é um campo obrigatório"),
  email: yup.string().email().required("Digite um email válido"),
  password: yup
    .string()
    .min(3, "A senha deve ter no mínimo 3 digitos")
    .required("O senha é um campo obrigatório"),
});

type RegisterFormSchema = yup.InferType<typeof registerFormSchema>;

export { registerFormSchema, type RegisterFormSchema };
