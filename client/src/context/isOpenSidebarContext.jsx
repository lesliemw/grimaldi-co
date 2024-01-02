import { createContext, useContext, useState } from "react";

const IsOpenSidebarContext = createContext();

function IsOpenSidebarProvider({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function isOpenSidebarToggle() {
    setIsOpenSidebar(() => !isOpenSidebar);
  }

  return (
    <IsOpenSidebarContext.Provider
      value={{ isOpenSidebar, isOpenSidebarToggle, setIsOpenSidebar }}
    >
      {children}
    </IsOpenSidebarContext.Provider>
  );
}
function useIsOpenSidebar() {
  const context = useContext(IsOpenSidebarContext);
  if (context === undefined) throw new Error("Unable to open");
  return context;
}

export { IsOpenSidebarProvider, useIsOpenSidebar };
