import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import MainPage from "./pages/Main/Main"
import CatalogPage from "./pages/Catalog/Catalog"
import CartPage from "./pages/Cart/Cart"
import RegistrationPage from "./pages/Registration/Registration"

import "./style.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} exact/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
