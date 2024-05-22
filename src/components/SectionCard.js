import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function SectionCard({title, text}) {
  return (
    <Container>
      <Card>
        <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
      </Card>
    </Container>
  );
}

export default SectionCard;