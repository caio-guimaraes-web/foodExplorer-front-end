import { Container } from "./styles"
import { List, MagnifyingGlass } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { InputSearch } from "../InputSearch"

export function Header() {
  return (
    <Container>
      <ButtonMobile icon={List} />
      <div>
        <img src={logoFoodExplorer} alt="ícone Food Explorer" />
      </div>
      <InputSearch icon={MagnifyingGlass} title="busca" />
    </Container>
  )
}
