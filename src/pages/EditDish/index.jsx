import { useLoading } from "../../context/LoadingContext"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
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
import { api } from "../../services/api"

export function EditDish({ onOpenMenu }) {
  const { setLoading } = useLoading()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dish, setDish] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [buttonText, setButtonText] = useState("salvar alterações") // Estado para gerenciar o texto do botão
  const { id } = useParams()
  const navigate = useNavigate()

  const handleBack = () => navigate(`/`)

  useEffect(() => {
    const fetchDishAndIngredients = async () => {
      try {
        setLoading(true)
        // Buscar dados do prato
        const dishResponse = await api.get(`/dish/${id}`)
        const dishData = dishResponse.data

        // Buscar ingredientes do prato
        const ingredientsResponse = await api.get(`/ingredients/${id}`)
        const ingredientsData = ingredientsResponse.data

        setDish(dishData)
        setIngredients(ingredientsData)
      } catch (error) {
        setLoading(false)
        console.error("Erro ao buscar os dados do prato e ingredientes:", error)
        alert("OOps! ")
      } finally {
        setLoading(false)
      }
    }

    fetchDishAndIngredients()
  }, [id])

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, { name: newIngredient }])
      setNewIngredient("")
    }
  }

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item.name !== ingredient.name))
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImageFile(file)
    }
  }

  const uploadImage = async (dishId, imageFile) => {
    const formData = new FormData()
    formData.append("image", imageFile)

    try {
      const response = await api.patch(`/dish/img/${dishId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("tentou enviar a imagem", response)

      if (response.status !== 200) {
        throw new Error("Erro ao enviar a imagem")
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setButtonText("enviando dados") // Atualiza o texto do botão
      /* setLoading(true) */ // Ativa o loading
      const updatedDish = {
        ...dish,
        ingredients: ingredients.map((ingredient) => ingredient.name),
      }
      await api.put(`/dish/${id}`, updatedDish)

      if (imageFile) {
        await uploadImage(id, imageFile)
      }

      alert("Prato atualizado com sucesso!")
      navigate("/")
    } catch (error) {
      alert("Erro ao atualizar o prato, alguns detalhes no console!")
      console.error("Erro ao atualizar o prato:", error)
    } finally {
      /* setLoading(false) */ // Desativa o loading
      setButtonText("salvar alterações") // Restaura o texto do botão
    }
  }

  const handleDelete = async () => {
    event.preventDefault() // Evitar o comportamento padrão do formulário
    const confirmed = window.confirm(
      "Tem certeza de que deseja deletar este prato? Esta ação não pode ser desfeita."
    )
    if (confirmed) {
      try {
        await api.delete(`/dish/${id}`)
        alert("Prato deletado com sucesso!")
        navigate("/")
      } catch (error) {
        console.error("Erro ao deletar o prato:", error)
        alert("Erro ao deletar o prato. Por favor, tente novamente.")
      }
    }
  }

  if (!dish) return <p>Carregando...</p>

  return (
    <Container>
      <SideMenu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Section>
        <ButtonBack title="voltar" icon={CaretLeft} onClick={handleBack} />
        <Form onSubmit={handleSubmit}>
          <h2>Editar prato</h2>
          {/* linha com 3 inputs */}
          <div>
            <InputFile
              title="Imagem do prato"
              icon={UploadSimple}
              id="imagefile"
              onChange={handleFileChange}
            />
            <div>
              <Label htmlFor="nome">Nome do prato</Label>
              <Input
                placeholder="Exemplo: Salada Caesar"
                type="text"
                id="nome"
                value={dish.name}
                onChange={(e) => setDish({ ...dish, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <CaretDown />
              <select
                id="category"
                value={dish.category}
                onChange={(e) => setDish({ ...dish, category: e.target.value })}
              >
                <option value="">Selecione uma categoria</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>
          {/* linha com 2 elementos */}
          <div>
            <div>
              <Label>Ingredientes</Label>
              <div>
                {ingredients.map((ingredient, index) => (
                  <TagIngredients key={index}>
                    {ingredient.name}{" "}
                    <X onClick={() => handleRemoveIngredient(ingredient)} />
                  </TagIngredients>
                ))}
                <AddIngredients>
                  <input
                    type="text"
                    placeholder="adicionar"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                  />
                  <Plus onClick={handleAddIngredient} />
                </AddIngredients>
              </div>
            </div>

            <div>
              <Label htmlFor="preco">Preço</Label>
              <Input
                placeholder="R$ 19,99"
                type="number"
                id="preco"
                value={dish.price}
                onChange={(e) => setDish({ ...dish, price: e.target.value })}
              />
            </div>
          </div>
          {/* 3a linha com a caixa de texto */}
          <div>
            <Label htmlFor="descreveprato">Descrição</Label>
            <DescrevePrato
              id="descreveprato"
              name="descricaoPrato"
              value={dish.description}
              onChange={(e) =>
                setDish({ ...dish, description: e.target.value })
              }
            />
          </div>
          <div>
            <Button
              className="btn-exclude-dish"
              title="excluir prato"
              onClick={handleDelete}
            />
            <Button title={buttonText} type="submit" />
          </div>
        </Form>
      </Section>
      <Footer />
    </Container>
  )
}
