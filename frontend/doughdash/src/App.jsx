import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  // this way we set a new array (rather than mutating the array)
  const handleCart = (name, description, price, category) =>
    setCart([
      ...cart,
      {
        "name": name, 
        "description": description, 
        "price": price, 
        "category": category
      }
    ]);

  return (
    <>
      <UserContext.Provider value={userToken}>
      <CartContext.Provider value={cart}>
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/home" element={<Home cart={cart} />} />
              <Route path="/account" element={<Account cart={cart} />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/bakeries/:id" element={<BakeryPage handleCart={handleCart} />} />
              <Route path="/login" element={<LogInSignUp cart={cart} />} />
            </Routes>
          </BrowserRouter>
      </CartContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
