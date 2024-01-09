import { useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HomeThree } from "../HomeThreeBox/HomeThreeBox";

function HomeThreeSection() {
  const [showSect, setShowSect] = useState(false);

  const handleShowSection = () => {
    setShowSect(!showSect);
  };

  return (
    <section>
      <Button call={handleShowSection} number={3} />
      {showSect && (
        <Container>
          <HomeThree />
        </Container>
      )}
    </section>
  );
}

export { HomeThreeSection };
