import { useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HomeTwo } from "../HomeTwoBox/HomeTwoBox";

function HomeTwoSection() {
  const [showSect, setShowSect] = useState(false);

  const handleShowSection = () => {
    setShowSect(!showSect);
  };

  return (
    <section>
      <Button call={handleShowSection} number={2} />
      {showSect && (
        <Container>
          <HomeTwo />
        </Container>
      )}
    </section>
  );
}

export { HomeTwoSection };
