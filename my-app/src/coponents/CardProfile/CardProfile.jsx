import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./CardProfile.scss";

const CardProfile = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoadind,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return (
    <div className="user_profile">
      {isLoadind && <h2>Loading...</h2>}
      {user ? (
        <>
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
        </>
      ) : (
        <h4>{isError}</h4>
      )}
    </div>
  );
};

export { CardProfile };
