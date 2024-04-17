import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import styled from "styled-components"

export const Container = styled.aside`
  background: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-open="true"] {
    transform: translateX(0);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

  > div {
    padding: 0 2.333rem;

    > a {
      font-family: "Poppins", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2rem;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;
      display: block;

      margin-top: 36px;
      margin-left: 10px;
      margin-bottom: 10px;
    }

    > div > input {
      font-size: 1.333rem;
    }
  }
`

export const HeaderFake = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  width: 100%;
  padding: 4.667rem 2.333rem 2rem;
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > p {
    font-size: 1.75rem;
    font-weight: 400;
  }
`
