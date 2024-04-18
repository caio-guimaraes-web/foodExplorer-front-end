import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 140%;

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  padding: 1rem 0;
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 0.667rem;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-weight: 700;
  }

  > svg {
    font-size: 2.7rem;
  }
`
