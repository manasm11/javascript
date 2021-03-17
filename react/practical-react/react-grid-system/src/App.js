import "./App.css";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";

function App() {
  return (
    <Container className='App'>
      <Row>
        <Visible xs sm>
          <Col>Hello 1</Col>
        </Visible>
        <Hidden xs sm>
          <Col>Hello 2</Col>
        </Hidden>
        <Col>Hello 3</Col>
      </Row>
    </Container>
  );
}

export default App;
