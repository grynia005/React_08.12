import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const Nav = () => {
  return (
    <nav>
      <NavLink to={"/"}>Rock</NavLink>
      <NavLink to={"/home2"}>Card</NavLink>
      <NavLink to={"/home3"}>Counter </NavLink>
      <NavLink to={"/home4"}> Table </NavLink>
      <NavLink to={"/home5"}> Users </NavLink>
    </nav>
  );
};

export { Nav };
