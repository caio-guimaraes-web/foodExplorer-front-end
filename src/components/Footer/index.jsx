import { Container } from "./styles"
import LogoFooter from "../../assets/food_explorer_footer.png"

export function Footer() {
  let currentYear = new Date().getFullYear()

  return (
    <Container>
      <img src={LogoFooter} alt="Food Explorer logo do rodapé" />
      <h6>© {currentYear} - Todos os direitos reservados.</h6>
    </Container>
  )
}
