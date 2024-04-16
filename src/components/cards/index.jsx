import { useState } from "react"
import { Container } from "./styles"
import { HeartStraight, PencilSimple } from "@phosphor-icons/react"

import prato_teste from "../../assets/img_foods/prato_teste.png"
import { Button } from "../Button"
import { ButtonIconCard } from "../ButtonIconCard"

export function Card() {
  const [count, setCount] = useState(0)
  const intervalNum = 1

  // decrement and increment method is just function
  const decrement = () => setCount((prevCount) => prevCount - intervalNum)
  const increment = () => setCount((prevCount) => prevCount + intervalNum)

  return (
    <Container>
      <ButtonIconCard icon={HeartStraight} />
      <div>
        <img src={prato_teste} alt="" />
      </div>
      <p>Salada Ravanelo</p>
      <p>
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão
        naan dá um toque especial.
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
    </Container>
  )
}
