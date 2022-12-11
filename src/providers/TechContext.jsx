import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider(data) {
  const [modal, showModal] = useState("");
  const [technology, setTechnology] = useState({title: "", status: ""});

  async function createTechnology() {
    try {
      await api.post("/users/techs", data);
      toast.success("Tecnologia cadastrada com sucesso");
      showModal("");
    } catch(err) {
      toast.error("Não foi possível cadastrar a tecnologia");
    }
  }

  return (
    <TechContext.Provider value={{modal, showModal, createTechnology, technology, setTechnology}}>
      <Outlet />
    </TechContext.Provider>
  );
}