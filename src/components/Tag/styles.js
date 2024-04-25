import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 0.875rem;
`
