import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const TechContext = createContext({});

export function TechProvider() {
  const [modal, showModal] = useState(false);
  return (
    <TechContext.Provider value={{modal, showModal}}>
      <Outlet />
    </TechContext.Provider>
  );
}