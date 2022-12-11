import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider() {
  const {getUserData} = useContext(UserContext);
  const [modal, showModal] = useState("");
  const [technology, setTechnology] = useState({title: "", status: ""});

  async function createTechnology(data) {
    try {
      await api.post("/users/techs", data);
      
      toast.success("Tecnologia cadastrada com sucesso");

      showModal("");

      getUserData();
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