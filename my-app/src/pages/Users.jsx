import { NavLink } from "react-router-dom";
import "./Users.scss";
import { UserInfoContext } from "../context/UserContext";
import { useContext } from "react";

const Users = () => {
  const users = useContext(UserInfoContext);
  console.log(users);

  return (
    <div className="container">
      <h1>Users</h1>
      <ul className="list_flex user_list">
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/home5/${user.id}`}>{user.name}</NavLink>
            <h3>{user.phone}</h3>
            <p>{user.email}</p>
            <h4>{user.company.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Users };
