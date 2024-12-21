import {Route, Routes} from "react-router-dom"

import MainPage from "./pages/Main/Main"
import CatalogPage from "./pages/Catalog/Catalog"
import CartPage from "./pages/Cart/Cart"
import RegistrationPage from "./pages/Registration/Registration"

import Header from "./components/Header/Header";

import "./style.scss"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="landing">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>} exact/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
