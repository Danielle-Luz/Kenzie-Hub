import { UserInfo } from "./UserInfo";
import { Header } from "../../components/Header";
import { Container, FullWidthWrapper } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";
import { LoadingContainer } from "./styles";
import { Technologies } from "./Technologies";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Modal } from "../../components/Modal";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";

export function Dashboard() {
  const { modal } = useContext(TechContext);
  const { userData, getUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  console.log(modal);
  useEffect(() => {
    const userIsLogged = localStorage.getItem("@USERID");

    if (!userIsLogged) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getUserData(setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingIcon size={80} />
        </LoadingContainer>
      ) : (
        <FullWidthWrapper>
          {modal && (
            <Modal
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              reset={reset}
            />
          )}
          <Container>
            <Header hasTinyLogo buttonText="Sair" darker to="/login" />
          </Container>
          <UserInfo user={userData} />
          <Container>
            <Technologies user={userData} />
          </Container>
        </FullWidthWrapper>
      )}
    </>
  );
}
