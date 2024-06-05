import { Container } from "./styles"
import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { InputSearch } from "../InputSearch"
import { Button } from "../../components/Button"
import { ButtonOut } from "../ButtonOut"
import { ButtonMobileOrder } from "../ButttonMobileOrder"
import { useAuth } from "../../hooks/auth"

export function Header({ onOpenMenu }) {
  const { signOut } = useAuth()
  return (
    <Container>
      <ButtonMobile icon={List} onClick={onOpenMenu} />
      <div>
        <img src={logoFoodExplorer} alt="ícone Food Explorer" />
      </div>
      <InputSearch
        icon={MagnifyingGlass}
        title="Busque por pratos ou Ingredientes"
      />
      <Button title="Pedidos(0)" icon={Receipt} />
      <ButtonMobileOrder icon={Receipt} />
      <ButtonOut icon={SignOut} onClick={signOut} />
    </Container>
  )
}
