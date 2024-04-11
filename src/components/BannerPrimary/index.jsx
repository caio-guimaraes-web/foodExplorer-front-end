import { Container } from "./styles"
import delicious_food from "../../assets/delicious_food.png"

export function BannerPrimary() {
  return (
    <Container>
      <div>
        <img src={delicious_food} alt="" />
      </div>
      <div>
        <h2>Sabores inigualáveis</h2>
        <h4>Sinta o cuidado do preparo com ingredientes selecionados</h4>
      </div>
    </Container>
  )
}
