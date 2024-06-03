import { createContext, useContext, useState } from "react";

const ContextApione = createContext();
const contextApitwo = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [lname, setLname] = useState("");
  return (
    <ContextApione.Provider value={{ user, setUser }}>
      <contextApitwo.Provider value={{ lname, setLname }}>
        {children}
      </contextApitwo.Provider>
    </ContextApione.Provider>
  );
};

const useGlobalcontext = () => {
  const contextone = useContext(ContextApione);
  const contexttwo = useContext(contextApitwo);
  return { ...contextone, ...contexttwo };
};

export { ContextProvider, ContextApione, useGlobalcontext, contextApitwo };
