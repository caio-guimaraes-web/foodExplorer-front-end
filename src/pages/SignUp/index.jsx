import { useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { Container, Form } from "./styles"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { Label } from "../../components/Label/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  /* const navigate = useNavigate() */

  function handleSignUp() {
    /* console.log(name, email, password) */
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        /* navigate("/") */
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar!")
        }
      })
  }

  return (
    <Container>
      <div>
        <img src={logoFoodExplorer} alt="ícone Food Explorer" />
      </div>
      <section>
        <Form>
          <h1>Crie sua conta</h1>
          <div>
            <Label htmlFor="name">Seu nome</Label>
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Sua senha</Label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button title="Criar conta" type="submit" onClick={handleSignUp} />
          <Link to="/">Já possuo uma conta, fazer login.</Link>
        </Form>
      </section>
    </Container>
  )
}
