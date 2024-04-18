import { Container } from "./styles"

export function ButtonBack({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
