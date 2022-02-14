import React from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      selectedBrand_Name: '',
      selectedDevice_count: '',
      tableData: [],
    };
  }

  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
      selectedBrand_Name: item.Brand,
      selectedDevice_coun: item.Device_count,
    });
  };

  async componentDidMount() {
    const res = await axios.get(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );
    this.setState({ coins: res.data });
  }

  render() {
    return (
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Marca</Card.Title>
            <Card.Text>
              {this.state.tableData.map((item) => {
                return (
                  <tr key={uuid()} onClick={() => this.changeSelected(item)}>
                    <td>{item.selectedBrand_Name}</td>
                  </tr>
                );
              })}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Modelo</Card.Title>
            <Card.Text>
              {this.state.tableData.map((item) => {
                return (
                  <tr key={uuid()} onClick={() => this.changeSelected(item)}>
                    <td>{item.founded}</td>
                  </tr>
                );
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

export default Ejercicio2;
