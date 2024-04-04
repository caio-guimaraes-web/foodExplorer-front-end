import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.333rem;
  margin-bottom: 0.667rem;
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`
