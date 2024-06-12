import { useContext } from 'react'
import CartContext from '../contexts/CartContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

export default function MenuItemTile({name, description, price, category}) {
  const { cart, setCart } = useContext(CartContext)
  let tempCart = cart

  function updateCart(name, description, price, category) {
    let tempObj = { "name": name, "description": description, "price": price, "category": category }
    tempCart.push(tempObj)
    setCart(tempCart)
    console.log(cart)
  }

  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="public/vite.svg" />
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                { description }
                </Card.Subtitle>
                <Card.Text>
                ${ price }
                </Card.Text>
                <Card.Text>
                Calories
                </Card.Text>
                <Card.Text>
                { category }
                </Card.Text>
            </Card.Body>
            <Button onClick={() => updateCart(name, description, price, category)}>Add to cart</Button>
        </Card>
  );
}