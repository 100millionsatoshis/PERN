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


const PrivateRoutes = () => {
  const isAuth = false

  return <> {isAuth ? <Outlet /> : <Navigate to="/login" />}</>
}

const RestrictedRoutes = () => {
  const isAuth = false

  return <> {!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>
}

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>} />

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>

      <Route element={<RestrictedRoutes />}>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Route>
      
      
    </Routes>
  </BrowserRouter>
  )

}

export default App