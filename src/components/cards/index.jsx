import { Container } from "./styles"
import { Button } from "../Button"
import prato_teste from "../../assets/img_foods/prato_teste.png"

export function Card() {
  return (
    <Container>
      <div>
        <img src={prato_teste} alt="" />
      </div>
      <p>Salada Ravanelo</p>
      <p>
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão
        naan dá um toque especial.
      </p>
      <p>R$ 49,97</p>
      <p>contagem</p>
      <Button title="incluir" />
    </Container>
  )
}
