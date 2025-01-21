import { Button, Card, Separator } from "@amigoapp/doca-react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { RegisterFormSchema } from "../../schemas/register-form";

type UserDetailsProps = {
  user: RegisterFormSchema;
  backToRegister: () => void;
};

function UserDetails({ user, backToRegister }: UserDetailsProps) {
  return (
    <div>
      <Header />

      <Hero name="Dados do Usuário" />

      <Card className="doca-w-96 doca-m-auto">
        <Card.Icon name="user" />
        <Card.Content>
          <div>
            <div className="doca-flex doca-justify-between doca-gap-2 doca-py-2">
              <Card.Title>Name</Card.Title>
              <Card.Subtitle>{user.name}</Card.Subtitle>
            </div>
            <Separator />
          </div>

          <div>
            <div className="doca-flex doca-justify-between doca-gap-2 doca-py-2">
              <Card.Title>Email</Card.Title>
              <Card.Subtitle>{user.email}</Card.Subtitle>
            </div>
            <Separator />
          </div>

          <div>
            <div className="doca-flex doca-justify-between doca-gap-2 doca-py-2">
              <Card.Title>Password</Card.Title>
              <Card.Subtitle>{user.password}</Card.Subtitle>
            </div>
          </div>
        </Card.Content>
      </Card>

      <div className="doca-w-56 doca-mt-8 doca-m-auto">
        <Button onClick={backToRegister} block variant="primary">
          Voltar
        </Button>
      </div>
    </div>
  );
}

export default UserDetails;
