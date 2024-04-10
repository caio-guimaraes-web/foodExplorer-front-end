import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.button`
  background: transparent;
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0.3rem 0.5rem;

  > svg {
    font-size: 2rem;
  }
  &:hover {
    background: ${({ theme }) => theme.COLORS.DARK_900};
  }

  /* hidden on mobile */
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`
