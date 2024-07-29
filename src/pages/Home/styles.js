import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.main``

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 0 0 2rem 2.333rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 3rem 3rem;
    > h3 {
      font-size: 2rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 3rem 3rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 0 7.688rem 3rem;
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

  > div:nth-child(2) {
    display: flex;
    gap: 1rem;
  }

  .search-results {
    flex-wrap: wrap;
  }

  /* .custom-swiper swiper-slide div {
    min-width: 300px;
    width: 100% !important;
  } */
`
