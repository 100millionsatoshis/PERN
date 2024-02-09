import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import Register from "./pages/register"
import Login from "./pages/login"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  )

}

export default App