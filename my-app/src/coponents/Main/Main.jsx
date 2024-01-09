import { HomeOneSection } from "../Section/Section_Home_1";
import { HomeTwoSection } from "../Section/Section_Home_2";
import { HomeThreeSection } from "../Section/Section_Home_3";
import { HomeFourSection } from "../Section/Section_Home_4";
import "./Main.scss";

function Main() {
  return (
    <main>
      <HomeOneSection />
      <HomeTwoSection />
      <HomeThreeSection />
      <HomeFourSection />
    </main>
  );
}

export { Main };
