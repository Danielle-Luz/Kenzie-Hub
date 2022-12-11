import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider(data) {
  const [modal, showModal] = useState(false);

  async function createTechnology() {
    try {
      await api.post("/users/techs", data);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <TechContext.Provider value={{modal, showModal, createTechnology}}>
      <Outlet />
    </TechContext.Provider>
  );
}