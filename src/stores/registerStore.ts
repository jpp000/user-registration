import { create } from "zustand";
import { RegisterFormSchema } from "../schemas/register-form";
import { createJSONStorage, persist } from "zustand/middleware";

type RegisterStore = {
  user: RegisterFormSchema;
  setUser: (user: RegisterFormSchema) => void;
  clearUser: () => void;
};

const useRegisterStore = create(
  persist<RegisterStore>(
    (set) => ({
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      setUser: (user: RegisterFormSchema) => set(() => ({ user })),
      clearUser: () =>
        set(() => ({
          user: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          },
        })),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useRegisterStore;
