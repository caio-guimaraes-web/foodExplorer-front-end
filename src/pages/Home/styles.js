import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.main``

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: midnightblue;
  padding: 0 0 2rem 2.333rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 7.688rem 3rem;
    > h3 {
      font-size: 2rem;
    }
  }

  > h3 {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    line-height: 140%;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2rem;
    }
  }
`
