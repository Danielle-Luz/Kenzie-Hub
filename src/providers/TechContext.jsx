import { useState } from "react";
import { createContext } from "react";

export const TechContext = createContext({});

export function TechProvider({children}) {
  const [modal, showModal] = useState(false);
  return (
    <TechContext.Provider value={{modal, showModal}}>
      {children}
    </TechContext.Provider>
  );
}