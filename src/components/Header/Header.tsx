import { Sidebar, Text } from "@amigoapp/doca-react";

function Header({ name }: { name?: string }) {
  return (
    <header className="doca-m-4">
      <div className="align-center">
        <Sidebar menu={[]} />
        <Text size="base" variant="dark" weight="normal">
          {name ? name : "Cadastre.ai"}
        </Text>
      </div>
    </header>
  );
}

export default Header;
