import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { CaretLeft, Receipt } from "@phosphor-icons/react"
import { ButtonBack } from "../../components/ButtonBack"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { api, getCardImageUrl } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Dish({ onOpenMenu }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dish, setDish] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [count, setCount] = useState(1) // Inicializar com 1
  const { id } = useParams()
  const navigate = useNavigate()

  const { user } = useAuth()
  const isAdmin = user?.is_admin
  console.log("é admin?", isAdmin)

  const handleEditDish = () => navigate(`/editdish/${id}`)

  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1)) // Não permitir quantidade menor que 1
  const increment = () => setCount((prevCount) => prevCount + 1)

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const dishResponse = await api.get(`/dish/${id}`)
        setDish(dishResponse.data)

        const ingredientsResponse = await api.get(`/ingredients/${id}`)
        setIngredients(ingredientsResponse.data)
      } catch (error) {
        console.error("Erro ao buscar os dados do prato e ingredientes:", error)
      }
    }

    fetchDishData()
  }, [id])

  const handleBack = () => navigate(`/`)

  if (!dish) {
    return <div>Carregando...</div>
  }

  const imageUrl = `${getCardImageUrl()}${dish.image_url}`
  const totalPrice = (dish.price * count).toFixed(2) // Calcular o preço total

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Section>
        <ButtonBack title="voltar" icon={CaretLeft} onClick={handleBack} />
        <div>
          <img src={imageUrl} alt={dish.name} />
        </div>
        <p>{dish.name}</p>
        <p>{dish.description}</p>
        <section>
          {ingredients.map((ingredient) => (
            <Tag key={ingredient.id} title={ingredient.name} />
          ))}
        </section>
        {!isAdmin ? (
          <div>
            <div>
              <button onClick={decrement}>-</button>
              <p>{count}</p>
              <button onClick={increment}>+</button>
            </div>
            <Button title={`pedir ∙ R$ ${totalPrice}`} icon={Receipt} />
          </div>
        ) : (
          <div>
            <Button title="editar prato" onClick={handleEditDish} />
          </div>
        )}
      </Section>
      <Footer />
    </Container>
  )
}
