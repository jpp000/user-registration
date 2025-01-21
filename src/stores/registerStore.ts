import { create } from "zustand";
import { RegisterFormSchema } from "../schemas/register-form";
import { createJSONStorage, persist } from "zustand/middleware";

type RegisterStore = {
  user: RegisterFormSchema;
  setUser: (user: RegisterFormSchema) => void;
};

const useRegisterStore = create(
  persist<RegisterStore>(
    (set) => ({
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      setUser: (user: RegisterFormSchema) => set(() => ({ user })),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useRegisterStore;
