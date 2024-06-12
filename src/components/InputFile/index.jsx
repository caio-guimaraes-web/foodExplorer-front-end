import { Container, LabelVisual, Label } from "./styles"

export function InputFile({ title, id, icon: Icon, name, onChange }) {
  return (
    <Container>
      <LabelVisual>{title}</LabelVisual>
      <Label htmlFor={id}>{title}</Label>
      {Icon && <Icon />}
      <input
        type="file"
        placeholder={title}
        id={id}
        name={name}
        onChange={onChange}
      />
    </Container>
  )
}
