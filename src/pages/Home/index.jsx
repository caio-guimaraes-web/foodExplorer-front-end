import { Container } from "./styles"
import { Header } from "../../components/Header"
import { BannerPrimary } from "../../components/BannerPrimary"

export function Home() {
  return (
    <Container>
      <Header></Header>
      <BannerPrimary />
    </Container>
  )
}
