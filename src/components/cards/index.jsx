import { useState, useEffect } from "react"
import { Container } from "./styles"
import { HeartStraight, Pencil } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

import { Button } from "../Button"
import { ButtonIconCard } from "../ButtonIconCard"
import { getCardImageUrl } from "../../services/api"

export function Card({
  image,
  title,
  description,
  price,
  onClick,
  isAdmin,
  id,
}) {
  const [count, setCount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(price)
  const intervalNum = 1
  const navigate = useNavigate()

  useEffect(() => {
    setTotalPrice(price * count)
  }, [count, price])

  const decrement = () =>
    setCount((prevCount) => Math.max(prevCount - intervalNum, 0))
  const increment = () => setCount((prevCount) => prevCount + intervalNum)

  const handleAdminEditClick = () => navigate(`/editdish/${id}`)
  const handleUserFavoriteClick = () => {
    alert("Item favoritado, em breve a funcionalidade estará disponível.")
  }
  const handleIncludeDishClick = () =>
    alert(
      "Prato(s) incluído(s) no pedido! Em breve a funcionalidade estará disponível."
    )

  const imageUrl = `${getCardImageUrl()}${image}`

  return (
    <Container>
      <ButtonIconCard
        icon={isAdmin ? Pencil : HeartStraight}
        onClick={isAdmin ? handleAdminEditClick : handleUserFavoriteClick}
      />
      <div>
        <img src={imageUrl} alt={title} onClick={onClick} />
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <p>R$ {totalPrice.toFixed(2)}</p>
      {!isAdmin && (
        <div>
          <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
          </div>
          <Button title="Incluir" onClick={handleIncludeDishClick} />
        </div>
      )}
    </Container>
  )
}
