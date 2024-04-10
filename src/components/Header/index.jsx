import { Container } from "./styles"
import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { InputSearch } from "../InputSearch"
import { Button } from "../../components/Button"
import { ButtonOut } from "../ButtonOut"

export function Header() {
  return (
    <Container>
      <ButtonMobile icon={List} />
      <div>
        <img src={logoFoodExplorer} alt="ícone Food Explorer" />
      </div>
      <InputSearch
        icon={MagnifyingGlass}
        title="Busque por pratos ou Ingredientes"
      />
      <Button title="Pedidos(0)" icon={Receipt} />
      <ButtonOut icon={SignOut} />
    </Container>
  )
}
