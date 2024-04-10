import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  width: 100%;
  padding: 4.667rem 2.333rem 2rem;
  align-items: center;
  gap: 32px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 7.688rem;
  }

  > div > img {
    max-width: 150px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-width: 11.5rem;
    }
  }
`
