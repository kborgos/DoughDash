import Card from 'react-bootstrap/Card';

export default function RestaurantTile({name, address}) {
  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../src/assets/bread.png" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                {address}
                </Card.Subtitle>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
            </Card.Body>
        </Card>
  );
}