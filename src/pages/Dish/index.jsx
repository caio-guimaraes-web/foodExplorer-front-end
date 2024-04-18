import { useState } from "react"
import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { CaretLeft } from "@phosphor-icons/react"
import { ButtonBack } from "../../components/ButtonBack"

import prato_teste from "../../assets/img_foods/prato_teste.png"

import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

export function Dish({ onOpenMenu }) {
  /* open side menu mobile */
  const [menuOpen, setMenuOpen] = useState(false)

  // decrement and increment
  const [count, setCount] = useState(0)
  const intervalNum = 1
  const decrement = () => setCount((prevCount) => prevCount - intervalNum)
  const increment = () => setCount((prevCount) => prevCount + intervalNum)

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Section>
        <ButtonBack title="voltar" icon={CaretLeft} />
        <div>
          <img src={prato_teste} alt="" />
        </div>
        <p>Salada Ravanelo</p>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
          pão naan dá um toque especial.
        </p>
        <p>R$ 49,97</p>

        <div>
          <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
          </div>
          <Button title="incluir" />
        </div>
      </Section>
      <Footer />
    </Container>
  )
}
