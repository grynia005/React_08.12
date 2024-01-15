import { Container } from "../coponents/Container/Container";
import { HomeOne } from "../coponents/HomeOneBox/HomeOne";

function HomeOneSection() {
  return (
    <section className="home_work-1">
      <Container Container>
        <HomeOne />
      </Container>
    </section>
  );
}

export { HomeOneSection };
