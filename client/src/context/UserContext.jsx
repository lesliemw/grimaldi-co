import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("Unable to LoggedIn");
  return context;
}

export { UserProvider, useUser };
