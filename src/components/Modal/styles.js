import styled from "styled-components";

export const ModalStyled = styled.div`
  background-color: #12121480;
  
  position: fixed;

  height: 100%;
  width: 100%;

  article {
    width: max-content;

    header {
      width: 100%;
      background-color: ${({theme}) => theme.colors.greyScale[2]};

      button {
        background-color: transparent;
        color: ${({theme}) => theme.colors.greyScale[1]};

        &:hover {
          ${({theme}) => theme.colors.greyScale[3]};
          ${({theme}) => theme.fontSizes[1]};
          ${({theme}) => theme.weight.medium};
        }
      }
    }
  }
`