import { UserInfo } from "./UserInfo";
import { Header } from "../../components/Header";
import { Container, FullWidthWrapper } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";
import { LoadingContainer } from "./styles";

export function Dashboard() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

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
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }

    getUserData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingIcon size={120} />
        </LoadingContainer>
      ) : (
        <FullWidthWrapper>
          <Container>
            <Header hasTinyLogo buttonText="Sair" darker to="/login" />
          </Container>
          <UserInfo user={userData} />
        </FullWidthWrapper>
      )}
    </>
  );
}
