import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333",
})

export const getCardImageUrl = () => {
  return "http://localhost:3333/files/"
}
