import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 12px;

  max-width: 770px;
  width: 100%;

  @media(min-width: 500px) {
    padding-inline: 25px;
  }
`

export const FullWidthWrapper = styled.div`
  width: 100%;
`

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  
  height: 100vh;
`