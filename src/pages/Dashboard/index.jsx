import { UserInfo } from "./UserInfo";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Dashboard() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");

    async function getUserData() {
      try {
        const foundUserData = (await api.get(`users/${userId}`)).data;

        setUserData(foundUserData);
      } catch (err) {}
    }

    getUserData();
  }, []);

  return (
    <>
      <Container>
        <Header hasTinyLogo buttonText="Sair" to="/login" />
      </Container>
      <UserInfo user={userData} />
    </>
  );
}
