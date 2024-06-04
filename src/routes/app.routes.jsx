import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { AddDish } from "../pages/AddDish"
import { Dish } from "../pages/Dish"
import { EditDish } from "../pages/EditDish"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adddish" element={<AddDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/dish/:id" element={<EditDish />} />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}
