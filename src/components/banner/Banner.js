import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import './Banner.css';
import Banner1 from "../../images/Cisco Switch Banner 1-Final.jpeg";
import Banner2 from "../../images/Cisco Switch Banner 2-Final.jpeg";
import Banner3 from "../../images/Cisco Switch Banner 3-Final.png";


const Banner = () => {
  return (
    <div className="container-fluid banner-container">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="banner-image"
                src={Banner1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="banner-image"
                src={Banner2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="banner-image"
                src={Banner3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Banner;