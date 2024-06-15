import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';
import Navigation from './components/Navigation'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import LogInSignUp from "./pages/LogInSignUp";
import { getCustomerData, login } from './api/authApi'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'
import BakeryPage from "./pages/BakeryPage";

function App() {
  
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [customer, setCustomer] = useState({})
  const [userToken, setUserToken] = useState(null)

  const [cart, setCart] = useState([])

  // temp way to get auth
  useEffect(() => {
    const handleSubmit = async () => {
      // e.preventDefault()
      const context = { username: 'tester', password: 'pass' }
      const token = await login(context)
      if(!token) {
        console.log("Error logging in")
      } else {
        // console.log(token)
        handleToken(token)
      }
    }
    handleSubmit()
  }, []);

  useEffect(() => {
    async function performGetCustomerData() {
      console.log("Getting customer data...")
      const customer = await getCustomerData(userToken, 1) // tester acc, in future could check if i can modify get-token call to return the customer id associated w acc
      setCustomer(customer)
      console.log(customer)
    }
    if(userToken) {
      performGetCustomerData()
    } 
  }, [userToken])

  const handleToken = (token) => {
    setFormData({ username: 'tester', password: 'pass' }) // test acc
    setUserToken(token)
  }

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
    <UserContext.Provider value={userToken}>
      <CartContext.Provider value={cart}>
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/account" element={<Account user={formData} customer={customer} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/bakeries/:id" element={<BakeryPage handleCart={handleCart} />} />
              <Route path="/login" element={<LogInSignUp />} />
            </Routes>
          </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App
