// src/App.jsx
import { Routes } from "./routes"
import { AuthProvider } from "./hooks/auth"
import { LoadingProvider, useLoading } from "./context/LoadingContext"
import { Loader } from "./components/Loader"

function App() {
  return (
    <AuthProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </AuthProvider>
  )
}

function AppContent() {
  const { loading } = useLoading()
  return (
    <>
      {loading && <Loader />}
      <Routes />
    </>
  )
}

export default App
