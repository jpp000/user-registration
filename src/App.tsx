import "./styles.css";
import "@amigoapp/doca/dist/css/doca.min.css";
import { ToastContainer, Button } from "@amigoapp/doca-react";
import { Routes } from "react-router-dom";

const TOAST_OPTIONS = {
  autoClose: 2500,
  closeOnClick: true,
  draggable: true,
  hideProgressBar: true,
  newestOnTop: false,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  position: "top-center",
  rtl: false,
};

const App = () => (
  <>
    <ToastContainer {...TOAST_OPTIONS} />
    <div
      className="doca-flex doca-flex-col doca-w-96 doca-text-lg"
    >
      Cadastro
      <Button variant="primary">sajkasl</Button>
    </div>
    <Routes></Routes>
  </>
);

export default App;
