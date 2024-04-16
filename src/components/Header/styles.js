import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  width: 100%;
  padding: 4.667rem 2.333rem 2rem;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  position: fixed;
  top: 0;
  z-index: 10;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 7.688rem;
  }

  > div > img {
    max-width: 150px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-width: 11.5rem;
    }
  }

  /* hidden contents on mobile */
  > button:nth-child(4),
  div:nth-child(3) {
    /* hidden on mobile */
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
    }
  }
`
