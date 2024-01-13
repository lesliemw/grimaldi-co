import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  const [ready, setReady] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!user) {
      axios
        .get("/user/profile")
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          setReady(true);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, setUser, ready, redirect, setRedirect }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("Unable to access user data");
  return context;
}

export { UserProvider, useUser };
