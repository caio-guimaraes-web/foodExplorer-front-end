// SideMenu.jsx
import { Container, HeaderFake } from "./styles"
import { X, MagnifyingGlass } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import { InputSearch } from "../InputSearch"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function SideMenu({ menuOpen, onCloseMenu, onSearch }) {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()
  const isAdmin = user?.is_admin

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
          onSearch={onSearch} // Passando a função de busca
        />
        {isAdmin ? (
          <>
            <p onClick={() => navigate("/adddish")}>Novo prato</p>
          </>
        ) : (
          <>
            <p onClick={signOut}>Sair</p>
          </>
        )}
        <hr />
      </div>
    </Container>
  )
}
