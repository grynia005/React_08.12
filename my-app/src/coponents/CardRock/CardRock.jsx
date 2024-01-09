import { Counter } from "../Counter/Counter";

function CardRock({ li, inc, dec, def }) {
  return (
    <li>
      <div>
        <h3>{li.nameStyle}</h3>
        <a href={li.styleLink}>
          <img src={li.smileRock}></img>
        </a>
        <Counter el={li} count={li.count} inc={inc} dec={dec} def={def} />
      </div>
    </li>
  );
}
export { CardRock };
