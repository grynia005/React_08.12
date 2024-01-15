import { createContext, useState, useEffect } from "react";

const urlApi = "https://jsonplaceholder.typicode.com/users";
const UserInfoContext = createContext(null);

const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(urlApi);
        if (!res.ok) {
          throw new Error("Сталася страшна помилка серверу");
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);
  console.log(users);

  return (
    <UserInfoContext.Provider value={users}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext, UserContext };
