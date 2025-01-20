import "./styles.css";
import "@amigoapp/doca/dist/css/doca.min.css";
import { ToastContainer } from "@amigoapp/doca-react";
import { Route, Routes } from "react-router-dom";
import RegisterFormView from "./views";

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

    <Routes>
      <Route path="/" element={<RegisterFormView/>} />
    </Routes>
  </>
);

export default App;
