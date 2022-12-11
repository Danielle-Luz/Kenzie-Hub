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
import { fieldsList } from "./Technologies/technologyFieldslist";
import { ButtonSecondary } from "../../components/Button/Secondary";
import { ButtonPrimary } from "../../components/Button/Primary";
import { technologiesSchema } from "./Technologies/technologiesSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export function Dashboard() {
  const { modal, createTechnology } = useContext(TechContext);
  const { userData, getUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(technologiesSchema)
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userIsLogged = localStorage.getItem("@USERID");

    if (!userIsLogged) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getUserData(setLoading);
  }, []);

  function SaveButton({ buttonText }) {
    return (
      <ButtonPrimary
        button
        colorType={Object.keys(errors).length != 0 ? "negative" : "default"}
      >
        {buttonText}
      </ButtonPrimary>
    );
  }

  function DeleteButton() {
    return (
      <ButtonSecondary button>
        Excluir
      </ButtonSecondary>
    );
  }

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
              buttons={modal == "create" ? [<SaveButton buttonText="Cadastrar tecnologia" />] : [<SaveButton buttonText="Salvar alterações" />, <DeleteButton />]}
              fieldsList={fieldsList}
              register={register}
              handleSubmit={handleSubmit}
              submitData={modal == "create" ? (data) => createTechnology(data) : () => undefined}
              modalTitle={modal == "create" ? "Cadastrar tecnologia" : "Editar tecnologia"}
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
