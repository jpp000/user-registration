import "./Hero.styles.css";
import { Text } from "@amigoapp/doca-react";

function Hero({ name }: {
  name?: string
}) {
  return (
    <div className="hero">
      <Text as="h1" size="large" variant="dark" weight="semibold">
        {name}
      </Text>
    </div>
  );
}

export default Hero;
