import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./CardProfile.scss";
import { NavLink } from "react-router-dom";

const CardProfile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!res.ok) {
          throw new Error("Сталася страшна помилка серверу");
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="user_profile">
      <h1>Користувач</h1>
      <div className="user_box">
        <h4>Ім'я:</h4>
        <h2>{user.name}</h2>
      </div>
      <div className="user_box">
        <h4>Телефон:</h4>
        <h3>{user.phone}</h3>
      </div>
      <div className="user_box">
        <h4>Адреса:</h4>
        <div>
          <h3>{user.address?.city}</h3>
          <h4>
            {user.address?.address}, {user.address?.suite}
          </h4>
        </div>
      </div>
      <div className="user_box">
        <h4>Компанія:</h4>
        <h3>{user.company?.name}</h3>
      </div>
      <div className="user_box">
        <h4>Email:</h4>
        <h3>{user.email}</h3>
      </div>
      <NavLink to={"/home5"}>Users</NavLink>
    </div>
  );
};

export { CardProfile };
