import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HomeFour } from "../HomeFourBox/HomeFourBox";

function HomeFourSection() {
  const [showSect, setShowSect] = useState(false);
  const [starWars, setStarWars] = useState([]);
  const api = "https://swapi.dev/api/people/";
  const handleShowSection = () => {
    setShowSect(!showSect);
  };

  useEffect(() => {
    async function getDataPeople() {
      try {
        const res = await fetch(api);
        if (!res.ok) {
          throw new Error("Упс, сталося шось не файне");
        }
        const dataPeople = await res.json();
        setStarWars(dataPeople.results);
      } catch (error) {
        console.error(error);
      }
    }
    getDataPeople();
  }, []);
  console.log(starWars);

  return (
    <section>
      <Button call={handleShowSection} number={4} />
      {showSect && (
        <Container>
          <HomeFour arr={starWars} />
        </Container>
      )}
    </section>
  );
}

export { HomeFourSection };
