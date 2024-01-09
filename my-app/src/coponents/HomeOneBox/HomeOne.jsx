import prime from "./images_home-1/prime.png";
import "./HomeOne.scss";

function HomeOne() {
  return (
    <div className="box_work-1">
      <p>|домашня робота номер один|</p>
      <h1>ROCK</h1>
      <img src={prime} alt="rock_gitare"></img>
    </div>
  );
}

export { HomeOne };
