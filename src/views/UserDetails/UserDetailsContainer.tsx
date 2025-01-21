import { useNavigate } from "react-router-dom";
import useRegisterStore from "../../stores/registerStore";
import UserDetails from "./UserDetails";

function UserDetailsContainer() {
  const { user } = useRegisterStore();
  const navigate = useNavigate();

  const backToRegister = () => {
    navigate("/");
  };

  return <UserDetails user={user} backToRegister={backToRegister} />;
}

export default UserDetailsContainer;
