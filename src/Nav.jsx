import React from "react";
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
// buttons
import Contact from "./Contact";
import Gallerybtn from "./Gallerybtn";
import Aboutbtn from "./Aboutbtn";



import Heading from "./Heading";




function Nav() {

return (
    <div>
 <Container className="navbar">   
<Navbar fixed= "top" bg="white" expand="lg">
<Navbar.Brand href="#home">
<Heading />
</Navbar.Brand> 
 <Navbar.Toggle />
 <Navbar.Collapse>
  <Navbar.Text>   
    <Contact />
  </Navbar.Text>
  <Navbar.Text>   
    <Gallerybtn />
  </Navbar.Text>
  <Navbar.Text>   
    <Aboutbtn />
  </Navbar.Text>
 </Navbar.Collapse>
</Navbar>
</Container>
    </div>
)


}

export default Nav