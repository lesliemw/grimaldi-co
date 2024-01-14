import { createContext, useContext, useState } from "react";

const IsOpenContext = createContext();

function IsOpenProvider({ children }) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function isOpenCartToggle() {
    setIsOpenCart(() => !isOpenCart);
  }

  function isOpenSidebarToggle() {
    setIsOpenSidebar(() => !isOpenSidebar);
  }
  return (
    <IsOpenContext.Provider
      value={{
        isOpenCart,
        isOpenCartToggle,
        setIsOpenCart,
        isOpenSidebar,
        isOpenSidebarToggle,
        setIsOpenSidebar,
      }}
    >
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
