import { Container, Form } from "./styles"
import logoFoodExplorer from "../../assets/food_explorer_g.svg"
import { Label } from "../../components/Label/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

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
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="password"
              id="senha"
            />
          </div>
          <Button title="Teste" type="submit" />
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </section>
    </Container>
  )
}
