import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Slide (){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <div >
        <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} variant="dark">
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/1c54bb864465a8efc.webp"
      alt="1"
    />
    <Carousel.Caption>
      <h3>1</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/2a1e3be4c23b23c8e.webp"
      alt="2"
    />

    <Carousel.Caption>
      <h3>2</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/39fab5253696fbeba.webp"
      alt="3"
    />

    <Carousel.Caption>
      <h3>3</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/4a1be6374914e03d2.webp"
      alt="4"
    />
    <Carousel.Caption>
      <h3>4</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/5f6b3f623b215bd52.webp"
      alt="5"
    />

    <Carousel.Caption>
      <h3>5</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/62b7bd4596c074b95.webp"
      alt="6"
    />

    <Carousel.Caption>
      <h3>6</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/7118c434907421c92.webp"
      alt="7"
    />
    

    <Carousel.Caption>
      <h3>7</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/8901bc9b0dbcce23b.webp"
      alt="8"
    />
    

    <Carousel.Caption>
      <h3>8</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/9_1.webp"
      alt="9" />
      <Carousel.Caption>
        <h3>9</h3>
      </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/10.webp"
      alt="10"
    />    
    <Carousel.Caption>
      <h3>10</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/12dd2f9b04bf28c707.webp"
      alt="12"
    />    
    <Carousel.Caption>
      <h3>12</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/13ff676adaf0968246.webp"
      alt="13"
    />    
    <Carousel.Caption>
      <h3>13</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/1458451a0fc1fce391.webp"
      alt="14"
    />    
    <Carousel.Caption>
      <h3>14</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="w-50"
      src="https://s6.gifyu.com/images/15b90404d2f0f63f8f.webp"
      alt="15"
    />    
    <Carousel.Caption>
      <h3>15</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

</div>
    );
}

export default Slide