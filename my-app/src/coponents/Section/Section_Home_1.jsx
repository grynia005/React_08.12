import { useState } from "react";
import { Container } from "../Container/Container";
import { HomeOne } from "../HomeOneBox/HomeOne";
import { Button } from "../Button/Button";

function HomeOneSection() {
  const [showSect, setShowSect] = useState(false);

  const handleShowSection = () => {
    setShowSect(!showSect);
  };

  return (
    <section className="home_work-1">
      <Button call={handleShowSection} number={1}/>
      {showSect && (
        <Container Container>
          <HomeOne />
        </Container>
      )}
    </section>
  );
}

export { HomeOneSection };
