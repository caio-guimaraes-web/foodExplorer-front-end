// Home.jsx
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
  const [searchResults, setSearchResults] = useState([])

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

  const handleSearch = async (term) => {
    try {
      const response = await api.get(`/dish?name=${term}`)
      setSearchResults(response.data)
    } catch (error) {
      console.error("Erro ao buscar os pratos:", error)
    }
  }

  const renderSwiper = (category) => (
    <swiper-container
      navigation="true"
      space-between="5"
      breakpoints={`{
        "425": { "slidesPerView": 2, "spaceBetween": 20 },
        "768": { "slidesPerView": 2, "spaceBetween": 40 },
        "1024": { "slidesPerView": 5, "spaceBetween": 50 }
      }`}
    >
      {dishes
        .filter((dish) => dish.category === category)
        .map((dish) => (
          <swiper-slide key={dish.id}>
            <Card
              title={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image_url}
            />
          </swiper-slide>
        ))}
    </swiper-container>
  )

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} onSearch={handleSearch} />
      <BannerPrimary />
      {searchResults.length > 0 ? (
        <Section>
          <h3>Resultados da Busca</h3>
          <div className="search-results">
            {searchResults.map((dish) => (
              <Card
                key={dish.id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image_url}
              />
            ))}
          </div>
        </Section>
      ) : (
        <>
          <Section>
            <h3>Refeições</h3>
            {renderSwiper("Refeições")}
          </Section>
          <Section>
            <h3>Sobremesas</h3>
            {renderSwiper("Sobremesas")}
          </Section>
          <Section>
            <h3>Bebidas</h3>
            {renderSwiper("Bebidas")}
          </Section>
        </>
      )}
      <Footer />
    </Container>
  )
}
