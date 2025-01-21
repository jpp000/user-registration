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
  const { user, setUser } = useRegisterStore();

  const {
    control,
    register,
    setValue,
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

  const onSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    setUser(data);
    navigate("/"); // -> /user-info
  };

  return (
    <RegisterForm
      control={control}
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
}

export default RegisterFormContainer;
