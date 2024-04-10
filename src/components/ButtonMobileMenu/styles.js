import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const ButtonMobileMenu = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0.3rem 0.5rem;

  > svg {
    font-size: 1.5rem;
  }
  &:hover {
    background: ${({ theme }) => theme.COLORS.DARK_900};
  }

  display: block;
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`
