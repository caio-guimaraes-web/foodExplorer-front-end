import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem 1.167rem;

  border-radius: 0.667rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border: 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0.75rem 0.875rem;
    border-radius: 0.667rem;
    height: 3rem;
    border: 1px solid #fff;
  }
`
