import { useState } from "react"
import { Container, Form } from "./styles"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { Label } from "../../components/Label/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    event.preventDefault()
    signIn({ email, password })
  }

  return (
    <Container>
      <div>
        <img src={logoFoodExplorer} alt="ícone Food Explorer" />
      </div>
      <section>
        <Form onSubmit={handleSignIn}>
          <h1>Faça Login</h1>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="password"
              id="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button title="Entrar" type="submit" />
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </section>
    </Container>
  )
}
