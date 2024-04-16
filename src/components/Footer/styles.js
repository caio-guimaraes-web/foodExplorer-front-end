import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.footer`
  background: ${({ theme }) => theme.COLORS.DARK_600};

  width: 100%;
  padding: 2rem 2.333rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;

  > img {
    max-width: 140px;
    height: auto;
  }

  > h6 {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 160%;
    text-align: right;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 7.688rem;
    > img {
      max-width: 185px;
    }
    > h6 {
      font-size: 0.875rem;
    }
  }
`
