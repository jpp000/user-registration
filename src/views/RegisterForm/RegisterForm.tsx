import { Input, PasswordInput, Button } from "@amigoapp/doca-react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { RegisterFormSchema } from "../../schemas/register-form";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import useRegisterStore from "../../stores/registerStore";

interface RegisterFormProps {
  register: UseFormRegister<RegisterFormSchema>;
  setValue: UseFormSetValue<RegisterFormSchema>;
  handleSubmit: UseFormHandleSubmit<RegisterFormSchema>;
  errors: FieldErrors<RegisterFormSchema>;
  onSubmit: SubmitHandler<RegisterFormSchema>;
  control: Control<RegisterFormSchema>;
}

function RegisterForm({
  control,
  setValue,
  handleSubmit,
  onSubmit,
  errors,
}: RegisterFormProps) {
  const { setUser } = useRegisterStore();

  const clearForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setValue("name", "");
    setValue("email", "");
    setValue("password", "");
    setValue("confirmPassword", "");
  };

  return (
    <div className="align-center doca-flex-col">
      <Header />

      <Hero />

      <form
        className="doca-flex doca-flex-col doca-items-center doca-gap-5 doca-w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              error={errors.name?.message}
              label="Nome"
              {...field}
              className="doca-w-full"
              required
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              error={errors.email?.message}
              label="Email"
              {...field}
              className="doca-w-full"
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              error={errors.password?.message}
              label="Senha"
              {...field}
              className="doca-w-full"
              required
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              error={errors.confirmPassword?.message}
              label="Confirmar Senha"
              {...field}
              className="doca-w-full"
              required
            />
          )}
        />

        <Button type="submit" block variant="primary">
          Enviar
        </Button>
      </form>

      <div className="doca-mt-5 doca-w-96">
        <Button onClick={clearForm} block iconRight="trash" variant="secondary">
          Limpar dados
        </Button>
      </div>
    </div>
  );
}

export default RegisterForm;
