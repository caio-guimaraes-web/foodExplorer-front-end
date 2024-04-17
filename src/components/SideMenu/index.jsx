import { Container, HeaderFake } from "./styles"
import { X, MagnifyingGlass } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import { InputSearch } from "../InputSearch"

export function SideMenu({ menuOpen, onCloseMenu }) {
  return (
    <Container data-menu-open={menuOpen}>
      <HeaderFake>
        <ButtonMobile icon={X} onClick={onCloseMenu} />
        <p>Menu</p>
      </HeaderFake>
      <div>
        <InputSearch
          icon={MagnifyingGlass}
          title="Busque por pratos ou Ingredientes"
        />
        <a href="http://">Sair</a>
        <hr />
      </div>
    </Container>
  )
}
