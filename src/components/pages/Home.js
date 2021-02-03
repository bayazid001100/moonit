import React from "react";
import "../../App.css";
import Slider from "../slider/slider";
import Banner from "../banner/Banner";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function Home() {
  return (
    <>
      <Banner />
      <span>
        <h1
          class="elementor-heading-title elementor-size-default"
          className="slider"
        >
          WE BUILD ROI DRIVEN SOFTWARE PRODUCT
        </h1>
        <p className="msg">
          "With 10 years+ experiences in this sector we are very delightful. Our
          main focuses always on customers’ requirements, plans and strategy so
          that, we can reach end to end point. Above all, today’s requirements
          for responsible business, globalization, digitalization and constant
          fierce competition pose challenges that we have to meet. Not only with
          regard to ourselves, but also in terms of being a partner for our
          customers. We believe it’s our mission not only to help customers
          create good products but also to turn each challenge into a
          competitive opportunity. We stand by this and look to the future with
          confidence. We are continuing our journey to strengthen our vision of
          being the customer’s first choice of cooperation partner.  Our ability
          to provide integrated solutions helps simplify and speed up customers’
          processes. Our combination of an end-to-end approach and a global
          presence allows us to meet customer needs for efficient development
          and the production of new products. Together with our proactive
          approach to all aspects of sustainability this creates new
          opportunities that benefit our customers, employees and you, our
          owners."
        </p>
        <p className="msg2">-Managing Director</p>
      </span>
      <br /> <br />
      <span>
        <h1
          class="elementor-heading-title elementor-size-default"
          className="slider1"
        >
          Our Products
        </h1>
        <h4 className="msg1">
          MOON IT ZONE is an Information Technology Hub. Anything and everything
          relating to Networking, CATV & CCTV under single roof.
        </h4>
      </span>
      <Slider />
      <div class="column column--flex-center p-top-40 pb-20">
        <a href="/products" class="button button--clear button--blue">
          View More Product<i class="isoi-angle-right"></i>
        </a>
      </div>
    </>
  );
}
