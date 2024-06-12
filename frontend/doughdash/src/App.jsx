import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';
import Navigation from './components/Navigation'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import LogInSignUp from "./pages/LogInSignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import BakeryPage from "./pages/BakeryPage";

function App() {
  const [cart, setCart] = useState([])
  const [userToken, setUserToken] = useState(null)

  return (
    <>
      <UserContext.Provider value={userToken}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation/>
          <BrowserRouter>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
              <Route path="bakeries/:id" element={<BakeryPage />} />
              <Route path="login" element={<LogInSignUp />} />
            </Routes>
          </BrowserRouter>
      </CartContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
