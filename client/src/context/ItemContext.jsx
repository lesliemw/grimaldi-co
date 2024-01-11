import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ItemsContext = createContext({});

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    axios
      .get("/items")
      .then(({ data }) => {
        setItems(data);
        setReady(true);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setReady(true);
      });
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems, ready }}>
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) throw new Error("Unable to access Items data");
  return context;
}

export { ItemsProvider, useItems };
