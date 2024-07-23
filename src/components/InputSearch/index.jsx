// InputSearch.jsx
import { useState } from "react"
import { Container } from "./styles"

export function InputSearch({ title, icon: Icon, onSearch, ...rest }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onSearch(searchTerm)
    }
  }

  return (
    <Container>
      {Icon && <Icon />}
      <input
        type="search"
        placeholder={title}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        {...rest}
      />
    </Container>
  )
}
