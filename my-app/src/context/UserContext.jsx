import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const urlApi = "https://jsonplaceholder.typicode.com/users";
const UserInfoContext = createContext(null);

const UserContext = ({ children }) => {
  const { data: users, isLoadind, isError } = useFetch(urlApi);

  return (
    <UserInfoContext.Provider value={users}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext, UserContext };
