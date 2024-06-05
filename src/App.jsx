/* import { SignUp } from "./pages/SignUp" */
/* import { Home } from "./pages/Home" */
/* import { Dish } from "./pages/Dish" */
/* import { AddDish } from "./pages/AddDish" */
/* import { EditDish } from "./pages/EditDish" */

import { Routes } from "./routes"

import { AuthProvider } from "./hooks/auth"

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
