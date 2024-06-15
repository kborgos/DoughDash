import { getCalories } from '../api/authApi'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

export default function MenuItemTile({handleCart, name, description, price, category}) {

  async function performGetCalories(item_name) {
    console.log("Getting calories data...")
    const calories = await getCalories(item_name) // tester acc, in future could check if i can modify get-token call to return the customer id associated w acc
    console.log(calories)
    return calories
  }

  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../src/assets/bread.png" />
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                { description }
                </Card.Subtitle>
                <Card.Text>
                ${ price }
                </Card.Text>
                <Card.Text>
                {/* { performGetCalories(name) } Calories */}
                Calories
                </Card.Text>
                <Card.Text>
                { category }
                </Card.Text>
            </Card.Body>
            <Button id='bootstrap-overrides' onClick={() => handleCart(name, description, price, category)}>Add to cart</Button>
        </Card>
  );
}