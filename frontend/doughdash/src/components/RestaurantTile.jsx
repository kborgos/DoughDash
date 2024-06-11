import Card from 'react-bootstrap/Card';

export default function RestaurantTile() {
  return (
    <div className="col py-3">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="public/vite.svg" />
            <Card.Body>
                <Card.Title>Bakery Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Bakery Address
                </Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}