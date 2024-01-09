import { useState } from "react";
import { Counter } from "../Counter/Counter";
import "./HomeThreeBox.scss";

import soloGitare from "./images_3/solo-gitare.png";
import post_grange_rock from "./images_3/post_grange_rock.png";
import metal_rock from "./images_3/metal_rock.png";
import alt_rock from "./images_3/alt_rock.png";
import rock_n_roll from "./images_3/rock_n_roll.png";
import pop_rock from "./images_3/pop_rock.png";
import { List } from "../ListComponent/ListComponent";
import { CardRock } from "../CardRock/CardRock";

function HomeThree() {
  const rockStyle = [
    {
      id: 0,
      smileRock: soloGitare,
      nameStyle: "Альтернативний рок",
      styleLink:
        "https://music.youtube.com/watch?v=UKVB3AtTSWg&si=QGeEoxeaA8MlQHiQ",
      count: 0,
    },
    {
      id: 1,
      smileRock: rock_n_roll,
      nameStyle: "Рок-н-рол",
      styleLink:
        "https://music.youtube.com/watch?v=ei0lpmqkTlU&si=-ZDtsA6xk5CLTd8N",
      count: 0,
    },
    {
      id: 2,
      smileRock: metal_rock,
      nameStyle: "Металкор",
      styleLink:
        "https://music.youtube.com/watch?v=SXdZv8HYUs0&si=MYzk-wN55zvrfo1z",
      count: 0,
    },
    {
      id: 3,
      smileRock: alt_rock,
      nameStyle: "Панк-рок",
      styleLink:
        "https://music.youtube.com/playlist?list=PLNddFQD1NSh2QUpAneXGegdzCvhT-_5fn&si=-OgT8Gnf_DQHccr_",
      count: 0,
    },
    {
      id: 4,
      smileRock: pop_rock,
      nameStyle: "Поп-рок",
      styleLink:
        "https://music.youtube.com/playlist?list=PLhk283P75z7g1xQ666HhYYn-ue68s21rG&si=P0cVqUI55-RgM3K7",
      count: 0,
    },
    {
      id: 5,
      smileRock: post_grange_rock,
      nameStyle: "Пост-грандж",
      styleLink:
        "https://music.youtube.com/watch?v=7iujg2523Mk&si=7mKnVXwQrmWgJfuE",
      count: 0,
    },
  ];

  const [count, setCount] = useState(0);
  const [countBest, setCountBest] = useState(rockStyle);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const start = () => {
    setCount(0);
  };

  const incrementList = (el) => {
    const indexElement = rockStyle.findIndex((style) => style.id === el.id);
    console.log(indexElement);

    rockStyle[indexElement].count = rockStyle[indexElement].count + 1;
    setCountBest([...rockStyle]);
    console.log(countBest);
  };
  const decrementList = (el) => {
    const indexElement = rockStyle.findIndex((style) => style.id === el.id);
    console.log(indexElement);

    rockStyle[indexElement].count = rockStyle[indexElement].count - 1;
    setCountBest([...rockStyle]);
    console.log(countBest);
  };
  const startList = (el) => {
    const indexElement = rockStyle.findIndex((style) => style.id === el.id);
    console.log(indexElement);

    rockStyle[indexElement].count = 0;
    setCountBest([...rockStyle]);
    console.log(countBest);
  };

  return (
    <>
      <div className="box_work-3">
        {/* Цей лічильник працює*/}
        <h2>Counters</h2>
        <Counter count={count} inc={increment} dec={decrement} def={start} />
      </div>
      <div className="rock_counter">
        {/*  // Десь тут є помилка, але не знаю де. буду вячний якщо побачиш і підкажеш)) */}
        <List
          arr={rockStyle}
          flex="flex"
          listItemComponent={(style) => (
            <CardRock
              li={style.li}
              inc={() => {
                incrementList(style.li);
              }}
              dec={() => {
                decrementList(style.li);
              }}
              def={() => {
                startList(style.li);
              }}
            />
          )}
        />
      </div>
    </>
  );
}

export { HomeThree };
