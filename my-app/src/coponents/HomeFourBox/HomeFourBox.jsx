import { TableStar } from "../CardStar/TableStar";
import "./HomeFourBox.scss";

function HomeFour({ arr }) {
  return (
    <div className="star_wars_box">
      <h2>***** Star Wars Star *****</h2>
      <TableStar arr={arr} />
    </div>
  );
}

export { HomeFour };
