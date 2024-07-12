import { useState, useEffect } from "react"
import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { BannerPrimary } from "../../components/BannerPrimary"
import { Card } from "../../components/cards"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api" // Importando a API

export function Home({ onOpenMenu }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchDishes = async () => {
      try {
        const response = await api.get("/dish/")
        console.log("Dados recebidos:", response.data)
        setDishes(response.data) // Assumindo que a resposta é um array de pratos
      } catch (error) {
        console.error("Erro ao buscar os pratos:", error)
      }
    }

    fetchDishes()
  }, [])

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <BannerPrimary />

      <Section>
        <h3>Refeições</h3>
        <div>
          {dishes.map((dish, index) => (
            <Card
              key={index}
              image={dish.image_url}
              title={dish.name}
              description={dish.description}
              price={dish.price}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </Container>
  )
}
