import React from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      selectedBrand: '',
      selectedTitle: '',
      tableData: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api-mobilespecs.azharimm.site/v2/brands',
      'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2'
    );
    this.setState({ coins: res.data });
  }

  render() {
    return (
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Marca</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Modelo</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}

export default Ejercicio2;
