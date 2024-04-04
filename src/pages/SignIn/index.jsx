import { Container, Form } from "./styles"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { Label } from "../../components/Label/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button/styles"

export function SignIn() {
  return (
    <Container>
      <div>
        <img src={logoFoodExplorer} alt="ícone Food Explorer" />
      </div>
      <section>
        <Form>
          <h1>Faça Login</h1>
          <div>
            <Label for="email">Email</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <Label for="senha">Senha</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="password"
              id="senha"
            />
          </div>
          <Button type="submit">Entrar</Button>
          <a href="http://">Criar uma conta</a>
        </Form>
      </section>
    </Container>
  )
}
