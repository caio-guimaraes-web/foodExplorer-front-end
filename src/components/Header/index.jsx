import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "./styles"
import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"
import { ButtonMobile } from "../ButtonMobileMenu"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import logo_admin_desk from "../../assets/logo_admin_desk.svg"
import { InputSearch } from "../InputSearch"
import { Button } from "../../components/Button"
import { ButtonOut } from "../ButtonOut"
import { ButtonMobileOrder } from "../ButttonMobileOrder"
import { useAuth } from "../../hooks/auth"

export function Header({ onOpenMenu, onSearch }) {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()
  const isAdmin = user?.is_admin

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      onSearch(searchTerm)
    }
  }

  return (
    <Container>
      <ButtonMobile icon={List} onClick={onOpenMenu} />
      <div>
        <img
          src={isAdmin ? logo_admin_desk : logoFoodExplorer}
          alt="ícone Food Explorer"
          onClick={() => navigate("/")}
        />
      </div>
      <InputSearch
        icon={MagnifyingGlass}
        title="Busque por pratos ou Ingredientes"
        onSearch={handleSearch}
      />

      {isAdmin ? (
        <>
          <Button title="Novo Prato" onClick={(e) => navigate("/adddish")} />
        </>
      ) : (
        <>
          <Button title="Pedidos(0)" icon={Receipt} />
          <ButtonMobileOrder icon={Receipt} />
        </>
      )}

      <ButtonOut icon={SignOut} onClick={signOut} />
    </Container>
  )
}
