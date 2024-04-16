import { Container, HeaderFake } from "./styles"
import { X, MagnifyingGlass } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import { InputSearch } from "../InputSearch"

export function SideMenu() {
  return (
    <Container>
      <HeaderFake>
        <ButtonMobile icon={X} />
        <p>Menu</p>
      </HeaderFake>
      <div>
        <InputSearch
          icon={MagnifyingGlass}
          title="Busque por pratos ou Ingredientes"
        />
        <h5>mais alguma</h5>
      </div>
    </Container>
  )
}
