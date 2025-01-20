import { Input, PasswordInput, Button } from "@amigoapp/doca-react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function RegisterForm() {
  return (
    <div className="align-center doca-flex-col">
      <Header />

      <Hero />

      <form
        className="doca-flex doca-flex-col doca-items-center doca-gap-5 doca-w-96"
        action=""
      >
        <Input
          error=""
          label="Nome"
          name="input"
          className="doca-w-full"
          onRightSectionClick={function noRefCheck() {}}
          required
        />

        <Input
          error=""
          label="Email"
          name="input"
          className="doca-w-full"
          onRightSectionClick={function noRefCheck() {}}
          required
        />

        <PasswordInput
          error=""
          label="Senha"
          name="PasswordInput"
          className="doca-w-full"
          onChange={function noRefCheck() {}}
          onRightSectionClick={function noRefCheck() {}}
          required
          reservedWords={[]}
        />

        <PasswordInput
          error=""
          label="Confirmar Senha"
          name="PasswordInput"
          className="doca-w-full"
          onChange={function noRefCheck() {}}
          onRightSectionClick={function noRefCheck() {}}
          required
          reservedWords={[]}
        />

        <Button
          block
          onClick={function noRefCheck() {}}
          size="normal"
          variant="primary"
        >
          Enviar
        </Button>

        <Button
          block
          onClick={function noRefCheck() {}}
          size="normal"
          variant="danger"
        >
          Limpar dados
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
