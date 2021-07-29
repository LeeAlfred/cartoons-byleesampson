// bootstrap and styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Components
import Nav from './Nav';
// import Heading from './Heading';
import Slide from './Slide';
import Polaroid from './Polaroid';
import About from './About';
import Footer from './Footer';
import cartoon from './cartoon';


function createPolaroid(cartoon){
  return <Polaroid key={cartoon.id} img={cartoon.img} />
}


function App() {
  return (
  <div className="App">
   <Container id="home" fluid>
   <Row>
     <Nav />
    </Row>
    <Row>
    {/* <Col>
    <Heading />
    </Col> */}
    </Row>
    <Row>
      <Slide />
    </Row>
    {cartoon.map(createPolaroid)}
    <Row>
      <Col>
        <About />
      </Col>
    </Row>
    <Footer />

  </Container>
    </div>
  );
}

export default App;
