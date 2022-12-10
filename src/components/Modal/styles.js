import styled from "styled-components";

export const ModalStyled = styled.div`
  background-color: #12121480;

  align-items: center;
  display: flex;
  justify-content: center;

  position: fixed;

  height: 100%;
  width: 100%;

  article {
    border-radius: ${({theme}) => theme.radius}px;
    overflow: hidden;
    max-width: 370px;
    width: 100%;

    header {
      align-items: center;
      display: flex;
      justify-content: space-between;

      background-color: ${({theme}) => theme.colors.greyScale[2]};

      padding: 16px;
      
      width: 100%;

      button {
        background-color: transparent;
        color: ${({theme}) => theme.colors.greyScale[1]};
        font-weight: ${({theme}) => theme.weight.medium};
        font-size: ${({theme}) => theme.fontSizes[2]}px;

        &:hover {
          color: ${({theme}) => theme.colors.greyScale[0]};
        }
      }
    }

    form {
      padding: 22px;
      background-color: ${({theme}) => theme.colors.greyScale[3]};
    }
  }
`