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
  const {
    modal,
    technology,
    createTechnology,
    deleteTechnology,
    updateTechnology,
  } = useContext(TechContext);
  const { userData, getUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(technologiesSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userIsLogged = localStorage.getItem("@USERID");

    if (!userIsLogged) {
      navigate(-1);
    }

    getUserData(setLoading);

    if (modal == "edit") {
      const { title, status } = technology;
      reset({ title, status });
    } else {
      reset({});
    }
  }, [navigate, modal, technology]);

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
      <ButtonSecondary
        onClick={() => {
          deleteTechnology(technology.id);
        }}
        type="button"
        button
      >
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
              buttons={
                modal == "create"
                  ? [<SaveButton buttonText="Cadastrar tecnologia" />]
                  : [
                      <SaveButton buttonText="Salvar alterações" />,
                      <DeleteButton />,
                    ]
              }
              fieldsList={
                modal == "create"
                  ? fieldsList
                  : [{ ...fieldsList[0], disabled: true }, fieldsList[1]]
              }
              register={register}
              handleSubmit={handleSubmit}
              submitData={
                modal == "create"
                  ? (data) => {
                      createTechnology(data);
                    }
                  : (data) => {
                      const { status } = data;

                      updateTechnology(status, technology.id);
                    }
              }
              modalTitle={
                modal == "create" ? "Cadastrar tecnologia" : "Editar tecnologia"
              }
              errors={errors}
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
