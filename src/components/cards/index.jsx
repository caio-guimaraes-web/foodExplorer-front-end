import { useState } from "react"
import { Container } from "./styles"
import { HeartStraight, Pencil } from "@phosphor-icons/react"

import { Button } from "../Button"
import { ButtonIconCard } from "../ButtonIconCard"
import { getCardImageUrl } from "../../services/api"

export function Card({ image, title, description, price, onClick, isAdmin }) {
  const [count, setCount] = useState(0)
  const intervalNum = 1

  // decrement and increment method is just function
  const decrement = () =>
    setCount((prevCount) => Math.max(prevCount - intervalNum, 0))
  const increment = () => setCount((prevCount) => prevCount + intervalNum)

  const imageUrl = `${getCardImageUrl()}${image}`

  return (
    <Container>
      <ButtonIconCard icon={isAdmin ? Pencil : HeartStraight} />
      <div>
        <img src={imageUrl} alt={title} onClick={onClick} />
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <p>R$ {price}</p>
      {!isAdmin && (
        <div>
          <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
          </div>
          <Button title="Incluir" />
        </div>
      )}
    </Container>
  )
}
