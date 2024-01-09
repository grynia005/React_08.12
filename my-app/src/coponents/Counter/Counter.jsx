import "./Counter.scss";

function Counter({ el, count, inc, dec, def }) {
  return (
    <div className="counter_box">
      <h2>Лічильник: {count}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={def}>Скинути</button>
    </div>
  );
}

export { Counter };
