import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import 'bootstrap/dist/css/bootstrap.min.css';
import BakeryPage from "./pages/BakeryPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bakeries/:id" element={<BakeryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
