import { Container, Form } from "./styles"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { Label } from "../../components/Label/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
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
            />
          </div>
          <div>
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Sua senha</Label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
            />
          </div>
          <Button title="Criar conta" type="submit" />
          <a href="http://">Já possuo uma conta, fazer login.</a>
        </Form>
      </section>
    </Container>
  )
}
