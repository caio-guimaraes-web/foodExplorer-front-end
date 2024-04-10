import { Container } from "./styles"

export function ButtonOut({ icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
    </Container>
  )
}
