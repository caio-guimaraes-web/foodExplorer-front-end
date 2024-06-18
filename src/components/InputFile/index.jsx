import React, { useState } from "react"
import { Container, LabelVisual, Label } from "./styles"

export function InputFile({ title, id, icon: Icon, name, onChange }) {
  const [fileName, setFileName] = useState("")

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFileName(file.name)
    } else {
      setFileName("")
    }

    // Chama a função onChange fornecida como prop, passando o evento
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <Container>
      <LabelVisual>{title}</LabelVisual>
      <Label htmlFor={id}>{fileName || title}</Label>
      {Icon && <Icon />}
      <input
        type="file"
        placeholder={title}
        id={id}
        name={name}
        onChange={handleFileChange}
      />
    </Container>
  )
}
