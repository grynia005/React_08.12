import "./ListComponent.scss";

function List({ arr, flex, listItemComponent: ListItemComponent }) {
  return (
    <ul className={`list_${flex}`}>
      {arr.map((el) => (
        <ListItemComponent key={el.id} li={el} />
      ))}
    </ul>
  );
}
export { List };
