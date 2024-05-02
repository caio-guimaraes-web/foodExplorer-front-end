import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  /* > input {
    width: 100%;
    height: 4rem;
    padding: 0.75rem 0.875rem 0.75rem 3rem;

    border-radius: 0.667rem;

    background: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: 0;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 0.75rem 0.875rem 0.75rem 3rem;
      border-radius: 0.667rem;
      height: 3rem;
    }
  } */

  > input {
    display: none;
  }

  > svg {
    position: absolute;
    font-size: 1.5rem;
    margin-left: 0.8rem;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`

export const LabelVisual = styled.label`
  display: block;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.333rem;
  margin-bottom: 0.667rem;
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`

export const Label = styled.label`
  width: 100%;
  height: 4rem;
  padding: 0.75rem 0.875rem 0.75rem 3rem;
  cursor: pointer;

  border-radius: 0.667rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border: 0;

  position: relative;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0.75rem 0.875rem 0.75rem 3rem;
    border-radius: 0.667rem;
    height: 3rem;
  }
`
