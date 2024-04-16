import { Container } from "./styles"

export function ButtonIconCard({ icon: Icon, ...rest }) {
  return <Container {...rest}>{Icon && <Icon />}</Container>
}
