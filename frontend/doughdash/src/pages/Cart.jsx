import { useContext } from 'react'
import CartContext from '../contexts/CartContext';

export default function Cart() {

  const cart = useContext(CartContext)

  const sumAge = (cart) => {  
    let num = 0;   
    cart.forEach((item) => {    
      num += parseFloat(item.price);  
    });   
    return num;
  }

    return (
      <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">Cart</h1>
          <h2>Order Summary ({cart.length} items)</h2>
              { cart.map((item, index) => (
                <div className="row">
                  <div className="col py-3">
                    {item.name}
                    <br></br>
                    {item.description}
                    <br></br>
                    ${item.price}
                  </div>
                </div>
              ))}
          <p>Total: ${sumAge(cart)}</p>
        </div>
      </main>
    );
  }