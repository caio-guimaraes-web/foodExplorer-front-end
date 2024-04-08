import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.div`
  /* background: rgba(99, 159, 180, 0.3); */
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;

  /* controling responsive layout */
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    > div {
      flex: 1;
    }
    > section {
      flex: 1;
    }
  }

  > div {
    display: flex;
    justify-content: center;

    img {
      max-width: 17.5rem;
      height: auto;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 20.25rem;
      }
    }
  }
  > section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /*  form label {
    margin-bottom: -2rem;
  } */
`
export const Form = styled.form`
  width: 100%;
  background: transparent;
  padding: 0 5.333rem;
  display: flex;
  flex-direction: column;
  gap: 2.667rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background: ${({ theme }) => theme.COLORS.DARK_700};
    width: 100%;
    max-width: 29.75rem;
    padding: 4rem;
    gap: 2rem;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    display: none;
    text-align: center;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: block;
      font-size: 2rem;
    }
  }

  > a {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;

    width: fit-content;
    margin: 0 auto;

    &:hover {
      text-decoration: underline;
    }
  }
`
