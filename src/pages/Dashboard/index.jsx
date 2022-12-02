import { UserInfo } from "./UserInfo";
import { Header } from "../../components/Header";
import { Container, FullWidthWrapper } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";

export function Dashboard() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userIsLogged = localStorage.getItem("@USERID");

    if (!userIsLogged) {
      navigate("/login");
    }
  }, [navigate]);

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
    <FullWidthWrapper>
      <Container>
        <Header hasTinyLogo buttonText="Sair" darker to="/login" />
      </Container>
      <UserInfo user={userData} />
    </FullWidthWrapper>
  );
}
