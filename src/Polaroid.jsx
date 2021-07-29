import React from 'react';
import Image from 'react-bootstrap/Image';

import { SRLWrapper } from "simple-react-lightbox";

const options = {
    thumbnails: {showThumbnails: false,},
    buttons: {showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
      showDownloadButton: false, },
    settings:{
      disableWheelControls: true,
  
    }
  }


function Polaroid (props){
    return (
        <div id="gallery" className='cartoon'>
          <SRLWrapper options={options}>
            <Image className="polaroid" src={props.img} alt='Original work by Lee Sampson' />
          </SRLWrapper>
        
        </div>
        
    );
}

export default Polaroid;