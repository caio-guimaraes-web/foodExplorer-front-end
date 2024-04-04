import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2rem;
  font-size: 2rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 1rem 2.667rem;
  border: none;
  border-radius: 5px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0.75rem 2rem;
    border-radius: 0.313rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`
