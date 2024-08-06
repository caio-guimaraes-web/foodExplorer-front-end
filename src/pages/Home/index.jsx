// src/pages/Home/index.jsx
import { useLoading } from "../../context/LoadingContext"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { BannerPrimary } from "../../components/BannerPrimary"
import { Card } from "../../components/cards"
import { Footer } from "../../components/Footer"
import { CaretLeft } from "@phosphor-icons/react"
import { ButtonBack } from "../../components/ButtonBack"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Import Swiper Element
import { register } from "swiper/element/bundle"
register()

export function Home({ onOpenMenu }) {
  const { setLoading } = useLoading()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dishes, setDishes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  const { user } = useAuth()
  const isAdmin = user?.is_admin

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        setLoading(true)
        const response = await api.get("/dish")
        setDishes(response.data)
      } catch (error) {
        console.error("Erro ao buscar os pratos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDishes()
  }, [setLoading])

  const handleSearch = async (term) => {
    try {
      setLoading(true)
      const url = `/dish?name=${term}&ingredients=${term}`
      const response = await api.get(url)
      setSearchResults(response.data)
    } catch (error) {
      console.error("Erro ao buscar os pratos:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleResetSearch = () => {
    setSearchResults([]) // Reseta os resultados da busca para um array vazio
  }

  const handleCardClick = (id) => {
    navigate(`/dish/${id}`)
  }

  const renderSwiper = (category) => (
    <swiper-container
      class="custom-swiper"
      navigation="true"
      space-between="5"
      breakpoints={`{
        "320": { "slidesPerView": 1, "spaceBetween": 20 },
        "425": { "slidesPerView": 1, "spaceBetween": 20 },
        "768": { "slidesPerView": 2, "spaceBetween": 40 },
        "1024": { "slidesPerView": 4, "spaceBetween": 50 },
        "1280": { "slidesPerView": 4, "spaceBetween": 20 },
        "1366": { "slidesPerView": 4, "spaceBetween": 40 }
      }`}
    >
      {dishes
        .filter((dish) => dish.category === category)
        .map((dish) => (
          <swiper-slide key={dish.id}>
            <Card
              id={dish.id}
              title={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image_url}
              onClick={() => handleCardClick(dish.id)}
              isAdmin={isAdmin}
            />
          </swiper-slide>
        ))}
    </swiper-container>
  )

  return (
    <Container className="fade-in">
      <SideMenu
        menuOpen={menuOpen}
        onCloseMenu={() => setMenuOpen(false)}
        onSearch={handleSearch}
      />
      <Header onOpenMenu={() => setMenuOpen(true)} onSearch={handleSearch} />
      <BannerPrimary />
      {searchResults.length > 0 ? (
        <Section>
          <h3>Resultados da Busca</h3>
          <div className="search-results">
            {searchResults.map((dish) => (
              <Card
                key={dish.id}
                id={dish.id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image_url}
                onClick={() => handleCardClick(dish.id)}
                isAdmin={isAdmin}
              />
            ))}
          </div>
          <ButtonBack
            title="voltar"
            icon={CaretLeft}
            onClick={handleResetSearch}
          />
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
