import { useState, useEffect } from "react";
import { Container } from "../coponents/Container/Container";
import { HomeFour } from "../coponents/HomeFourBox/HomeFourBox";

function HomeFourSection() {
  const [starWars, setStarWars] = useState([]);
  const api = "https://swapi.dev/api/people/";

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

  return (
    <section>
      <Container>
        <HomeFour arr={starWars} />
      </Container>
    </section>
  );
}

export { HomeFourSection };
