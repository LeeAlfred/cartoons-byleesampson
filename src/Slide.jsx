import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Slide (){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s6.gifyu.com/images/1c54bb864465a8efc.webp"
      alt="1"
    />
    <Carousel.Caption>
      <h3>1</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s6.gifyu.com/images/2a1e3be4c23b23c8e.webp"
      alt="2"
    />

    <Carousel.Caption>
      <h3>2</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s6.gifyu.com/images/39fab5253696fbeba.webp"
      alt="3"
    />

    <Carousel.Caption>
      <h3>3</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s6.gifyu.com/images/4a1be6374914e03d2.webp"
      alt="4"
    />
    <Carousel.Caption>
      <h3>4</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s6.gifyu.com/images/5f6b3f623b215bd52.webp"
      alt="5"
    />

    <Carousel.Caption>
      <h3>5</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s6.gifyu.com/images/62b7bd4596c074b95.webp"
      alt="6"
    />

    <Carousel.Caption>
      <h3>6</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
}

export default Slide