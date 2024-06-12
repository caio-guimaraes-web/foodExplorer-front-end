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
import { api } from "../../services/api" // Importando o componente API

export function AddDish({ onOpenMenu }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [newIngredient, setNewIngredient] = useState("")
  const [dishData, setDishData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    ingredients: [], // Adicionado para armazenar ingredientes
    imageFile: null,
  })

  function handleAddIngredient() {
    if (newIngredient.trim() !== "") {
      setDishData((prevState) => ({
        ...prevState,
        ingredients: [...prevState.ingredients, newIngredient],
      }))
      setNewIngredient("")
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddIngredient()
      event.preventDefault()
    }
  }

  function handleRemoveIngredient(indexToRemove) {
    setDishData((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter(
        (_, index) => index !== indexToRemove
      ),
    }))
  }

  function handleInputChange(event) {
    const { name, value, type, files } = event.target
    setDishData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const jsonData = JSON.stringify({
      name: dishData.name,
      category: dishData.category,
      price: dishData.price,
      description: dishData.description,
      ingredients: dishData.ingredients,
    })

    // Log the file name along with other data
    console.log({
      ...dishData,
      imageFile: dishData.imageFile ? dishData.imageFile.name : null,
    })

    try {
      const response = await api.post("/dish", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.status !== 200) {
        throw new Error("Erro ao adicionar prato.")
      }

      const result = await response.data
      const dishId = result.id

      console.log("Prato adicionado com sucesso!", result)

      if (dishData.imageFile) {
        await uploadImage(dishId, dishData.imageFile)
      }
    } catch (error) {
      console.error("Erro ao adicionar prato:", error)
    }
  }

  async function uploadImage(dishId, imageFile) {
    const formData = new FormData()
    formData.append("image", imageFile)

    try {
      const response = await api.patch(`/dish/img/${dishId}`, formData)

      if (!response.status === 200) {
        throw new Error("Erro ao enviar a imagem")
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error)
    }
  }

  function handleFileChange(event) {
    setDishData({
      ...dishData,
      imageFile: event.target.files[0],
    })
  }

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Section>
        <ButtonBack title="voltar" icon={CaretLeft} />
        <Form onSubmit={handleSubmit}>
          <h2>Adicionar prato</h2>
          <div>
            <InputFile
              title="Imagem do prato"
              icon={UploadSimple}
              id="imagefile"
              name="imageFile"
              onChange={handleFileChange}
            />

            <div>
              <Label htmlFor="name">Nome do prato</Label>
              <Input
                placeholder="Exemplo: Salada Caesar"
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <CaretDown />
              <select
                id="category"
                name="category"
                onChange={handleInputChange}
              >
                <option value="refeição">Refeição</option>
                <option value="sobremesas">Sobremesas</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <Label>Ingredientes</Label>
              <div>
                {dishData.ingredients.map((ingredient, index) => (
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
              <Label htmlFor="price">Preço</Label>
              <Input
                placeholder="R$ 19,99"
                type="number"
                id="price"
                name="price"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Descrição do prato</Label>
            <DescrevePrato
              id="description"
              name="description"
              onChange={handleInputChange}
            />
          </div>
          <Button title="criar prato" type="submit" />
        </Form>
      </Section>
      <Footer />
    </Container>
  )
}
