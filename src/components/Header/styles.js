  import styled from "styled-components";

  export const HeaderStyled = styled.header`
    align-items: center;
    display: flex;
    justify-content: ${({buttonText}) => buttonText ? "space-between" : "center"};
    width: 100%;
  `