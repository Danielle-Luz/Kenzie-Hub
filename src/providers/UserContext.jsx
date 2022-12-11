import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  async function getUserData(setLoading) {
    const userId = localStorage.getItem("@USERID");
    try {
      const foundUserData = (await api.get(`users/${userId}`)).data;

      setUserData(foundUserData);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  async function login(data, setLoading) {
    try {
      setLoading(true);

      const userData = await api.post("/sessions", data);

      const {
        token,
        user: { id },
      } = userData.data;

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", id);

      navigate("/dashboard");
    } catch (err) {
      const hasErrorMessage = err?.response?.data?.message;

      if (hasErrorMessage) {
        toast.error("Email ou senha incorretos");
      } else {
        toast.error("Não foi possível entrar no sistema");
      }

      setLoading(false);
    }
  }

  async function createUser(data, callback, setLoading) {
    try {
      setLoading(true);

      await api.post("/users", data);

      toast.success("Usuário cadastrado com sucesso.");

      callback();

      navigate("/login");
    } catch ({ response }) {
      const hasErrorMessage = response?.data?.message;
      if (hasErrorMessage) {
        toast.error("Email já cadastrado");
      } else {
        toast.error("Não foi possível cadastrar o usuário");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userData, login, createUser, getUserData }}>
      {children}
    </UserContext.Provider>
  );
}
