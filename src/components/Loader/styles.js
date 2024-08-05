import styled from "styled-components"

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; // Ajuste conforme necessário
  width: 100%;

  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: block;
  }
  p {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }
`
