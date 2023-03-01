import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'

function BootstrapCarousel(){
return (
    <div >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="trip.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block2"
          src="trip2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="trip3.jpg"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default BootstrapCarousel