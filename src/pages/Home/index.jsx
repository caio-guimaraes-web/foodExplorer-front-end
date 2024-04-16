import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { BannerPrimary } from "../../components/BannerPrimary"

import { Card } from "../../components/cards"

import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <Container>
      <Header />
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
