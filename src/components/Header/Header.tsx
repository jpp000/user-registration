import { Sidebar, Text } from "@amigoapp/doca-react";

function Header() {
  return (
    <header className="doca-m-4">
      <div className="doca-flex align-center">
        <Sidebar menu={[]} />{" "}
        <Text size="base" variant="dark" weight="normal">
          Register.ai
        </Text>
      </div>
    </header>
  );
}

export default Header;
