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
} from "react-hook-form";

type RegisterFormProps = {
  control: Control<RegisterFormSchema>;
  handleSubmit: UseFormHandleSubmit<RegisterFormSchema>;
  onSubmit: SubmitHandler<RegisterFormSchema>;
  clearForm: () => void;
  errors: FieldErrors<RegisterFormSchema>;
}

function RegisterForm({
  control,
  handleSubmit,
  onSubmit,
  clearForm,
  errors,
}: RegisterFormProps) {
  return (
    <div className="align-center doca-flex-col">
      <Header />

      <Hero name={"Faça seu Cadastro"} />

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
