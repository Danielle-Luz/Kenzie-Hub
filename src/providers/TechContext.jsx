import { createContext } from "react";

export const TechContext = createContext({});

export function TechProvider({children}) {
  return (
    <TechContext.Provider>
      {children}
    </TechContext.Provider>
  );
}