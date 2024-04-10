import { Container } from "./styles"

export function InputSearch({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input type="search" placeholder={title} {...rest} />
    </Container>
  )
}
