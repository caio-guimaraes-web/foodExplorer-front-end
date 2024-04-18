import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.main`
  min-height: 100vh;
  padding-top: 130px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-top: 125px;
  }
`

export const Section = styled.section`
  width: 100%;
  height: auto;

  padding: 0 4.667rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  }

  /* img container */
  > div:nth-child(2) {
    max-width: 264px;
    height: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-width: 390px;
    }

    > img {
      width: 100%;
      height: auto;
    }
  }
`
