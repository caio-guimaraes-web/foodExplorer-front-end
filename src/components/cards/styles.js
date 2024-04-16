import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.div`
  max-width: 210px;
  min-height: 292px;
  background: darkblue;
  padding: 2rem;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 304px;
    min-height: 462px;
    gap: 15px;
  }

  /* ButtonIconCard */
  > button:nth-child(1) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    &:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }

  /* img container */
  > div:nth-child(2) {
    max-width: 88px;
    height: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-width: 178px;
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
    font-size: 1.167rem;
    line-height: 2rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 140%;
    }
  }

  /* description */
  > p:nth-child(4) {
    display: none;
    text-align: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      display: block;
      font-size: 0.875rem;
      line-height: 1.4rem;
    }
  }

  /* price */
  > p:nth-child(5) {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-weight: 400;
    font-size: 1.333rem;
    line-height: 1.333rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2rem;
      line-height: 160%;
    }
  }

  /* count + include */
  > div:nth-child(6) {
    width: 100%;

    display: flex;
    flex-direction: column;
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
  }
`
