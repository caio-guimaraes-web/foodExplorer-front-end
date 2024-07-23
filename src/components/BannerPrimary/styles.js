import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.div`
  padding: 0 2.333rem 0 2.333rem;
  /* background: darkblue; */
  width: 100%;
  height: 150px;
  max-height: 150px;
  margin-top: 130px;
  margin-bottom: 5.167rem;

  display: flex;
  flex-direction: column;
  align-content: end;
  /* align-items: end; */
  flex-wrap: wrap;
  justify-content: end;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 406px;
    max-height: 406px;
    padding: 0 3rem;
    margin-top: 125px;
    margin-bottom: 3.875rem;
    align-content: unset;
    flex-wrap: unset;
    justify-content: unset;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 7.688rem;
  }

  div:nth-child(1) {
    /* background: rgba(0, 0, 150, 0.3); */
    position: absolute;
    margin-left: -28px;
    max-width: 191px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-width: unset;
      margin-left: -44px;
    }

    > img {
      width: 100%;
      height: auto;
    }
  }
  div:nth-child(2) {
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    height: 120px;
    margin-top: auto;
    padding: 1rem 1rem 1rem 32%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      height: 260px;
      padding: 1rem 2rem 1rem 58%;
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 140%;
      font-size: 1.5rem;
      z-index: 1;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 2.5rem;
        font-weight: 500;
      }
    }

    > h4 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
      z-index: 1;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        line-height: 100%;
      }
    }
  }
`
