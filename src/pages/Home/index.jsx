import { Container, Section } from "./styles"
import { Header } from "../../components/Header"
import { BannerPrimary } from "../../components/BannerPrimary"

import { Card } from "../../components/cards"

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
        <h3>Refeições</h3>
        <Card />
      </Section>
      <Section>
        <h3>Refeições</h3>
        <Card />
      </Section>
    </Container>
  )
}
