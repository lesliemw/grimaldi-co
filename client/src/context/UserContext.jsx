import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get("/api/user/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
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
