import { useState, useEffect } from "react"
import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { BannerPrimary } from "../../components/BannerPrimary"
import { Card } from "../../components/cards"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Import Swiper Element
import { register } from "swiper/element/bundle"

register()

export function Home({ onOpenMenu }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await api.get("/dish")
        setDishes(response.data)
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
        <swiper-container space-between="20" slides-per-view="3" navigation>
          {dishes
            .filter((dish) => dish.category === "Refeições")
            .map((dish, index) => (
              <swiper-slide key={index}>
                <Card
                  image={dish.image_url}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              </swiper-slide>
            ))}
        </swiper-container>
      </Section>

      <Section>
        <h3>Sobremesas</h3>
        <swiper-container
          space-between="20"
          slides-per-view="3"
          navigation
          pagination-clickable="true"
        >
          {dishes
            .filter((dish) => dish.category === "Sobremesas")
            .map((dish, index) => (
              <swiper-slide key={index}>
                <Card
                  image={dish.image_url}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              </swiper-slide>
            ))}
        </swiper-container>
      </Section>

      <Section>
        <h3>Bebidas</h3>
        <swiper-container
          space-between="20"
          slides-per-view="3"
          navigation
          pagination-clickable="true"
        >
          {dishes
            .filter((dish) => dish.category === "Bebidas")
            .map((dish, index) => (
              <swiper-slide key={index}>
                <Card
                  image={dish.image_url}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              </swiper-slide>
            ))}
        </swiper-container>
      </Section>

      <Footer />
    </Container>
  )
}
