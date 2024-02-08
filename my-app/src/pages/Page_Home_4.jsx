import { useState, useEffect } from "react";
import { Container } from "../coponents/Container/Container";
import { HomeFour } from "../coponents/HomeFourBox/HomeFourBox";
import { useFetch } from "../hooks/useFetch";

const api = "https://swapi.dev/api/people/";

function HomeFourSection() {
  const { data, isLoadind, isError } = useFetch(api);
  console.log(data);

  const starWars = data.results;
  console.log(starWars);

  return (
    <section>
      <Container>
        <>
          {isLoadind && <h1>Loading...</h1>}
          {starWars ? <HomeFour arr={starWars} /> : <h4>{isError}</h4>}
        </>
      </Container>
    </section>
  );
}

export { HomeFourSection };
