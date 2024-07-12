import { useState } from "react"
import { Container } from "./styles"
import { HeartStraight } from "@phosphor-icons/react"

import { Button } from "../Button"
import { ButtonIconCard } from "../ButtonIconCard"

export function Card({ image, title, description, price }) {
  const [count, setCount] = useState(0)
  const intervalNum = 1

  // decrement and increment method is just function
  const decrement = () =>
    setCount((prevCount) => Math.max(prevCount - intervalNum, 0))
  const increment = () => setCount((prevCount) => prevCount + intervalNum)

  return (
    <Container>
      <ButtonIconCard icon={HeartStraight} />
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <p>R$ {price}</p>
      <div>
        <div>
          <button onClick={decrement}>-</button>
          <p>{count}</p>
          <button onClick={increment}>+</button>
        </div>
        <Button title="Incluir" />
      </div>
    </Container>
  )
}
