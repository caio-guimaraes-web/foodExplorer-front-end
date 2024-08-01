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

  padding: 0 2.667rem 4.417rem 2.667rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  /* Button back - voltar */
  > button:nth-child(1) {
    margin-right: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      grid-area: header;
      padding: 0;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    input {
      border: 0;
    }
  }

  > h2 {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  /* 1a linha de elementos no formulário */
  > div {
    display: flex;
    gap: 32px;
    flex-direction: column;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: row;
    }

    > div {
      width: 100%;
    }
    /* select */
    > div:nth-child(3) {
      position: relative;
      > svg {
        position: absolute;
        right: 12px;
        top: 50%;
        width: 24px;
        height: 24px;
      }
    }
  }

  label {
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-bottom: 1rem;
    }
  }

  select {
    width: 100%;
    height: 4rem;
    padding: 0.75rem 0.875rem;
    cursor: pointer;
    border-radius: 0.667rem;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: 0;
    appearance: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 0.75rem 0.875rem;
      border-radius: 0.667rem;
      height: 3rem;
    }
    option {
      width: 100%;
      height: 4rem;
    }
  }

  /* 2a linha de elementos no formulário */
  > div:nth-child(3) {
    /* wrapper do label e do elemento que recebe ingredientes */
    > div:nth-child(1) {
      flex-direction: column;
      gap: 16px;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 210%;
      }

      /* recebe as tags de ingredientes e botão adicionar
      mesmo estilos de inputs */
      > div {
        width: 100%;
        min-height: 4rem;
        padding: 1rem 1.167rem;
        border-radius: 0.667rem;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border: 0;

        display: flex;
        gap: 16px;
        flex-wrap: wrap;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
          padding: 0.75rem 0.875rem;
          border-radius: 0.667rem;
          height: 3rem;
        }
      }
    }
  }

  /* 3a linha de elementos no formulário */
  > div:nth-child(4) {
    flex-direction: column;
    gap: 0;
  }

  > div:nth-child(5) {
    margin-left: auto;

    .btn-exclude-dish {
      background: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }
  /* > button:nth-child(5) {
    margin-left: auto;
  } */
`

export const TagIngredients = styled.h6`
  padding: 0.625rem 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 400;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`

export const AddIngredients = styled.div`
  padding: 0.625rem 1rem;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 400;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px dashed #7c7c8a;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  > input {
    background: transparent;
    max-width: 80px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }
`

export const DescrevePrato = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 1rem 1.167rem;
  border-radius: 0.667rem;
  border: 0;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
