import "./TableStar.scss";

function TableStar({ arr }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ЗІРКА</th>
          <th>Стать</th>
          <th>Зріст</th>
          <th>Вага</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((el) => (
          <tr key={el.name.replace(/\s/g, "")}>
            <td>{el.name}</td>
            <td>{el.gender}</td>
            <td>{el.height}</td>
            <td>{el.mass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { TableStar };
