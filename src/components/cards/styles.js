import styled from "styled-components"

export const Container = styled.div`
  width: 210px;
  height: 292px;
  background: darkblue;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  > div {
    max-width: 88px;
    height: auto;

    > img {
      width: 100%;
      height: auto;
    }
  }

  /* name */
  > p:nth-child(2) {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 1.167rem;
    line-height: 2rem;
  }

  /* description */
  > p:nth-child(3) {
    display: none;
  }

  /* price */
  > p:nth-child(4) {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-weight: 400;
    font-size: 1.333rem;
    line-height: 1.333rem;
  }
`
