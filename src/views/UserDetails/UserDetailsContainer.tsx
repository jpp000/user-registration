import { useNavigate } from "react-router-dom";
import useRegisterStore from "../../stores/registerStore";
import UserDetails from "./UserDetails";
import { useCallback } from "react";

function UserDetailsContainer() {
  const { user } = useRegisterStore();
  const navigate = useNavigate();
  
  const backToRegister = useCallback(() => {
    navigate('/')
  }, [navigate])

  return <UserDetails user={user} backToRegister={backToRegister} />;
}

export default UserDetailsContainer;
