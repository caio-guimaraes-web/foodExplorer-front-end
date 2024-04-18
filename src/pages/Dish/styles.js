import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.main`
  min-height: 100vh;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-top: 125px;
  }
`

export const Section = styled.section`
  width: 100%;
  height: auto;

  padding: 0 4.667rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
  }

  > button:nth-child(1) {
    margin-right: auto;
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

  /* name */
  > p:nth-child(3) {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 2.253rem;
    line-height: 2rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 140%;
    }
  }

  /* description */
  > p:nth-child(4) {
    display: block;
    text-align: center;
    font-size: 1.352rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }

  /* count + include */
  > div:nth-child(5) {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: row;
    }

    /* count */
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      /* gap: 1.167rem; */
      gap: 1.5rem;

      /* plus and minus buttons */
      > button {
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 0;
        font-size: 2.3rem;

        min-width: 24px;
        min-height: 24px;
      }
      /* count number */
      > p {
        font-size: 1.333rem;
      }
    }

    > button {
      font-size: 1rem;
      > svg {
        font-size: 3rem;
      }
    }
  }
`
