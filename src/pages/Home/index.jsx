import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { BannerPrimary } from "../../components/BannerPrimary"

import { Card } from "../../components/cards"
import { Footer } from "../../components/Footer"
import { useState } from "react"

export function Home({ onOpenMenu }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <BannerPrimary />
      <Section>
        <h3>Refeições</h3>
        <Card />
      </Section>
      <Section>
        <h3>Sobremesas</h3>
        <Card />
      </Section>
      <Section>
        <h3>Bebidas</h3>
        <Card />
      </Section>
      <Footer />
    </Container>
  )
}
