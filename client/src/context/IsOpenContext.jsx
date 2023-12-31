import { createContext, useContext, useState } from "react";

const IsOpenContext = createContext();

function IsOpenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function isOpenToggle() {
    setIsOpen(() => !isOpen);
  }

  return (
    <IsOpenContext.Provider value={{ isOpen, isOpenToggle }}>
      {children}
    </IsOpenContext.Provider>
  );
}
function useIsOpen() {
  const context = useContext(IsOpenContext);
  if (context === undefined) throw new Error("Unable to open");
  return context;
}

export { IsOpenProvider, useIsOpen };
