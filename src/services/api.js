import axios from "axios"

/* dev enviromment - eu sei que isso tá feio, em breve deixo isso melhor */
/* export const api = axios.create({
  baseURL: "http://localhost:3333",
})

export const getCardImageUrl = () => {
  return "http://localhost:3333/files/"
} */

/* production enviromment */
export const api = axios.create({
  baseURL: "https://foodexplorer-back-end-gaba.onrender.com",
})

export const getCardImageUrl = () => {
  return "https://foodexplorer-back-end-gaba.onrender.com/files/"
}
