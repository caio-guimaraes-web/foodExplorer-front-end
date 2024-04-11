import { Container } from "./styles"

export function ButtonMobileOrder({ icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      <span>0</span>
    </Container>
  )
}
