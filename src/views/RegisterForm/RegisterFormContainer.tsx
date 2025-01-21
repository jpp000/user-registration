import { SubmitHandler, useForm } from "react-hook-form";
import RegisterForm from "./RegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "../../schemas/register-form";
import { useNavigate } from "react-router-dom";
import useRegisterStore from "../../stores/registerStore";

function RegisterFormContainer() {
  const navigate = useNavigate();
  const { user, setUser, clearUser } = useRegisterStore();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<RegisterFormSchema>(registerFormSchema),
    defaultValues: {
    name: user.name ?? "",
    email: user.email ?? "",
    password: user.password ?? "",
    confirmPassword: user.confirmPassword ?? "",
  },
  });

  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
    setUser(data);
    navigate("/user-details");
  };

  const clearForm = async () => {
    clearUser();

    reset({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <RegisterForm
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      clearForm={clearForm}
      errors={errors}
    />
  );
}

export default RegisterFormContainer;
