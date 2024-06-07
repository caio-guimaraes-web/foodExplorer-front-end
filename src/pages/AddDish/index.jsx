import { useState } from "react"
import {
  Container,
  Section,
  Form,
  TagIngredients,
  AddIngredients,
  DescrevePrato,
} from "./styles"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import {
  CaretLeft,
  UploadSimple,
  CaretDown,
  X,
  Plus,
} from "@phosphor-icons/react"
import { ButtonBack } from "../../components/ButtonBack"
import { Label } from "../../components/Label/styles"
import { Input } from "../../components/Input"
import { InputFile } from "../../components/InputFile"
import { Button } from "../../components/Button"

import { Footer } from "../../components/Footer"

export function AddDish({ onOpenMenu }) {
  /* open side menu mobile */
  const [menuOpen, setMenuOpen] = useState(false)

  /* creating ingredient tags */
  const [ingredient, setIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  function handleAddIngredient() {
    if (newIngredient.trim() !== "") {
      setIngredient((prevState) => [...prevState, newIngredient])
      setNewIngredient("")
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddIngredient()
      event.preventDefault()
    }
  }

  /* usa o método filter para criar uma nova lista de ingredientes que exclui o ingrediente no índice especificado. */
  function handleRemoveIngredient(indexToRemove) {
    setIngredient((prevState) =>
      prevState.filter((_, index) => index !== indexToRemove)
    )
  }

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Section>
        <ButtonBack title="voltar" icon={CaretLeft} />
        <Form>
          <h2>Adicionar prato</h2>
          {/* linha com 3 inputs */}
          <div>
            <InputFile
              title="Imagem do prato"
              icon={UploadSimple}
              id="imagefile"
            />
            <div>
              <Label htmlFor="nome">Nome do prato</Label>
              <Input
                placeholder="Exemplo: Salada Caesar"
                type="text"
                id="nome"
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <CaretDown />
              <select id="category">
                <option value="refeição">Refeição</option>
                <option value="sobremesas">sobremesas</option>
              </select>
            </div>
          </div>
          {/* linha com 2 elementos */}
          <div>
            <div>
              <Label>Ingredientes</Label>
              <div>
                {ingredient.map((ingredient, index) => (
                  <TagIngredients key={index}>
                    {ingredient}
                    <X onClick={() => handleRemoveIngredient(index)} />
                  </TagIngredients>
                ))}
                <AddIngredients>
                  <input
                    type="text"
                    placeholder="Adicionar"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onKeyPress={handleKeyPress}
                  />
                  <Plus onClick={handleAddIngredient} />
                </AddIngredients>
              </div>
            </div>

            <div>
              <Label htmlFor="preco">Preço</Label>
              <Input placeholder="R$ 19,99" type="number" id="preco" />
            </div>
          </div>
          {/* 3a linha com a caixa de texto  */}
          <div>
            <Label htmlFor="descreveprato">Descrição do prato</Label>
            <DescrevePrato id="descreveprato" name="descricaoPrato" />
          </div>
          <Button title="criar prato" type="submit" />
        </Form>
      </Section>
      <Footer />
    </Container>
  )
}
