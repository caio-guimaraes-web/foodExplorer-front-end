import { Container } from "./styles"

export function ButtonIconCard({ icon: Icon, onClick, ...rest }) {
  return (
    <Container onClick={onClick} {...rest}>
      {Icon && <Icon />}
    </Container>
  )
}
