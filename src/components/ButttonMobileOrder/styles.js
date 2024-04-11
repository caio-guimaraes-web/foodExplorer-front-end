import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.button`
  background: transparent;
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0.3rem 0.5rem;
  position: relative;

  > svg {
    font-size: 2.7rem;
  }
  &:hover {
    background: ${({ theme }) => theme.COLORS.DARK_900};
  }

  /* hidden on mobile */
  display: block;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

  > span {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`
