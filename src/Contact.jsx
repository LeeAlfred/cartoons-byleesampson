import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Contact (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div className="contact">
<Button variant="outline-secondary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>The best way to reach me at the moment is email: <br></br>emailme@leesampson.co.nz</p>
        <p>You can see more of my cartoons via my <a href="https://www.instagram.com/byleesampson/" target="_blank" rel="noreferrer">my instagram Page</a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Contact;