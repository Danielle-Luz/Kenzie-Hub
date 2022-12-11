import { toFormData } from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider() {
  const { getUserData } = useContext(UserContext);
  const [modal, showModal] = useState("");
  const [technology, setTechnology] = useState({
    id: "",
    title: "",
    status: "",
  });

  async function createTechnology(data) {
    try {
      await api.post("/users/techs", data);

      toast.success("Tecnologia cadastrada com sucesso");

      showModal("");

      getUserData();
    } catch (err) {
      if (err.response.status == 401) {
        toast.error("Tecnologia já cadastrada no perfil do usuário");
      } else {
        toast.error("Não foi possível cadastrar a tecnologia");
      }
    }
  }

  async function deleteTechnology(id) {
    try {
      await api.delete(`/users/techs/${id}`);

      toast.info("Tecnologia removida com sucesso");

      showModal("");

      getUserData();
    } catch (err) {
      toast.error("Não foi possível excluir a tecnologia");
    }
  }

  async function updateTechnology(data, id) {
    try {
      await api.put(`/users/techs/${id}`, {status: data});

      toast.success("Tecnologia atualizada com sucesso");

      showModal("");

      getUserData();
    } catch (err) {
      toast.error("Não foi possível editar a tecnologia");
    }
  }

  return (
    <TechContext.Provider
      value={{
        modal,
        showModal,
        createTechnology,
        technology,
        setTechnology,
        deleteTechnology,
        updateTechnology
      }}
    >
      <Outlet />
    </TechContext.Provider>
  );
}
